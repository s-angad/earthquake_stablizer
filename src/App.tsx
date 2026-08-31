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
import { ShieldCheck, ChevronDown, Layers } from 'lucide-react';

export function App() {
  const {
    phase,
    systemStatus,
    activeScenario,
    intensity,
    isSimulating,
    isPaused,
    showRecoveryModal,
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
  } = useSimulation();

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans flex flex-col justify-between selection:bg-cyan-500/30">
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

      {/* Header */}
      <Header
        systemStatus={systemStatus}
        phase={phase}
        isSimulating={isSimulating}
      />

      {/* Primary Single-Screen Viewport Container */}
      <main className="flex-1 w-full max-w-[1700px] mx-auto p-3 sm:p-4 lg:p-6 space-y-4">
        
        {/* BIG SYSTEM STATUS BANNER */}
        <div className="w-full bg-console-card/90 border border-console-border px-4 py-2.5 rounded-xl flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full ${
              phase === 'DETECT' || phase === 'STABILIZE' ? 'bg-amber-400 animate-ping' : phase === 'SECURE' ? 'bg-emerald-400' : 'bg-emerald-400 animate-pulse'
            }`} />
            <h2 className="font-mono text-sm lg:text-lg font-extrabold uppercase tracking-wider text-slate-100">
              STATUS: <span className={
                phase === 'DETECT' || phase === 'STABILIZE' ? 'text-amber-400' : phase === 'SECURE' ? 'text-emerald-400 font-bold' : 'text-emerald-400'
              }>{systemStatus}</span>
            </h2>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-slate-400">
            ESDS RETROFIT SAFETY LAYER
          </span>
        </div>

        {/* ROW 1: Hero Digital Twin (Left 7 Cols / ~60%) | Earthquake Simulator Controls (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Digital Twin Hero Visual (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <DialysisDigitalTwin
              phase={phase}
              telemetry={currentTelemetry}
              dampers={dampers}
              isSimulating={isSimulating}
              peakG={peakG}
            />
          </div>

          {/* Simulator Controls (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <EarthquakeSimulator
              activeScenario={activeScenario}
              intensity={intensity}
              isSimulating={isSimulating}
              isPaused={isPaused}
              onStartSimulation={startSimulation}
              onSetIntensity={setIntensity}
              onResetSystem={resetSystem}
              onPauseSimulation={pauseSimulation}
            />
          </div>
        </div>

        {/* ROW 2: Sensor Status (4 Key Metrics) | Live Waveform Oscilloscope */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <SensorTelemetry telemetry={currentTelemetry} metrics={metrics} peakG={peakG} />
          </div>
          <div className="lg:col-span-7 flex flex-col">
            <VibrationChart history={telemetryHistory} metrics={metrics} phase={phase} />
          </div>
        </div>

        {/* ROW 3: Simplified 4-Step Safety Response Sequence */}
        <SafetyStateMachine currentPhase={phase} isSimulating={isSimulating} />

        {/* SINGLE COLLAPSED TECHNICAL DETAILS SECTION AT BOTTOM */}
        <details className="group w-full bg-console-card/60 border border-console-border rounded-xl p-4 transition-all">
          <summary className="flex items-center justify-between cursor-pointer font-mono font-bold text-xs lg:text-sm text-slate-300 uppercase select-none">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>TECHNICAL DETAILS &amp; ARCHITECTURE MAPPING</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 group-open:rotate-180 transition-transform">
              <ChevronDown className="w-4 h-4" />
            </div>
          </summary>

          <div className="mt-4 space-y-4 pt-4 border-t border-console-border">
            {/* Row: Decision Engine & False Positive Pipeline */}
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

            {/* Row: Event Timeline Audit Log & Architecture Panel */}
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

      {/* Footer */}
      <footer className="w-full bg-[#05080e] border-t border-console-border px-4 py-2.5 text-center font-mono text-[11px] text-slate-500">
        <div className="max-w-[1700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            ESDS — Earthquake-Resilient Dialysis Safety System &bull; Smart India Hackathon Digital Twin MVP
          </span>
          <span className="text-amber-400/90 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/50">
            SOFTWARE SIMULATION • NOT CONNECTED TO PHYSICAL MEDICAL EQUIPMENT
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
