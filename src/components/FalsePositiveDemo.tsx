import React from 'react';
import { Filter, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SafetyDecisionMetrics } from '../types/esds';

interface FalsePositiveProps {
  metrics: SafetyDecisionMetrics;
  onTriggerDemo: () => void;
  isSimulating: boolean;
}

export const FalsePositiveDemo: React.FC<FalsePositiveProps> = ({ metrics, onTriggerDemo, isSimulating }) => {
  const isFilterActive = metrics.signalPattern === 'ROUTINE_PUMP';

  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-console-border mb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            INTELLIGENT SIGNAL FILTERING / FALSE-POSITIVE PREVENTION
          </h2>
        </div>
        <button
          onClick={onTriggerDemo}
          disabled={isSimulating}
          className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
        >
          <Zap className="w-3 h-3 text-cyan-400" />
          <span>TEST PUMP VIBRATION FILTER</span>
        </button>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center font-mono text-xs mb-3">
        <div className="bg-console-card/80 border border-console-border p-2 rounded-lg">
          <span className="text-[10px] text-slate-400 block">01 SENSE</span>
          <span className="text-slate-200 font-semibold">ADXL345 Stream</span>
        </div>

        <div className="bg-console-card/80 border border-console-border p-2 rounded-lg">
          <span className="text-[10px] text-slate-400 block">02 FILTER</span>
          <span className="text-cyan-400 font-semibold">Bandpass (0.5-15Hz)</span>
        </div>

        <div className="bg-console-card/80 border border-console-border p-2 rounded-lg">
          <span className="text-[10px] text-slate-400 block">03 VERIFY</span>
          <span className="text-slate-200 font-semibold">Spectrum &amp; S-Wave</span>
        </div>

        <div className="bg-console-card/80 border border-console-border p-2 rounded-lg">
          <span className="text-[10px] text-slate-400 block">04 CLASSIFY</span>
          <span className={`font-semibold ${isFilterActive ? 'text-amber-400' : 'text-emerald-400'}`}>
            {isFilterActive ? 'ROUTINE PUMP' : 'SEISMIC / NORMAL'}
          </span>
        </div>

        <div className="bg-console-card/80 border border-console-border p-2 rounded-lg">
          <span className="text-[10px] text-slate-400 block">05 RESPOND</span>
          <span className="text-emerald-400 font-semibold">
            {isFilterActive ? 'SUPPRESS ALARM' : 'SAFE / ACTION'}
          </span>
        </div>
      </div>

      {/* Explanation Text Banner */}
      <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg text-[11px] font-mono text-slate-300 flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Why this matters:</strong> ESDS is not a naive threshold trigger (<code className="text-cyan-300 font-mono">IF vibe &gt; 0.25g → shutdown</code>). High-frequency blood pump rotation (25Hz) is intelligently recognized and filtered, preventing costly false alarms and false dialysis machine shutdowns.
        </p>
      </div>
    </div>
  );
};
