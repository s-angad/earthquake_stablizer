import React, { useState, useEffect } from 'react';
import { ShieldCheck, Wifi, Clock, Columns } from 'lucide-react';
import { SystemStatus, SafetyPhaseStep } from '../types/esds';

interface HeaderProps {
  systemStatus: SystemStatus;
  phase: SafetyPhaseStep;
  isSimulating: boolean;
  compareMode: boolean;
  onToggleCompareMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  systemStatus,
  phase,
  isSimulating,
  compareMode,
  onToggleCompareMode,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = () => {
    if (systemStatus.includes('UNPROTECTED')) {
      return {
        bg: 'bg-rose-50 border-rose-300 text-rose-700 glow-critical',
        dot: 'bg-rose-600 animate-ping',
        sub: 'Unmitigated seismic motion',
      };
    }
    if (phase === 'MONITOR' && systemStatus === 'SYSTEM NORMAL') {
      return {
        bg: 'bg-emerald-50 border-emerald-300 text-emerald-700',
        dot: 'bg-emerald-500 animate-pulse',
        sub: 'All systems operational',
      };
    }
    if (systemStatus.includes('ROUTINE VIBRATION')) {
      return {
        bg: 'bg-cyan-50 border-cyan-300 text-cyan-700',
        dot: 'bg-cyan-600',
        sub: 'Dialyzer pump noise filtered',
      };
    }
    if (phase === 'SECURE' || phase === 'RECOVERY') {
      return {
        bg: 'bg-emerald-50 border-emerald-300 text-emerald-700 glow-safe',
        dot: 'bg-emerald-600 animate-ping',
        sub: 'Equipment secured & locked',
      };
    }
    if (phase === 'DETECT' || phase === 'ISOLATE' || phase === 'PROTECT') {
      return {
        bg: 'bg-amber-50 border-amber-300 text-amber-800 glow-warning',
        dot: 'bg-amber-500 animate-ping',
        sub: 'Seismic isolation active',
      };
    }
    return {
      bg: 'bg-slate-100 border-slate-300 text-slate-700',
      dot: 'bg-slate-500',
      sub: 'Monitoring',
    };
  };

  const badgeStyle = getStatusBadge();

  return (
    <header className="w-full bg-white/95 border-b border-[#D9E1EA] px-4 lg:px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md relative z-30 shadow-sm">
      {/* Brand & System Title (Matching Reference Header) */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600 shadow-sm flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg lg:text-xl font-bold tracking-wider text-slate-800 font-sans">
              ESDS
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-700 font-bold uppercase">
              PROTECTED POD MVP
            </span>
          </div>
          <p className="text-[11px] text-slate-500 tracking-wide uppercase font-semibold">
            EARTHQUAKE-RESILIENT DIALYSIS SAFETY SYSTEM
          </p>
        </div>
      </div>

      {/* Center: Pill Status Badge (Matching Reference) */}
      <div className="flex items-center gap-3">
        <div className={`px-4 py-1.5 rounded-full border text-xs lg:text-sm font-mono font-bold uppercase flex items-center gap-2.5 transition-all duration-300 ${badgeStyle.bg}`}>
          <span className={`w-2.5 h-2.5 rounded-full ${badgeStyle.dot}`} />
          <div className="flex flex-col">
            <span className="tracking-wide">{systemStatus}</span>
            <span className="text-[9px] text-slate-500 font-normal lowercase tracking-normal -mt-0.5">{badgeStyle.sub}</span>
          </div>
        </div>
      </div>

      {/* Right Metadata Block (Matching Reference Header) */}
      <div className="flex items-center gap-4 text-xs font-mono text-slate-700">
        {/* COMPARE ESDS TOGGLE BUTTON */}
        <button
          onClick={onToggleCompareMode}
          className={`px-3.5 py-1.5 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
            compareMode
              ? 'bg-amber-50 border-amber-400 text-amber-800 ring-1 ring-amber-400'
              : 'bg-white border-[#D9E1EA] text-slate-700 hover:border-cyan-500 hover:text-cyan-700'
          }`}
        >
          <Columns className="w-4 h-4 text-amber-600" />
          <span>{compareMode ? '🔀 COMPARE ESDS (SPLIT SCREEN)' : 'COMPARE ESDS MODE'}</span>
        </button>

        <div className="flex flex-col items-start px-2 py-0.5 border-l border-slate-200">
          <span className="text-[9px] text-slate-400">VIRTUAL SENSOR</span>
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <Wifi className="w-3 h-3 animate-pulse text-emerald-500" /> ONLINE
          </span>
        </div>

        <div className="flex flex-col items-start px-2 py-0.5 border-l border-slate-200">
          <span className="text-[9px] text-slate-400">TIME</span>
          <span className="text-slate-800 font-bold">{timeStr}</span>
        </div>

        <div className="flex flex-col items-start px-2 py-0.5 border-l border-slate-200">
          <span className="text-[9px] text-slate-400">MODE</span>
          <span className="text-amber-600 font-bold">SIMULATION</span>
        </div>
      </div>
    </header>
  );
};
