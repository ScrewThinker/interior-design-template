/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Maximize2, RotateCw, ZoomIn, ZoomOut, ToggleLeft, Activity, Info, CheckCircle2 } from "lucide-react";

interface RoomDesignInfo {
  title: string;
  materials: string[];
  lighting: string;
  estimatedBudget: string;
  craftsCount: string;
}

const ROOM_INFO_MAP: { [key: string]: RoomDesignInfo } = {
  living: {
    title: "Nordic Luxury Living Room",
    materials: ["Smoked Oak Veneer", "Italian Statuario Marble", "Custom Bouclé Fabric", "Warm Brass Trim"],
    lighting: "Warm Profile LED tracks + Indirect False Ceiling Cove Lights (3000K)",
    estimatedBudget: "Pocket-Friendly Premium",
    craftsCount: "12 artisans involved"
  },
  kitchen: {
    title: "Sleek Charcoal Modular Kitchen",
    materials: ["Anti-Fingerprint Acrylic Panels", "Quartz Stone Counters", "Ebco Soft-Close Drawer Rails", "BWR Marine Plywood Core"],
    lighting: "Under-cabinet recessed strip LEDs + Dual brass pendant cones (4000K)",
    estimatedBudget: "Customized & Modular",
    craftsCount: "8 modular experts"
  },
  bedroom: {
    title: "Serene Master Suite",
    materials: ["Linen Acoustic Panels", "Treated Ash Wood", "Velvet Bedding Fabrics", "Anti-Scratch Flooring"],
    lighting: "Dimmable bedside globes + Low-glare anti-glare downlights (2700K)",
    estimatedBudget: "Cozy & Premium",
    craftsCount: "6 custom decorators"
  }
};

export default function ThreeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRoom, setActiveRoom] = useState<"living" | "kitchen" | "bedroom">("living");
  const [isRotating, setIsRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Keep refs for 3D state control
  const sceneRef = useRef<THREE.Scene | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rotationAngleRef = useRef<number>(0);
  const interactionRef = useRef({
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0,
    rotX: 0,
    rotY: 0
  });

  // Re-generate Room 3D mesh objects whenever room state changes
  useEffect(() => {
    if (!containerRef.current) return;
    setIsLoading(true);

    // 1. Initialize Scene, Camera & Renderer
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 450;

    const scene = new THREE.Scene();
    // Warm natural tone background matching #F5F2ED
    scene.background = new THREE.Color(0xF5F2ED);
    scene.fog = new THREE.FogExp2(0xF5F2ED, 0.05);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(6, 5, 8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Clear previous renderer canvas if any
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Add Ambient and Direct Lights
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.65);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFF9E6, 0.8); // warm cream light
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x5A5A40, 1.2, 15); // brand color glow
    pointLight.position.set(0, 4, 0);
    scene.add(pointLight);

    // 3. Create a Group to hold all furniture/scene elements
    const roomGroup = new THREE.Group();
    scene.add(roomGroup);
    groupRef.current = roomGroup;

    // Build room base floor and back walls
    // Floor
    const floorGeo = new THREE.BoxGeometry(6, 0.15, 6);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xEAE5DF, // warm grey floor
      roughness: 0.35,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.075;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Wall Left
    const wallLeftGeo = new THREE.BoxGeometry(0.15, 4, 6);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xDFD9CE, // darker sand wall
      roughness: 0.8
    });
    const wallLeft = new THREE.Mesh(wallLeftGeo, wallMat);
    wallLeft.position.set(-3.075, 2, 0);
    wallLeft.receiveShadow = true;
    roomGroup.add(wallLeft);

    // Wall Back
    const wallBackGeo = new THREE.BoxGeometry(6, 4, 0.15);
    const wallBack = new THREE.Mesh(wallBackGeo, wallMat);
    wallBack.position.set(0, 2, -3.075);
    wallBack.receiveShadow = true;
    roomGroup.add(wallBack);

    // 4. Populate Room with beautiful synthetic geometries based on active room
    if (activeRoom === "living") {
      // Sofa
      const sofaBaseGeo = new THREE.BoxGeometry(3.5, 0.4, 1.2);
      const sofaBaseMat = new THREE.MeshStandardMaterial({ color: 0x5A5A40, roughness: 0.8 }); // brand olive
      const sofaBase = new THREE.Mesh(sofaBaseGeo, sofaBaseMat);
      sofaBase.position.set(0, 0.3, 1.2);
      sofaBase.castShadow = true;
      sofaBase.receiveShadow = true;
      roomGroup.add(sofaBase);

      const sofaBackGeo = new THREE.BoxGeometry(3.5, 0.9, 0.3);
      const sofaBack = new THREE.Mesh(sofaBackGeo, sofaBaseMat);
      sofaBack.position.set(0, 0.95, 1.65);
      sofaBack.castShadow = true;
      roomGroup.add(sofaBack);

      const sofaArmLeftGeo = new THREE.BoxGeometry(0.4, 0.7, 1.2);
      const sofaArmLeft = new THREE.Mesh(sofaArmLeftGeo, sofaBaseMat);
      sofaArmLeft.position.set(-1.85, 0.45, 1.2);
      sofaArmLeft.castShadow = true;
      roomGroup.add(sofaArmLeft);

      const sofaArmRightGeo = new THREE.BoxGeometry(0.4, 0.7, 1.2);
      const sofaArmRight = new THREE.Mesh(sofaArmRightGeo, sofaBaseMat);
      sofaArmRight.position.set(1.85, 0.45, 1.2);
      sofaArmRight.castShadow = true;
      roomGroup.add(sofaArmRight);

      // Coffee Table (Marble + gold legs)
      const tableTopGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.08, 32);
      const tableTopMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.1, metalness: 0.05 }); // White marble sheen
      const tableTop = new THREE.Mesh(tableTopGeo, tableTopMat);
      tableTop.position.set(0, 0.5, -0.3);
      tableTop.castShadow = true;
      roomGroup.add(tableTop);

      const tableLegGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.45, 8);
      const tableLegMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, roughness: 0.2, metalness: 0.95 }); // Gold metal
      
      const legPositions = [
        [-0.5, -0.3],
        [0.5, -0.3],
        [0, 0.2]
      ];
      legPositions.forEach((pos, index) => {
        const leg = new THREE.Mesh(tableLegGeo, tableLegMat);
        leg.position.set(pos[0], 0.225, pos[1]);
        leg.castShadow = true;
        roomGroup.add(leg);
      });

      // Wooden TV Unit Console against back wall
      const consoleGeo = new THREE.BoxGeometry(4.2, 0.5, 0.7);
      const consoleMat = new THREE.MeshStandardMaterial({ color: 0x8B7355, roughness: 0.7 }); // natural brown
      const tvConsole = new THREE.Mesh(consoleGeo, consoleMat);
      tvConsole.position.set(0, 0.25, -2.4);
      tvConsole.castShadow = true;
      roomGroup.add(tvConsole);

      // TV
      const tvGeo = new THREE.BoxGeometry(2.8, 1.6, 0.08);
      const tvMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.2 });
      const tv = new THREE.Mesh(tvGeo, tvMat);
      tv.position.set(0, 1.8, -2.45);
      tv.castShadow = true;
      roomGroup.add(tv);

      // Plant Pot + leaf spheres
      const potGeo = new THREE.CylinderGeometry(0.3, 0.2, 0.5, 12);
      const potMat = new THREE.MeshStandardMaterial({ color: 0x8A8A6A, roughness: 0.6 });
      const pot = new THREE.Mesh(potGeo, potMat);
      pot.position.set(-2.2, 0.25, -2.2);
      pot.castShadow = true;
      roomGroup.add(pot);

      const plantGeo = new THREE.SphereGeometry(0.4, 8, 8);
      const plantMat = new THREE.MeshStandardMaterial({ color: 0x2E5A1C, roughness: 0.9 });
      for (let i = 0; i < 3; i++) {
        const plant = new THREE.Mesh(plantGeo, plantMat);
        plant.position.set(-2.2 + (i - 1) * 0.15, 0.6 + i * 0.15, -2.2 + (Math.random() - 0.5) * 0.2);
        roomGroup.add(plant);
      }
    } 
    else if (activeRoom === "kitchen") {
      // Kitchen L-counter base
      const counterGeo = new THREE.BoxGeometry(4.5, 0.9, 0.95);
      const counterMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4 }); // Charcoal matte cabinets
      const counter = new THREE.Mesh(counterGeo, counterMat);
      counter.position.set(-0.5, 0.45, -2.1);
      counter.castShadow = true;
      counter.receiveShadow = true;
      roomGroup.add(counter);

      // Quartz top counter
      const topGeo = new THREE.BoxGeometry(4.6, 0.08, 1.0);
      const topMat = new THREE.MeshStandardMaterial({ color: 0xFDFDFD, roughness: 0.15 }); // Bright quartz white
      const quartzTop = new THREE.Mesh(topGeo, topMat);
      quartzTop.position.set(-0.5, 0.94, -2.1);
      quartzTop.castShadow = true;
      quartzTop.receiveShadow = true;
      roomGroup.add(quartzTop);

      // Breakfast Island Bar
      const islandGeo = new THREE.BoxGeometry(2.4, 0.9, 1.0);
      const island = new THREE.Mesh(islandGeo, counterMat);
      island.position.set(0.5, 0.45, 0.8);
      island.castShadow = true;
      island.receiveShadow = true;
      roomGroup.add(island);

      const islandTopGeo = new THREE.BoxGeometry(2.5, 0.08, 1.05);
      const islandTop = new THREE.Mesh(islandTopGeo, topMat);
      islandTop.position.set(0.5, 0.94, 0.8);
      islandTop.castShadow = true;
      roomGroup.add(islandTop);

      // Bar stools (two modern cylinder wooden stools)
      const stoolBaseGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.62, 16);
      const stoolBaseMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, roughness: 0.2, metalness: 0.8 }); // Gold legs
      const stoolTopGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.08, 16);
      const stoolTopMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.5 }); // black cushion
      
      [-0.4, 0.4].forEach((xPos) => {
        const leg = new THREE.Mesh(stoolBaseGeo, stoolBaseMat);
        leg.position.set(xPos + 0.5, 0.31, 1.6);
        leg.castShadow = true;
        roomGroup.add(leg);

        const cushion = new THREE.Mesh(stoolTopGeo, stoolTopMat);
        cushion.position.set(xPos + 0.5, 0.65, 1.6);
        cushion.castShadow = true;
        roomGroup.add(cushion);
      });

      // Overhead dual cone copper pendant lamps hanging
      const pendantGeo = new THREE.CylinderGeometry(0.01, 0.18, 0.25, 16);
      const pendantMat = new THREE.MeshStandardMaterial({ color: 0xC084FC, roughness: 0.1, metalness: 0.9 }); // Copper shade
      
      [-0.3, 0.5].forEach((xOffset) => {
        const shade = new THREE.Mesh(pendantGeo, pendantMat);
        shade.position.set(xOffset + 0.5, 2.8, 0.8);
        shade.castShadow = true;
        roomGroup.add(shade);
        
        // Cable string
        const cableGeo = new THREE.CylinderGeometry(0.006, 0.006, 1.2, 4);
        const cableMat = new THREE.MeshBasicMaterial({ color: 0x1A1A1A });
        const cable = new THREE.Mesh(cableGeo, cableMat);
        cable.position.set(xOffset + 0.5, 3.4, 0.8);
        roomGroup.add(cable);
      });
    } 
    else if (activeRoom === "bedroom") {
      // King Size bed Base
      const bedGeo = new THREE.BoxGeometry(3.2, 0.45, 4.0);
      const bedMat = new THREE.MeshStandardMaterial({ color: 0xDFD9CE, roughness: 0.9 }); // linen white base
      const bedBase = new THREE.Mesh(bedGeo, bedMat);
      bedBase.position.set(0, 0.225, -0.2);
      bedBase.castShadow = true;
      bedBase.receiveShadow = true;
      roomGroup.add(bedBase);

      // Velvet mattress top sheet
      const mattressGeo = new THREE.BoxGeometry(3.1, 0.35, 3.8);
      const mattressMat = new THREE.MeshStandardMaterial({ color: 0x5A5A40, roughness: 0.7 }); // brand olive sheet
      const mattress = new THREE.Mesh(mattressGeo, mattressMat);
      mattress.position.set(0, 0.55, -0.2);
      mattress.castShadow = true;
      roomGroup.add(mattress);

      // Cushions / Pillows
      const pillowGeo = new THREE.BoxGeometry(1.2, 0.18, 0.8);
      const pillowMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.9 });
      [-0.7, 0.7].forEach((xPos) => {
        const pillow = new THREE.Mesh(pillowGeo, pillowMat);
        pillow.position.set(xPos, 0.8, -1.6);
        pillow.rotation.x = 0.15;
        pillow.castShadow = true;
        roomGroup.add(pillow);
      });

      // Headboard (linen slatted backwall structure)
      const headboardGeo = new THREE.BoxGeometry(3.6, 1.5, 0.25);
      const headboardMat = new THREE.MeshStandardMaterial({ color: 0x8A8A6A, roughness: 0.85 }); // sage grey headboard
      const headboard = new THREE.Mesh(headboardGeo, headboardMat);
      headboard.position.set(0, 1.0, -2.1);
      headboard.castShadow = true;
      roomGroup.add(headboard);

      // Bedside wood side table
      const sideTableGeo = new THREE.BoxGeometry(0.7, 0.5, 0.7);
      const sideTableMat = new THREE.MeshStandardMaterial({ color: 0x3F3F2D, roughness: 0.5 }); // dark wood
      
      [-2.1, 2.1].forEach((xPos) => {
        const table = new THREE.Mesh(sideTableGeo, sideTableMat);
        table.position.set(xPos, 0.25, -1.9);
        table.castShadow = true;
        roomGroup.add(table);

        // Bedside globe Lamp base
        const lampBaseGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.25, 8);
        const lampBaseMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.9 });
        const lampBase = new THREE.Mesh(lampBaseGeo, lampBaseMat);
        lampBase.position.set(xPos, 0.625, -1.9);
        roomGroup.add(lampBase);

        // Lamp glass sphere
        const lampGlassGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const lampGlassMat = new THREE.MeshBasicMaterial({ color: 0xFFF2D1 }); // luminous glowing sphere
        const lampGlass = new THREE.Mesh(lampGlassGeo, lampGlassMat);
        lampGlass.position.set(xPos, 0.8, -1.9);
        roomGroup.add(lampGlass);
      });
    }

    // 5. Build Grid helper to add perspective scale
    const gridHelper = new THREE.GridHelper(10, 10, 0x5A5A40, 0xDFDFDF);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // End Loading state
    setIsLoading(false);

    // 6. Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Handle continuous auto-rotation if toggled
      if (isRotating && groupRef.current) {
        rotationAngleRef.current += 0.0035;
        groupRef.current.rotation.y = rotationAngleRef.current;
      } else if (groupRef.current) {
        // Use custom touch/mouse drag calculations
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, interactionRef.current.rotY, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, interactionRef.current.rotX, 0.1);
      }

      // Apply zoom levels on camera position
      if (cameraRef.current) {
        cameraRef.current.position.set(
          6 * zoomLevel,
          5 * zoomLevel,
          8 * zoomLevel
        );
        cameraRef.current.lookAt(0, 1, 0);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 450;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [activeRoom, isRotating, zoomLevel]);

  // Touch and Mouse interactive Drag listeners
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isRotating) return; // ignore drag while auto-rotation is active
    interactionRef.current.isDragging = true;
    interactionRef.current.prevMouseX = e.clientX;
    interactionRef.current.prevMouseY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactionRef.current.isDragging || isRotating) return;
    const deltaX = e.clientX - interactionRef.current.prevMouseX;
    const deltaY = e.clientY - interactionRef.current.prevMouseY;

    interactionRef.current.rotY += deltaX * 0.007;
    // clamp X rotation to prevent flipping upside down
    interactionRef.current.rotX = Math.max(-Math.PI / 6, Math.min(Math.PI / 4, interactionRef.current.rotX + deltaY * 0.007));

    interactionRef.current.prevMouseX = e.clientX;
    interactionRef.current.prevMouseY = e.clientY;
  };

  const handleMouseUpOrLeave = () => {
    interactionRef.current.isDragging = false;
  };

  // Touch handlers for mobile gesture rotation
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isRotating || e.touches.length === 0) return;
    interactionRef.current.isDragging = true;
    interactionRef.current.prevMouseX = e.touches[0].clientX;
    interactionRef.current.prevMouseY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!interactionRef.current.isDragging || isRotating || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - interactionRef.current.prevMouseX;
    const deltaY = e.touches[0].clientY - interactionRef.current.prevMouseY;

    interactionRef.current.rotY += deltaX * 0.01;
    interactionRef.current.rotX = Math.max(-Math.PI / 6, Math.min(Math.PI / 4, interactionRef.current.rotX + deltaY * 0.01));

    interactionRef.current.prevMouseX = e.touches[0].clientX;
    interactionRef.current.prevMouseY = e.touches[0].clientY;
  };

  const roomInfo = ROOM_INFO_MAP[activeRoom];

  return (
    <section id="showcase" className="py-24 bg-white border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-16 items-start lg:items-end">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
              3D INTERACTIVE WALKTHROUGH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
              Experience the Craftsmanship
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Interact directly with our synthesized 3D room presets. Toggle camera behaviors, zoom in to inspect custom textures, and feel the spacing geometries.
            </p>
          </div>

          {/* Room Selection Chips */}
          <div className="flex gap-2 flex-wrap bg-brand-light p-1.5 rounded-xl border border-brand/10 shadow-inner shrink-0">
            {(["living", "kitchen", "bedroom"] as const).map((room) => (
              <button
                key={room}
                onClick={() => {
                  setActiveRoom(room);
                  rotationAngleRef.current = 0;
                  interactionRef.current = { isDragging: false, prevMouseX: 0, prevMouseY: 0, rotX: 0, rotY: 0 };
                }}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${
                  activeRoom === room
                    ? "bg-brand text-white shadow font-bold"
                    : "text-dark/70 hover:bg-white/50"
                }`}
                id={`room-btn-${room}`}
              >
                {room === "living" ? "Living Room" : room === "kitchen" ? "Modular Kitchen" : "Master Suite"}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Viewer split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Canvas Panel */}
          <div className="lg:col-span-8 bg-brand-light border border-brand/10 rounded-3xl overflow-hidden relative shadow-md flex flex-col justify-between min-h-[450px]">
            {isLoading && (
              <div className="absolute inset-0 z-40 bg-brand-light/90 flex items-center justify-center flex-col gap-3">
                <div className="w-10 h-10 border-2 border-brand border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand">Building synthetic room meshes...</p>
              </div>
            )}

            {/* Core WebGL Render container */}
            <div
              ref={containerRef}
              className="w-full flex-1 min-h-[420px] outline-none cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUpOrLeave}
              id="3d-room-canvas-container"
            />

            {/* Bottom floating helper guidelines bar */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex justify-between items-center bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand/10 shadow-sm pointer-events-auto">
              <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-dark/70 uppercase">
                <Activity className="w-3.5 h-3.5 text-brand animate-pulse" />
                {isRotating ? "Auto-orbit Active" : "Manual Drag-to-Rotate"}
              </div>
              <div className="flex gap-2.5 items-center">
                {/* Auto rotation Toggle button */}
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded border cursor-pointer transition-colors ${
                    isRotating 
                      ? "bg-brand/10 border-brand text-brand hover:bg-brand/20" 
                      : "bg-white border-dark/15 text-dark hover:bg-dark/5"
                  }`}
                  id="3d-auto-rotate-toggle"
                  title={isRotating ? "Switch to manual inspect" : "Start automatic rotation"}
                >
                  {isRotating ? "Manual Orbit" : "Auto Orbit"}
                </button>
                <div className="h-4 w-px bg-dark/10"></div>
                {/* Zoom tools */}
                <button
                  onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.1))}
                  className="p-1.5 hover:bg-dark/5 text-dark hover:text-brand rounded transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}
                  className="p-1.5 hover:bg-dark/5 text-dark hover:text-brand rounded transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Info Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-brand-light/30 border border-brand/10 rounded-3xl p-8 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-brand mb-4">
                <Info className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">SPECIFICATION BLUEPRINT</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-2 leading-tight">
                {roomInfo.title}
              </h3>
              <p className="text-xs text-gray-500 font-mono tracking-wide uppercase mb-6 pb-4 border-b border-brand/10">
                Project Code: NY-{activeRoom.toUpperCase()}-3D
              </p>

              {/* Material specifications list */}
              <div className="space-y-4 mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Curated Materials</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {roomInfo.materials.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                      <span className="text-xs text-gray-700 font-medium">{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lighting profile details */}
              <div className="mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Lighting Alignment</h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {roomInfo.lighting}
                </p>
              </div>
            </div>

            {/* Bottom pricing estimation and CTA */}
            <div className="pt-6 border-t border-brand/10">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Nyasa Budget Pricing</span>
                  <span className="text-lg font-serif font-bold text-brand">{roomInfo.estimatedBudget}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Expert Builders</span>
                  <span className="text-xs font-mono font-bold text-dark">{roomInfo.craftsCount}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-3 bg-brand hover:bg-brand-dark text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl shadow transition-colors"
                id="3d-spec-cta-consult"
              >
                Inquire For This Room Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
