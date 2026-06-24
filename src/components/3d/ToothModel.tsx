"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function ToothPlaceholder() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float
      speed={2.5} 
      rotationIntensity={0.5} 
      floatIntensity={1.5}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#0EA5E9"
          emissiveIntensity={0.1}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.9}
          ior={1.5}
          thickness={0.5}
        />
      </mesh>
    </Float>
  );
}

export function ToothModel() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#0EA5E9" intensity={0.5} />
        
        <ToothPlaceholder />
        
        <Environment preset="city" />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
          color="#0EA5E9"
        />
      </Canvas>
      {/* Glow effect behind the 3D model */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
    </div>
  );
}
