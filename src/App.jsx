import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const SelfBalancingPlatform = lazy(() => import('./pages/SelfBalancingPlatform'));
const FaultDetection = lazy(() => import('./pages/FaultDetection'));
const FaultDetectionCASE = lazy(() => import('./pages/FaultDetectionCASE'));

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-screen w-full bg-brand-dark"></div>}>
          <About />
          <Projects />
          <Contact />
      </Suspense>
    </>
  );
}

function App() {
  // Initialize Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="relative w-full bg-brand-dark text-gray-100 font-sans selection:bg-brand-cyan selection:text-black min-h-screen">
        <Navbar />
        <main>
          <Suspense fallback={<div className="h-screen w-full bg-brand-dark flex items-center justify-center font-mono opacity-50">Loading Interface...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/self-balancing-platform" element={<SelfBalancingPlatform />} />
              <Route path="/project/fault-detection" element={<FaultDetection />} />
              <Route path="/project/fault-detection-case" element={<FaultDetectionCASE />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
