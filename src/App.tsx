import React from 'react';
import { useSimulation } from './hooks/useSimulation';
import { Header } from './components/Header';
import { DialysisDigitalTwin } from './components/DialysisDigitalTwin';
import { SensorTelemetry } from './components/SensorTelemetry';
import { VibrationChart } from './components/VibrationChart';
import { EarthquakeSimulator } from './components/EarthquakeSimulator';
import { DecisionEngine } from './components/DecisionEngine';
import { SafetyStateMachine } from './components/SafetyStateMachine';
import { FalsePositiveDemo } from './components/FalsePositiveDemo';
import { EventTimeline } from './components/EventTimeline';
import { ArchitecturePanel } from './components/ArchitecturePanel';
import { AlertPanel } from './components/AlertPanel';
import { RecoveryModal } from './components/RecoveryModal';
import { ShieldCheck, ChevronDown, Layers, AlertTriangle } from 'lucide-react';

export function App() {
  const {
    phase,
    systemStatus,
    activeScenario,
    intensity,
    isSimulating,
    isPaused,
    showRecoveryModal,
    isIsolationEnabled,
    compareMode,
    currentTelemetry,
    telemetryHistory,
    peakG,
    dampers,
    metrics,
    alert,
    eventLogs,
    startSimulation,
    setIntensity,
    resetSystem,
    pauseSimulation,
    acknowledgeAlert,
    toggleIsolation,
    toggleCompareMode,
  } = useSimulation();

  return (
    <div className="min-h-screen bg-[#060a14] text-slate-100 font-sans flex flex-col justify-between selection:bg-cyan-500/30">
      {/* Floating Emergency Alert Banner */}
      <AlertPanel alert={alert} onDismiss={acknowledgeAlert} />

      {/* Event Summary Recovery Modal */}
      <RecoveryModal
        isOpen={showRecoveryModal}
        onClose={resetSystem}
        metrics={metrics}
        peakG={peakG}
        scenario={activeScenario}
      />

      {/* Header (Matching Image 2 Top Header) */}
      <Header
        systemStatus={systemStatus}
        phase={phase}
        isSimulating={isSimulating}
        compareMode={compareMode}
        onToggleCompareMode={toggleCompareMode}
      />

      {/* Primary Protected Pod Viewport Container (Matching Image 2 Layout) */}
      <main className="flex-1 w-full max-w-[1750px] mx-auto p-3 sm:p-4 lg:p-5 space-y-4">
        
        {/* ROW 1: Hero Protected Pod (~65% Width) | Right Controls & System Response (~35% Width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Protected Pod Digital Twin Hero (7.5 Cols / ~65% Width - Matching Image 2) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <DialysisDigitalTwin
              phase={phase}
              telemetry={currentTelemetry}
              dampers={dampers}
              isSimulating={isSimulating}
              peakG={peakG}
              isIsolationEnabled={isIsolationEnabled}
              compareMode={compareMode}
            />
          </div>

          {/* Simulator Console & System Response Vertical Panel (4.5 Cols / ~35% Width - Matching Image 2) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <EarthquakeSimulator
              activeScenario={activeScenario}
              intensity={intensity}
              isSimulating={isSimulating}
              isPaused={isPaused}
              isIsolationEnabled={isIsolationEnabled}
              compareMode={compareMode}
              phase={phase}
              onStartSimulation={startSimulation}
              onSetIntensity={setIntensity}
              onResetSystem={resetSystem}
              onPauseSimulation={pauseSimulation}
              onToggleIsolation={toggleIsolation}
              onToggleCompareMode={toggleCompareMode}
            />
          </div>
        </div>

        {/* ROW 2: Bottom Section 3 Cards Grid (Sensor Readings | Motion Comparison | Live Vibration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Cards 1 & 2: Sensor Readings & Motion Comparison (8 Cols - Matching Image 2) */}
          <div className="lg:col-span-8 flex flex-col">
            <SensorTelemetry telemetry={currentTelemetry} metrics={metrics} peakG={peakG} />
          </div>
          {/* Card 3: Live Vibration Waveform Oscilloscope (4 Cols - Matching Image 2) */}
          <div className="lg:col-span-4 flex flex-col">
            <VibrationChart history={telemetryHistory} metrics={metrics} phase={phase} />
          </div>
        </div>

        {/* ROW 3: Bottom Horizontal 5-Step Pipeline Bar (Matching Image 2) */}
        <SafetyStateMachine currentPhase={phase} isSimulating={isSimulating} />

        {/* SINGLE COLLAPSED TECHNICAL DETAILS ACCORDION AT BOTTOM */}
        <details className="group w-full bg-console-card/60 border border-console-border rounded-xl p-4 transition-all">
          <summary className="flex items-center justify-between cursor-pointer font-mono font-bold text-xs lg:text-sm text-slate-300 uppercase select-none">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>TECHNICAL DETAILS &amp; HARDWARE ROADMAP</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 group-open:rotate-180 transition-transform">
              <ChevronDown className="w-4 h-4" />
            </div>
          </summary>

          <div className="mt-4 space-y-4 pt-4 border-t border-console-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              <div className="lg:col-span-6">
                <DecisionEngine metrics={metrics} dampers={dampers} phase={phase} peakG={peakG} />
              </div>
              <div className="lg:col-span-6">
                <FalsePositiveDemo
                  metrics={metrics}
                  onTriggerDemo={() => startSimulation('PUMP_VIBRATION')}
                  isSimulating={isSimulating}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              <div className="lg:col-span-7">
                <EventTimeline logs={eventLogs} />
              </div>
              <div className="lg:col-span-5">
                <ArchitecturePanel />
              </div>
            </div>
          </div>
        </details>
      </main>

      {/* Footer Disclaimer Bar (Matching Image 2 Footer) */}
      <footer className="w-full bg-[#040711] border-t border-console-border px-4 py-2 text-center font-mono text-[11px] text-slate-500">
        <div className="max-w-[1750px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            SOFTWARE DIGITAL TWIN &bull; CONCEPTUAL MVP
          </span>
          <span className="text-amber-400/90 font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            THIS IS A SIMULATION. NOT CONNECTED TO REAL MEDICAL EQUIPMENT.
          </span>
          <span className="text-slate-400 font-bold">
            ESDS PROTECTED POD MVP v1.0
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
