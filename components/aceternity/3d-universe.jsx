"use client";
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import * as THREE from "three";

// Massive Particle Universe
function ParticleUniverse({ theme, mousePosition, isActive }) {
  const meshRef = useRef();
  const { size } = useThree();
  
  const particleCount = 2000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Spread particles across much larger area
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.05;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.05;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
      
      // Dynamic colors
      if (theme === 'black') {
        colors[i * 3] = Math.random() * 0.5 + 0.3; // R
        colors[i * 3 + 1] = Math.random() * 0.8 + 0.2; // G  
        colors[i * 3 + 2] = 1; // B (blue dominant)
      } else {
        colors[i * 3] = Math.random() * 0.3; // R
        colors[i * 3 + 1] = Math.random() * 0.3; // G
        colors[i * 3 + 2] = Math.random() * 0.5 + 0.2; // B
      }
    }
    
    return { positions, velocities, colors };
  }, [theme]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      if (isActive) {
        // Mouse attraction with stronger force
        const mouseX = (mousePosition.x / size.width) * 2 - 1;
        const mouseY = -(mousePosition.y / size.height) * 2 + 1;
        
        const dx = mouseX * 15 - positions[i3];
        const dy = mouseY * 15 - positions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Stronger attraction when closer to mouse
        const force = Math.max(0, 1 - distance / 10) * 0.002;
        
        positions[i3] += particles.velocities[i3] + dx * force;
        positions[i3 + 1] += particles.velocities[i3 + 1] + dy * force;
        positions[i3 + 2] += particles.velocities[i3 + 2] + Math.sin(time * 2 + i * 0.1) * 0.01;
        
        // Spiral motion when active
        const angle = time + i * 0.01;
        positions[i3] += Math.sin(angle) * 0.005;
        positions[i3 + 1] += Math.cos(angle) * 0.005;
      } else {
        // Gentle floating motion when inactive
        positions[i3] += particles.velocities[i3] * 0.3;
        positions[i3 + 1] += particles.velocities[i3 + 1] * 0.3;
        positions[i3 + 2] += Math.sin(time * 0.5 + i * 0.01) * 0.003;
      }
      
      // Boundary wrapping with larger bounds
      if (positions[i3] > 25) positions[i3] = -25;
      if (positions[i3] < -25) positions[i3] = 25;
      if (positions[i3 + 1] > 25) positions[i3 + 1] = -25;
      if (positions[i3 + 1] < -25) positions[i3 + 1] = 25;
      if (positions[i3 + 2] > 15) positions[i3 + 2] = -15;
      if (positions[i3 + 2] < -15) positions[i3 + 2] = 15;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow rotation of entire particle field
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isActive ? 0.08 : 0.04}
        vertexColors
        transparent
        opacity={isActive ? 1 : 0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating Geometric Shapes
function FloatingShapes({ theme, isActive }) {
  const groupRef = useRef();
  
  const shapes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.5 + 0.3,
      type: Math.floor(Math.random() * 3), // 0: box, 1: sphere, 2: octahedron
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    groupRef.current.children.forEach((child, i) => {
      const shape = shapes[i];
      
      if (isActive) {
        child.rotation.x = time * (0.5 + i * 0.1);
        child.rotation.y = time * (0.3 + i * 0.05);
        child.rotation.z = time * (0.2 + i * 0.03);
        
        // Floating motion
        child.position.y = shape.position[1] + Math.sin(time + i) * 2;
        child.position.x = shape.position[0] + Math.cos(time * 0.5 + i) * 1;
      } else {
        child.rotation.x = time * 0.1;
        child.rotation.y = time * 0.05;
        child.position.y = shape.position[1] + Math.sin(time * 0.3 + i) * 0.5;
      }
    });
  });

  const getGeometry = (type) => {
    switch (type) {
      case 0: return <boxGeometry args={[1, 1, 1]} />;
      case 1: return <sphereGeometry args={[0.5, 8, 8]} />;
      case 2: return <octahedronGeometry args={[0.7]} />;
      default: return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh
          key={i}
          position={shape.position}
          scale={shape.scale}
        >
          {getGeometry(shape.type)}
          <meshStandardMaterial
            color={theme === 'black' ? '#3b82f6' : '#374151'}
            wireframe
            transparent
            opacity={isActive ? 0.4 : 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Energy Waves
function EnergyWaves({ theme, isActive }) {
  const waveRef = useRef();
  
  useFrame((state) => {
    if (!waveRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    if (isActive) {
      waveRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.3);
      waveRef.current.rotation.z = time * 0.5;
    } else {
      waveRef.current.scale.setScalar(1);
      waveRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh ref={waveRef} position={[0, 0, -5]}>
      <torusGeometry args={[10, 0.1, 8, 100]} />
      <meshStandardMaterial
        color={theme === 'black' ? '#8b5cf6' : '#6b7280'}
        transparent
        opacity={isActive ? 0.6 : 0.2}
        emissive={theme === 'black' ? '#1e1b4b' : '#111827'}
      />
    </mesh>
  );
}

// Main 3D Universe Component
export function ThreeDUniverse() {
  const [theme, setTheme] = useState('black');
  const [isActive, setIsActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section 
      className={cn(
        "min-h-screen relative overflow-hidden transition-all duration-1000",
        theme === 'black' 
          ? "bg-gradient-to-br from-black via-indigo-950 to-black"
          : "bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100"
      )}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 20], fov: 75 }}
      >
        <ambientLight intensity={theme === 'black' ? 0.2 : 0.5} />
        <pointLight 
          position={[20, 20, 20]} 
          intensity={theme === 'black' ? 0.8 : 0.4}
          color={theme === 'black' ? '#3b82f6' : '#ffffff'}
        />
        <pointLight 
          position={[-20, -20, 10]} 
          intensity={0.3}
          color={theme === 'black' ? '#8b5cf6' : '#6b7280'}
        />
        
        <ParticleUniverse 
          theme={theme} 
          mousePosition={mousePosition} 
          isActive={isActive} 
        />
        <FloatingShapes theme={theme} isActive={isActive} />
        <EnergyWaves theme={theme} isActive={isActive} />
      </Canvas>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className={cn(
          "text-5xl md:text-8xl font-bold mb-8 transition-all duration-500",
          theme === 'black' ? "text-white" : "text-gray-900"
        )}>
          3D Universe
        </h1>
        <p className={cn(
          "text-xl md:text-2xl mb-12 max-w-2xl transition-all duration-500",
          theme === 'black' ? "text-blue-200" : "text-gray-600"
        )}>
          Explore an infinite particle field with 2000+ interactive elements
        </p>
        
        <div className={cn(
          "p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500",
          theme === 'black' 
            ? "bg-black/20 border-white/10 text-white" 
            : "bg-white/20 border-black/10 text-gray-900"
        )}>
          <p className="text-lg">
            {isActive ? "🌌 Universe is active - particles following your movement!" : "👋 Move your mouse to activate the universe"}
          </p>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className={cn(
          "rounded-full p-3 border shadow-2xl transition-all duration-300",
          theme === 'black' 
            ? "bg-gray-900 border-gray-700" 
            : "bg-white border-gray-300"
        )}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme('black')}
              className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                theme === 'black' 
                  ? 'bg-black border-white shadow-lg scale-110' 
                  : 'bg-black border-gray-600 hover:border-gray-400'
              }`}
              title="Dark Universe"
            />
            <button
              onClick={() => setTheme('white')}
              className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                theme === 'white' 
                  ? 'bg-white border-black shadow-lg scale-110' 
                  : 'bg-white border-gray-400 hover:border-gray-200'
              }`}
              title="Light Universe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}