import React from 'react';
import { SensorReading, SafetyDecisionMetrics } from '../types/esds';
import { Gauge, Activity, ShieldAlert, Cpu } from 'lucide-react';

interface TelemetryProps {
  telemetry: SensorReading;
  metrics: SafetyDecisionMetrics;
  peakG: number;
}

export const SensorTelemetry: React.FC<TelemetryProps> = ({ telemetry, metrics, peakG }) => {
  const isHighDynamic = telemetry.dynamicAcceleration > metrics.detectionThreshold;
  const isHighRisk = metrics.riskLevel === 'HIGH' || metrics.riskLevel === 'CRITICAL';

  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between h-full shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-console-border mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            SENSOR STATUS
          </h2>
        </div>
        <span className="text-[10px] font-mono text-slate-400">
          THRESHOLD: <strong className="text-amber-400 font-bold">{metrics.detectionThreshold} g</strong>
        </span>
      </div>

      {/* 4 Essential Primary Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Metric 1: DYNAMIC ACCELERATION */}
        <div className={`p-3 rounded-lg border flex flex-col justify-between transition-colors ${
          isHighDynamic ? 'bg-amber-950/60 border-amber-500/70 text-amber-200 glow-warning' : 'bg-console-card/80 border-console-border text-slate-200'
        }`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>ACCELERATION</span>
            <Gauge className={`w-4 h-4 ${isHighDynamic ? 'text-amber-400 animate-pulse' : 'text-cyan-400'}`} />
          </div>
          <div className="my-1">
            <span className={`font-mono text-xl lg:text-2xl font-extrabold ${isHighDynamic ? 'text-amber-300' : 'text-cyan-300'}`}>
              {telemetry.dynamicAcceleration.toFixed(2)} g
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Dynamic Seismic</span>
        </div>

        {/* Metric 2: VIBRATION INTENSITY */}
        <div className="bg-console-card/80 border border-console-border p-3 rounded-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>VIBRATION</span>
            <Activity className="w-4 h-4 text-amber-400" />
          </div>
          <div className="my-1">
            <span className={`font-mono text-xl lg:text-2xl font-extrabold ${telemetry.vibrationIntensity > 40 ? 'text-red-400' : 'text-emerald-400'}`}>
              {telemetry.vibrationIntensity}%
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
            <div
              className={`h-full transition-all duration-150 ${
                telemetry.vibrationIntensity > 40 ? 'bg-red-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(100, telemetry.vibrationIntensity)}%` }}
            />
          </div>
        </div>

        {/* Metric 3: RISK LEVEL */}
        <div className={`p-3 rounded-lg border flex flex-col justify-between transition-colors ${
          isHighRisk
            ? 'bg-rose-950/60 border-rose-500/70 text-rose-200 glow-critical'
            : metrics.riskLevel === 'CONTROLLED'
            ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-200 glow-safe'
            : 'bg-console-card/80 border-console-border text-slate-200'
        }`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>RISK</span>
            <ShieldAlert className={`w-4 h-4 ${isHighRisk ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`} />
          </div>
          <div className="my-1">
            <span className={`font-mono text-lg lg:text-xl font-extrabold ${
              isHighRisk ? 'text-rose-400' : metrics.riskLevel === 'CONTROLLED' ? 'text-emerald-400' : 'text-slate-100'
            }`}>
              {metrics.riskLevel}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Score: {metrics.riskScore}/100</span>
        </div>

        {/* Metric 4: SENSOR STATUS */}
        <div className="bg-console-card/80 border border-console-border p-3 rounded-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>SENSOR</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="my-1">
            <span className="font-mono text-xl lg:text-2xl font-extrabold text-emerald-400">
              ONLINE
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Virtual ADXL345</span>
        </div>
      </div>
    </div>
  );
};
