import React from 'react';
import { SafetyPhaseStep } from '../types/esds';
import { Eye, Activity, ShieldAlert, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

interface StateMachineProps {
  currentPhase: SafetyPhaseStep;
  isSimulating: boolean;
}

interface StepItem {
  id: SafetyPhaseStep;
  num: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}

const STEPS: StepItem[] = [
  { id: 'MONITOR', num: '01', label: 'MONITOR', sub: 'Scanning environment', icon: <Eye className="w-4 h-4" /> },
  { id: 'DETECT', num: '02', label: 'DETECT', sub: 'Seismic activity found', icon: <Activity className="w-4 h-4" /> },
  { id: 'ISOLATE', num: '03', label: 'ISOLATE', sub: 'Isolation systems active', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 'PROTECT', num: '04', label: 'PROTECT', sub: 'Patient & equipment safe', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'SECURE', num: '05', label: 'SECURE', sub: 'System in secured state', icon: <Lock className="w-4 h-4" /> },
];

export const SafetyStateMachine: React.FC<StateMachineProps> = ({ currentPhase }) => {
  const activeIndex = STEPS.findIndex((s) => s.id === currentPhase);

  return (
    <div className="panel-glass rounded-xl p-3 border border-console-border w-full shadow-lg">
      {/* 5-Step Horizontal Pipeline Flow (Matching Image 2 Bottom Pipeline) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs">
        {STEPS.map((step, idx) => {
          const isActive = step.id === currentPhase;
          const isPassed = idx < activeIndex || currentPhase === 'RECOVERY';

          let stepStyle = 'bg-console-card/60 border-console-border text-slate-400';
          let iconBg = 'bg-slate-900 text-slate-500 border-slate-700';

          if (isActive) {
            stepStyle =
              step.id === 'ISOLATE' || step.id === 'PROTECT' || step.id === 'SECURE'
                ? 'bg-emerald-950/90 border-emerald-400 text-emerald-200 glow-safe ring-1 ring-emerald-400'
                : 'bg-amber-950/90 border-amber-400 text-amber-200 glow-warning ring-1 ring-amber-400';
            iconBg = 'bg-amber-400 text-slate-950 font-bold border-amber-300';
          } else if (isPassed) {
            stepStyle = 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300';
            iconBg = 'bg-emerald-950 text-emerald-300 border-emerald-700';
          }

          return (
            <React.Fragment key={step.id}>
              <div className={`flex-1 w-full p-2.5 rounded-lg border flex items-center gap-2.5 transition-all duration-300 ${stepStyle}`}>
                <div className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold flex-shrink-0 ${iconBg}`}>
                  {step.icon}
                </div>
                <div className="truncate">
                  <div className="font-bold text-xs uppercase tracking-wider">{step.label}</div>
                  <div className="text-[10px] text-slate-400 truncate">{step.sub}</div>
                </div>
              </div>

              {idx < STEPS.length - 1 && (
                <ArrowRight className="hidden sm:block w-4 h-4 text-slate-600 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
