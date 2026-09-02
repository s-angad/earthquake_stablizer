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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* CARD 1: SENSOR READINGS */}
      <div className="bg-white rounded-xl p-4 border border-[#D9E1EA] shadow-md space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#D9E1EA]">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-600" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-800 tracking-wide uppercase">
              SENSOR READINGS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 font-mono">
          {/* DYNAMIC ACCELERATION */}
          <div className="bg-slate-50 border border-[#D9E1EA] p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-500 font-bold">DYNAMIC ACCELERATION</span>
            <div className="my-1">
              <span className={`text-lg lg:text-xl font-extrabold ${isHighDynamic ? 'text-amber-600' : 'text-emerald-600'}`}>
                {telemetry.dynamicAcceleration.toFixed(2)} g
              </span>
            </div>
            <span className="text-[9px] text-slate-400">Threshold: {metrics.detectionThreshold} g</span>
          </div>

          {/* VIBRATION LEVEL */}
          <div className="bg-slate-50 border border-[#D9E1EA] p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-500 font-bold">VIBRATION LEVEL</span>
            <div className="my-1">
              <span className="text-lg lg:text-xl font-extrabold text-rose-600">
                {telemetry.vibrationIntensity}%
              </span>
            </div>
            {/* Sparkline trace */}
            <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 transition-all duration-150" style={{ width: `${telemetry.vibrationIntensity}%` }} />
            </div>
          </div>

          {/* RISK LEVEL */}
          <div className="bg-slate-50 border border-[#D9E1EA] p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-500 font-bold">RISK LEVEL</span>
            <div className="my-1 flex items-center gap-1.5 font-bold text-sm lg:text-base text-amber-600 uppercase">
              <span>{metrics.riskLevel}</span>
              {metrics.riskLevel !== 'LOW' && <AlertTriangle className="w-3.5 h-3.5 text-amber-600 animate-pulse" />}
            </div>
          </div>

          {/* SENSOR STATUS */}
          <div className="bg-slate-50 border border-[#D9E1EA] p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[10px] text-slate-500 font-bold">SENSOR STATUS</span>
            <div className="my-1 flex items-center gap-1.5 font-bold text-sm lg:text-base text-emerald-600 uppercase">
              <span>ONLINE</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2: MOTION COMPARISON (SIMULATED) */}
      <div className="bg-white rounded-xl p-4 border border-[#D9E1EA] shadow-md space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#D9E1EA]">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-600" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-800 tracking-wide uppercase">
              MOTION COMPARISON <span className="text-[10px] text-slate-400 font-normal lowercase">(simulated)</span>
            </h2>
          </div>
        </div>

        <div className="space-y-3 font-mono">
          {/* FLOOR MOTION BAR */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-700 font-bold">FLOOR MOTION</span>
              <span className="font-bold text-rose-600">{telemetry.floorMotion}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-rose-500 transition-all duration-150"
                style={{ width: `${Math.min(100, telemetry.floorMotion)}%` }}
              />
            </div>
          </div>

          {/* POD MOTION BAR */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-700 font-bold">POD MOTION</span>
              <span className="font-bold text-emerald-600">{telemetry.podMotion}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-150"
                style={{ width: `${Math.min(100, telemetry.podMotion)}%` }}
              />
            </div>
          </div>

          {/* ISOLATION EFFICIENCY CHECK BADGE */}
          <div className="bg-emerald-50 border border-emerald-300 p-2.5 rounded-lg flex items-center justify-between text-xs font-bold text-emerald-800 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISOLATION EFFICIENCY</span>
            </div>
            <span className="text-sm font-extrabold text-emerald-600">{telemetry.isolationEfficiency}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
