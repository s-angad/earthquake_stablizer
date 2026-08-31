export type SafetyPhaseStep = 
  | 'MONITOR'
  | 'DETECT'
  | 'STABILIZE'
  | 'SECURE'
  | 'RECOVERY';

export type SystemStatus = 
  | 'SYSTEM NORMAL'
  | 'SEISMIC EVENT DETECTED — STABILIZATION ACTIVE'
  | 'CRITICAL SEISMIC EVENT — EMERGENCY PROTOCOL'
  | 'EQUIPMENT SECURED'
  | 'ROUTINE VIBRATION — NO SEISMIC EVENT'
  | 'RECOVERY SUMMARY';

export type ScenarioPreset = 'NORMAL' | 'MODERATE' | 'SEVERE' | 'PUMP_VIBRATION';

export interface SensorReading {
  timestamp: number;
  x: number;
  y: number;
  z: number;
  gravityVector: number;
  dynamicAcceleration: number; // g
  vibrationIntensity: number; // %
}

export interface DamperState {
  id: string;
  name: string;
  engagement: number;
  status: 'READY' | 'ENGAGING' | 'ACTIVE' | 'LOCKED';
  forceExtender: number;
}

export interface EventLogEntry {
  id: string;
  timestamp: string;
  step: SafetyPhaseStep;
  message: string;
  severity: 'info' | 'warning' | 'critical' | 'success';
}

export interface SafetyDecisionMetrics {
  riskScore: number; // 0 - 100
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | 'CONTROLLED';
  seismicConfidence: number; // %
  peakDynamicAcceleration: number; // g
  detectionThreshold: number; // g (0.25)
  detectionLatency: number; // ms
  responseTime?: number; // seconds
  signalPattern: 'NORMAL' | 'ROUTINE_PUMP' | 'SEISMIC EVENT' | 'CRITICAL SEISMIC EVENT';
  equipmentStatus: 'OPERATIONAL' | 'STABILIZING' | 'SECURED';
  responseMode?: 'MONITORING' | 'FILTERING' | 'STABILIZE' | 'EMERGENCY PROTOCOL';
}

export interface EmergencyAlert {
  id: string;
  level: 'NONE' | 'WARNING' | 'CRITICAL';
  title: string;
  message: string;
  statusText: string;
  timestamp: string;
}
