/**
 * @file App.jsx
 * @description Root application component.
 *
 * Responsibilities:
 *  - Wraps the entire app in HashRouter (required for GitHub Pages static hosting).
 *  - Initializes a single, global Lenis smooth-scroll instance (duration 0.7s).
 *    ⚠️  Do NOT re-initialize Lenis inside nested pages — this causes competing
 *    scroll controllers and causes severe trackpad lag.
 *  - Lazy-loads all heavy page-level components to keep the initial JS bundle small.
 *  - Renders the persistent <Navbar /> above the <Routes /> tree.
 *
 * Routes:
 *  /                              → Home (Hero + About + Projects + Contact)
 *  /project/self-balancing-platform → SelfBalancingPlatform
 *  /project/fault-detection         → FaultDetection (IEEE BDAI paper)
 *  /project/fault-detection-case    → FaultDetectionCASE (IEEE CASE paper)
 */
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
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.5,
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
