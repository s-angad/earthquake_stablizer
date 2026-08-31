import React from 'react';
import { EventLogEntry } from '../types/esds';
import { Clock, ShieldAlert, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface EventTimelineProps {
  logs: EventLogEntry[];
}

export const EventTimeline: React.FC<EventTimelineProps> = ({ logs }) => {
  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-console-border mb-3 shrink-0">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            SYSTEM EVENT TIMELINE LOG
          </h2>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
          AUDIT TRAIL ({logs.length})
        </span>
      </div>

      {/* Log Entries Container */}
      <div className="flex-1 overflow-y-auto max-h-[260px] lg:max-h-[320px] space-y-2 pr-1">
        {logs.length === 0 ? (
          <div className="text-center text-slate-500 py-8 font-mono text-xs">
            No events logged yet. System in baseline monitoring.
          </div>
        ) : (
          logs.map((log) => {
            let badgeBg = 'bg-slate-800 border-slate-700 text-slate-300';
            let dotColor = 'bg-cyan-400';
            let icon = <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;

            if (log.severity === 'critical') {
              badgeBg = 'bg-rose-950/80 border-rose-500/50 text-rose-300';
              dotColor = 'bg-rose-500 animate-ping';
              icon = <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
            } else if (log.severity === 'warning') {
              badgeBg = 'bg-amber-950/80 border-amber-500/50 text-amber-300';
              dotColor = 'bg-amber-400';
              icon = <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
            } else if (log.severity === 'success') {
              badgeBg = 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300';
              dotColor = 'bg-emerald-400';
              icon = <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
            }

            return (
              <div
                key={log.id}
                className="p-2.5 rounded-lg bg-console-card/70 border border-console-border/80 flex items-start gap-2.5 font-mono text-xs transition-colors hover:bg-console-card"
              >
                <div className="mt-0.5">{icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-cyan-300 font-semibold text-[11px]">{log.timestamp}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded border font-bold uppercase ${badgeBg}`}>
                      {log.step}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-normal text-[11px] font-mono break-words">
                    {log.message}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
