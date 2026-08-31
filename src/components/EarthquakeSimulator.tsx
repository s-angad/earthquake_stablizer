import React from 'react';
import { ScenarioPreset } from '../types/esds';
import { Zap, RotateCcw, Sliders, Filter, ShieldAlert } from 'lucide-react';

interface SimulatorProps {
  activeScenario: ScenarioPreset;
  intensity: number;
  isSimulating: boolean;
  isPaused: boolean;
  onStartSimulation: (preset: ScenarioPreset, intensityOverride?: number) => void;
  onSetIntensity: (val: number) => void;
  onResetSystem: () => void;
  onPauseSimulation: () => void;
}

export const EarthquakeSimulator: React.FC<SimulatorProps> = ({
  activeScenario,
  intensity,
  isSimulating,
  isPaused,
  onStartSimulation,
  onSetIntensity,
  onResetSystem,
}) => {
  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between h-full shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-console-border mb-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            EARTHQUAKE SIMULATOR
          </h2>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-500/30">
          DEMO CONTROLS
        </span>
      </div>

      {/* Preset Scenario Buttons */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <button
          onClick={() => onStartSimulation('NORMAL')}
          className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
            activeScenario === 'NORMAL' && !isSimulating
              ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-300 ring-1 ring-emerald-500/50'
              : 'bg-console-card/80 border-console-border text-slate-300 hover:border-slate-600'
          }`}
        >
          NORMAL (5%)
        </button>

        <button
          onClick={() => onStartSimulation('MODERATE')}
          className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
            activeScenario === 'MODERATE'
              ? 'bg-amber-950/90 border-amber-500/60 text-amber-300 ring-1 ring-amber-500/50'
              : 'bg-console-card/80 border-console-border text-slate-300 hover:border-amber-500/40'
          }`}
        >
          MODERATE (55%)
        </button>

        <button
          onClick={() => onStartSimulation('SEVERE')}
          className={`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${
            activeScenario === 'SEVERE'
              ? 'bg-rose-950/90 border-rose-500/60 text-rose-300 ring-1 ring-rose-500/50'
              : 'bg-console-card/80 border-console-border text-slate-300 hover:border-rose-500/40'
          }`}
        >
          SEVERE (88%)
        </button>
      </div>

      {/* Manual Intensity Slider */}
      <div className="bg-console-card/80 border border-console-border p-3 rounded-lg mb-3">
        <div className="flex items-center justify-between text-xs font-mono mb-1.5">
          <span className="text-slate-300 flex items-center gap-1.5 font-semibold">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" /> INTENSITY:
          </span>
          <span className="text-amber-400 font-bold text-sm font-mono">{intensity}%</span>
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

      {/* Primary Actions */}
      <div className="flex flex-col gap-2">
        {/* SIMULATE EARTHQUAKE CTA */}
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

        <div className="grid grid-cols-2 gap-2">
          {/* RESET */}
          <button
            onClick={onResetSystem}
            className="py-2 px-3 rounded-lg bg-console-card border border-console-border text-slate-300 hover:border-slate-600 font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
            <span>RESET</span>
          </button>

          {/* TEST ROUTINE VIBRATION (Small optional button) */}
          <button
            onClick={() => onStartSimulation('PUMP_VIBRATION')}
            disabled={isSimulating}
            className="py-2 px-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 font-mono text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
          >
            <Filter className="w-3 h-3 text-cyan-400" />
            <span>ROUTINE VIBE TEST</span>
          </button>
        </div>
      </div>
    </div>
  );
};
