import React from 'react';
import { SensorReading, SafetyDecisionMetrics } from '../types/esds';
import { Gauge, Activity, ShieldCheck, Cpu, AlertTriangle } from 'lucide-react';

interface TelemetryProps {
  telemetry: SensorReading;
  metrics: SafetyDecisionMetrics;
  peakG: number;
}

export const SensorTelemetry: React.FC<TelemetryProps> = ({ telemetry, metrics, peakG }) => {
  const isHighDynamic = telemetry.dynamicAcceleration > metrics.detectionThreshold;
  const isIsolating = telemetry.isolationEfficiency > 50;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
      {/* CARD 1: SENSOR READINGS (Matching Image 2 Bottom Left Card) */}
      <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between shadow-lg space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-console-border">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase">
              SENSOR READINGS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 font-mono">
          {/* DYNAMIC ACCELERATION */}
          <div className="bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-400">DYNAMIC ACCELERATION</span>
            <div className="my-1">
              <span className={`text-lg lg:text-xl font-extrabold ${isHighDynamic ? 'text-amber-400' : 'text-amber-300'}`}>
                {telemetry.dynamicAcceleration.toFixed(2)} g
              </span>
            </div>
            <span className="text-[9px] text-slate-500">Threshold: {metrics.detectionThreshold} g</span>
          </div>

          {/* VIBRATION LEVEL */}
          <div className="bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-400">VIBRATION LEVEL</span>
            <div className="my-1">
              <span className="text-lg lg:text-xl font-extrabold text-rose-400">
                {telemetry.vibrationIntensity}%
              </span>
            </div>
            {/* Sparkline trace */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 transition-all duration-150" style={{ width: `${telemetry.vibrationIntensity}%` }} />
            </div>
          </div>

          {/* RISK LEVEL */}
          <div className="bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-400">RISK LEVEL</span>
            <div className="my-1 flex items-center gap-1.5 font-bold text-sm lg:text-base text-amber-400 uppercase">
              <span>{metrics.riskLevel}</span>
              {metrics.riskLevel !== 'LOW' && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
            </div>
          </div>

          {/* SENSOR STATUS */}
          <div className="bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-400">SENSOR STATUS</span>
            <div className="my-1 flex items-center gap-1.5 font-bold text-sm lg:text-base text-emerald-400 uppercase">
              <span>ONLINE</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2: MOTION COMPARISON (SIMULATED) (Matching Image 2 Bottom Middle Card) */}
      <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between shadow-lg space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-console-border">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase">
              MOTION COMPARISON <span className="text-[10px] text-slate-400 font-normal lowercase">(simulated)</span>
            </h2>
          </div>
        </div>

        <div className="space-y-3 font-mono">
          {/* FLOOR MOTION BAR */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">FLOOR MOTION</span>
              <span className="font-bold text-rose-400">{telemetry.floorMotion}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div
                className="h-full bg-rose-500 transition-all duration-150"
                style={{ width: `${Math.min(100, telemetry.floorMotion)}%` }}
              />
            </div>
          </div>

          {/* POD MOTION BAR */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">POD MOTION</span>
              <span className="font-bold text-emerald-400">{telemetry.podMotion}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-150"
                style={{ width: `${Math.min(100, telemetry.podMotion)}%` }}
              />
            </div>
          </div>

          {/* ISOLATION EFFICIENCY CHECK BADGE */}
          <div className="bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-lg flex items-center justify-between text-xs font-bold text-emerald-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISOLATION EFFICIENCY</span>
            </div>
            <span className="text-sm font-extrabold text-emerald-400">{telemetry.isolationEfficiency}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
