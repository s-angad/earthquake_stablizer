# ESDS — Earthquake-Resilient Dialysis Safety System

> **Smart India Hackathon (SIH) Protected Dialysis Pod Digital Twin MVP**

**ESDS (Earthquake-Resilient Dialysis Safety System)** is a digital twin prototype demonstrating an intelligent retrofit safety system designed to protect hemodialysis equipment and patients during seismic events.

By combining real-time 3-axis accelerometer sensing, intelligent signal filtering, kinetic seismic isolation dampening, medical staff alerting, and automated equipment securing, ESDS prevents tipping, line tension disruption, and equipment damage during earthquakes.

---

## 🌟 Key Features & Innovations

- **100% Client-Side Digital Twin Simulation**: Runs completely in the browser with zero external backend or hardware dependencies.
- **Hero Protected Dialysis Pod**: Semi-transparent futuristic Pod shell enclosing the patient treatment bed silhouette (`PATIENT SAFETY ZONE`) and dialysis machine console.
- **Seismic Isolation Platform & 4 Isolation Dampers ($D1$–$D4$)**: Mounts the Pod above the Hospital Floor with dynamic counter-force dampening.
- **ESDS Isolation Toggle (`[ OFF ]` vs `[ ON ]`)**:
  - **WITHOUT ESDS (OFF)**: Earthquake shakes floor $\rightarrow$ Pod shakes heavily ($62\%$ motion) $\rightarrow$ Status: `🔴 UNPROTECTED`.
  - **WITH ESDS (ON)**: Same earthquake shakes floor $\rightarrow$ Virtual ADXL345 detects motion $\rightarrow$ Dampers $D1$–$D4$ engage $\rightarrow$ **Pod motion drops by $86\%$ down to $10\%$** while floor continues shaking $\rightarrow$ Status: `🟢 PROTECTED / EQUIPMENT SECURED`.
- **Side-by-Side Dual Pod Compare Mode (`[ 🔀 COMPARE ESDS ]`)**: Split-screen view running the exact same earthquake tick loop on two twin pods concurrently for jury demonstrations.
- **5-Step Safety Response Sequence**:
  $$\text{MONITOR} \longrightarrow \text{DETECT} \longrightarrow \text{ISOLATE} \longrightarrow \text{PROTECT} \longrightarrow \text{SECURE}$$

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

Ensure you have **Node.js** (v18 or higher) and **NPM** installed.

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

This compiles the static production assets into the `dist/` directory in ~2.6s.

---

## 🎬 30-Second Hackathon Demonstration Script

1. **Step 1 — Intro**: Open app in `SYSTEM NORMAL`. Show the Protected Pod with patient bed (`PATIENT SAFETY ZONE`) and dialysis machine.
2. **Step 2 — Demonstrate Problem (Isolation OFF)**: Click `[ OFF ]` under `ESDS ISOLATION`, select `[ MODERATE ]`, and click `⚡ SIMULATE EARTHQUAKE`. Observe floor & pod shaking heavily together (`🔴 UNPROTECTED`).
3. **Step 3 — Demonstrate Solution (Isolation ON)**: Reset, click `[ ON ]`, and run the SAME earthquake. Observe floor shaking while Pod motion drops down to near zero (`🟢 PROTECTED`).
4. **Step 4 — Jury WOW Moment (Side-by-Side Compare)**: Click `[ 🔀 COMPARE ESDS ]`. Run earthquake to view both isolated and unisolated twin pods side-by-side in real time!

---

## ⚠️ Positioning & Medical Disclaimer

ESDS is a **software simulation and digital twin prototype** created for Smart India Hackathon demonstration purposes. It is **not connected to physical medical equipment** and is not clinically certified. The emergency response demonstrated in this software represents the simulated behavior of future physical hardware integrations.
