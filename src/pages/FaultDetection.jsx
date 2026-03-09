import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const FaultDetection = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Re-initialize Lenis for this page
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

    // Animations
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-gray-100 font-sans selection:bg-brand-cyan selection:text-black">


      {/* Hero Header */}
      <header className="pt-40 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="fade-up">
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-cyan mb-6 block">Data Science & Machine Learning</span>
          <h1 className="font-display font-medium text-5xl md:text-7xl text-white tracking-tight leading-none mb-8">
            Industrial Fault Detection via Machine Learning.
          </h1>
          <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-12">
            A data-driven predictive maintenance approach for industrial rotating machinery using the NASA Bearing Dataset. 
            This research evaluates lightweight supervised learning techniques—specifically Random Forest—engineered for deployment on resource-constrained Edge devices like the ESP32.
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 fade-up mt-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Role</h4>
            <p className="font-mono text-[13px] text-white">Data Scientist / Researcher</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Timeline</h4>
            <p className="font-mono text-[13px] text-white">2026 (In Progress)</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Algorithms</h4>
            <p className="font-mono text-[13px] text-white">Random Forest (Optimized)</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Tools</h4>
            <p className="font-mono text-[13px] text-white">Python, LaTeX</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 max-w-5xl mx-auto pb-32">
        
        {/* Section 1: The Challenge */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 fade-up mb-24">
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl text-white tracking-tight sticky top-24">The Challenge</h3>
          </div>
          <div className="md:col-span-8 font-mono text-gray-400 text-sm leading-relaxed space-y-6">
            <p>
              Unplanned downtime caused by bearing failures represents a significant cost in industrial manufacturing. Traditional 
              maintenance strategies like "Run-to-Failure" or purely time-based preventative schedules often result in collateral damage 
              or the unnecessary replacement of perfectly healthy components.
            </p>
            <p className="mb-12">
              While Deep Learning (DL) models offer predictive maintenance capabilities, they typically require GPUs and computationally expensive 
              frequency-domain transformations (Fast Fourier Transforms). This creates a critical barrier to entry for decentralized Edge computing on low-power, battery-operated microcontrollers like the ESP32 network nodes.
            </p>

            {/* Images: Degradation & Signals */}
            <div className="space-y-8 mt-12">
                <div className="w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper4.png`} 
                    alt="Bearing Health Degradation Over Time"
                    className="w-full h-auto"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2) contrast(1.1)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 1. Bearing Health Degradation (RMS)</span>
                    </div>
                </div>
                <div className="w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper5.png`} 
                    alt="Healthy vs Critical Failure Signals"
                    className="w-full h-auto"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1) contrast(1.2)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 2. Time-Domain Signal Analysis</span>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Section 2: Methodology */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 fade-up mb-24 border-t border-white/10 pt-24">
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl text-white tracking-tight sticky top-24">Methodology</h3>
          </div>
          <div className="md:col-span-8 font-mono text-gray-400 text-sm leading-relaxed space-y-6">
            <p>
              To tackle the computational overhead, this paper proposed replacing the demanding FFT analyses with highly discriminative, 
              lightweight time-domain statistical metrics. Feature engineering identified <strong>RMS, Kurtosis, and Maximum Amplitude</strong> as the most effective indicators of mechanical degradation over time.
            </p>

            <div className="my-12 w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper6.png`} 
                alt="Feature Importance Analysis"
                className="w-full h-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 3. Feature Importance (Random Forest)</span>
                </div>
            </div>

            <ul className="list-disc pl-5 space-y-3 text-white mb-12">
              <li><span className="text-brand-cyan">Algorithm Evaluation:</span> A comparative study was conducted between Random Forest, Support Vector Machines (SVM), and k-Nearest Neighbors (k-NN) using the IMS Bearing dataset running under constant 2000 RPM load.</li>
              <li><span className="text-brand-cyan">Hyperparameter Tuning:</span> Grid Search was employed to prevent overfitting. We found that a Random Forest with an optimal depth of 5 and 100 estimators provided maximum accuracy while keeping memory footprint extremely low.</li>
            </ul>

            <div className="my-12 w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper7.png`} 
                alt="Hyperparameter Optimization Grid Search"
                className="w-full h-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1) contrast(1.1)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 4. Grid Search Accuracy Heatmap</span>
                </div>
            </div>
            
            <p>
              <span className="text-white">Edge Deployment Theory:</span> Designed a theoretical FreeRTOS firmware architecture for the ESP32-S3 that leverages dual-core (Xtensa LX7) task parallelism to handle high-frequency ADC sampling (Core 0) and predictive inference (Core 1) simultaneously.
            </p>
          </div>
        </section>

        {/* Section 3: Results */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 fade-up border-t border-white/10 pt-24">
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl text-white tracking-tight sticky top-24">Results & Impact</h3>
          </div>
          <div className="md:col-span-8 font-mono text-gray-400 text-sm leading-relaxed space-y-6">
            <p>
              The optimized <strong>Random Forest model achieved 99.85% accuracy</strong> on unseen test blocks, notably producing <strong>zero false positives</strong>—a critical requirement for autonomous shutdown systems to prevent unnecessary factory halts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper1.png`} 
                    alt="Algorithm Comparison"
                    className="w-full h-auto"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 5. Algorithm Comparison</span>
                    </div>
                </div>
                <div className="w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper3.png`} 
                    alt="Confusion Matrix"
                    className="w-full h-auto"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 6. Confusion Matrix</span>
                    </div>
                </div>
            </div>

            <p>
              Furthermore, robustness analysis proved the system maintained &gt;90% accuracy even when injected with severe Gaussian noise typical of harsh industrial environments.
            </p>

            <div className="my-12 w-full bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper2.png`} 
                alt="Model Robustness vs Signal Noise"
                className="w-full h-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-500 text-[10px] uppercase tracking-widest">Fig 7. Robustness Analysis</span>
                </div>
            </div>

            <p>
              Most importantly, the theoretical energy consumption model mathematically demonstrated that extracting features and running the Random Forest inference locally on the Edge reduces data transmission requirements dramatically. Compared to traditional architectures that stream raw float data to the Cloud via Wi-Fi, <strong>Edge AI offloading offers a 98.4% reduction in energy consumption</strong>.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-12 text-center">
        <h2 className="font-display text-3xl text-white mb-6">Want to see the data?</h2>
        <a href="https://github.com/Alesso-24" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-mono text-[11px] uppercase tracking-widest hover:bg-gray-300 transition-colors">
            Visit GitHub Repository
        </a>
      </footer>

    </div>
  );
};

export default FaultDetection;
