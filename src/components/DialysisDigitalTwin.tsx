import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SafetyPhaseStep, DamperState, SensorReading } from '../types/esds';
import { ShieldCheck, Activity, HeartPulse, AlertTriangle, Cpu, Zap } from 'lucide-react';

interface DigitalTwinProps {
  phase: SafetyPhaseStep;
  telemetry: SensorReading;
  dampers: DamperState[];
  isSimulating: boolean;
  peakG: number;
  isIsolationEnabled: boolean;
  compareMode: boolean;
}

// Single Three.js WebGL 3D Digital Twin Viewport Component with Live Refs & Smooth Seismic Kinematics
const SinglePod3DCanvas: React.FC<{
  isolated: boolean;
  telemetry: SensorReading;
  dampers: DamperState[];
  phase: SafetyPhaseStep;
  isSimulating?: boolean;
  compareMode?: boolean;
}> = ({ isolated, telemetry, dampers, phase, isSimulating, compareMode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const floorGroupRef = useRef<THREE.Group | null>(null);
  const podGroupRef = useRef<THREE.Group | null>(null);
  const waveMeshRef = useRef<THREE.Line | null>(null);
  const screenMeshRef = useRef<THREE.Mesh | null>(null);
  const damperLedsRef = useRef<THREE.Mesh[]>([]);
  const damperPistonsRef = useRef<THREE.Group[]>([]);
  const pumpRotorRef = useRef<THREE.Group | null>(null);
  const sensorLedRef = useRef<THREE.Mesh | null>(null);

  // Live Mutable Refs to eliminate React stale closure in requestAnimationFrame loop
  const isSimulatingRef = useRef<boolean>(!!isSimulating);
  const telemetryRef = useRef<SensorReading>(telemetry);
  const phaseRef = useRef<SafetyPhaseStep>(phase);
  const rampRef = useRef<number>(0);

  // Sync refs on every render
  useEffect(() => {
    isSimulatingRef.current = !!isSimulating;
    telemetryRef.current = telemetry;
    phaseRef.current = phase;
  });

  // Orbit control state (Adjusted camera radius so 3D model is never cut off!)
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cameraAngleRef = useRef<{ theta: number; phi: number; radius: number }>({
    theta: 0.25,
    phi: Math.PI / 4.6,
    radius: compareMode ? 17.5 : 14.5,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 400;

    // 1. SCENE & PERSPECTIVE CAMERA (Soft Off-White Background)
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf4f7fa);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    cameraRef.current = camera;

    const updateCameraPosition = () => {
      const { theta, phi, radius } = cameraAngleRef.current;
      camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
      camera.position.y = radius * Math.cos(phi) + 0.5;
      camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
      camera.lookAt(0, 0.5, 0);
    };
    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    while (container.firstChild) container.removeChild(container.firstChild);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainLight.position.set(10, 18, 12);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 1.2);
    fillLight.position.set(-10, 8, -10);
    scene.add(fillLight);

    const podInteriorLight = new THREE.PointLight(0xe0f2fe, 3.5, 12);
    podInteriorLight.position.set(0, 2.2, 0);
    scene.add(podInteriorLight);

    const cyanRimLight = new THREE.PointLight(0x06b6d4, 2.5, 14);
    cyanRimLight.position.set(-8, 3.0, 5);
    scene.add(cyanRimLight);

    // PBR MATERIALS FOR HERO POD & INTERIOR
    const shellMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.25 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.15 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.08 });
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.75, roughness: 0.3 });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.1, roughness: 0.6 });
    
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: isolated ? 0x06b6d4 : 0xef4444,
      transmission: 0.85,
      opacity: 0.35,
      transparent: true,
      roughness: 0.05,
      ior: 1.5,
      reflectivity: 0.9,
      clearcoat: 0.8,
    });
    
    const bedMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4 });
    const mattressMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3 });
    const patientSkinMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const patientGownMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const blanketMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.35 });
    const machineBodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.1 });

    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 256;
    screenCanvas.height = 160;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(0, 0, 256, 160);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px monospace';
      ctx.fillText('DIALYSIS IN PROGRESS', 20, 30);
      ctx.font = '14px monospace';
      ctx.fillText('FLOW: 350 mL/min', 20, 60);
      ctx.fillText('PRESS: 120 mmHg', 20, 85);
      ctx.fillText('PULSE: 72 bpm', 20, 110);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(20, 135);
      ctx.lineTo(60, 135);
      ctx.lineTo(75, 120);
      ctx.lineTo(90, 150);
      ctx.lineTo(105, 135);
      ctx.lineTo(236, 135);
      ctx.stroke();
    }
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });

    // 1. HOSPITAL FLOOR BASE & SEISMIC GRID
    const floorGroup = new THREE.Group();
    floorGroupRef.current = floorGroup;
    scene.add(floorGroup);

    const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(16, 0.3, 10), floorMat);
    floorMesh.position.set(0, -1.8, 0);
    floorMesh.receiveShadow = true;
    floorGroup.add(floorMesh);

    const gridHelper = new THREE.GridHelper(16, 16, 0x06b6d4, 0xcbd5e1);
    gridHelper.position.set(0, -1.64, 0);
    floorGroup.add(gridHelper);

    const wavePoints: THREE.Vector3[] = [];
    for (let i = -7; i <= 7; i += 0.3) {
      wavePoints.push(new THREE.Vector3(i, -1.48, 4.2));
    }
    const waveGeo = new THREE.BufferGeometry().setFromPoints(wavePoints);
    const waveMat = new THREE.LineBasicMaterial({ color: isolated ? 0x06b6d4 : 0xef4444, linewidth: 3 });
    const waveMesh = new THREE.Line(waveGeo, waveMat);
    waveMeshRef.current = waveMesh;
    floorGroup.add(waveMesh);

    // 2. SEISMIC ISOLATION PLATFORM & 4 HEAVY D1-D4 MECHANICAL ISOLATOR UNITS
    const platformGroup = new THREE.Group();
    scene.add(platformGroup);

    const lowerDeck = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.25, 5.5), platformMat);
    lowerDeck.position.set(0, -1.48, 0);
    platformGroup.add(lowerDeck);

    const upperDeck = new THREE.Mesh(new THREE.BoxGeometry(10.8, 0.3, 5.0), metalMat);
    upperDeck.position.set(0, -1.05, 0);
    upperDeck.castShadow = true;
    upperDeck.receiveShadow = true;
    platformGroup.add(upperDeck);

    damperLedsRef.current = [];
    damperPistonsRef.current = [];

    const damperPositions = [-4.0, -1.3, 1.3, 4.0];
    damperPositions.forEach((xPos) => {
      const dGroup = new THREE.Group();
      dGroup.position.set(xPos, -1.35, 2.1);

      const baseHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 24), platformMat);
      dGroup.add(baseHousing);

      const pistonGroup = new THREE.Group();
      const pistonShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.45, 20), chromeMat);
      pistonShaft.position.y = 0.25;
      pistonGroup.add(pistonShaft);

      const springPoints: THREE.Vector3[] = [];
      for (let t = 0; t <= Math.PI * 6; t += 0.2) {
        springPoints.push(new THREE.Vector3(Math.cos(t) * 0.22, (t / (Math.PI * 6)) * 0.38 - 0.19, Math.sin(t) * 0.22));
      }
      const springCurve = new THREE.CatmullRomCurve3(springPoints);
      const springGeo = new THREE.TubeGeometry(springCurve, 36, 0.035, 8, false);
      const springMesh = new THREE.Mesh(springGeo, platformMat);
      springMesh.position.y = 0.25;
      pistonGroup.add(springMesh);

      dGroup.add(pistonGroup);
      damperPistonsRef.current.push(pistonGroup);

      const statusRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.35, 0.045, 12, 24),
        new THREE.MeshBasicMaterial({ color: isolated ? 0x10b981 : 0x64748b })
      );
      statusRing.rotation.x = Math.PI / 2;
      statusRing.position.y = 0.44;
      dGroup.add(statusRing);
      damperLedsRef.current.push(statusRing);

      platformGroup.add(dGroup);
    });

    // 3. POD CAPSULE GROUP (Main 3D Parent Object containing Pod + Bed + Patient + Machine)
    const podGroup = new THREE.Group();
    podGroupRef.current = podGroup;
    scene.add(podGroup);

    const podLen = 7.0;
    const podRad = 2.0;

    const shellGeo = new THREE.CylinderGeometry(podRad+0.1, podRad+0.1, podLen, 32, 1, false, Math.PI * 0.1, Math.PI * 1.5);
    const shellMesh = new THREE.Mesh(shellGeo, metalMat);
    shellMesh.rotation.z = Math.PI / 2;
    shellMesh.position.y = 1.0;
    shellMesh.castShadow = true;
    shellMesh.receiveShadow = true;
    podGroup.add(shellMesh);

    const glassGeo = new THREE.CylinderGeometry(podRad, podRad, podLen - 0.2, 32, 1, true, -Math.PI * 0.4, Math.PI * 0.8);
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.rotation.z = Math.PI / 2;
    glassMesh.position.y = 1.0;
    podGroup.add(glassMesh);

    const frontRingGeo = new THREE.TorusGeometry(podRad + 0.12, 0.16, 16, 32);
    const frontRing = new THREE.Mesh(frontRingGeo, chromeMat);
    frontRing.position.set(-podLen / 2 + 0.1, 1.0, 0);
    frontRing.rotation.y = Math.PI / 2;
    podGroup.add(frontRing);

    const backRing = new THREE.Mesh(frontRingGeo, chromeMat);
    backRing.position.set(podLen / 2 - 0.1, 1.0, 0);
    backRing.rotation.y = Math.PI / 2;
    podGroup.add(backRing);

    const cyanGlowRingGeo = new THREE.TorusGeometry(podRad + 0.05, 0.04, 16, 32);
    const cyanGlowRingMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const cyanGlowRing = new THREE.Mesh(cyanGlowRingGeo, cyanGlowRingMat);
    cyanGlowRing.position.set(-podLen / 2 + 0.2, 1.0, 0);
    cyanGlowRing.rotation.y = Math.PI / 2;
    podGroup.add(cyanGlowRing);

    const leftCapGeo = new THREE.SphereGeometry(podRad + 0.05, 24, 24, 0, Math.PI, 0, Math.PI);
    const leftCap = new THREE.Mesh(leftCapGeo, shellMat);
    leftCap.position.set(-podLen / 2, 1.0, 0);
    leftCap.rotation.y = -Math.PI / 2;
    podGroup.add(leftCap);

    const rightCap = new THREE.Mesh(leftCapGeo, shellMat);
    rightCap.position.set(podLen / 2, 1.0, 0);
    rightCap.rotation.y = Math.PI / 2;
    podGroup.add(rightCap);

    // 4. DIALYSIS TREATMENT BED & ANATOMICAL HUMAN PATIENT
    const bedGroup = new THREE.Group();
    bedGroup.position.set(-1.2, -0.2, 0.1);

    const bedBase = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.4, 1.6), bedMat);
    bedBase.position.y = 0.2;
    bedBase.castShadow = true;
    bedGroup.add(bedBase);

    const backRest = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 1.55), bedMat);
    backRest.position.set(-1.1, 0.5, 0);
    backRest.rotation.z = Math.PI / 10;
    bedGroup.add(backRest);

    const mattress = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.25, 1.5), mattressMat);
    mattress.position.set(0.0, 0.5, 0);
    bedGroup.add(mattress);

    const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.2, 1.1), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    pillow.position.set(-1.2, 0.7, 0);
    bedGroup.add(pillow);

    const railLeft = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.25, 0.08), chromeMat);
    railLeft.position.set(0.2, 0.75, 0.78);
    bedGroup.add(railLeft);

    const railRight = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.25, 0.08), chromeMat);
    railRight.position.set(0.2, 0.75, -0.78);
    bedGroup.add(railRight);

    [[-1.6, 0.7], [1.6, 0.7], [-1.6, -0.7], [1.6, -0.7]].forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 12), chromeMat);
      leg.position.set(x, -0.2, z);
      bedGroup.add(leg);
    });

    // 3D PROCEDURAL ANATOMICAL HUMAN PATIENT
    const patientGroup = new THREE.Group();
    patientGroup.position.set(0.0, 0.65, 0);

    const headGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const headMesh = new THREE.Mesh(headGeo, patientSkinMat);
    headMesh.position.set(-1.2, 0.35, 0);
    headMesh.scale.set(1, 1.1, 0.95);
    patientGroup.add(headMesh);

    const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 16, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({ color: 0x334155 }));
    hairMesh.position.set(-1.2, 0.37, 0);
    patientGroup.add(hairMesh);

    const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.25, 12), patientSkinMat);
    neckMesh.position.set(-0.9, 0.25, 0);
    patientGroup.add(neckMesh);

    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.32, 0.95), patientGownMat);
    torsoMesh.position.set(-0.1, 0.22, 0);
    patientGroup.add(torsoMesh);

    const armLeftUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.55, 12), patientGownMat);
    armLeftUpper.position.set(-0.6, 0.2, 0.55);
    armLeftUpper.rotation.z = Math.PI / 3;
    armLeftUpper.rotation.x = Math.PI / 12;
    patientGroup.add(armLeftUpper);

    const armLeftFore = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.5, 12), patientSkinMat);
    armLeftFore.position.set(-0.25, 0.18, 0.65);
    armLeftFore.rotation.z = Math.PI / 2;
    patientGroup.add(armLeftFore);

    const handLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.14), patientSkinMat);
    handLeft.position.set(0.05, 0.18, 0.65);
    patientGroup.add(handLeft);

    const legsMesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.3, 0.85), patientSkinMat);
    legsMesh.position.set(1.2, 0.18, 0);
    patientGroup.add(legsMesh);

    const blanketMesh = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.36, 1.3), blanketMat);
    blanketMesh.position.set(0.5, 0.24, 0);
    patientGroup.add(blanketMesh);

    bedGroup.add(patientGroup);
    podGroup.add(bedGroup);

    // 5. DIALYSIS MACHINE CONSOLE
    const machineGroup = new THREE.Group();
    machineGroup.position.set(2.0, 0.1, 0.1);

    const cabinetMesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.5, 1.4), machineBodyMat);
    cabinetMesh.position.y = 0.5;
    cabinetMesh.castShadow = true;
    machineGroup.add(cabinetMesh);

    const displayBezel = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.85, 0.1), platformMat);
    displayBezel.position.set(-0.1, 1.35, 0.72);
    displayBezel.rotation.x = -Math.PI / 16;
    machineGroup.add(displayBezel);

    const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.75), screenMat);
    screenMesh.position.set(-0.1, 1.35, 0.78);
    screenMesh.rotation.x = -Math.PI / 16;
    screenMeshRef.current = screenMesh;
    machineGroup.add(screenMesh);

    const ivPole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.4, 12), chromeMat);
    ivPole.position.set(0.6, 2.0, 0.3);
    machineGroup.add(ivPole);

    const ivCross = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.04), chromeMat);
    ivCross.position.set(0.6, 2.6, 0.3);
    machineGroup.add(ivCross);

    const salineBag = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.45, 0.15),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 })
    );
    salineBag.position.set(0.4, 2.4, 0.3);
    machineGroup.add(salineBag);

    const bloodBag = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.45, 0.15),
      new THREE.MeshStandardMaterial({ color: 0xef4444, transparent: true, opacity: 0.85 })
    );
    bloodBag.position.set(0.8, 2.4, 0.3);
    machineGroup.add(bloodBag);

    const pumpRotor = new THREE.Group();
    pumpRotorRef.current = pumpRotor;
    const pumpBase = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 24), platformMat);
    pumpBase.rotation.x = Math.PI / 2;
    pumpRotor.add(pumpBase);

    const blade1 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.04), chromeMat);
    pumpRotor.add(blade1);
    pumpRotor.position.set(-0.4, 0.5, 0.72);
    machineGroup.add(pumpRotor);

    const filterCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.16, 1.0, 16),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.9 })
    );
    filterCylinder.position.set(0.9, 0.7, 0.0);
    machineGroup.add(filterCylinder);

    podGroup.add(machineGroup);

    // 6. REAL 3D CURVED TUBING LINES (Machine -> Patient Arm)
    const bloodCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.15, 0.63, 0.75),
      new THREE.Vector3(-0.5, 0.4, 0.8),
      new THREE.Vector3(0.5, 0.2, 0.8),
      new THREE.Vector3(1.6, 0.6, 0.75),
    ]);
    const bloodGeo = new THREE.TubeGeometry(bloodCurve, 32, 0.04, 8, false);
    const bloodMesh = new THREE.Mesh(bloodGeo, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    podGroup.add(bloodMesh);

    const returnCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.15, 0.61, 0.70),
      new THREE.Vector3(-0.4, 0.35, 0.75),
      new THREE.Vector3(0.6, 0.25, 0.75),
      new THREE.Vector3(1.6, 0.5, 0.75),
    ]);
    const returnGeo = new THREE.TubeGeometry(returnCurve, 32, 0.04, 8, false);
    const returnMesh = new THREE.Mesh(returnGeo, new THREE.MeshBasicMaterial({ color: 0x0284c7 }));
    podGroup.add(returnMesh);

    // 7. VIRTUAL ADXL345 SENSOR CHIP
    const sensorChip = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.15), new THREE.MeshStandardMaterial({ color: 0x06b6d4 }));
    sensorChip.position.set(3.6, 1.2, 0);
    podGroup.add(sensorChip);

    const sensorLed = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), new THREE.MeshBasicMaterial({ color: 0x06b6d4 }));
    sensorLed.position.set(3.6, 1.4, 0.08);
    sensorLedRef.current = sensorLed;
    podGroup.add(sensorLed);

    // MOUSE DRAG ORBIT CONTROLS
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraAngleRef.current.theta -= deltaX * 0.008;
      cameraAngleRef.current.phi = Math.max(
        Math.PI / 12,
        Math.min(Math.PI / 2.2, cameraAngleRef.current.phi - deltaY * 0.008)
      );

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      updateCameraPosition();
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraAngleRef.current.radius = Math.max(
        7.5,
        Math.min(18.0, cameraAngleRef.current.radius + e.deltaY * 0.005)
      );
      updateCameraPosition();
    };

    container.addEventListener('pointerdown', onMouseDown);
    window.addEventListener('pointermove', onMouseMove);
    window.addEventListener('pointerup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // REAL-TIME ANIMATION LOOP READING LIVE REFS EVERY FRAME (0 STALE CLOSURES)
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const activeSim = isSimulatingRef.current;
      const activePhase = phaseRef.current;
      const activeTelem = telemetryRef.current;

      if (pumpRotorRef.current && activePhase === 'DETECT') {
        pumpRotorRef.current.rotation.z += 0.15;
      }

      // Target ramp factor (0.0 when idle/normal, lerps smoothly to 1.0 when isSimulating is true or floorMotion > 0)
      const targetRamp = (activeSim || activeTelem.floorMotion > 0) ? 1.0 : 0.0;
      rampRef.current += (targetRamp - rampRef.current) * 0.1; // Smooth 0.3s ramp up / smooth 0.5s damped stop

      const currentRamp = rampRef.current;
      const t = Date.now() * 0.003;

      if (currentRamp > 0.001) {
        // Multi-harmonic deterministic seismic wave equation
        const seismicSignal = Math.sin(t * 18.0) * 0.45 + Math.sin(t * 31.0) * 0.25 + Math.sin(t * 47.0) * 0.12;
        const motionPercent = activeTelem.floorMotion > 0 ? activeTelem.floorMotion : 55;
        const earthquakeAmplitude = (motionPercent / 100) * 1.8 * currentRamp;
        const floorMotion = seismicSignal * earthquakeAmplitude;

        if (floorGroupRef.current) {
          floorGroupRef.current.position.x = floorMotion;
        }

        if (podGroupRef.current) {
          if (!isolated) {
            // UNPROTECTED LEFT MODEL: Follows ground motion strongly (100% + high frequency kinetic vibration)
            const vibeX = (Math.sin(t * 36.0) * 0.35 + Math.cos(t * 54.0) * 0.22) * earthquakeAmplitude;
            const vibeY = (Math.sin(t * 42.0) * 0.20 + Math.cos(t * 26.0) * 0.12) * earthquakeAmplitude;
            const leftRotZ = seismicSignal * earthquakeAmplitude * 0.08 + (Math.sin(t * 28.0) * 0.08) * earthquakeAmplitude;
            
            podGroupRef.current.position.x = floorMotion * 1.8 + vibeX;
            podGroupRef.current.position.y = vibeY;
            podGroupRef.current.position.z = seismicSignal * earthquakeAmplitude * 0.35;
            podGroupRef.current.rotation.z = leftRotZ;
          } else {
            // PROTECTED RIGHT MODEL: ESDS Isolation attenuates motion by 85%! (Only ~15% residual motion)
            const isolationFactor = 0.15;
            const rightX = floorMotion * isolationFactor;
            const rightZ = seismicSignal * earthquakeAmplitude * 0.35 * isolationFactor;
            const rightRotZ = seismicSignal * earthquakeAmplitude * 0.08 * isolationFactor;

            podGroupRef.current.position.x = rightX;
            podGroupRef.current.position.y = 0;
            podGroupRef.current.position.z = rightZ;
            podGroupRef.current.rotation.z = rightRotZ;
          }
        }

        // Piston compression & dynamic spring response
        damperPistonsRef.current.forEach((pistonGroup) => {
          if (isolated && podGroupRef.current) {
            const comp = (floorMotion - podGroupRef.current.position.x) * 0.45;
            pistonGroup.position.x = comp;
          } else {
            pistonGroup.position.x = 0;
          }
        });

        // Dynamic Waveform Line update matching exact seismic signal
        if (waveMeshRef.current) {
          const geo = waveMeshRef.current.geometry;
          const posAttr = geo.attributes.position;
          if (posAttr) {
            const timeArr = Array.from({ length: posAttr.count }, (_, i) => {
              const x = -7 + i * 0.3;
              const y = -1.48 + Math.sin(x * 4 + t * 6) * earthquakeAmplitude * 0.35;
              return new THREE.Vector3(x, y, 4.2);
            });
            geo.setFromPoints(timeArr);
            geo.computeBoundingSphere();
          }
        }
      } else {
        // Smooth neutral rest state
        if (floorGroupRef.current) floorGroupRef.current.position.x = 0;
        if (podGroupRef.current) {
          podGroupRef.current.position.x = 0;
          podGroupRef.current.position.y = 0;
          podGroupRef.current.position.z = 0;
          podGroupRef.current.rotation.z = 0;
        }
        damperPistonsRef.current.forEach((pistonGroup) => {
          pistonGroup.position.x = 0;
        });
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth || 640;
      const h = container.clientHeight || 400;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', onMouseDown);
      window.removeEventListener('pointermove', onMouseMove);
      window.removeEventListener('pointerup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isolated]);

  useEffect(() => {
    if (sensorLedRef.current) {
      const mat = sensorLedRef.current.material as THREE.MeshBasicMaterial;
      if (phase === 'DETECT') mat.color.setHex(0xf59e0b);
      else if (phase === 'SECURE' || phase === 'RECOVERY') mat.color.setHex(0x10b981);
      else mat.color.setHex(0x06b6d4);
    }

    damperLedsRef.current.forEach((led, idx) => {
      const dState = dampers[idx];
      const mat = led.material as THREE.MeshBasicMaterial;

      if (!isolated) {
        mat.color.setHex(0xef4444);
      } else if (dState.status === 'ACTIVE' || dState.status === 'LOCKED' || phase === 'SECURE' || phase === 'RECOVERY') {
        mat.color.setHex(0x10b981);
      } else if (dState.status === 'ENGAGING') {
        mat.color.setHex(0xf59e0b);
      } else {
        mat.color.setHex(0x06b6d4);
      }
    });
  }, [telemetry, dampers, isolated, phase]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-0 relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing" />
  );
};

export const DialysisDigitalTwin: React.FC<DigitalTwinProps> = ({
  phase,
  telemetry,
  dampers,
  isSimulating,
  peakG,
  isIsolationEnabled,
  compareMode,
}) => {
  const isShakingPhase = phase === 'DETECT';
  const isIsolatingPhase = phase === 'ISOLATE' || phase === 'PROTECT';
  const isSecuredPhase = phase === 'SECURE' || phase === 'RECOVERY';

  return (
    <div className="relative w-full h-[460px] lg:h-[500px] rounded-xl bg-white border border-[#E2E8F0] overflow-hidden flex flex-col justify-between p-3.5 shadow-sm">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Banner Tag */}
      <div className="relative z-10 flex items-center justify-between bg-white/90 border border-[#E2E8F0] px-3.5 py-2 rounded-lg backdrop-blur-md font-mono text-xs shadow-sm">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-600 animate-pulse" />
          <span className="text-slate-800 font-bold tracking-wider uppercase">
            {compareMode ? '🔀 DUAL POD SYNCHRONIZED COMPARISON MODE (WITHOUT ESDS vs WITH ESDS)' : 'PROTECTED DIALYSIS POD'}
          </span>
          <span className="text-[10px] text-slate-500 font-normal hidden sm:inline">
            &bull; Real-Time Three.js 3D Digital Twin Simulation (Interactive Orbit Enabled)
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <span>ISOLATION: <strong className={isIsolationEnabled ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>
            {isIsolationEnabled ? "ACTIVE (ON)" : "DISABLED (OFF)"}
          </strong></span>
          <span className="hidden sm:inline">PEAK G: <strong className="text-amber-600 font-mono">{peakG.toFixed(2)}g</strong></span>
        </div>
      </div>

      {/* Main 3D Canvas Viewport: Single Hero Pod View OR Synchronized Side-by-Side Dual View */}
      {compareMode ? (
        <div className="relative flex-1 grid grid-cols-2 gap-4 items-center justify-center my-1 select-none">
          {/* LEFT: WITHOUT ESDS (UNPROTECTED) - LIVE 3D THREE.JS CANVAS */}
          <div className="relative flex flex-col items-center justify-center h-full border border-rose-200 rounded-xl bg-rose-50/40 p-2 overflow-hidden shadow-sm">
            <div className="absolute top-2 left-2 z-10 bg-white/95 border border-rose-300 px-2.5 py-0.5 rounded text-[10px] font-mono text-rose-700 font-bold flex items-center gap-1 shadow-sm">
              <AlertTriangle className="w-3 h-3 text-rose-600" />
              <span>WITHOUT ESDS (UNPROTECTED)</span>
            </div>
            <SinglePod3DCanvas isolated={false} telemetry={telemetry} dampers={dampers} phase={phase} isSimulating={isSimulating} compareMode={true} />
            <div className="w-full flex justify-between text-[10px] font-mono text-rose-700 px-2 pt-1 border-t border-rose-200 z-10 font-bold">
              <span>POD MOTION: <strong>HIGH ({telemetry.floorMotion}%)</strong></span>
              <span className="font-bold text-rose-600 uppercase">UNPROTECTED</span>
            </div>
          </div>

          {/* RIGHT: WITH ESDS (PROTECTED) - LIVE 3D THREE.JS CANVAS */}
          <div className="relative flex flex-col items-center justify-center h-full border border-emerald-200 rounded-xl bg-emerald-50/40 p-2 overflow-hidden shadow-sm">
            <div className="absolute top-2 left-2 z-10 bg-white/95 border border-emerald-300 px-2.5 py-0.5 rounded text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>WITH ESDS (PROTECTED)</span>
            </div>
            <SinglePod3DCanvas isolated={true} telemetry={telemetry} dampers={dampers} phase={phase} isSimulating={isSimulating} compareMode={true} />
            <div className="w-full flex justify-between text-[10px] font-mono text-emerald-700 px-2 pt-1 border-t border-emerald-200 z-10 font-bold">
              <span>POD MOTION: <strong>LOW ({telemetry.podMotion}%)</strong></span>
              <span className="font-bold text-emerald-600 uppercase">PROTECTED</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex-1 flex items-center justify-center my-1 select-none overflow-hidden">
          <SinglePod3DCanvas isolated={isIsolationEnabled} telemetry={telemetry} dampers={dampers} phase={phase} isSimulating={isSimulating} />

          {/* Leader Annotation Overlay Tags */}
          <div className="absolute top-8 left-8 flex items-center gap-2 bg-white/95 border border-emerald-300 px-3.5 py-1.5 rounded-lg shadow-md text-xs font-mono text-emerald-700 pointer-events-none z-10">
            <ShieldCheck className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="font-bold tracking-wider">PATIENT SAFETY ZONE</span>
          </div>

          <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/95 border border-cyan-300 px-3.5 py-1.5 rounded-lg shadow-md text-xs font-mono text-cyan-700 pointer-events-none z-10">
            <Cpu className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span>DIALYSIS MACHINE</span>
          </div>

          {/* Damper Callout Labels D1-D4 */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/90 border border-[#E2E8F0] px-4 py-1 rounded-lg shadow-md text-[11px] font-mono text-slate-700 pointer-events-none z-10">
            <span className="flex items-center gap-1 font-bold text-emerald-600"><Zap className="w-3 h-3 text-emerald-600" /> D1</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600"><Zap className="w-3 h-3 text-emerald-600" /> D2</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600"><Zap className="w-3 h-3 text-emerald-600" /> D3</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600"><Zap className="w-3 h-3 text-emerald-600" /> D4</span>
          </div>

          {/* Secured Banner Overlay */}
          {isSecuredPhase && isIsolationEnabled && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 border border-emerald-400 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-fade-in glow-safe z-20">
              <ShieldCheck className="w-8 h-8 text-emerald-600 animate-bounce" />
              <div>
                <h3 className="text-emerald-800 font-mono font-bold text-sm lg:text-base tracking-wider uppercase">
                  EQUIPMENT SECURED
                </h3>
                <p className="text-emerald-600 text-xs font-mono">
                  Seismic Isolation Locked • Patient Safety Zone Protected
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Info */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-[#E2E8F0]">
        <span className="flex items-center gap-1.5 font-medium">
          <HeartPulse className="w-3.5 h-3.5 text-cyan-600" />
          PROTECTED DIALYSIS POD &bull; THREE.JS 3D DIGITAL TWIN
        </span>
        <span className="text-slate-400 hidden sm:inline">WebGL 3D RENDER ENGINE</span>
      </div>
    </div>
  );
};
