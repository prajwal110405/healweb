"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, Html, useProgress } from "@react-three/drei";
import { TeethModel } from "./TeethModel";

// Suspense fallback loader
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-primary font-medium">
        <span className="loading-spinner mb-2 w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
        {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export function HeroTeeth() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative flex items-center justify-center">
      {/* Soft radial teal glow behind/beneath the model */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0EA5E9]/15 blur-[100px] rounded-full -z-10" />
      
      {/* Subtle glassmorphism ring background (optional luxury touch) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 dark:border-white/5 rounded-full -z-10" />

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        {/* Cyan/teal accent light */}
        <pointLight position={[-5, -2, 5]} color="#0EA5E9" intensity={2} />
        <pointLight position={[5, -2, -5]} color="#0EA5E9" intensity={1} />

        <Suspense fallback={<Loader />}>
          {/* Floating and rotation animation */}
          <Float
            speed={1.5} // Duration ~ 6-8 seconds (slow motion)
            rotationIntensity={0.2} // Between 5 and 10 degrees roughly
            floatIntensity={1.5} // Up and down movement
            floatingRange={[-0.15, 0.15]}
          >
            {/* Center and scale the model appropriately. 
                Adjust scale depending on actual GLB size, assuming 1.5 is a good start. */}
            <TeethModel scale={1.5} position={[0, 0, 0]} />
          </Float>

          {/* Environment for realistic reflections */}
          <Environment preset="studio" />
          
          {/* Soft shadow underneath */}
          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.5}
            scale={15}
            blur={2.5}
            far={4}
            color="#0F172A"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
