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
  const [isIsolationEnabled, setIsIsolationEnabled] = useState<boolean>(true);
  const [compareMode, setCompareMode] = useState<boolean>(false);

  // Live Telemetry
  const [currentTelemetry, setCurrentTelemetry] = useState<SensorReading>({
    timestamp: Date.now(),
    x: 0.02,
    y: 0.01,
    z: 0.98,
    gravityVector: 0.98,
    dynamicAcceleration: 0.03,
    vibrationIntensity: 2,
    floorMotion: 0,
    podMotion: 0,
    isolationEfficiency: 0,
  });

  const [telemetryHistory, setTelemetryHistory] = useState<SensorReading[]>([]);
  const [peakG, setPeakG] = useState<number>(0.03);

  // 4 Isolation Dampers (D1 to D4)
  const [dampers, setDampers] = useState<DamperState[]>([
    { id: 'd1', name: 'D1', engagement: 0, status: 'READY', forceExtender: 0 },
    { id: 'd2', name: 'D2', engagement: 0, status: 'READY', forceExtender: 0 },
    { id: 'd3', name: 'D3', engagement: 0, status: 'READY', forceExtender: 0 },
    { id: 'd4', name: 'D4', engagement: 0, status: 'READY', forceExtender: 0 },
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
    floorMotion: 0,
    podMotion: 0,
    isolationEfficiency: 0,
    isIsolationEnabled: true,
  });

  const [alert, setAlert] = useState<EmergencyAlert | null>(null);
  const [eventLogs, setEventLogs] = useState<EventLogEntry[]>([]);

  const timeRef = useRef<number>(0);
  const eventTimeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);
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
    addLog('MONITOR', 'ESDS Protected Pod Monitoring Active. Virtual Sensor streaming at 100 Hz.', 'info');
  }, [addLog]);

  // Telemetry & Motion Simulation Loop
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

      // Isolation efficiency calculation
      const isIsolating = isIsolationEnabled && (phase === 'ISOLATE' || phase === 'PROTECT' || phase === 'SECURE' || phase === 'RECOVERY');
      const currentIsolationEff = isIsolationEnabled
        ? phase === 'SECURE' || phase === 'RECOVERY'
          ? 88
          : isIsolating
          ? 86
          : phase === 'DETECT'
          ? 25
          : 0
        : 0;

      const dampingFactor = 1.0 - currentIsolationEff / 100;

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

      // Floor Motion vs Pod Motion Calculation
      const rawFloorMotion = activeScenario === 'NORMAL' ? 2 : Math.min(100, Math.round((intensity / 100) * 78));
      const calculatedPodMotion = Math.round(rawFloorMotion * (1 - currentIsolationEff / 100));

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
        floorMotion: rawFloorMotion,
        podMotion: calculatedPodMotion,
        isolationEfficiency: currentIsolationEff,
      };

      setCurrentTelemetry(newReading);
      setMetrics((m) => ({
        ...m,
        floorMotion: rawFloorMotion,
        podMotion: calculatedPodMotion,
        isolationEfficiency: currentIsolationEff,
        isIsolationEnabled,
      }));

      setTelemetryHistory((prev) => {
        const next = [...prev, newReading];
        if (next.length > MAX_HISTORY_POINTS) {
          return next.slice(next.length - MAX_HISTORY_POINTS);
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [activeScenario, intensity, isIsolationEnabled, isPaused, phase]);

  // Simulation Sequence Trigger
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
          floorMotion: 0,
          podMotion: 0,
          isolationEfficiency: 0,
          isIsolationEnabled,
        });
        setAlert(null);
        setDampers((prev) =>
          prev.map((d) => ({ ...d, engagement: 0, status: isIsolationEnabled ? 'READY' : 'DISABLED', forceExtender: 0 }))
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

      // STEP 1: MONITOR (0-1.5s)
      setPhase('MONITOR');
      setSystemStatus('SYSTEM NORMAL');
      addLog('MONITOR', `Initiating ${isSevere ? 'SEVERE' : 'MODERATE'} earthquake simulation. Floor motion rising...`, 'info');

      // STEP 2: DETECT (1.5s)
      const t1 = setTimeout(() => {
        setPhase('DETECT');
        if (!isIsolationEnabled) {
          setSystemStatus('UNPROTECTED — HIGH SEISMIC MOTION');
          addLog('DETECT', 'SEISMIC MOTION DETECTED! ESDS ISOLATION IS OFF — Pod experiencing unmitigated shaking.', 'critical');
          setDampers((prev) => prev.map((d) => ({ ...d, engagement: 0, status: 'DISABLED', forceExtender: 0 })));
          setMetrics((m) => ({
            ...m,
            riskScore: maxRisk,
            riskLevel: 'UNPROTECTED',
            equipmentStatus: 'UNPROTECTED',
            responseMode: 'DISABLED',
          }));
          return;
        }

        setSystemStatus('SEISMIC ACTIVITY DETECTED');
        addLog('DETECT', `SEISMIC MOTION DETECTED! Dynamic acceleration > ${metrics.detectionThreshold}g threshold.`, 'warning');
        setDampers((prev) => prev.map((d) => ({ ...d, engagement: 40, status: 'ENGAGING', forceExtender: 350 })));
        setMetrics((m) => ({
          ...m,
          riskScore: maxRisk,
          riskLevel: isSevere ? 'CRITICAL' : 'HIGH',
          seismicConfidence: isSevere ? 96 : 88,
          signalPattern: isSevere ? 'CRITICAL SEISMIC EVENT' : 'SEISMIC EVENT',
          responseMode: isSevere ? 'EMERGENCY PROTOCOL' : 'STABILIZE',
        }));
      }, 1500);

      if (!isIsolationEnabled) {
        // Unprotected flow stops at high shaking warning
        const tUnprotected = setTimeout(() => {
          setIsSimulating(false);
        }, 6000);
        eventTimeoutRefs.current.push(t1, tUnprotected);
        return;
      }

      // STEP 3: ISOLATE (3.0s)
      const t2 = setTimeout(() => {
        setPhase('ISOLATE');
        setSystemStatus('SEISMIC ISOLATION ACTIVE');
        addLog('ISOLATE', 'SEISMIC ISOLATION ACTIVE: 4/4 Dampers active. Counteracting kinetic shaking.', 'warning');
        
        const alertObj: EmergencyAlert = {
          id: Math.random().toString(),
          level: isSevere ? 'CRITICAL' : 'WARNING',
          title: isSevere ? 'CRITICAL SEISMIC EVENT' : '⚠ SEISMIC EVENT DETECTED',
          message: isSevere
            ? 'High seismic activity detected! Emergency safety protocol active. Pod isolation active.'
            : 'Moderate seismic activity detected. ESDS Pod isolation initiated.',
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
      }, 3000);

      // STEP 4: PROTECT (5.5s)
      const t3 = setTimeout(() => {
        setPhase('PROTECT');
        setSystemStatus('SEISMIC ISOLATION ACTIVE');
        addLog('PROTECT', 'PATIENT SAFETY ZONE PROTECTION: Pod motion reduced by 86%. Floor motion isolated.', 'success');
      }, 5500);

      // STEP 5: SECURE (7.5s)
      const t4 = setTimeout(() => {
        setPhase('SECURE');
        setSystemStatus('EQUIPMENT SECURED');
        addLog('SECURE', 'EQUIPMENT SECURED: Pod stabilized. Dampers locked in safe state.', 'success');
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
      }, 7500);

      // RECOVERY MODAL (9.5s)
      const t5 = setTimeout(() => {
        setPhase('RECOVERY');
        setSystemStatus('RECOVERY SUMMARY');
        addLog('RECOVERY', 'Earthquake simulation complete. Final Pod State: SECURED.', 'success');
        setIsSimulating(false);
        setShowRecoveryModal(true);
      }, 9500);

      eventTimeoutRefs.current.push(t1, t2, t3, t4, t5);
    },
    [addLog, clearTimers, isIsolationEnabled, metrics.detectionThreshold]
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
      floorMotion: 0,
      podMotion: 0,
      isolationEfficiency: 0,
      isIsolationEnabled,
    });

    setAlert(null);
    setDampers((prev) =>
      prev.map((d) => ({ ...d, engagement: 0, status: isIsolationEnabled ? 'READY' : 'DISABLED', forceExtender: 0 }))
    );

    addLog('MONITOR', 'System reset. ESDS Pod returned to normal monitoring mode.', 'info');
  }, [addLog, clearTimers, isIsolationEnabled]);

  const pauseSimulation = useCallback(() => {
    setIsPaused((p) => !p);
  }, []);

  const acknowledgeAlert = useCallback(() => {
    setAlert(null);
  }, []);

  const toggleIsolation = useCallback(() => {
    setIsIsolationEnabled((prev) => !prev);
  }, []);

  const toggleCompareMode = useCallback(() => {
    setCompareMode((prev) => !prev);
  }, []);

  return {
    phase,
    systemStatus,
    activeScenario,
    intensity,
    isSimulating,
    isPaused,
    showRecoveryModal,
    isIsolationEnabled,
    compareMode,
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
    toggleIsolation,
    toggleCompareMode,
  };
}
