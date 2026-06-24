"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export function TeethModel(props: any) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/models/teeth.glb");

  // Traverse the scene to enable shadows on the model
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/teeth.glb");
