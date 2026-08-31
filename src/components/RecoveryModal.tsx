import React from 'react';
import { ShieldCheck, Activity, RotateCcw, Award } from 'lucide-react';
import { SafetyDecisionMetrics } from '../types/esds';

interface RecoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  metrics: SafetyDecisionMetrics;
  peakG: number;
  scenario: string;
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
      <div className="max-w-lg w-full bg-[#0d1526] border border-emerald-500/50 rounded-2xl p-6 shadow-2xl glow-safe font-mono">
        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-console-border mb-4">
          <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400">
            <ShieldCheck className="w-8 h-8 animate-bounce" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100 tracking-wider uppercase">
              EVENT COMPLETE — EQUIPMENT SECURED
            </h2>
            <p className="text-xs text-emerald-400">
              ESDS Safety Protocol executed successfully. Dialysis unit protected.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
          <div className="bg-console-card p-3 rounded-lg border border-console-border">
            <span className="text-slate-400 block text-[10px]">SCENARIO SIMULATED:</span>
            <span className="font-bold text-cyan-300 text-sm">{scenario}</span>
          </div>

          <div className="bg-console-card p-3 rounded-lg border border-console-border">
            <span className="text-slate-400 block text-[10px]">PEAK ACCELERATION RECORDED:</span>
            <span className="font-bold text-amber-400 text-sm">{peakG.toFixed(2)} g</span>
          </div>

          <div className="bg-console-card p-3 rounded-lg border border-console-border">
            <span className="text-slate-400 block text-[10px]">DETECTION LATENCY:</span>
            <span className="font-bold text-emerald-400 text-sm">&lt; {metrics.detectionLatency} ms</span>
          </div>

          <div className="bg-console-card p-3 rounded-lg border border-console-border">
            <span className="text-slate-400 block text-[10px]">STABILIZATION ACTIVATION:</span>
            <span className="font-bold text-emerald-400 text-sm">{metrics.responseTime} s</span>
          </div>
        </div>

        {/* Status Box */}
        <div className="bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-xl mb-6 text-xs text-emerald-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <span>FINAL EQUIPMENT STATE: <strong>SECURED / PROTECTED</strong></span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900 border border-emerald-400/50 text-emerald-200">
            PASSED
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg glow-safe"
        >
          <RotateCcw className="w-4 h-4" />
          <span>RETURN TO MONITORING</span>
        </button>
      </div>
    </div>
  );
};
