# ESDS — Earthquake-Resilient Dialysis Safety System

> **Smart India Hackathon (SIH) Software Digital Twin MVP / Prototype**

**ESDS (Earthquake-Resilient Dialysis Safety System)** is a digital twin prototype demonstrating an intelligent retrofit safety system designed to protect hemodialysis equipment and patients during seismic events.

By combining real-time 3-axis accelerometer sensing, intelligent signal filtering, kinetic stabilization dampening, medical staff alerting, and automated equipment securing, ESDS prevents tipping, line tension disruption, and equipment damage during earthquakes.

---

## 🌟 Key Features & Capabilities

- **100% Client-Side Digital Twin Simulation**: Runs completely in the browser with zero external backend or hardware dependencies, making it ideal for live jury presentations.
- **Hero Dialysis Digital Twin**: Interactive visual illustration of a hemodialysis machine mounted on an electro-hydraulic stabilization platform, alongside a **Patient Safety Zone** treatment bed representation.
- **Live 100Hz Sensor Telemetry**: Simulates a virtual ADXL345 3-axis MEMS accelerometer, explicitly separating static gravity ($0.98\text{ g}$) from **Dynamic Seismic Acceleration**.
- **Real-Time Live Waveform Oscilloscope**: HTML5 Canvas graph rendering dynamic acceleration traces with an active $0.25\text{ g}$ detection threshold line.
- **Automated 4-Step Safety Sequence**:
  $$\text{MONITOR} \longrightarrow \text{DETECT} \longrightarrow \text{STABILIZE} \longrightarrow \text{SECURE}$$
- **4 Active Stabilization Dampers ($D01$–$D04$)**: Animated dampers with status progression (`READY` $\rightarrow$ `ENGAGING` $\rightarrow$ `ACTIVE` $\rightarrow$ `LOCKED`) that actively counteract machine kinetic shaking.
- **False-Positive Prevention Filter**: Test feature demonstrating signal filtering that distinguishes routine $25\text{ Hz}$ dialyzer blood pump noise from genuine seismic S/P waves (`SENSE → FILTER → VERIFY → CLASSIFY → RESPOND`).
- **Hardware Roadmap Mapping**: Expandable technical section comparing the current software MVP to the future physical hardware deployment (ESP32 MCU, ADXL345 MEMS, industrial dampers, optocoupled emergency relay, IoT telemetry).

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Graphics & Waveforms**: Custom SVG Digital Twin + HTML5 Canvas Oscilloscope API

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **NPM** installed on your system.

### 1. Clone & Navigate to Project

```bash
cd d:/sih
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Launch Development Server

```bash
npm run dev
```

Open your web browser and navigate to `http://localhost:3000`.

### 4. Build for Production

```bash
npm run build
```

This compiles the static production assets into the `dist/` directory.

---

## 🎬 30-Second Hackathon Demonstration Script

1. **Initial State**: Observe system in `SYSTEM NORMAL`. The dialysis unit is stable, dampers are `READY`, dynamic acceleration is at baseline ($0.03\text{ g}$), and the waveform is flat.
2. **Select Scenario**: Click **`[ MODERATE ]`** or **`[ SEVERE ]`** scenario button.
3. **Trigger Simulation**: Click **`⚡ SIMULATE EARTHQUAKE`**.
4. **Observation**:
   - **Onset**: Machine starts shaking and dynamic acceleration spikes above $0.25\text{ g}$.
   - **Detection**: Status turns `SEISMIC EVENT DETECTED — STABILIZATION ACTIVE`.
   - **Stabilization**: 4 dampers ($D01$–$D04$) engage. As counter-forces apply, machine movement visibly dampens down to stationary.
   - **Secured**: Machine display transitions to `SAFETY MODE / EQUIPMENT SECURED` and status locks in `EQUIPMENT SECURED`.
5. **Reset**: Click **`[ RESET ]`** to return to normal monitoring mode.

---

## 📂 Project Structure

```
d:/sih/
├── index.html                  # Main HTML entry point
├── package.json                # Project dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Custom theme & console palette
├── src/
│   ├── main.tsx                # React root mount
│   ├── App.tsx                 # Main single-screen viewport layout
│   ├── index.css               # Global styles & glass textures
│   ├── types/
│   │   └── esds.ts             # TypeScript definitions for state & telemetry
│   ├── hooks/
│   │   └── useSimulation.ts    # Centralized 100Hz simulation engine & state machine
│   └── components/
│       ├── Header.tsx                 # Top navigation banner & status indicator
│       ├── DialysisDigitalTwin.tsx    # Hero SVG digital twin & kinetic shaker
│       ├── SensorTelemetry.tsx        # 4 core metric telemetry cards
│       ├── VibrationChart.tsx         # HTML5 Canvas dynamic waveform oscilloscope
│       ├── EarthquakeSimulator.tsx    # Demo controls & scenario triggers
│       ├── SafetyStateMachine.tsx     # 4-step horizontal safety sequence bar
│       ├── DecisionEngine.tsx         # Technical decision engine metrics
│       ├── FalsePositiveDemo.tsx      # Signal filter demonstration component
│       ├── EventTimeline.tsx          # Real-time audit log timeline
│       ├── ArchitecturePanel.tsx      # Software MVP vs ESP32 hardware roadmap
│       ├── AlertPanel.tsx             # Floating emergency notification banner
│       └── RecoveryModal.tsx          # Event summary report modal
└── README.md
```

---

## ⚠️ Positioning & Medical Disclaimer

ESDS is a **software simulation and digital twin prototype** created for Smart India Hackathon demonstration purposes. It is **not connected to physical medical equipment** and is not clinically certified. The emergency response demonstrated in this software represents the simulated behavior of future physical hardware integrations.
