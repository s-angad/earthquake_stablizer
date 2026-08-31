import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafetyPhaseStep,
  SystemStatus,
  ScenarioPreset,
  SensorReading,
  DamperState,
  EventLogEntry,
  SafetyDecisionMetrics,
  EmergencyAlert,
} from '../types/esds';

const MAX_HISTORY_POINTS = 100;

export function useSimulation() {
  const [phase, setPhase] = useState<SafetyPhaseStep>('MONITOR');
  const [systemStatus, setSystemStatus] = useState<SystemStatus>('SYSTEM NORMAL');
  const [activeScenario, setActiveScenario] = useState<ScenarioPreset>('NORMAL');
  const [intensity, setIntensity] = useState<number>(55);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState<boolean>(false);

  // Live Telemetry
  const [currentTelemetry, setCurrentTelemetry] = useState<SensorReading>({
    timestamp: Date.now(),
    x: 0.02,
    y: 0.01,
    z: 0.98,
    gravityVector: 0.98,
    dynamicAcceleration: 0.03,
    vibrationIntensity: 2,
  });

  const [telemetryHistory, setTelemetryHistory] = useState<SensorReading[]>([]);
  const [peakG, setPeakG] = useState<number>(0.03);

  // 4 Active Dampers (D01 to D04)
  const [dampers, setDampers] = useState<DamperState[]>([
    { id: 'd1', name: 'D01', engagement: 0, status: 'READY', forceExtender: 0 },
    { id: 'd2', name: 'D02', engagement: 0, status: 'READY', forceExtender: 0 },
    { id: 'd3', name: 'D03', engagement: 0, status: 'READY', forceExtender: 0 },
    { id: 'd4', name: 'D04', engagement: 0, status: 'READY', forceExtender: 0 },
  ]);

  // Safety Metrics
  const [metrics, setMetrics] = useState<SafetyDecisionMetrics>({
    riskScore: 4,
    riskLevel: 'LOW',
    seismicConfidence: 2,
    peakDynamicAcceleration: 0.03,
    detectionThreshold: 0.25,
    detectionLatency: 38,
    responseTime: 1.8,
    signalPattern: 'NORMAL',
    equipmentStatus: 'OPERATIONAL',
    responseMode: 'MONITORING',
  });

  const [alert, setAlert] = useState<EmergencyAlert | null>(null);
  const [eventLogs, setEventLogs] = useState<EventLogEntry[]>([]);

  const timeRef = useRef<number>(0);
  const eventTimeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const peakDynamicGRef = useRef<number>(0.03);

  const addLog = useCallback((step: SafetyPhaseStep, message: string, severity: EventLogEntry['severity']) => {
    const now = new Date();
    const timestamp = now.toTimeString().split(' ')[0];
    const newEntry: EventLogEntry = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp,
      step,
      message,
      severity,
    };
    setEventLogs((prev) => [newEntry, ...prev.slice(0, 49)]);
  }, []);

  const clearTimers = useCallback(() => {
    eventTimeoutRefs.current.forEach((t) => clearTimeout(t));
    eventTimeoutRefs.current = [];
  }, []);

  useEffect(() => {
    addLog('MONITOR', 'ESDS Safety Monitoring active. Sensor streaming at 100 Hz.', 'info');
  }, [addLog]);

  // High Frequency Telemetry Loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      timeRef.current += 0.05;
      const t = timeRef.current;

      let xNoise = (Math.random() - 0.5) * 0.015;
      let yNoise = (Math.random() - 0.5) * 0.015;
      let zNoise = (Math.random() - 0.5) * 0.015;

      let xAmp = 0;
      let yAmp = 0;
      let zAmp = 0;

      const isDampening = phase === 'STABILIZE' || phase === 'SECURE' || phase === 'RECOVERY';
      const dampingFactor = phase === 'SECURE' || phase === 'RECOVERY' ? 0.04 : isDampening ? 0.22 : 1.0;

      if (activeScenario === 'NORMAL') {
        xAmp = Math.sin(t * 2) * 0.015;
        yAmp = Math.cos(t * 1.5) * 0.01;
        zAmp = Math.sin(t * 3) * 0.015;
      } else if (activeScenario === 'PUMP_VIBRATION') {
        xAmp = Math.sin(t * 25) * 0.28 * dampingFactor;
        yAmp = Math.cos(t * 24) * 0.25 * dampingFactor;
        zAmp = Math.sin(t * 26) * 0.22 * dampingFactor;
      } else if (activeScenario === 'MODERATE') {
        const factor = (intensity / 100) * dampingFactor;
        xAmp = (Math.sin(t * 4.2) * 0.45 + Math.sin(t * 8.5) * 0.25) * factor;
        yAmp = (Math.cos(t * 3.8) * 0.40 + Math.sin(t * 7.1) * 0.20) * factor;
        zAmp = (Math.sin(t * 5.0) * 0.35 + Math.cos(t * 9.2) * 0.15) * factor;
      } else if (activeScenario === 'SEVERE') {
        const factor = (intensity / 100) * dampingFactor;
        xAmp = (Math.sin(t * 3.5) * 0.95 + Math.sin(t * 7.8) * 0.55 + Math.cos(t * 12.1) * 0.3) * factor;
        yAmp = (Math.cos(t * 4.1) * 0.85 + Math.sin(t * 6.9) * 0.45 + Math.sin(t * 11.5) * 0.25) * factor;
        zAmp = (Math.sin(t * 4.8) * 0.75 + Math.cos(t * 8.4) * 0.40 + Math.cos(t * 13.0) * 0.2) * factor;
      }

      const rawX = +(0.02 + xAmp + xNoise).toFixed(3);
      const rawY = +(0.01 + yAmp + yNoise).toFixed(3);
      const rawZ = +(0.98 + zAmp + zNoise).toFixed(3);

      const gravityVector = 0.98;
      const dynamicAcc = +Math.sqrt(
        rawX * rawX + rawY * rawY + (rawZ - gravityVector) * (rawZ - gravityVector)
      ).toFixed(3);

      const vibeIntensity = Math.min(100, Math.round(dynamicAcc * 140));

      if (dynamicAcc > peakDynamicGRef.current) {
        peakDynamicGRef.current = dynamicAcc;
        setPeakG(dynamicAcc);
      }

      const newReading: SensorReading = {
        timestamp: Date.now(),
        x: rawX,
        y: rawY,
        z: rawZ,
        gravityVector,
        dynamicAcceleration: dynamicAcc,
        vibrationIntensity: vibeIntensity,
      };

      setCurrentTelemetry(newReading);

      setTelemetryHistory((prev) => {
        const next = [...prev, newReading];
        if (next.length > MAX_HISTORY_POINTS) {
          return next.slice(next.length - MAX_HISTORY_POINTS);
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [activeScenario, intensity, isPaused, phase]);

  // Simulation Sequence Trigger (4 Core Steps)
  const startSimulation = useCallback(
    (preset: ScenarioPreset, intensityOverride?: number) => {
      clearTimers();
      setShowRecoveryModal(false);
      peakDynamicGRef.current = 0.03;
      setPeakG(0.03);

      const selectedIntensity =
        intensityOverride !== undefined
          ? intensityOverride
          : preset === 'MODERATE'
          ? 55
          : preset === 'SEVERE'
          ? 88
          : preset === 'PUMP_VIBRATION'
          ? 40
          : 5;

      setActiveScenario(preset);
      setIntensity(selectedIntensity);
      setIsSimulating(true);
      setIsPaused(false);

      if (preset === 'NORMAL') {
        setPhase('MONITOR');
        setSystemStatus('SYSTEM NORMAL');
        setMetrics({
          riskScore: 4,
          riskLevel: 'LOW',
          seismicConfidence: 0,
          peakDynamicAcceleration: 0.03,
          detectionThreshold: 0.25,
          detectionLatency: 38,
          responseTime: 0.1,
          signalPattern: 'NORMAL',
          equipmentStatus: 'OPERATIONAL',
          responseMode: 'MONITORING',
        });
        setAlert(null);
        setDampers((prev) =>
          prev.map((d) => ({ ...d, engagement: 0, status: 'READY', forceExtender: 0 }))
        );
        addLog('MONITOR', 'System test initialized under NORMAL background conditions.', 'info');
        return;
      }

      if (preset === 'PUMP_VIBRATION') {
        setPhase('DETECT');
        setSystemStatus('ROUTINE VIBRATION — NO SEISMIC EVENT');
        addLog('DETECT', 'Vibration anomaly detected on sensor.', 'warning');

        setMetrics((prev) => ({
          ...prev,
          riskScore: 18,
          riskLevel: 'LOW',
          seismicConfidence: 8,
          peakDynamicAcceleration: 0.32,
          signalPattern: 'ROUTINE_PUMP',
          equipmentStatus: 'OPERATIONAL',
          responseMode: 'FILTERING',
        }));

        const t1 = setTimeout(() => {
          setPhase('MONITOR');
          setSystemStatus('ROUTINE VIBRATION — NO SEISMIC EVENT');
          addLog('MONITOR', 'ROUTINE VIBRATION MATCHED: Dialyzer pump frequency filtered. Emergency dampening suppressed.', 'success');
          setIsSimulating(false);
        }, 2200);

        eventTimeoutRefs.current.push(t1);
        return;
      }

      // Seismic Event Scenario (MODERATE or SEVERE)
      const isSevere = preset === 'SEVERE';
      const maxRisk = isSevere ? 92 : 64;

      // STEP 1: MONITOR -> ONSET
      setPhase('MONITOR');
      setSystemStatus('SYSTEM NORMAL');
      addLog('MONITOR', `Initiating ${isSevere ? 'SEVERE' : 'MODERATE'} earthquake simulation...`, 'info');

      // STEP 2: DETECT (1.5s)
      const t1 = setTimeout(() => {
        setPhase('DETECT');
        setSystemStatus(isSevere ? 'CRITICAL SEISMIC EVENT — EMERGENCY PROTOCOL' : 'SEISMIC EVENT DETECTED — STABILIZATION ACTIVE');
        addLog('DETECT', `SEISMIC MOTION DETECTED! Dynamic acceleration > ${metrics.detectionThreshold}g threshold.`, 'warning');
        setDampers((prev) =>
          prev.map((d) => ({ ...d, engagement: 40, status: 'ENGAGING', forceExtender: 350 }))
        );
        setMetrics((m) => ({
          ...m,
          riskScore: maxRisk,
          riskLevel: isSevere ? 'CRITICAL' : 'HIGH',
          seismicConfidence: isSevere ? 96 : 88,
          signalPattern: isSevere ? 'CRITICAL SEISMIC EVENT' : 'SEISMIC EVENT',
          responseMode: isSevere ? 'EMERGENCY PROTOCOL' : 'STABILIZE',
        }));
      }, 1500);

      // STEP 3: STABILIZE (3.5s)
      const t2 = setTimeout(() => {
        setPhase('STABILIZE');
        setSystemStatus(isSevere ? 'CRITICAL SEISMIC EVENT — EMERGENCY PROTOCOL' : 'SEISMIC EVENT DETECTED — STABILIZATION ACTIVE');
        addLog('STABILIZE', 'STABILIZATION ACTIVE: 4/4 Electro-Hydraulic Dampers engaged. Counteracting shaking.', 'warning');
        
        const alertObj: EmergencyAlert = {
          id: Math.random().toString(),
          level: isSevere ? 'CRITICAL' : 'WARNING',
          title: isSevere ? 'CRITICAL SEISMIC EVENT' : '⚠ SEISMIC EVENT DETECTED',
          message: isSevere
            ? 'High seismic activity detected! Emergency safety protocol active. Equipment active dampening engaged.'
            : 'Moderate seismic activity detected. Equipment stabilization initiated.',
          statusText: 'PROTECTED',
          timestamp: new Date().toLocaleTimeString(),
        };
        setAlert(alertObj);

        setDampers((prev) =>
          prev.map((d) => ({
            ...d,
            engagement: 100,
            status: 'ACTIVE',
            forceExtender: isSevere ? 1900 : 1250,
          }))
        );
      }, 3500);

      // STEP 4: SECURE (6.5s)
      const t3 = setTimeout(() => {
        setPhase('SECURE');
        setSystemStatus('EQUIPMENT SECURED');
        addLog('SECURE', 'EQUIPMENT SECURED: Machine movement reduced to baseline. Platform locked.', 'success');
        setMetrics((m) => ({
          ...m,
          riskLevel: 'CONTROLLED',
          equipmentStatus: 'SECURED',
        }));
        setDampers((prev) =>
          prev.map((d) => ({
            ...d,
            engagement: 100,
            status: 'LOCKED',
            forceExtender: 850,
          }))
        );
      }, 6500);

      // RECOVERY MODAL (8.5s)
      const t4 = setTimeout(() => {
        setPhase('RECOVERY');
        setSystemStatus('RECOVERY SUMMARY');
        addLog('RECOVERY', 'Earthquake simulation complete. Final Equipment State: SECURED.', 'success');
        setIsSimulating(false);
        setShowRecoveryModal(true);
      }, 8500);

      eventTimeoutRefs.current.push(t1, t2, t3, t4);
    },
    [addLog, clearTimers, metrics.detectionThreshold]
  );

  const resetSystem = useCallback(() => {
    clearTimers();
    setIsSimulating(false);
    setIsPaused(false);
    setShowRecoveryModal(false);
    setActiveScenario('NORMAL');
    setIntensity(55);
    setPhase('MONITOR');
    setSystemStatus('SYSTEM NORMAL');
    peakDynamicGRef.current = 0.03;
    setPeakG(0.03);

    setMetrics({
      riskScore: 4,
      riskLevel: 'LOW',
      seismicConfidence: 0,
      peakDynamicAcceleration: 0.03,
      detectionThreshold: 0.25,
      detectionLatency: 38,
      responseTime: 1.8,
      signalPattern: 'NORMAL',
      equipmentStatus: 'OPERATIONAL',
      responseMode: 'MONITORING',
    });

    setAlert(null);
    setDampers((prev) =>
      prev.map((d) => ({ ...d, engagement: 0, status: 'READY', forceExtender: 0 }))
    );

    addLog('MONITOR', 'System reset. ESDS returned to normal monitoring mode.', 'info');
  }, [addLog, clearTimers]);

  const pauseSimulation = useCallback(() => {
    setIsPaused((p) => !p);
  }, []);

  const acknowledgeAlert = useCallback(() => {
    setAlert(null);
  }, []);

  return {
    phase,
    systemStatus,
    activeScenario,
    intensity,
    isSimulating,
    isPaused,
    showRecoveryModal,
    currentTelemetry,
    telemetryHistory,
    peakG,
    dampers,
    metrics,
    alert,
    eventLogs,
    startSimulation,
    setIntensity,
    resetSystem,
    pauseSimulation,
    acknowledgeAlert,
    setShowRecoveryModal,
  };
}
