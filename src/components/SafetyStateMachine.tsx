import React from 'react';
import { SafetyPhaseStep } from '../types/esds';
import { ShieldCheck, Activity, Lock, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface SafetyStateMachineProps {
  currentPhase: SafetyPhaseStep;
  isSimulating: boolean;
}

const PHASES: { id: SafetyPhaseStep; label: string; desc: string }[] = [
  { id: 'MONITOR', label: '1. MONITOR', desc: 'Continuous baseline monitoring' },
  { id: 'DETECT', label: '2. DETECT', desc: 'Threshold trigger validation' },
  { id: 'ISOLATE', label: '3. ISOLATE', desc: 'Active isolation engagement' },
  { id: 'PROTECT', label: '4. PROTECT', desc: 'Vibration damping & lock' },
  { id: 'SECURE', label: '5. SECURE', desc: 'Verified secure state' },
];

export const SafetyStateMachine: React.FC<SafetyStateMachineProps> = ({ currentPhase }) => {
  const activeIdx = PHASES.findIndex((p) => p.id === currentPhase);

  return (
    <div className="bg-white border border-[#D9E1EA] rounded-xl p-4 shadow-md font-mono text-xs space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-[#D9E1EA]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-600" />
          <h2 className="font-bold text-slate-800 uppercase tracking-wider">
            AUTOMATED SAFETY PIPELINE &bull; STATE MACHINE
          </h2>
        </div>
        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded">
          SUB-20ms DETERMINISTIC PIPELINE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
        {PHASES.map((phase, idx) => {
          const isCurrent = phase.id === currentPhase;
          const isPassed = idx < activeIdx || currentPhase === 'RECOVERY';

          let stateStyle = 'bg-slate-50 border-[#D9E1EA] text-slate-500';
          let indicator = <div className="w-2 h-2 rounded-full bg-slate-300" />;

          if (isCurrent) {
            stateStyle = 'bg-amber-50 border-amber-400 text-amber-900 ring-1 ring-amber-400 shadow-sm';
            indicator = <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />;
          } else if (isPassed) {
            stateStyle = 'bg-emerald-50 border-emerald-300 text-emerald-800';
            indicator = <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
          }

          return (
            <div
              key={phase.id}
              className={`p-2.5 rounded-lg border flex flex-col justify-between transition-all duration-300 ${stateStyle}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-800">{phase.label}</span>
                {indicator}
              </div>
              <span className="text-[9px] text-slate-500 leading-tight">{phase.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
