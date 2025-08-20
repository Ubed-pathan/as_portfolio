'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

type Props = { domain: 'bed' | 'cnc' };

function BedModel() {
  return (
    <group>
      {/* Simple abstract bed representation */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[3, 0.4, 2]} />
        <meshStandardMaterial color={'#c9d2ff'} metalness={0.05} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.9, -0.7]}>
        <boxGeometry args={[3, 1, 0.2]} />
        <meshStandardMaterial color={'#5a3bff'} metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.65, 0.3]}>
        <boxGeometry args={[2.6, 0.3, 1.4]} />
        <meshStandardMaterial color={'#ffffff'} roughness={0.9} />
      </mesh>
    </group>
  );
}

function CNCModel() {
  return (
    <group>
      {/* Stylized CNC machine block */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2.6, 1, 1.6]} />
        <meshStandardMaterial color={'#1f2630'} metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[-0.6, 1.1, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color={'#ff9f43'} metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0.4, 1.1, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color={'#5a3bff'} metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2.8, 0.2, 1.8]} />
        <meshStandardMaterial color={'#2b3441'} metalness={0.2} roughness={0.6} />
      </mesh>
    </group>
  );
}

export default function SwitcherViewer({ domain }: Props) {
  return (
    <Canvas camera={{ position: [4, 3, 4], fov: 55 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 4]} intensity={1.1} />
      <Suspense fallback={null}>
        {domain === 'bed' ? <BedModel /> : <CNCModel />}
      </Suspense>
      <OrbitControls enablePan={false} minDistance={3} maxDistance={8} />
    </Canvas>
  );
}
