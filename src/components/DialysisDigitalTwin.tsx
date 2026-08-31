import React from 'react';
import { SafetyPhaseStep, DamperState, SensorReading } from '../types/esds';
import { ShieldCheck, Activity, Zap, HeartPulse } from 'lucide-react';

interface DigitalTwinProps {
  phase: SafetyPhaseStep;
  telemetry: SensorReading;
  dampers: DamperState[];
  isSimulating: boolean;
  peakG: number;
}

export const DialysisDigitalTwin: React.FC<DigitalTwinProps> = ({
  phase,
  telemetry,
  dampers,
  isSimulating,
  peakG,
}) => {
  const isShakingPhase = phase === 'DETECT';
  const isDampeningPhase = phase === 'STABILIZE';
  const isSecuredPhase = phase === 'SECURE' || phase === 'RECOVERY';

  // Kinematic motion calculation (MODERATE: 4-8px, SEVERE: 8-15px, decays to zero during STABILIZE)
  const movementAmplitude = isShakingPhase ? 14 : isDampeningPhase ? 2.5 : 0.6;
  const offsetX = (telemetry.x * movementAmplitude).toFixed(2);
  const offsetY = ((telemetry.y * movementAmplitude) / 2).toFixed(2);
  const tiltDeg = (telemetry.x * (movementAmplitude / 4)).toFixed(2);

  const platformGlow = isShakingPhase
    ? 'drop-shadow-[0_0_25px_rgba(239,68,68,0.65)]'
    : isDampeningPhase
    ? 'drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]'
    : isSecuredPhase
    ? 'drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]'
    : 'drop-shadow-[0_0_12px_rgba(6,182,212,0.25)]';

  return (
    <div className="relative w-full h-[440px] lg:h-[480px] rounded-xl bg-console-panel border border-console-border overflow-hidden flex flex-col justify-between p-4 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1e2d4a_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Banner */}
      <div className="relative z-10 flex items-center justify-between bg-console-card/90 border border-console-border px-3.5 py-2 rounded-lg backdrop-blur-md font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-slate-200 font-bold tracking-wider uppercase">
            HERO DIGITAL TWIN — DIALYSIS UNIT &amp; STABILIZATION PLATFORM
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">STATE: <strong className={isShakingPhase ? "text-red-400 font-bold animate-pulse" : isDampeningPhase ? "text-amber-400 font-bold" : isSecuredPhase ? "text-emerald-400 font-bold" : "text-emerald-400"}>
            {isShakingPhase ? "🔴 EARTHQUAKE DETECTED" : isDampeningPhase ? "🟡 STABILIZATION ACTIVE" : isSecuredPhase ? "🟢 EQUIPMENT SECURED" : "🟢 STABLE"}
          </strong></span>
        </div>
      </div>

      {/* Main SVG Graphics Canvas */}
      <div className="relative flex-1 flex items-center justify-center my-1 select-none">
        
        {/* Floor Ripple Rings during Earthquake */}
        {isShakingPhase && (
          <div className="absolute bottom-8 w-[420px] h-20 rounded-full border-2 border-red-500/40 animate-ping pointer-events-none" />
        )}
        {isDampeningPhase && (
          <div className="absolute bottom-8 w-[360px] h-16 rounded-full border border-amber-500/40 animate-pulse pointer-events-none" />
        )}

        {/* Dynamic Motion Wrapper (Digital Twin Only Shakes, UI Stays Stable!) */}
        <div
          className={`transition-transform duration-75 ease-out ${platformGlow}`}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px) rotate(${tiltDeg}deg)`,
          }}
        >
          <svg
            width="530"
            height="330"
            viewBox="0 0 530 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-[290px] lg:h-[330px]"
          >
            <defs>
              <linearGradient id="machineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#080d1a" />
              </linearGradient>
              <linearGradient id="platformGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1e2d4a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="bedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e2d4a" />
                <stop offset="100%" stopColor="#0b1326" />
              </linearGradient>
              <linearGradient id="damperActiveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="damperEngageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* FLOOR REFERENCE PLANE */}
            <ellipse cx="265" cy="310" rx="245" ry="16" fill="#030712" opacity="0.85" />
            <path d="M 20 310 L 510 310" stroke="#1e2d4a" strokeWidth="2" strokeDasharray="6 6" />

            {/* PATIENT SAFETY ZONE (PATIENT BED & SILHOUETTE) */}
            <g id="patient-safety-zone">
              <rect x="25" y="215" width="145" height="40" rx="6" fill="url(#bedGrad)" stroke="#1e2d4a" strokeWidth="2" />
              <rect x="30" y="210" width="135" height="12" rx="3" fill="#334155" opacity="0.7" />
              <rect x="35" y="255" width="8" height="50" rx="2" fill="#1e293b" />
              <rect x="150" y="255" width="8" height="50" rx="2" fill="#1e293b" />

              {/* Pillow & Patient Body */}
              <rect x="35" y="198" width="30" height="12" rx="4" fill="#475569" />
              <circle cx="50" cy="190" r="11" fill="#64748b" />
              <path d="M 62 198 Q 100 195 155 208 L 155 218 L 62 218 Z" fill="#334155" stroke="#475569" strokeWidth="1" />
              <path d="M 75 204 L 115 204" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />

              {/* Label */}
              <rect x="32" y="224" width="130" height="18" rx="3" fill="#080c14" opacity="0.9" stroke="#06b6d4" strokeWidth="1" />
              <text x="97" y="236" fill="#06b6d4" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                PATIENT SAFETY ZONE
              </text>
            </g>

            {/* BLOOD TUBING LINES */}
            <path d="M 115 204 Q 160 210 245 190" stroke="#ef4444" strokeWidth="2.5" fill="none" />
            <path d="M 115 208 Q 165 225 240 215" stroke="#3b82f6" strokeWidth="2.5" fill="none" />

            {/* 4 STABILIZATION DAMPERS (D01 to D04) */}
            {/* D01 */}
            <g id="damper-01">
              <rect x="195" y="260" width="24" height="46" rx="4" fill="#1e293b" stroke={dampers[0].status !== 'READY' ? '#10b981' : '#334155'} strokeWidth="2" />
              <rect
                x="200"
                y={dampers[0].status === 'ACTIVE' || dampers[0].status === 'LOCKED' ? '266' : dampers[0].status === 'ENGAGING' ? '274' : '280'}
                width="14"
                height="22"
                fill={dampers[0].status === 'LOCKED' || dampers[0].status === 'ACTIVE' ? 'url(#damperActiveGrad)' : 'url(#damperEngageGrad)'}
                opacity={dampers[0].status === 'READY' ? 0.35 : 1}
              />
            </g>

            {/* D02 */}
            <g id="damper-02">
              <rect x="420" y="260" width="24" height="46" rx="4" fill="#1e293b" stroke={dampers[1].status !== 'READY' ? '#10b981' : '#334155'} strokeWidth="2" />
              <rect
                x="425"
                y={dampers[1].status === 'ACTIVE' || dampers[1].status === 'LOCKED' ? '266' : dampers[1].status === 'ENGAGING' ? '274' : '280'}
                width="14"
                height="22"
                fill={dampers[1].status === 'LOCKED' || dampers[1].status === 'ACTIVE' ? 'url(#damperActiveGrad)' : 'url(#damperEngageGrad)'}
                opacity={dampers[1].status === 'READY' ? 0.35 : 1}
              />
            </g>

            {/* D03 */}
            <g id="damper-03">
              <rect x="225" y="252" width="18" height="34" rx="3" fill="#0f172a" stroke="#1e2d4a" strokeWidth="1.5" opacity="0.8" />
            </g>

            {/* D04 */}
            <g id="damper-04">
              <rect x="395" y="252" width="18" height="34" rx="3" fill="#0f172a" stroke="#1e2d4a" strokeWidth="1.5" opacity="0.8" />
            </g>

            {/* STABILIZATION PLATFORM */}
            <rect x="180" y="250" width="280" height="18" rx="4" fill="url(#platformGrad)" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="185" y="254" width="270" height="3" fill="#60a5fa" opacity="0.7" />

            {/* MAIN DIALYSIS MACHINE CONSOLE */}
            <rect x="230" y="70" width="180" height="182" rx="12" fill="url(#machineGrad)" stroke="#334155" strokeWidth="2.5" />

            {/* Caster Wheels */}
            <circle cx="250" cy="248" r="8" fill="#334155" stroke="#0f172a" strokeWidth="2" />
            <circle cx="390" cy="248" r="8" fill="#334155" stroke="#0f172a" strokeWidth="2" />

            {/* MONITOR DISPLAY SCREEN */}
            <rect x="248" y="85" width="144" height="75" rx="8" fill="#040812" stroke="#1e2d4a" strokeWidth="2" />
            <rect
              x="252"
              y="89"
              width="136"
              height="67"
              rx="6"
              fill={isSecuredPhase ? '#022c22' : isShakingPhase ? '#450a0a' : '#0369a1'}
              opacity="0.9"
            />

            {/* Screen Text */}
            {isSecuredPhase ? (
              <g>
                <text x="320" y="118" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  SAFETY MODE
                </text>
                <text x="320" y="134" fill="#34d399" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  EQUIPMENT SECURED
                </text>
              </g>
            ) : isShakingPhase ? (
              <g>
                <text x="320" y="118" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  ⚠ SEISMIC EVENT
                </text>
                <text x="320" y="134" fill="#fca5a5" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  STABILIZING...
                </text>
              </g>
            ) : (
              <g>
                <text x="320" y="115" fill="#e0f2fe" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  DIALYSIS IN PROGRESS
                </text>
                <path d="M 265 132 Q 280 120 295 132 T 325 132 T 355 132" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                <text x="320" y="146" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                  FLOW: 350 mL/min
                </text>
              </g>
            )}

            {/* PUMP ROTOR & DIALYZER CYLINDER */}
            <circle cx="275" cy="195" r="22" fill="#0f172a" stroke="#334155" strokeWidth="2" />
            <circle cx="275" cy="195" r="15" fill="#1e293b" />
            <path
              d="M 275 180 L 275 210 M 260 195 L 290 195"
              stroke="#06b6d4"
              strokeWidth="2"
              className={isShakingPhase ? 'animate-spin' : ''}
              style={{ transformOrigin: '275px 195px' }}
            />

            <rect x="355" y="172" width="28" height="68" rx="5" fill="#0284c7" opacity="0.85" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="355" y1="188" x2="383" y2="188" stroke="#e0f2fe" strokeWidth="1" />
            <line x1="355" y1="204" x2="383" y2="204" stroke="#e0f2fe" strokeWidth="1" />

            {/* VIRTUAL SENSOR ATTACHMENT */}
            <g id="virtual-sensor">
              <rect x="310" y="228" width="22" height="15" rx="3" fill="#06b6d4" stroke="#0284c7" strokeWidth="1.5" />
              <circle cx="321" cy="235.5" r="3" fill="#ffffff" className="animate-pulse" />
            </g>
          </svg>
        </div>

        {/* Minimal Callout Labels */}
        <div className="absolute top-12 right-6 flex items-center gap-2 bg-console-card/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-lg backdrop-blur text-[11px] font-mono text-cyan-300">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>VIRTUAL SENSOR</span>
        </div>

        <div className="absolute bottom-14 right-6 flex items-center gap-2 bg-console-card/90 border border-slate-700 px-2.5 py-1 rounded shadow-lg backdrop-blur text-[11px] font-mono text-slate-300">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>STABILIZATION PLATFORM</span>
        </div>

        {/* Dampers Status Badges */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 max-w-full overflow-x-auto px-2">
          {dampers.map((d) => (
            <div
              key={d.id}
              className={`px-2.5 py-1 rounded border text-[10px] font-mono flex items-center gap-1.5 transition-colors ${
                d.status === 'LOCKED' || d.status === 'ACTIVE'
                  ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-300 font-bold'
                  : d.status === 'ENGAGING'
                  ? 'bg-amber-950/90 border-amber-500/60 text-amber-300 font-bold animate-pulse'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  d.status !== 'READY' ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'
                }`}
              />
              <span>{d.name}:</span>
              <span className="uppercase">{d.status}</span>
            </div>
          ))}
        </div>

        {/* Equipment Secured Banner */}
        {isSecuredPhase && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-950/95 border border-emerald-400 px-6 py-3.5 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-fade-in glow-safe z-20">
            <ShieldCheck className="w-8 h-8 text-emerald-400 animate-bounce" />
            <div>
              <h3 className="text-emerald-300 font-mono font-bold text-sm lg:text-base tracking-wider uppercase">
                EQUIPMENT SECURED
              </h3>
              <p className="text-emerald-400/80 text-xs font-mono">
                Active Dampening Locked • Patient Safety Zone Protected
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-console-border/60">
        <span className="flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5 text-cyan-400" />
          RETROFIT DIALYSIS SAFETY SYSTEM
        </span>
        <span className="text-slate-500 hidden sm:inline">SOFTWARE SIMULATION / DIGITAL TWIN</span>
      </div>
    </div>
  );
};
