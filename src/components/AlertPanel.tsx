import React from 'react';
import { EmergencyAlert } from '../types/esds';
import { ShieldAlert, X, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface AlertPanelProps {
  alert: EmergencyAlert | null;
  onDismiss: () => void;
}

export const AlertPanel: React.FC<AlertPanelProps> = ({ alert, onDismiss }) => {
  if (!alert || alert.level === 'NONE') return null;

  const isCritical = alert.level === 'CRITICAL';

  return (
    <div
      className={`fixed top-16 right-4 lg:right-6 z-50 max-w-md w-full p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all duration-300 animate-slide-in ${
        isCritical
          ? 'bg-rose-950/95 border-rose-500 text-rose-100 glow-critical'
          : 'bg-amber-950/95 border-amber-500 text-amber-100 glow-warning'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isCritical ? 'bg-rose-900/80 text-rose-300 animate-pulse' : 'bg-amber-900/80 text-amber-300'}`}>
            {isCritical ? <ShieldAlert className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="font-mono font-bold text-sm lg:text-base tracking-wider uppercase flex items-center gap-2">
              {alert.title}
            </h3>
            <p className="text-xs font-mono text-slate-200 mt-1 leading-relaxed">
              {alert.message}
            </p>
            <div className="mt-2 flex items-center gap-2 font-mono text-[11px]">
              <span className="text-slate-400">STATUS:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {alert.statusText}
              </span>
              <span className="text-slate-400 ml-auto">{alert.timestamp}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onDismiss}
          className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
