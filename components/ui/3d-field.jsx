"use client";
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import * as THREE from "three";

// Floating Particles Component
function FloatingParticles({ theme, mousePosition }) {
  const meshRef = useRef();
  const { size } = useThree();
  
  const particleCount = 200;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Add mouse attraction
      const mouseX = (mousePosition.x / size.width) * 2 - 1;
      const mouseY = -(mousePosition.y / size.height) * 2 + 1;
      
      const dx = mouseX * 5 - positions[i3];
      const dy = mouseY * 5 - positions[i3 + 1];
      
      positions[i3] += particles.velocities[i3] + dx * 0.0001;
      positions[i3 + 1] += particles.velocities[i3 + 1] + dy * 0.0001;
      positions[i3 + 2] += particles.velocities[i3 + 2] + Math.sin(time + i) * 0.001;
      
      // Wave motion
      positions[i3] += Math.sin(time + i * 0.1) * 0.001;
      positions[i3 + 1] += Math.cos(time + i * 0.1) * 0.001;
      
      // Boundary wrap
      if (positions[i3] > 5) positions[i3] = -5;
      if (positions[i3] < -5) positions[i3] = 5;
      if (positions[i3 + 1] > 5) positions[i3 + 1] = -5;
      if (positions[i3 + 1] < -5) positions[i3 + 1] = 5;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.1;
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
      </bufferGeometry>
      <pointsMaterial
        size={theme === 'black' ? 0.05 : 0.03}
        color={theme === 'black' ? '#60a5fa' : '#1f2937'}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Morphing Geometry Component
function MorphingGeometry({ theme, isHovered }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    if (isHovered) {
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    } else {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.05;
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={theme === 'black' ? '#3b82f6' : '#374151'}
        wireframe
        transparent
        opacity={isHovered ? 0.8 : 0.3}
      />
    </mesh>
  );
}

// Main 3D Field Component
export function ThreeDField({ children, className, theme = 'black' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-96 overflow-hidden rounded-xl border transition-all duration-500",
        theme === 'black' 
          ? "bg-black border-neutral-800" 
          : "bg-white border-neutral-200",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingParticles theme={theme} mousePosition={mousePosition} />
        <MorphingGeometry theme={theme} isHovered={isHovered} />
      </Canvas>
      
      <div className={cn(
        "relative z-10 p-8 h-full flex flex-col justify-center",
        theme === 'black' ? "text-white" : "text-black"
      )}>
        {children}
      </div>
    </div>
  );
}