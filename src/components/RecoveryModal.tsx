import React from 'react';
import { SafetyDecisionMetrics, ScenarioPreset } from '../types/esds';
import { ShieldCheck, CheckCircle2, RotateCcw, Activity } from 'lucide-react';

interface RecoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  metrics: SafetyDecisionMetrics;
  peakG: number;
  scenario: ScenarioPreset;
}

export const RecoveryModal: React.FC<RecoveryModalProps> = ({
  isOpen,
  onClose,
  metrics,
  peakG,
  scenario,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg bg-[#080d1a] border border-emerald-500/60 rounded-2xl p-6 shadow-2xl space-y-5 glow-safe">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-console-border pb-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400">
            <ShieldCheck className="w-7 h-7 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h2 className="text-base lg:text-lg font-mono font-extrabold text-emerald-300 uppercase tracking-wider">
                EVENT COMPLETE &bull; EQUIPMENT SECURED
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              ESDS seismic isolation response completed successfully.
            </p>
          </div>
        </div>

        {/* Key Result Summary Metrics */}
        <div className="grid grid-cols-2 gap-3 font-mono">
          <div className="bg-console-card p-3 rounded-xl border border-console-border">
            <span className="text-[10px] text-slate-400 block">SCENARIO INTENSITY</span>
            <span className="text-sm font-bold text-amber-400">{scenario}</span>
          </div>

          <div className="bg-console-card p-3 rounded-xl border border-console-border">
            <span className="text-[10px] text-slate-400 block">PEAK DYNAMIC ACCEL</span>
            <span className="text-sm font-bold text-cyan-400">{peakG.toFixed(2)} g</span>
          </div>

          <div className="bg-console-card p-3 rounded-xl border border-console-border">
            <span className="text-[10px] text-slate-400 block">POD MOTION REDUCTION</span>
            <span className="text-sm font-bold text-emerald-400">{metrics.isolationEfficiency}% REDUCTION</span>
          </div>

          <div className="bg-console-card p-3 rounded-xl border border-console-border">
            <span className="text-[10px] text-slate-400 block">PATIENT SAFETY ZONE</span>
            <span className="text-sm font-bold text-emerald-400">PROTECTED</span>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 font-mono text-[11px] text-emerald-300/90 flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Simulated Digital Twin Performance. ESDS isolation locked in secured state.</span>
        </div>

        {/* Action CTA */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-mono text-xs lg:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>RETURN TO MONITORING</span>
        </button>
      </div>
    </div>
  );
};
