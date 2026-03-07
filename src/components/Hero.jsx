import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

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
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
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

const MechaCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full pointer-events-none opacity-60">
      <Canvas shadows dpr={[1, 2]}>
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
    </div>
  );
};

// --- HERO COMPONENT --- //
const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Premium split text animation equivalent
    tl.fromTo(title1Ref.current,
      { y: 100, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo(title2Ref.current,
      { y: 100, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power4.out' },
      "-=1"
    )
    .fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.6"
    );

  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* 3D Background */}
      <MechaCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="overflow-hidden pb-2 mb-[-1vw]">
            <h1 ref={title1Ref} className="font-display font-medium text-[10vw] leading-none tracking-tight text-white">
                Creative
            </h1>
        </div>
        <div className="overflow-hidden pb-4">
            <h1 ref={title2Ref} className="font-display font-medium text-[10vw] leading-none tracking-tight text-white opacity-90">
                Mechatronics
            </h1>
        </div>
        
        <p ref={subtitleRef} className="mt-8 text-sm md:text-base font-mono text-gray-400 max-w-xl uppercase tracking-widest leading-relaxed">
          Bridging the gap between software, electronics, and mechanics to build <span className="text-white">intelligent systems.</span>
        </p>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="font-mono text-[10px] tracking-widest uppercase text-gray-500 mb-2">Scroll</div>
            <div className="w-[1px] h-[30px] bg-white opacity-30 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
