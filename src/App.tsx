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
import { ShieldCheck, ChevronDown, Layers, AlertTriangle, Activity, HeartPulse } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F4F7FA] text-[#162033] font-sans flex flex-col justify-start selection:bg-cyan-500/20">
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
        compareMode={compareMode}
        onToggleCompareMode={toggleCompareMode}
      />

      {/* Primary Dashboard Content (Live Vibration Waveform moved directly into the gap under the 3D Pod) */}
      <main className="w-full max-w-[1750px] mx-auto p-3 sm:p-4 lg:p-5 space-y-4">
        
        {/* MAIN DASHBOARD 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* LEFT COLUMN (7.5 Cols / ~65% Width): 3D Hero + Live Vibration Waveform (Filling the gap) + Sensor Telemetry & Motion Comparison */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-3">
            {/* Protected Pod Digital Twin Hero */}
            <DialysisDigitalTwin
              phase={phase}
              telemetry={currentTelemetry}
              dampers={dampers}
              isSimulating={isSimulating}
              peakG={peakG}
              isIsolationEnabled={isIsolationEnabled}
              compareMode={compareMode}
            />

            {/* Live Vibration Waveform Oscilloscope (Moved directly into the gap under the 3D pod) */}
            <VibrationChart history={telemetryHistory} metrics={metrics} phase={phase} />

            {/* Sensor Telemetry & Motion Comparison Cards */}
            <SensorTelemetry telemetry={currentTelemetry} metrics={metrics} peakG={peakG} />
          </div>

          {/* RIGHT COLUMN (4.5 Cols / ~35% Width): Earthquake Controls + System Response Vertical List */}
          <div className="lg:col-span-5 xl:col-span-4">
            {/* Simulator Console & System Response Vertical Panel */}
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

        {/* ROW 2: Bottom Horizontal 5-Step Pipeline Bar */}
        <SafetyStateMachine currentPhase={phase} isSimulating={isSimulating} />

        {/* SINGLE COLLAPSED TECHNICAL DETAILS ACCORDION AT BOTTOM */}
        <details className="group w-full bg-white border border-[#E2E8F0] shadow-sm rounded-xl p-4 transition-all">
          <summary className="flex items-center justify-between cursor-pointer font-mono font-bold text-xs lg:text-sm text-slate-700 uppercase select-none">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-600" />
              <span>TECHNICAL DETAILS &amp; HARDWARE ROADMAP</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 group-open:rotate-180 transition-transform">
              <ChevronDown className="w-4 h-4" />
            </div>
          </summary>

          <div className="mt-4 space-y-4 pt-4 border-t border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
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

      {/* Footer Disclaimer Bar */}
      <footer className="w-full bg-white border-t border-[#E2E8F0] px-4 py-2 text-center font-mono text-[11px] text-slate-500 mt-4 shadow-sm">
        <div className="max-w-[1750px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            SOFTWARE DIGITAL TWIN &bull; CONCEPTUAL MVP
          </span>
          <span className="text-amber-600 font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            THIS IS A SIMULATION. NOT CONNECTED TO REAL MEDICAL EQUIPMENT.
          </span>
          <span className="text-slate-700 font-bold">
            ESDS PROTECTED POD MVP v1.0
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
