import React, { Suspense, useEffect, useState, useRef, lazy } from 'react';
import gsap from 'gsap';
import ErrorBoundary from './ErrorBoundary';

// Dynamically load the heavy 3D canvas only when needed
const MechaCanvas = lazy(() => import('./canvas/MechaCanvas'));

// --- HERO COMPONENT --- //
const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile to disable WebGL
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

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

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* 3D Background - Disabled on mobile to prevent crashes and save battery */}
      {!isMobile && (
        <ErrorBoundary fallback={<div className="absolute inset-0 z-0 bg-brand-dark opacity-60"></div>}>
            <Suspense fallback={null}>
                <MechaCanvas />
            </Suspense>
        </ErrorBoundary>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="overflow-hidden pb-2 mb-[-1vw]">
            <h1 ref={title1Ref} className="font-display font-medium text-[10vw] md:text-[8vw] leading-none tracking-tight text-white">
                Mechatronics
            </h1>
        </div>
        <div className="overflow-hidden pb-4">
            <h1 ref={title2Ref} className="font-display font-medium text-[10vw] md:text-[8vw] leading-none tracking-tight text-white opacity-90">
                Engineering
            </h1>
        </div>
        
        <p ref={subtitleRef} className="mt-8 text-sm md:text-base font-mono text-gray-400 max-w-xl uppercase tracking-widest leading-relaxed">
          Focused on embedded systems, automation, and <span className="text-white">data analysis.</span>
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
