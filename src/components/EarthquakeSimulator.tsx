import React from 'react';
import { ScenarioPreset, SafetyPhaseStep } from '../types/esds';
import { Zap, RotateCcw, Sliders, Filter, ShieldCheck, Columns, ShieldAlert, CheckCircle2, Circle } from 'lucide-react';

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
    <div className="flex flex-col gap-3">
      {/* CARD 1: EARTHQUAKE SIMULATOR */}
      <div className="bg-white rounded-xl p-3.5 border border-[#E2E8F0] shadow-sm space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-600" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-800 tracking-wide uppercase">
              EARTHQUAKE SIMULATOR
            </h2>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-300 font-bold">
            DEMO CONTROLS
          </span>
        </div>

        {/* ESDS ISOLATION ON / OFF TOGGLE ROW */}
        <div className="bg-slate-50 border border-[#E2E8F0] p-2 rounded-lg">
          <div className="flex items-center justify-between font-mono text-xs mb-1.5">
            <span className="text-slate-700 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-600" /> ESDS ISOLATION:
            </span>
            <span className={`font-bold ${isIsolationEnabled ? 'text-emerald-600' : 'text-rose-600'}`}>
              {isIsolationEnabled ? 'ACTIVE (ON)' : 'DISABLED (OFF)'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <button
              onClick={onToggleIsolation}
              className={`py-1.5 rounded font-bold transition-all flex items-center justify-center gap-1 ${
                !isIsolationEnabled
                  ? 'bg-rose-100 border border-rose-400 text-rose-800 shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>[ OFF ] UNPROTECTED</span>
            </button>

            <button
              onClick={onToggleIsolation}
              className={`py-1.5 rounded font-bold transition-all flex items-center justify-center gap-1 ${
                isIsolationEnabled
                  ? 'bg-emerald-100 border border-emerald-400 text-emerald-800 shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>[ ON ] PROTECTED</span>
            </button>
          </div>
        </div>

        {/* Preset Scenario Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onStartSimulation('NORMAL')}
            className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
              activeScenario === 'NORMAL' && !isSimulating
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800 ring-1 ring-emerald-400'
                : 'bg-white border-[#E2E8F0] text-slate-700 hover:border-slate-400'
            }`}
          >
            <div>NORMAL</div>
            <div className="text-[10px] text-emerald-600 font-normal">5%</div>
          </button>

          <button
            onClick={() => onStartSimulation('MODERATE')}
            className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
              activeScenario === 'MODERATE'
                ? 'bg-amber-50 border-amber-400 text-amber-800 ring-1 ring-amber-400'
                : 'bg-white border-[#E2E8F0] text-slate-700 hover:border-amber-400'
            }`}
          >
            <div>MODERATE</div>
            <div className="text-[10px] text-amber-600 font-normal">55%</div>
          </button>

          <button
            onClick={() => onStartSimulation('SEVERE')}
            className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
              activeScenario === 'SEVERE'
                ? 'bg-rose-50 border-rose-400 text-rose-800 ring-1 ring-rose-400'
                : 'bg-white border-[#E2E8F0] text-slate-700 hover:border-rose-400'
            }`}
          >
            <div>SEVERE</div>
            <div className="text-[10px] text-rose-600 font-normal">88%</div>
          </button>
        </div>

        {/* Manual Intensity Slider */}
        <div className="bg-slate-50 border border-[#E2E8F0] p-2 rounded-lg">
          <div className="flex items-center justify-between text-xs font-mono mb-1">
            <span className="text-slate-700 flex items-center gap-1.5 font-semibold">
              <Sliders className="w-3.5 h-3.5 text-cyan-600" /> INTENSITY
            </span>
            <span className="text-amber-600 font-bold text-xs font-mono">{intensity}%</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={intensity}
            onChange={(e) => onSetIntensity(parseInt(e.target.value, 10))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500 border border-slate-300"
          />
        </div>

        {/* Primary Action Button: Amber CTA */}
        <button
          onClick={() => onStartSimulation(intensity > 70 ? 'SEVERE' : intensity > 20 ? 'MODERATE' : 'NORMAL', intensity)}
          disabled={isSimulating}
          className={`w-full py-2.5 px-4 rounded-xl font-mono font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${
            isSimulating
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
              : 'bg-amber-500 hover:bg-amber-400 text-slate-950 border border-amber-300'
          }`}
        >
          <Zap className="w-4 h-4 fill-current animate-pulse text-slate-950" />
          <span>⚡ SIMULATE EARTHQUAKE</span>
        </button>

        {/* Secondary Actions */}
        <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono">
          <button
            onClick={onResetSystem}
            className="py-1.5 px-2 rounded-lg bg-white border border-[#E2E8F0] text-slate-700 hover:border-slate-400 font-semibold flex items-center justify-center gap-1 shadow-sm"
          >
            <RotateCcw className="w-3 h-3 text-cyan-600" />
            <span>RESET</span>
          </button>

          <button
            onClick={() => onStartSimulation('PUMP_VIBRATION')}
            disabled={isSimulating}
            className="py-1.5 px-2 rounded-lg bg-cyan-50 border border-cyan-300 text-cyan-800 hover:bg-cyan-100 font-semibold flex items-center justify-center gap-1 truncate shadow-sm"
          >
            <Filter className="w-3 h-3 text-cyan-600" />
            <span>VIBE TEST</span>
          </button>

          <button
            onClick={onToggleCompareMode}
            className={`py-1.5 px-2 rounded-lg border font-semibold flex items-center justify-center gap-1 truncate shadow-sm ${
              compareMode ? 'bg-amber-100 border-amber-400 text-amber-900' : 'bg-white border-[#E2E8F0] text-slate-700 hover:border-amber-400'
            }`}
          >
            <Columns className="w-3 h-3 text-amber-600" />
            <span>COMPARE</span>
          </button>
        </div>
      </div>

      {/* CARD 2: SYSTEM RESPONSE VERTICAL LIST */}
      <div className="bg-white rounded-xl p-3.5 border border-[#E2E8F0] shadow-sm space-y-2.5">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-600" />
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-800 tracking-wide uppercase">
              SYSTEM RESPONSE
            </h2>
          </div>
        </div>

        {/* 5 Vertical Numbered Sequence Steps */}
        <div className="space-y-1.5 font-mono text-xs">
          {RESPONSE_STEPS.map((step, idx) => {
            const isCurrent = step.id === phase;
            const isPassed = idx < activeStepIdx || phase === 'RECOVERY';

            let boxStyle = 'bg-slate-50 border-[#E2E8F0] text-slate-500';
            let numStyle = 'text-slate-600 border-slate-300 bg-white';
            let IconComponent = <Circle className="w-3.5 h-3.5 text-slate-400" />;

            if (isCurrent) {
              boxStyle = 'bg-amber-50 border-amber-300 text-amber-900 ring-1 ring-amber-300 shadow-sm';
              numStyle = 'text-slate-950 font-bold bg-amber-400 border-amber-300';
              IconComponent = <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />;
            } else if (isPassed) {
              boxStyle = 'bg-emerald-50/70 border-emerald-300 text-emerald-800';
              numStyle = 'text-emerald-700 bg-emerald-100 border-emerald-400';
              IconComponent = <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
            }

            return (
              <div
                key={step.id}
                className={`p-2 px-2.5 rounded-lg border flex items-center justify-between transition-all duration-300 ${boxStyle}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-4 h-4 rounded-full border text-[9px] flex items-center justify-center font-bold ${numStyle}`}>
                    {step.num}
                  </span>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-slate-800">{step.title}</div>
                    <div className="text-[9px] text-slate-500">{step.desc}</div>
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
