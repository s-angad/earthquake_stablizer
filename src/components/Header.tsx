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
        bg: 'bg-rose-950/90 border-rose-500/70 text-rose-300 glow-critical',
        dot: 'bg-rose-500 animate-ping',
        sub: 'Unmitigated seismic motion',
      };
    }
    if (phase === 'MONITOR' && systemStatus === 'SYSTEM NORMAL') {
      return {
        bg: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400',
        dot: 'bg-emerald-400 animate-pulse',
        sub: 'All systems operational',
      };
    }
    if (systemStatus.includes('ROUTINE VIBRATION')) {
      return {
        bg: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-400',
        dot: 'bg-cyan-400',
        sub: 'Dialyzer pump noise filtered',
      };
    }
    if (phase === 'SECURE' || phase === 'RECOVERY') {
      return {
        bg: 'bg-emerald-950/90 border-emerald-400/60 text-emerald-300 glow-safe',
        dot: 'bg-emerald-400 animate-ping',
        sub: 'Equipment secured & locked',
      };
    }
    if (phase === 'DETECT' || phase === 'ISOLATE' || phase === 'PROTECT') {
      return {
        bg: 'bg-amber-950/90 border-amber-500/60 text-amber-300 glow-warning',
        dot: 'bg-amber-400 animate-ping',
        sub: 'Seismic isolation active',
      };
    }
    return {
      bg: 'bg-slate-800 border-slate-700 text-slate-300',
      dot: 'bg-slate-400',
      sub: 'Monitoring',
    };
  };

  const badgeStyle = getStatusBadge();

  return (
    <header className="w-full bg-[#060a14]/95 border-b border-console-border px-4 lg:px-6 py-2 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md sticky top-0 z-30 shadow-md">
      {/* Brand & System Title (Matching Image 2 Header) */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-inner flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg lg:text-xl font-bold tracking-wider text-slate-100 font-sans">
              ESDS
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-bold uppercase">
              PROTECTED POD MVP
            </span>
          </div>
          <p className="text-[11px] text-slate-400 tracking-wide uppercase font-semibold">
            EARTHQUAKE-RESILIENT DIALYSIS SAFETY SYSTEM
          </p>
        </div>
      </div>

      {/* Center: Pill Status Badge (Matching Image 2) */}
      <div className="flex items-center gap-3">
        <div className={`px-4 py-1.5 rounded-full border text-xs lg:text-sm font-mono font-bold uppercase flex items-center gap-2.5 transition-all duration-300 ${badgeStyle.bg}`}>
          <span className={`w-2.5 h-2.5 rounded-full ${badgeStyle.dot}`} />
          <div className="flex flex-col">
            <span>{systemStatus}</span>
            <span className="text-[9px] text-slate-300/80 font-normal lowercase tracking-normal -mt-0.5">{badgeStyle.sub}</span>
          </div>
        </div>
      </div>

      {/* Right Metadata Block (Matching Image 2 Header) */}
      <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
        {/* COMPARE ESDS TOGGLE BUTTON */}
        <button
          onClick={onToggleCompareMode}
          className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
            compareMode
              ? 'bg-amber-950 border-amber-400 text-amber-300 ring-1 ring-amber-400 glow-warning'
              : 'bg-console-card border-console-border text-slate-200 hover:border-amber-500/40'
          }`}
        >
          <Columns className="w-4 h-4 text-amber-400" />
          <span>{compareMode ? '🔀 COMPARE ESDS (SPLIT SCREEN)' : '🔀 COMPARE ESDS MODE'}</span>
        </button>

        <div className="flex flex-col items-start px-2 py-0.5 border-l border-slate-800">
          <span className="text-[9px] text-slate-400">VIRTUAL SENSOR</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <Wifi className="w-3 h-3 animate-pulse" /> ONLINE
          </span>
        </div>

        <div className="flex flex-col items-start px-2 py-0.5 border-l border-slate-800">
          <span className="text-[9px] text-slate-400">TIME</span>
          <span className="text-cyan-300 font-bold">{timeStr}</span>
        </div>

        <div className="flex flex-col items-start px-2 py-0.5 border-l border-slate-800">
          <span className="text-[9px] text-slate-400">MODE</span>
          <span className="text-amber-400 font-bold">SIMULATION</span>
        </div>
      </div>
    </header>
  );
};
