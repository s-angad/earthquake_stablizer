import re

with open('D:/sih/src/components/DialysisDigitalTwin.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We will just replace the whole SinglePod3DCanvas
new_component = \"\"\"
const SinglePod3DCanvas: React.FC<{
  isolated: boolean;
  telemetry: SensorReading;
  dampers: DamperState[];
  phase: SafetyPhaseStep;
}> = ({ isolated, telemetry, dampers, phase }) => {
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
  const sensorLedRef = useRef<THREE.Mesh | null>(null);

  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cameraAngleRef = useRef<{ theta: number; phi: number; radius: number }>({
    theta: 0.35,
    phi: Math.PI / 3.5,
    radius: 12.0,
  });

  const isShakingPhase = phase === 'DETECT';
  const isSecuredPhase = phase === 'SECURE' || phase === 'RECOVERY';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x050914);

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(5, 12, 8);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.bias = -0.0005;
    scene.add(mainLight);

    const podInteriorLight = new THREE.PointLight(0xe0f2fe, 3.5, 12);
    podInteriorLight.position.set(0, 2.0, 0);
    scene.add(podInteriorLight);

    const cyanRimLight = new THREE.PointLight(0x06b6d4, 3.0, 15);
    cyanRimLight.position.set(-2, 2, 4);
    scene.add(cyanRimLight);
    
    const cyanRimLight2 = new THREE.PointLight(0x06b6d4, 2.0, 15);
    cyanRimLight2.position.set(4, 1, 3);
    scene.add(cyanRimLight2);

    // MATERIALS
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.3 });
    const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85, roughness: 0.4 });
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.3 });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x090d16, metalness: 0.2, roughness: 0.8 });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.95,
      opacity: 1.0,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.5,
      side: THREE.DoubleSide
    });
    const cyanGlowMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const bedFrameMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.5, roughness: 0.2 });
    const mattressMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });
    const patientSkinMat = new THREE.MeshStandardMaterial({ color: 0xfcbda1, roughness: 0.4 });
    const patientGownMat = new THREE.MeshStandardMaterial({ color: 0xbae6fd, roughness: 0.6 });
    const blanketMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });
    const machineWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.1 });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0369a1 });

    // 1. FLOOR
    const floorGroup = new THREE.Group();
    floorGroupRef.current = floorGroup;
    scene.add(floorGroup);

    const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(16, 0.2, 10), floorMat);
    floorMesh.position.set(0, -2.0, 0);
    floorMesh.receiveShadow = true;
    floorGroup.add(floorMesh);

    const gridHelper = new THREE.GridHelper(16, 16, 0x0284c7, 0x1e2d4a);
    gridHelper.position.set(0, -1.89, 0);
    floorGroup.add(gridHelper);

    // Wave Line
    const wavePoints: THREE.Vector3[] = [];
    for (let i = -7; i <= 7; i += 0.2) {
      wavePoints.push(new THREE.Vector3(i, -1.8, 4.0));
    }
    const waveGeo = new THREE.BufferGeometry().setFromPoints(wavePoints);
    const waveMat = new THREE.LineBasicMaterial({ color: 0xef4444, linewidth: 2 });
    const waveMesh = new THREE.Line(waveGeo, waveMat);
    waveMeshRef.current = waveMesh;
    floorGroup.add(waveMesh);

    // 2. ISOLATION PLATFORM
    const platformGroup = new THREE.Group();
    scene.add(platformGroup);

    // Lower base
    const lowerDeck = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 5.0), darkMetalMat);
    lowerDeck.position.set(0, -1.7, 0);
    lowerDeck.receiveShadow = true;
    platformGroup.add(lowerDeck);

    // Upper platform
    const upperDeck = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.2, 4.5), platformMat);
    upperDeck.position.set(0, -1.0, 0);
    upperDeck.castShadow = true;
    upperDeck.receiveShadow = true;
    platformGroup.add(upperDeck);

    // 4 Isolators
    damperLedsRef.current = [];
    damperPistonsRef.current = [];
    const damperPositions = [
      [-3.8, 1.6], [3.8, 1.6],
      [-3.8, -1.6], [3.8, -1.6]
    ];
    
    damperPositions.forEach(([xPos, zPos]) => {
      const dGroup = new THREE.Group();
      dGroup.position.set(xPos, -1.35, zPos);

      // Base
      const baseHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 16), darkMetalMat);
      baseHousing.position.y = -0.15;
      dGroup.add(baseHousing);
      
      // Top mount
      const topHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.1, 16), darkMetalMat);
      topHousing.position.y = 0.2;
      dGroup.add(topHousing);

      const pistonGroup = new THREE.Group();
      
      // Rubber bellows (using multiple torus or lathe)
      for(let i=0; i<3; i++) {
         const bellow = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.08, 8, 16), darkMetalMat);
         bellow.rotation.x = Math.PI / 2;
         bellow.position.y = -0.05 + i * 0.12;
         pistonGroup.add(bellow);
      }
      dGroup.add(pistonGroup);
      damperPistonsRef.current.push(pistonGroup);

      // LED ring
      const statusRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.42, 0.03, 8, 24),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      statusRing.rotation.x = Math.PI / 2;
      statusRing.position.y = -0.15;
      dGroup.add(statusRing);
      damperLedsRef.current.push(statusRing);

      platformGroup.add(dGroup);
    });

    // 3. POD CAPSULE (The Hero Model)
    const podGroup = new THREE.Group();
    podGroupRef.current = podGroup;
    scene.add(podGroup);
    
    // Capsule dimensions
    const podLen = 7.0;
    const podRad = 2.0;

    // Create the capsule shell using ExtrudeGeometry for the open face
    const shape = new THREE.Shape();
    shape.absarc(0, 0, podRad, -Math.PI/2, Math.PI/2, false); // Right half
    shape.absarc(0, 0, podRad + 0.15, Math.PI/2, -Math.PI/2, true); // Outer right half
    
    const extrudeSettings = { depth: podLen, bevelEnabled: false, curveSegments: 32 };
    
    // Actually, a simpler way for a horizontal capsule with a front opening:
    // A cylinder with thetaLength < 2*PI, aligned along X
    
    // MAIN SHELL (Metal back and bottom/top)
    const shellGeo = new THREE.CylinderGeometry(podRad+0.1, podRad+0.1, podLen, 32, 1, false, Math.PI * 0.1, Math.PI * 1.5);
    const shellMesh = new THREE.Mesh(shellGeo, metalMat);
    shellMesh.rotation.z = Math.PI / 2;
    shellMesh.position.y = 1.0;
    shellMesh.castShadow = true;
    shellMesh.receiveShadow = true;
    podGroup.add(shellMesh);
    
    // END CAPS (Rounded domes)
    const domeGeo = new THREE.SphereGeometry(podRad+0.1, 32, 16, 0, Math.PI*2, 0, Math.PI/2);
    
    const leftDome = new THREE.Mesh(domeGeo, metalMat);
    leftDome.rotation.z = Math.PI / 2;
    leftDome.position.set(-podLen/2, 1.0, 0);
    podGroup.add(leftDome);

    const rightDome = new THREE.Mesh(domeGeo, metalMat);
    rightDome.rotation.z = -Math.PI / 2;
    rightDome.position.set(podLen/2, 1.0, 0);
    podGroup.add(rightDome);
    
    // GLASS FRONT
    const glassGeo = new THREE.CylinderGeometry(podRad, podRad, podLen-0.2, 32, 1, false, -Math.PI * 0.4, Math.PI * 0.5);
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.rotation.z = Math.PI / 2;
    glassMesh.position.y = 1.0;
    podGroup.add(glassMesh);
    
    // CYAN GLOW RING (Front rim)
    const ringGeo = new THREE.TorusGeometry(podRad-0.05, 0.05, 16, 64, Math.PI * 1.5);
    const glowRing1 = new THREE.Mesh(ringGeo, cyanGlowMat);
    glowRing1.position.set(-podLen/2 + 0.2, 1.0, 0);
    glowRing1.rotation.y = Math.PI / 2;
    glowRing1.rotation.z = -Math.PI * 0.25;
    podGroup.add(glowRing1);
    
    const glowRing2 = glowRing1.clone();
    glowRing2.position.set(podLen/2 - 0.2, 1.0, 0);
    podGroup.add(glowRing2);
    
    const frontGlowFrameGeo = new THREE.CylinderGeometry(podRad, podRad, 0.1, 32, 1, true, -Math.PI * 0.4, Math.PI * 0.5);
    const frontGlow1 = new THREE.Mesh(frontGlowFrameGeo, cyanGlowMat);
    frontGlow1.rotation.z = Math.PI / 2;
    frontGlow1.position.set(-1.0, 1.0, 0);
    podGroup.add(frontGlow1);

    // Inner Floor
    const innerFloor = new THREE.Mesh(new THREE.BoxGeometry(podLen-0.5, 0.1, podRad*1.5), darkMetalMat);
    innerFloor.position.set(0, -0.6, 0.2);
    innerFloor.receiveShadow = true;
    podGroup.add(innerFloor);

    // 4. DIALYSIS BED
    const bedGroup = new THREE.Group();
    bedGroup.position.set(-0.8, -0.4, 0.2);
    
    const bedBase = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.3, 1.2), bedFrameMat);
    bedBase.castShadow = true;
    bedBase.receiveShadow = true;
    bedGroup.add(bedBase);
    
    const backRest = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 1.2), bedFrameMat);
    backRest.position.set(-1.4, 0.3, 0);
    backRest.rotation.z = Math.PI / 6;
    bedGroup.add(backRest);
    
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.15, 1.1), mattressMat);
    mattress.position.set(0.6, 0.22, 0);
    bedGroup.add(mattress);
    
    const backMattress = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.15, 1.1), mattressMat);
    backMattress.position.set(-1.4, 0.35, 0);
    backMattress.rotation.z = Math.PI / 6;
    bedGroup.add(backMattress);
    
    const bedPillow = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.8), blanketMat);
    bedPillow.position.set(-1.7, 0.55, 0);
    bedPillow.rotation.z = Math.PI / 6;
    bedGroup.add(bedPillow);
    
    // 5. PATIENT (Realistic Humanoid structure)
    const patientGroup = new THREE.Group();
    
    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), patientSkinMat);
    head.position.set(-1.6, 0.7, 0);
    patientGroup.add(head);
    
    // Torso (wearing gown)
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.8, 16, 16), patientGownMat);
    torso.rotation.z = Math.PI / 2 + Math.PI / 12;
    torso.position.set(-0.8, 0.5, 0);
    patientGroup.add(torso);
    
    // Blanket covering lower body
    const blanket = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.5, 16, 16), blanketMat);
    blanket.rotation.z = Math.PI / 2;
    blanket.position.set(0.6, 0.45, 0);
    patientGroup.add(blanket);
    
    // Visible Arm (Left)
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.5, 16, 16), patientSkinMat);
    arm.rotation.z = Math.PI / 2;
    arm.position.set(-0.8, 0.4, 0.4);
    patientGroup.add(arm);
    
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), patientSkinMat);
    hand.position.set(-0.4, 0.38, 0.4);
    patientGroup.add(hand);

    bedGroup.add(patientGroup);
    podGroup.add(bedGroup);

    // 6. DIALYSIS MACHINE
    const machineGroup = new THREE.Group();
    machineGroup.position.set(1.8, -0.5, 0.3);
    
    // Chassis
    const machineBase = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.8, 0.8), machineWhiteMat);
    machineBase.position.y = 0.9;
    machineBase.castShadow = true;
    machineBase.receiveShadow = true;
    machineGroup.add(machineBase);
    
    // Screen Bezel & Display
    const screenBezel = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.1), darkMetalMat);
    screenBezel.position.set(0, 1.4, 0.41);
    machineGroup.add(screenBezel);
    
    screenMeshRef.current = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), screenMat);
    screenMeshRef.current.position.set(0, 1.4, 0.47);
    machineGroup.add(screenMeshRef.current);
    
    // Pump section
    const pumpModule = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.3), darkMetalMat);
    pumpModule.position.set(0, 0.7, 0.45);
    machineGroup.add(pumpModule);
    
    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16), metalMat);
    rotor.rotation.x = Math.PI / 2;
    rotor.position.set(0, 0.7, 0.6);
    machineGroup.add(rotor);

    // IV Pole on Machine
    const ivPole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.2, 8), metalMat);
    ivPole.position.set(-0.3, 2.2, -0.2);
    machineGroup.add(ivPole);
    
    const ivBag1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.25, 16), new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transmission: 0.8, opacity: 1, transparent: true }));
    ivBag1.position.set(-0.45, 2.6, -0.2);
    machineGroup.add(ivBag1);
    
    const ivBag2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.25, 16), new THREE.MeshPhysicalMaterial({ color: 0xfca5a5, transmission: 0.8, opacity: 1, transparent: true }));
    ivBag2.position.set(-0.15, 2.6, -0.2);
    machineGroup.add(ivBag2);

    podGroup.add(machineGroup);

    // 7. MEDICAL TUBING
    // Tube from Machine to Patient Hand
    const tube1Pts = [
      new THREE.Vector3(1.8, 0.2, 0.9),
      new THREE.Vector3(1.0, 0.1, 1.0),
      new THREE.Vector3(-0.2, 0.0, 0.8),
      new THREE.Vector3(-1.2, -0.02, 0.6)
    ];
    const tube1Curve = new THREE.CatmullRomCurve3(tube1Pts);
    const tube1Geo = new THREE.TubeGeometry(tube1Curve, 20, 0.02, 8, false);
    const tube1Mesh = new THREE.Mesh(tube1Geo, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    podGroup.add(tube1Mesh);
    
    const tube2Pts = [
      new THREE.Vector3(1.7, 0.2, 0.9),
      new THREE.Vector3(1.0, 0.05, 0.9),
      new THREE.Vector3(-0.2, -0.05, 0.7),
      new THREE.Vector3(-1.2, -0.02, 0.6)
    ];
    const tube2Curve = new THREE.CatmullRomCurve3(tube2Pts);
    const tube2Geo = new THREE.TubeGeometry(tube2Curve, 20, 0.02, 8, false);
    const tube2Mesh = new THREE.Mesh(tube2Geo, new THREE.MeshBasicMaterial({ color: 0x3b82f6 }));
    podGroup.add(tube2Mesh);

    // 8. SENSOR MODULE
    const sensorChip = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.3), darkMetalMat);
    sensorChip.position.set(3.2, -0.5, 0.8);
    podGroup.add(sensorChip);
    
    const sensorLed = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), cyanGlowMat);
    sensorLed.position.set(3.2, -0.38, 0.8);
    sensorLedRef.current = sensorLed;
    podGroup.add(sensorLed);

    // CONTROLS
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraAngleRef.current.theta -= deltaX * 0.01;
      cameraAngleRef.current.phi = Math.max(
        Math.PI / 12,
        Math.min(Math.PI / 2.2, cameraAngleRef.current.phi - deltaY * 0.01)
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
        6.0,
        Math.min(25.0, cameraAngleRef.current.radius + e.deltaY * 0.01)
      );
      updateCameraPosition();
    };

    container.addEventListener('pointerdown', onMouseDown);
    window.addEventListener('pointermove', onMouseMove);
    window.addEventListener('pointerup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // RENDER LOOP
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
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
    // Kinematic motion
    const floorAmp = (telemetry.floorMotion / 100) * 0.8;
    const podAmp = (telemetry.podMotion / 100) * 0.7;

    const floorX = telemetry.x * floorAmp;
    const podX = telemetry.x * podAmp;
    const podZ = (telemetry.y * podAmp) / 2;
    const podRotZ = telemetry.x * (podAmp / 6);

    if (floorGroupRef.current) {
      floorGroupRef.current.position.x = floorX;
    }

    if (podGroupRef.current) {
      podGroupRef.current.position.x = podX;
      podGroupRef.current.position.z = podZ;
      podGroupRef.current.rotation.z = podRotZ;
    }

    if (sensorLedRef.current) {
      const mat = sensorLedRef.current.material as THREE.MeshBasicMaterial;
      if (isShakingPhase) mat.color.setHex(0xf59e0b);
      else if (isSecuredPhase) mat.color.setHex(0x10b981);
      else mat.color.setHex(0x06b6d4);
    }

    damperLedsRef.current.forEach((led, idx) => {
      const dState = dampers[idx];
      const mat = led.material as THREE.MeshBasicMaterial;
      const pistonGroup = damperPistonsRef.current[idx];

      if (!isolated) {
        mat.color.setHex(0x475569);
        if (pistonGroup) pistonGroup.position.y = 0;
      } else if (dState.status === 'ACTIVE' || dState.status === 'LOCKED') {
        mat.color.setHex(0x10b981);
        if (pistonGroup) pistonGroup.position.y = -0.15;
      } else if (dState.status === 'ENGAGING') {
        mat.color.setHex(0xf59e0b);
        if (pistonGroup) pistonGroup.position.y = -0.07;
      } else {
        mat.color.setHex(0x38bdf8);
        if (pistonGroup) pistonGroup.position.y = 0;
      }
    });

    if (waveMeshRef.current) {
      const geo = waveMeshRef.current.geometry;
      const posAttr = geo.attributes.position;
      if (posAttr) {
        const timeArr = Array.from({ length: posAttr.count }, (_, i) => {
          const x = -7 + i * 0.2;
          const y = -1.8 + Math.sin(x * 3 + Date.now() * 0.01) * (telemetry.floorMotion / 100) * 0.4;
          return new THREE.Vector3(x, y, 4.0);
        });
        geo.setFromPoints(timeArr);
        geo.computeBoundingSphere();
      }
    }
  }, [telemetry, dampers, isolated, isShakingPhase, isSecuredPhase]);

  return (
    <div ref={containerRef} className=\"w-full h-full min-h-[400px] relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing\" />
  );
};
\"\"\"

content = re.sub(r'const SinglePod3DCanvas.*?return \(\s*<div ref=\{containerRef\}.*?</div>\s*\);\s*};', new_component, content, flags=re.DOTALL)

with open('D:/sih/src/components/DialysisDigitalTwin.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
