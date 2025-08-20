'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

// Placeholder simple geometry; user can replace with GLTF import later.
function Placeholder() {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.35, 128, 32]} />
      <meshStandardMaterial color="#8747D0" metalness={0.3} roughness={0.2} />
    </mesh>
  );
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [3, 2, 4], fov: 50 }}>
      <color attach="background" args={["#0E1B4B"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Stage intensity={0.8} environment="city">
          <Placeholder />
        </Stage>
      </Suspense>
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
