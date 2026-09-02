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
      className={`fixed top-16 right-4 lg:right-6 z-50 max-w-md w-full p-4 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-slide-in ${
        isCritical
          ? 'bg-white border-rose-500 text-slate-800 glow-critical'
          : 'bg-white border-amber-500 text-slate-800 glow-warning'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isCritical ? 'bg-rose-50 text-rose-600 animate-pulse' : 'bg-amber-50 text-amber-600'}`}>
            {isCritical ? <ShieldAlert className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="font-mono font-bold text-sm lg:text-base tracking-wider uppercase flex items-center gap-2 text-slate-900">
              {alert.title}
            </h3>
            <p className="text-xs font-mono text-slate-600 mt-1 leading-relaxed">
              {alert.message}
            </p>
            <div className="mt-2 flex items-center gap-2 font-mono text-[11px]">
              <span className="text-slate-400">STATUS:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {alert.statusText}
              </span>
              <span className="text-slate-400 ml-auto">{alert.timestamp}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onDismiss}
          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
