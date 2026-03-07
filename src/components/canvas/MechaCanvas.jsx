import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

// Abstract glowing nodes to represent Mechatronics / IoT / Control Systems
const Nodes = ({ count = 100 }) => {
  const ref = useRef();
  
  // Generate initial static positions once
  const [particles] = React.useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 15;
        const y = (Math.random() - 0.5) * 15;
        const z = (Math.random() - 0.5) * 15;
        temp.push({ position: [x, y, z], scale: Math.random() * 0.2 + 0.05 });
    }
    return temp;
  });

  useFrame((state) => {
    // Slow rotation over time
    if(ref.current) {
        ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Instances ref={ref} limit={count} range={count}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#00e5ff" wireframe={true} emissive="#00e5ff" emissiveIntensity={2} />
      {particles.map((data, i) => (
        <Instance key={i} position={data.position} scale={data.scale} />
      ))}
    </Instances>
  );
};

export default function MechaCanvas() {
  return (
    <Canvas shadows dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#7c3aed" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#00e5ff" intensity={1} />
      
      <Suspense fallback={null}>
        <Nodes count={150} />
        <Environment preset="city" />
      </Suspense>
      
      {/* We disable controls to prevent interrupting the scroll experience on mobile */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
