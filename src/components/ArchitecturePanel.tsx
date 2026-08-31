import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Cpu, Server, Radio, Shield, HardDrive } from 'lucide-react';

export const ArchitecturePanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border w-full">
      {/* Header with expand/collapse */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer select-none pb-2 border-b border-console-border"
      >
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            TECHNICAL SYSTEM ARCHITECTURE &amp; FUTURE HARDWARE ROADMAP
          </h2>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
          <span>{isOpen ? 'COLLAPSE' : 'EXPAND'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4 font-mono text-xs animate-fade-in">
          {/* Software Data Flow Diagram */}
          <div>
            <span className="text-[11px] text-slate-400 block mb-2 font-bold uppercase tracking-wider">
              1. SOFTWARE DATA PIPELINE (CURRENT MVP)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center">
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-cyan-400 block font-bold">VIRTUAL SENSOR</span>
                <span className="text-slate-400 text-[10px]">3-Axis Generator</span>
              </div>
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-cyan-400 block font-bold">DATA STREAM</span>
                <span className="text-slate-400 text-[10px]">100Hz Telemetry</span>
              </div>
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-cyan-400 block font-bold">BANDPASS FILTER</span>
                <span className="text-slate-400 text-[10px]">0.5 - 15 Hz</span>
              </div>
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-amber-400 block font-bold">DETECTION</span>
                <span className="text-slate-400 text-[10px]">Threshold Check</span>
              </div>
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-amber-400 block font-bold">RISK ENGINE</span>
                <span className="text-slate-400 text-[10px]">Score 0-100</span>
              </div>
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-emerald-400 block font-bold">STABILIZE</span>
                <span className="text-slate-400 text-[10px]">Active Dampers</span>
              </div>
              <div className="bg-console-card p-2 rounded border border-console-border text-[11px]">
                <span className="text-emerald-400 block font-bold">EVENT LOG</span>
                <span className="text-slate-400 text-[10px]">Audit Trail</span>
              </div>
            </div>
          </div>

          {/* Comparison Table: MVP vs Hardware */}
          <div>
            <span className="text-[11px] text-slate-400 block mb-2 font-bold uppercase tracking-wider">
              2. PRODUCTION HARDWARE ROADMAP MAPPING
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Current Software MVP */}
              <div className="p-3 rounded-lg bg-console-card/80 border border-cyan-500/30">
                <div className="flex items-center gap-2 text-cyan-300 font-bold mb-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>CURRENT MVP (SOFTWARE SIMULATION)</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li>• <strong>Framework:</strong> React + TypeScript + Vite</li>
                  <li>• <strong>Graphics &amp; Physics:</strong> SVG Digital Twin + HTML5 Canvas oscilloscope</li>
                  <li>• <strong>Engine:</strong> Realtime 100Hz mathematical harmonic oscillator tick loop</li>
                  <li>• <strong>State Machine:</strong> 8-phase automatic safety controller</li>
                </ul>
              </div>

              {/* Future Physical Hardware Implementation */}
              <div className="p-3 rounded-lg bg-console-card/80 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-300 font-bold mb-2">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <span>FUTURE PHYSICAL HARDWARE IMPLEMENTATION</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li>• <strong>Microcontroller:</strong> ESP32 Dual-Core 240MHz RISC-V</li>
                  <li>• <strong>Sensor:</strong> ADXL345 3-Axis Digital MEMS Accelerometer (I2C/SPI)</li>
                  <li>• <strong>Actuators:</strong> 4 Electro-Hydraulic Active Dampers + Base Electro-Magnet Lock</li>
                  <li>• <strong>Interface:</strong> Optocoupled Emergency Stop Relay to Dialysis Machine</li>
                  <li>• <strong>Connectivity:</strong> Wi-Fi / LoRaWAN IoT telemetry to Hospital ICU Hub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
