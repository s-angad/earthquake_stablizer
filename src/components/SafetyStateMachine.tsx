import React from 'react';
import { SafetyPhaseStep } from '../types/esds';
import { Activity, ShieldAlert, Lock, Eye } from 'lucide-react';

interface StateMachineProps {
  currentPhase: SafetyPhaseStep;
  isSimulating: boolean;
}

interface StepItem {
  id: SafetyPhaseStep;
  num: string;
  label: string;
  icon: React.ReactNode;
}

const STEPS: StepItem[] = [
  { id: 'MONITOR', num: '01', label: 'MONITORING', icon: <Eye className="w-4 h-4" /> },
  { id: 'DETECT', num: '02', label: 'EARTHQUAKE DETECTED', icon: <Activity className="w-4 h-4" /> },
  { id: 'STABILIZE', num: '03', label: 'STABILIZATION ACTIVE', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 'SECURE', num: '04', label: 'EQUIPMENT SECURED', icon: <Lock className="w-4 h-4" /> },
];

export const SafetyStateMachine: React.FC<StateMachineProps> = ({ currentPhase }) => {
  const activeIndex = STEPS.findIndex((s) => s.id === currentPhase);

  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border w-full shadow-lg">
      <div className="flex items-center justify-between pb-2.5 border-b border-console-border mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            SAFETY RESPONSE SEQUENCE
          </h2>
        </div>
        <span className="text-[10px] font-mono text-slate-400">
          STAGE: <strong className="text-cyan-300 font-bold">{currentPhase}</strong>
        </span>
      </div>

      {/* 4-Step Horizontal Pipeline Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STEPS.map((step, idx) => {
          const isActive = step.id === currentPhase;
          const isPassed = idx < activeIndex || currentPhase === 'RECOVERY';

          let stepStyle = 'bg-console-card/60 border-console-border text-slate-400';
          let numStyle = 'text-slate-500 bg-slate-900';
          let dotStyle = 'bg-slate-700';

          if (isActive) {
            stepStyle =
              step.id === 'STABILIZE' || step.id === 'SECURE'
                ? 'bg-emerald-950/90 border-emerald-400 text-emerald-200 glow-safe ring-1 ring-emerald-400'
                : 'bg-amber-950/90 border-amber-400 text-amber-200 glow-warning ring-1 ring-amber-400';
            numStyle = 'text-slate-950 font-bold bg-amber-400';
            dotStyle = 'bg-amber-400 animate-ping';
          } else if (isPassed) {
            stepStyle = 'bg-emerald-950/40 border-emerald-800/60 text-emerald-400';
            numStyle = 'text-emerald-300 bg-emerald-950';
            dotStyle = 'bg-emerald-500';
          }

          return (
            <div
              key={step.id}
              className={`p-3 rounded-lg border font-mono text-xs flex flex-col justify-between transition-all duration-300 ${stepStyle}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${numStyle}`}>
                  {step.num}
                </span>
                <span className={`w-2.5 h-2.5 rounded-full ${dotStyle}`} />
              </div>

              <div className="flex items-center gap-2 font-bold text-xs">
                {step.icon}
                <span className="truncate">{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
