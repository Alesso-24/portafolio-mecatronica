import React, { Suspense, useEffect, useState, useRef, lazy } from 'react';
import gsap from 'gsap';
import ErrorBoundary from './ErrorBoundary';
import { TextScramble } from './ui/text-scramble';

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

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(title1Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
    )
    .fromTo(title2Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
      "-=1.1"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: 'power2.out' },
      "-=0.5"
    );

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* 3D Background - Disabled on mobile to prevent crashes and save battery */}
      {!isMobile && (
        <ErrorBoundary fallback={<div className="absolute inset-0 z-0 bg-brand-dark opacity-60"></div>}>
            <Suspense fallback={null}>
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                  <MechaCanvas />
                </div>
            </Suspense>
        </ErrorBoundary>
      )}

      {/* Subtle radial gradient overlay for focus */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-dark/50 to-brand-dark"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="overflow-hidden pb-2 mb-2">
            <span ref={title1Ref} className="font-sans font-light text-[6vw] md:text-[3vw] tracking-[0.2em] text-brand-primary uppercase opacity-80 block">
                Alessandro
            </span>
        </div>
        <div className="overflow-hidden pb-4">
            <h1 ref={title2Ref} className="font-display font-medium text-[12vw] md:text-[9vw] leading-[0.9] tracking-tight text-white block">
                Mechatronics
                <br />
                <span className="text-white/40 italic font-light">&</span> Software
            </h1>
        </div>
        
        <p ref={subtitleRef} className="mt-12 text-xs md:text-sm font-sans text-brand-primary/60 max-w-xl mx-auto leading-relaxed">
          Bridging the gap between physical systems and elegant software. <br className="hidden md:block" /> Focused on intelligent automation and seamless digital experiences.
        </p>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-[1px] h-[50px] bg-gradient-to-b from-white/0 via-white/40 to-white/0 mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
