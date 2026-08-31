import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, Wifi, Clock } from 'lucide-react';
import { SystemStatus, SafetyPhaseStep } from '../types/esds';

interface HeaderProps {
  systemStatus: SystemStatus;
  phase: SafetyPhaseStep;
  isSimulating: boolean;
}

export const Header: React.FC<HeaderProps> = ({ systemStatus, phase, isSimulating }) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString() + '.' + String(now.getMilliseconds()).padStart(3, '0').substring(0, 2));
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = () => {
    if (phase === 'MONITOR' && systemStatus === 'SYSTEM NORMAL') {
      return {
        bg: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400',
        dot: 'bg-emerald-400 animate-pulse',
      };
    }
    if (systemStatus.includes('ROUTINE VIBRATION')) {
      return {
        bg: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-400',
        dot: 'bg-cyan-400',
      };
    }
    if (phase === 'SECURE' || phase === 'RECOVERY') {
      return {
        bg: 'bg-emerald-950/90 border-emerald-400/60 text-emerald-300 glow-safe',
        dot: 'bg-emerald-400 animate-ping',
      };
    }
    if (phase === 'DETECT' || phase === 'STABILIZE') {
      return {
        bg: 'bg-amber-950/90 border-amber-500/60 text-amber-300 glow-warning',
        dot: 'bg-amber-400 animate-ping',
      };
    }
    return {
      bg: 'bg-slate-800 border-slate-700 text-slate-300',
      dot: 'bg-slate-400',
    };
  };

  const badgeStyle = getStatusBadge();

  return (
    <header className="w-full bg-[#080d1a]/95 border-b border-console-border px-4 lg:px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md sticky top-0 z-30 shadow-md">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner">
          <Activity className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base lg:text-lg font-bold tracking-wider text-slate-100 font-mono">
              ESDS
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 tracking-wider uppercase">
              SYSTEM ID: ESDS-001
            </span>
          </div>
          <p className="text-[11px] text-slate-400 tracking-wide uppercase font-medium">
            EARTHQUAKE-RESILIENT DIALYSIS SAFETY SYSTEM
          </p>
        </div>
      </div>

      {/* Status Badge */}
      <div className="flex items-center gap-3">
        <div className={`px-4 py-1.5 rounded-md border text-xs lg:text-sm font-mono font-bold uppercase flex items-center gap-2.5 transition-all duration-300 ${badgeStyle.bg}`}>
          <span className={`w-2.5 h-2.5 rounded-full ${badgeStyle.dot}`} />
          <span>{systemStatus}</span>
        </div>
      </div>

      {/* Sensor Status & Clock */}
      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-emerald-400">
          <Wifi className="w-3.5 h-3.5 animate-pulse" />
          <span>VIRTUAL SENSOR: ONLINE</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>{timeStr}</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[10px] text-amber-400/90 bg-amber-950/40 border border-amber-800/40 px-2 py-1 rounded uppercase font-semibold">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>SIMULATION MODE</span>
        </div>
      </div>
    </header>
  );
};
