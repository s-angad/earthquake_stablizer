import React from 'react';
import { SafetyDecisionMetrics, DamperState, SafetyPhaseStep } from '../types/esds';
import { ShieldCheck, ShieldAlert, Cpu } from 'lucide-react';

interface DecisionEngineProps {
  metrics: SafetyDecisionMetrics;
  dampers: DamperState[];
  phase: SafetyPhaseStep;
  peakG: number;
}

export const DecisionEngine: React.FC<DecisionEngineProps> = ({ metrics, dampers, phase, peakG }) => {
  const isHighRisk = metrics.riskScore > 60;
  const isMedRisk = metrics.riskScore > 25;

  const activeDamperCount = dampers.filter((d) => d.status !== 'READY').length;

  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-console-border mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            ESDS DECISION ENGINE / SAFETY ASSESSMENT
          </h2>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
          ALGORITHM ACTIVE
        </span>
      </div>

      {/* Main Metrics 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {/* Risk Score Card */}
        <div className={`p-3 rounded-lg border flex flex-col justify-between transition-all ${
          isHighRisk
            ? 'bg-rose-950/50 border-rose-500/60 text-rose-200 glow-critical'
            : isMedRisk
            ? 'bg-amber-950/50 border-amber-500/60 text-amber-200 glow-warning'
            : 'bg-console-card/80 border-console-border text-slate-200'
        }`}>
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>RISK SCORE</span>
            {isHighRisk ? <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
          </div>
          <div className="my-1">
            <span className="font-mono text-2xl lg:text-3xl font-extrabold tracking-tight">
              {metrics.riskScore}
            </span>
            <span className="text-xs font-mono text-slate-400"> / 100</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                isHighRisk ? 'bg-rose-500' : isMedRisk ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${metrics.riskScore}%` }}
            />
          </div>
        </div>

        {/* Seismic Confidence Card */}
        <div className="bg-console-card/80 border border-console-border p-3 rounded-lg flex flex-col justify-between">
          <div className="text-[11px] font-mono text-slate-400">SEISMIC CONFIDENCE</div>
          <div className="my-1">
            <span className="font-mono text-2xl lg:text-3xl font-extrabold text-cyan-300">
              {metrics.seismicConfidence}%
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            S/P Wave Spectral Match
          </span>
        </div>
      </div>

      {/* Response Mode & Dampening Status Row */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {/* System Response */}
        <div className="bg-console-card/60 border border-console-border p-2.5 rounded-lg">
          <span className="text-[10px] font-mono text-slate-400 block mb-1">SYSTEM RESPONSE</span>
          <span className={`font-mono text-xs lg:text-sm font-bold px-2 py-0.5 rounded inline-block border ${
            metrics.responseMode === 'STABILIZE' || metrics.responseMode === 'EMERGENCY PROTOCOL'
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 animate-pulse'
              : metrics.responseMode === 'FILTERING'
              ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
              : 'bg-slate-800 border-slate-700 text-slate-300'
          }`}>
            {metrics.responseMode}
          </span>
        </div>

        {/* Stabilization Status */}
        <div className="bg-console-card/60 border border-console-border p-2.5 rounded-lg">
          <span className="text-[10px] font-mono text-slate-400 block mb-1">STABILIZATION</span>
          <span className={`font-mono text-xs lg:text-sm font-bold px-2 py-0.5 rounded inline-block border ${
            activeDamperCount > 0
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
              : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}>
            {activeDamperCount > 0 ? `ACTIVE (${activeDamperCount}/4 DAMPERS)` : 'READY (0/4 ACTIVE)'}
          </span>
        </div>
      </div>

      {/* Signal Classification Banner */}
      <div className="bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg text-xs font-mono text-slate-300 flex items-center justify-between">
        <span className="text-slate-400">SIGNAL CLASSIFICATION:</span>
        <span className="font-semibold text-cyan-400">{metrics.signalPattern}</span>
      </div>
    </div>
  );
};
