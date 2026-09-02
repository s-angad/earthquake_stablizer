import React from 'react';
import { ScenarioPreset, SafetyPhaseStep } from '../types/esds';
import { Zap, RotateCcw, Sliders, Filter, ShieldAlert, ShieldCheck, Columns, CheckCircle2, Circle } from 'lucide-react';

interface SimulatorProps {
  activeScenario: ScenarioPreset;
  intensity: number;
  isSimulating: boolean;
  isPaused: boolean;
  isIsolationEnabled: boolean;
  compareMode: boolean;
  phase: SafetyPhaseStep;
  onStartSimulation: (preset: ScenarioPreset, intensityOverride?: number) => void;
  onSetIntensity: (val: number) => void;
  onResetSystem: () => void;
  onPauseSimulation: () => void;
  onToggleIsolation: () => void;
  onToggleCompareMode: () => void;
}

const RESPONSE_STEPS = [
  { num: 1, id: 'MONITOR', title: 'MONITOR', desc: 'Monitoring environment' },
  { num: 2, id: 'DETECT', title: 'DETECT', desc: 'Seismic activity detected' },
  { num: 3, id: 'ISOLATE', title: 'ISOLATE', desc: 'Isolation system activating' },
  { num: 4, id: 'PROTECT', title: 'PROTECT', desc: 'Protecting patient & equipment' },
  { num: 5, id: 'SECURE', title: 'SECURE', desc: 'Equipment secured' },
];

export const EarthquakeSimulator: React.FC<SimulatorProps> = ({
  activeScenario,
  intensity,
  isSimulating,
  isIsolationEnabled,
  compareMode,
  phase,
  onStartSimulation,
  onSetIntensity,
  onResetSystem,
  onToggleIsolation,
  onToggleCompareMode,
}) => {
  const activeStepIdx = RESPONSE_STEPS.findIndex((s) => s.id === phase);

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* CARD 1: EARTHQUAKE SIMULATOR (Matching Image 2 Right Top) */}
      <div className="panel-glass rounded-xl p-4 border border-console-border shadow-xl space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-console-border">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase">
              EARTHQUAKE SIMULATOR
            </h2>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-500/30 font-bold">
            DEMO CONTROLS
          </span>
        </div>

        {/* ESDS ISOLATION ON / OFF TOGGLE ROW */}
        <div className="bg-console-card/90 border border-console-border p-2.5 rounded-lg">
          <div className="flex items-center justify-between font-mono text-xs mb-1.5">
            <span className="text-slate-300 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> ESDS ISOLATION:
            </span>
            <span className={`font-bold ${isIsolationEnabled ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isIsolationEnabled ? 'ACTIVE (ON)' : 'DISABLED (OFF)'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <button
              onClick={onToggleIsolation}
              className={`py-1.5 rounded font-bold transition-all flex items-center justify-center gap-1 ${
                !isIsolationEnabled
                  ? 'bg-rose-950 border border-rose-500 text-rose-300 glow-critical'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>[ OFF ] UNPROTECTED</span>
            </button>

            <button
              onClick={onToggleIsolation}
              className={`py-1.5 rounded font-bold transition-all flex items-center justify-center gap-1 ${
                isIsolationEnabled
                  ? 'bg-emerald-950 border border-emerald-500 text-emerald-300 glow-safe'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>[ ON ] PROTECTED</span>
            </button>
          </div>
        </div>

        {/* Preset Scenario Buttons (Normal 5% / Moderate 55% / Severe 88% - Matching Image 2) */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onStartSimulation('NORMAL')}
            className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
              activeScenario === 'NORMAL' && !isSimulating
                ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-300 ring-1 ring-emerald-500/50'
                : 'bg-console-card/80 border-console-border text-slate-300 hover:border-slate-600'
            }`}
          >
            <div>NORMAL</div>
            <div className="text-[10px] text-slate-400 font-normal">5%</div>
          </button>

          <button
            onClick={() => onStartSimulation('MODERATE')}
            className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
              activeScenario === 'MODERATE'
                ? 'bg-amber-950/90 border-amber-500/60 text-amber-300 ring-1 ring-amber-500/50'
                : 'bg-console-card/80 border-console-border text-slate-300 hover:border-amber-500/40'
            }`}
          >
            <div>MODERATE</div>
            <div className="text-[10px] text-amber-400 font-normal">55%</div>
          </button>

          <button
            onClick={() => onStartSimulation('SEVERE')}
            className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
              activeScenario === 'SEVERE'
                ? 'bg-rose-950/90 border-rose-500/60 text-rose-300 ring-1 ring-rose-500/50'
                : 'bg-console-card/80 border-console-border text-slate-300 hover:border-rose-500/40'
            }`}
          >
            <div>SEVERE</div>
            <div className="text-[10px] text-rose-400 font-normal">88%</div>
          </button>
        </div>

        {/* Manual Intensity Slider */}
        <div className="bg-console-card/80 border border-console-border p-2.5 rounded-lg">
          <div className="flex items-center justify-between text-xs font-mono mb-1">
            <span className="text-slate-300 flex items-center gap-1.5 font-semibold">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" /> INTENSITY
            </span>
            <span className="text-amber-400 font-bold text-xs font-mono">{intensity}%</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={intensity}
            onChange={(e) => onSetIntensity(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-400 border border-slate-800"
          />
        </div>

        {/* Primary Action Button: ⚡ SIMULATE EARTHQUAKE (Matching Image 2 Bright Gold Glow CTA) */}
        <button
          onClick={() => onStartSimulation(intensity > 70 ? 'SEVERE' : intensity > 20 ? 'MODERATE' : 'NORMAL', intensity)}
          disabled={isSimulating}
          className={`w-full py-3 px-4 rounded-xl font-mono font-extrabold text-xs lg:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl ${
            isSimulating
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              : 'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 border border-amber-300 glow-warning'
          }`}
        >
          <Zap className="w-5 h-5 fill-current animate-pulse" />
          <span>⚡ SIMULATE EARTHQUAKE</span>
        </button>

        {/* Secondary Actions */}
        <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono">
          <button
            onClick={onResetSystem}
            className="py-1.5 px-2 rounded-lg bg-console-card border border-console-border text-slate-300 hover:border-slate-600 font-semibold flex items-center justify-center gap-1"
          >
            <RotateCcw className="w-3 h-3 text-cyan-400" />
            <span>RESET</span>
          </button>

          <button
            onClick={() => onStartSimulation('PUMP_VIBRATION')}
            disabled={isSimulating}
            className="py-1.5 px-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 font-semibold flex items-center justify-center gap-1 truncate"
          >
            <Filter className="w-3 h-3 text-cyan-400" />
            <span>VIBE TEST</span>
          </button>

          <button
            onClick={onToggleCompareMode}
            className={`py-1.5 px-2 rounded-lg border font-semibold flex items-center justify-center gap-1 truncate ${
              compareMode ? 'bg-amber-950 border-amber-400 text-amber-300' : 'bg-console-card border-console-border text-slate-300 hover:border-amber-400'
            }`}
          >
            <Columns className="w-3 h-3 text-amber-400" />
            <span>COMPARE</span>
          </button>
        </div>
      </div>

      {/* CARD 2: SYSTEM RESPONSE VERTICAL LIST 1-5 (Matching Image 2 Right Bottom) */}
      <div className="panel-glass rounded-xl p-4 border border-console-border shadow-xl space-y-3 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between pb-2 border-b border-console-border">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase">
              SYSTEM RESPONSE
            </h2>
          </div>
        </div>

        {/* 5 Vertical Numbered Sequence Steps (Matching Image 2) */}
        <div className="space-y-2 flex-1 flex flex-col justify-between font-mono text-xs">
          {RESPONSE_STEPS.map((step, idx) => {
            const isCurrent = step.id === phase;
            const isPassed = idx < activeStepIdx || phase === 'RECOVERY';

            let boxStyle = 'bg-console-card/60 border-console-border text-slate-400';
            let numStyle = 'text-slate-500 border-slate-700 bg-slate-900';
            let IconComponent = <Circle className="w-4 h-4 text-slate-600" />;

            if (isCurrent) {
              boxStyle = 'bg-amber-950/80 border-amber-400 text-amber-200 ring-1 ring-amber-400 glow-warning';
              numStyle = 'text-slate-950 font-bold bg-amber-400 border-amber-300';
              IconComponent = <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />;
            } else if (isPassed) {
              boxStyle = 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300';
              numStyle = 'text-emerald-300 bg-emerald-950 border-emerald-700';
              IconComponent = <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
            }

            return (
              <div
                key={step.id}
                className={`p-2.5 rounded-lg border flex items-center justify-between transition-all duration-300 ${boxStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full border text-[10px] flex items-center justify-center font-bold ${numStyle}`}>
                    {step.num}
                  </span>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-xs">{step.title}</div>
                    <div className="text-[10px] text-slate-400">{step.desc}</div>
                  </div>
                </div>
                <div>{IconComponent}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
