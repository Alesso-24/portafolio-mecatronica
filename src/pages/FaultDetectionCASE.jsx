/**
 * @file FaultDetectionCASE.jsx
 * @route /project/fault-detection-case
 * @description Detail page for the IEEE CASE 2026 paper:
 *   "Edge AI Decision Framework: Quantifying the Sensitivity-Latency Trade-off"
 *
 * Content summary:
 *  - Extends the BDAI paper: deploys the Random Forest on ESP32-S3 under FreeRTOS.
 *  - Introduces the concept of Sensitivity-Latency trade-off for industrial edge inference.
 *  - Includes latency benchmarks, confusion matrices, and architecture diagrams.
 *
 * Structure mirrors FaultDetection.jsx — academic article format with alternating
 * text + figure grid columns for readability and visual rhythm.
 *
 * ⚠️  Does NOT re-initialize Lenis — the global instance in App.jsx handles scroll.
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroDiagramSVG = () => (
    <svg viewBox="0 0 1000 400" className="w-full h-auto drop-shadow-2xl font-sans" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="grad-cyan" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00d8ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#005f73" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4361ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3f37c9" stopOpacity="0.3" />
            </linearGradient>
        </defs>
        <rect width="1000" height="400" fill="url(#grid)" />
        <rect width="1000" height="400" fill="rgba(0,0,0,0.5)" />

        {/* Nodes */}
        {/* 1. Vibration Sensor */}
        <g transform="translate(50, 150)">
            <rect width="140" height="80" rx="12" fill="#121212" stroke="#555" strokeWidth="2" />
            <circle cx="70" cy="26" r="10" fill="#adb5bd" />
            <path d="M 30 46 Q 50 16 70 46 T 110 46" stroke="#adb5bd" strokeWidth="2" fill="none" />
            <text x="70" y="72" fill="#adb5bd" fontSize="12" textAnchor="middle" fontWeight="bold">Vibration Sensor</text>
        </g>
        
        {/* Arrow 1 */}
        <path d="M 190 190 L 250 190" stroke="#00d8ff" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* 2. ESP32 Microcontroller Box */}
        <g transform="translate(260, 40)">
            <rect width="520" height="300" rx="16" fill="rgba(255,255,255,0.02)" stroke="#333" strokeWidth="2" strokeDasharray="6 6" />
            <text x="260" y="30" fill="#666" fontSize="14" textAnchor="middle" fontWeight="bold" letterSpacing="2">ESP32 EDGE AI ARCHITECTURE</text>
        </g>

        {/* 2.1 Feature Extraction */}
        <g transform="translate(290, 150)">
            <rect width="160" height="80" rx="8" fill="url(#grad-blue)" stroke="#4361ee" strokeWidth="2" />
            <text x="80" y="35" fill="white" fontSize="13" textAnchor="middle" fontWeight="bold">Statistical Features</text>
            <text x="80" y="55" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">RMS, Kurtosis, Peak</text>
        </g>

        {/* Arrow 2 */}
        <path d="M 450 190 L 510 190" stroke="#00d8ff" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* 2.2 Adaptive Loop Block */}
        <g transform="translate(520, 110)">
            <rect width="230" height="160" rx="12" fill="url(#grad-cyan)" stroke="#00d8ff" strokeWidth="2" />
            <text x="115" y="30" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">Adaptive Inference Loop</text>
            <text x="115" y="50" fill="#121212" fontSize="10" textAnchor="middle" fontWeight="bold" letterSpacing="1">FDR STAGE TRIGGER</text>

            {/* Random Forest Button */}
            <g transform="translate(30, 70)">
                <rect width="170" height="30" rx="4" fill="rgba(0,0,0,0.6)" stroke="#f72585" strokeWidth="1" />
                <text x="85" y="20" fill="#f72585" fontSize="11" textAnchor="middle" fontWeight="bold">Random Forest (Deep)</text>
            </g>
            
            {/* Logistic Regression Button */}
            <g transform="translate(30, 110)">
                <rect width="170" height="30" rx="4" fill="rgba(0,0,0,0.6)" stroke="#4cc9f0" strokeWidth="1" />
                <text x="85" y="20" fill="#4cc9f0" fontSize="11" textAnchor="middle" fontWeight="bold">Log. Regression (Fast)</text>
            </g>
        </g>

        {/* Arrow 3 */}
        <path d="M 750 190 L 810 190" stroke="#00d8ff" strokeWidth="3" markerEnd="url(#arrow)" />

        {/* 3. Output Stage */}
        <g transform="translate(820, 80)">
            <rect width="140" height="220" rx="12" fill="#121212" stroke="#444" strokeWidth="2" />
            <text x="70" y="30" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">Diagnostics</text>
            
            <circle cx="20" cy="70" r="6" fill="#4ade80" />
            <text x="35" y="74" fill="#4ade80" fontSize="13" fontWeight="bold">Healthy</text>
            
            <circle cx="20" cy="120" r="6" fill="#facc15" />
            <text x="35" y="124" fill="#facc15" fontSize="13" fontWeight="bold">Incipient</text>

            <circle cx="20" cy="170" r="6" fill="#ef4444" />
            <text x="35" y="174" fill="#ef4444" fontSize="13" fontWeight="bold">Advanced</text>
        </g>

        {/* Global Arrow Def */}
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#00d8ff" />
            </marker>
        </defs>
    </svg>
);

const FDRGraphSVG = () => (
    <svg viewBox="0 0 600 300" className="w-full h-auto drop-shadow-lg font-sans" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="300" fill="#0a0a0a" rx="12" />
        {/* Background Zones */}
        <rect x="50" y="20" width="300" height="240" fill="rgba(74, 222, 128, 0.05)" />
        <rect x="350" y="20" width="100" height="240" fill="rgba(250, 204, 21, 0.05)" />
        <rect x="450" y="20" width="120" height="240" fill="rgba(239, 68, 68, 0.05)" />

        {/* Axes */}
        <g stroke="#333" strokeWidth="2">
            <line x1="50" y1="260" x2="570" y2="260" />
            <line x1="50" y1="20" x2="50" y2="260" />
        </g>
        <text x="300" y="290" fill="#888" fontSize="12" textAnchor="middle" fontWeight="bold">Lifetime Cycles</text>
        <text x="20" y="140" fill="#888" fontSize="12" textAnchor="middle" fontWeight="bold" transform="rotate(-90 20 140)">RMS Value</text>

        {/* Data Path */}
        <path d="M 50 220 
                 Q 100 230 150 225 
                 T 250 215 
                 T 350 200 
                 Q 380 180 400 150 
                 T 450 100 
                 Q 480 60 520 40 
                 T 570 30" 
              stroke="#00d8ff" strokeWidth="3" fill="none" />
        
        {/* Noise overlay path over the smooth path for realism */}
        <path d="M 50 220 L 70 215 L 90 230 L 110 220 L 130 225 L 150 210 L 170 225 L 190 215 L 210 225 L 230 210 L 250 220
                 L 270 210 L 290 225 L 310 210 L 330 220 L 350 190 L 370 185 L 390 160 L 410 165 L 430 130 L 450 110
                 L 470 90 L 490 105 L 510 60 L 530 80 L 550 40 L 570 50" 
              stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

        {/* Zone Labels */}
        <text x="200" y="40" fill="#4ade80" fontSize="12" textAnchor="middle" fontWeight="bold">Healthy Zone (RF Active)</text>
        <text x="400" y="40" fill="#facc15" fontSize="12" textAnchor="middle" fontWeight="bold">Incipient Warning</text>
        <text x="510" y="40" fill="#ef4444" fontSize="12" textAnchor="middle" fontWeight="bold">Advanced Fault (LR Active)</text>

        {/* Threshold Line */}
        <line x1="50" y1="200" x2="570" y2="200" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="560" y="195" fill="#facc15" fontSize="10" textAnchor="end">FDR Stage Shift Threshold</text>
    </svg>
);

const LatencyBarChartSVG = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-lg font-sans" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#0a0a0a" rx="12" />
        
        {/* Y Axis Grid */}
        <g stroke="#222" strokeWidth="1" strokeDasharray="5 5">
            <line x1="50" y1="50" x2="350" y2="50" />
            <line x1="50" y1="110" x2="350" y2="110" />
            <line x1="50" y1="170" x2="350" y2="170" />
            <line x1="50" y1="230" x2="350" y2="230" />
        </g>
        
        {/* Y Axis Text */}
        <text x="20" y="150" fill="#888" fontSize="12" textAnchor="middle" fontWeight="bold" transform="rotate(-90 20 150)">Clock Cycles (ESP32)</text>

        {/* Random Forest Bar */}
        <rect x="90" y="60" width="80" height="170" fill="url(#rf-grad)" rx="6" />
        <text x="130" y="45" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">5,592</text>
        <text x="130" y="145" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle" transform="rotate(-90 130 145)" letterSpacing="1">Random Forest</text>

        {/* Logistic Regression Bar */}
        <rect x="230" y="215" width="80" height="15" fill="url(#lr-grad)" rx="4" />
        <text x="270" y="195" fill="#00d8ff" fontSize="16" textAnchor="middle" fontWeight="bold">44</text>
        <text x="270" y="160" fill="#00d8ff" fontSize="10" textAnchor="middle" transform="rotate(-90 270 160)" fontWeight="bold" letterSpacing="1">Log. Reg.</text>

        {/* Ground Line */}
        <line x1="50" y1="230" x2="350" y2="230" stroke="#555" strokeWidth="2" />

        <defs>
            <linearGradient id="rf-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4361ee" />
                <stop offset="100%" stopColor="#3f37c9" />
            </linearGradient>
            <linearGradient id="lr-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00d8ff" />
                <stop offset="100%" stopColor="#0077b6" />
            </linearGradient>
        </defs>
    </svg>
);


const FaultDetectionCASE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-[#e5e5e5] font-sans">

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="fade-up flex justify-between items-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-white font-sans uppercase text-[10px] tracking-[0.2em] hover:text-white/60 transition-colors"
          >
              <span className="bg-white/10 p-2 rounded-full rotate-180">→</span> Regresar al Inicio
          </Link>
          <Link 
            to="/project/fault-detection" 
            className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 text-white font-sans uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-white/10 transition-colors"
          >
              Ver Proyecto Base (BDAI) <span className="text-lg leading-none">↗</span>
          </Link>
        </div>

        <div className="fade-up">
          <span className="font-sans font-light text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6 block">Publicación Científica (EDGE AI)</span>
          
          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-12">
            Edge AI Decision Framework: Quantifying the Sensitivity-Latency Trade-off in Industrial Bearing Predictive Maintenance.
          </h1>
        </div>

        {/* Project Meta - Academic Format */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-y border-white/10 py-8 fade-up">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Autores</h4>
            <div className="font-mono text-[11px] text-gray-300 leading-relaxed font-semibold space-y-3">
              <div>
                <span className="text-white">Jordi Alessandro Reyes Martinez</span><br/>
                <span className="text-gray-500 font-normal">Dept. of Mechatronics Engineering, Universidad Iberoamericana Puebla.</span>
              </div>
              <div>
                <span className="text-white">Karime Farias Yabur</span><br/>
                <span className="text-gray-500 font-normal">Nanotechnology Engineering, ITESM.</span>
              </div>
              <div>
                <span className="text-white">Fannor Antonio Rodriguez de Leon</span><br/>
                <span className="text-gray-500 font-normal">Nanotechnology Engineering, ITESM.</span>
              </div>
              <div>
                <span className="text-white">Claudia Isaret Mendez Rosas</span><br/>
                <span className="text-gray-500 font-normal">B.S. in Mechatronics Engineering, ITESM.</span>
              </div>
              <div>
                <span className="text-white">Javier Osorio Figueroa</span><br/>
                <span className="text-gray-500 font-normal">Dept. of Mechatronics Engineering, Universidad Iberoamericana Puebla.</span>
              </div>
              <div>
                <span className="text-white">Oliver Ochoa Garcia</span><br/>
                <span className="text-gray-500 font-normal">Dept. of Mechatronics Engineering, Universidad Iberoamericana Puebla.</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Conferencia</h4>
            <p className="font-mono text-[12px] text-gray-300 italic">IEEE International Conference on Automation Science and Engineering (CASE)</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Presentación</h4>
            <p className="font-mono text-[12px] text-gray-300">Del 17 al 21 de agosto de 2026<br/>Shenyang, China.</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Estado</h4>
            <p className="font-mono text-[11px] px-3 py-1 bg-[#ef4444]/10 text-[#ef4444] inline-block rounded-full border border-[#ef4444]/20">Under Review</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 max-w-6xl mx-auto pb-32">
        
        {/* Abstract Box */}
        <section className="fade-up mb-24 w-full md:w-10/12 mx-auto">
            <div className="bg-white/5 border-l-4 border-brand-cyan p-8 md:p-12 rounded-r-lg shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <span className="font-display text-8xl text-white">#</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-wider relative z-10">Resumen General</h3>
                <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    Este trabajo representa una evolución significativa de nuestra investigación previa. Pasamos del análisis teórico a la validación física implementando un esquema de Edge AI adaptativo en un microcontrolador ESP32 real. El sistema propuesto no solo detecta fallas, sino que distingue entre etapas "incipientes" y "avanzadas" de degradación utilizando un marco de Failure-to-Defect Ratio (FDR). Logramos un benchmarking de latencia contando ciclos de CPU reales, demostrando que un clasificador de Regresión Logística optimizado puede ejecutar la inferencia en hardware en solo 184 nanosegundos (0.184 µs), ideal para sistemas críticos en tiempo real.
                </p>
            </div>
        </section>

        {/* Hero Image (Architecture Diagram) */}
        <section className="fade-up mb-24">
            <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-[#050505] border border-white/5">
                <HeroDiagramSVG />
                <div className="p-5 bg-white/5 border-t border-white/5">
                    <p className="font-mono text-gray-400 text-[11px] text-center">
                        <strong className="text-white">Conceptual Diagram.</strong> Arquitectura de despliegue propuesta: Bucle de inferencia adaptativo en ESP32 para detección multietapa de fallas.
                    </p>
                </div>
            </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

        {/* Key Technical Points */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
                <h3 className="font-display text-3xl text-white tracking-tight mb-4">Puntos Clave Técnicos</h3>
            </div>
            <div className="md:col-span-8 font-mono text-gray-400 text-sm leading-relaxed text-justify space-y-6">
                <ul className="list-none space-y-6">
                    <li className="flex gap-4">
                        <span className="text-white text-xl">⚡</span>
                        <div>
                            <strong className="text-white block mb-1">Validación en Hardware Real</strong>
                            A diferencia de simulaciones previas, este modelo fue desplegado y evaluado en un ESP32 utilizando la biblioteca <i>EloquentTinyML</i>.
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-white text-xl">📊</span>
                        <div>
                            <strong className="text-white block mb-1">Detección de Etapas de Falla</strong>
                            Implementación de un método basado en FDR y características estadísticas (RMS, Curtosis, Peak) para segmentar el estado del rodamiento en Healthy (Sano), Incipient (Incipiente) y Advanced (Avanzado).
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-white text-xl">⏱️</span>
                        <div>
                            <strong className="text-white block mb-1">Medición de Latencia en Ciclos de CPU</strong>
                            Se midió el tiempo de inferencia exacto dentro del microcontrolador. Un Random Forest ligero toma 23.3 µs (5,592 ciclos de CPU) por inferencia, mientras que la Regresión Logística optimizada requiere solo 184 ns (44 ciclos), permitiendo un monitoreo ultra-eficiente en tiempo real.
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-white text-xl">🔄</span>
                        <div>
                            <strong className="text-white block mb-1">Cascading Model Strategy</strong>
                            Proponemos un esquema adaptativo donde un modelo pesado (Random Forest) opera en estado sano, y cambia a un modelo ultra-ligero (Regresión Logística) una vez detectada la falla para maximizar la eficiencia energética.
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </section>

        {/* Technical Integration 1: FDR */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Image logially flipped visually on desktop */}
            <div className="md:col-span-6 order-2 md:order-1">
                 <div className="w-full rounded-xl shadow-xl overflow-hidden border border-white/5 bg-white/5">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/case_fdr.png`} 
                        alt="FDR Condition Monitoring Trend"
                        className="w-full h-auto"
                        style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <p className="font-mono text-gray-400 text-[10px] leading-tight">
                            <strong className="text-white">Fig 1.</strong> Evolución de características estadísticas y segmentación de etapas de degradación basadas en el marco de FDR.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-6 space-y-6 order-1 md:order-2">
                <h3 className="font-display text-2xl text-white tracking-tight mb-4">Transición de Etapas Cognitivas</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    A través de la métrica Failure-to-Defect Ratio (FDR) podemos distinguir matemáticamente cuándo un defecto es menor (Incipiente) versus cuando presenta degradación mecánica considerable (Avanzado). 
                </p>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    Al cruzar este umbral, el sistema dinámicamente detiene la ejecución del "Random Forest" (consumidor moderado de batería), y comienza a ejecutar exclusivamente "Logistic Regression" para continuar rastreando el fallo avanzado con una fracción muy inferior de gasto energético.
                </p>
            </div>
          </div>
        </section>

        {/* Technical Integration 2: Latency Benchmark */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6">
                <h3 className="font-display text-2xl text-white tracking-tight mb-4">Hardware Speedup en Producción</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    Demostrar la mejora de software en PC es relativamente trivial con métodos de emulación. En este trabajo iteramos midiendo el uso directo del reloj CPU en la arquitectura real Xtensa LX6 (ESP32).
                </p>
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg mt-4">
                    <p className="font-mono text-gray-300 text-xs leading-relaxed">
                        Evadimos herramientas como <code className="bg-white/10 px-1 rounded">micros()</code> que inyectan overhead en C++, y leímos directamente los registros nativos del hardware cycle-counter para asegurar precisión nanométrica, validando matemáticamente por qué la Regresión Logística representa el máximo exponente para IoT remoto alimentado pasivamente.
                    </p>
                </div>
            </div>
            <div className="md:col-span-6 flex flex-col gap-8">
                <div className="w-full rounded-xl shadow-xl overflow-hidden border border-white/5 bg-white/5">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/case_latency.png`} 
                        alt="Inference Latency Setup"
                        className="w-full h-auto"
                        style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <p className="font-mono text-gray-400 text-[10px] leading-tight">
                            <strong className="text-white">Fig 2.</strong> Benchmarking de latencia en hardware: Regresión Logística logra una inferencia 126 veces más rápida (126x speedup) que Random Forest en el ESP32.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Technical Integration 3: Industrial Validation & PCA */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* PCA Image */}
            <div className="md:col-span-6">
                 <div className="w-full rounded-xl shadow-xl overflow-hidden border border-white/5 bg-white/5">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/case_pca.png`} 
                        alt="PCA Scatter Plots Incipient vs Advanced"
                        className="w-full h-auto"
                        style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                    />
                    <div className="p-4 border-t border-white/5 text-center">
                        <p className="font-mono text-gray-400 text-[10px] leading-tight">
                            <strong className="text-white">Fig 3.</strong> Análisis PCA ilustrando la progresión de la falla de estado Incipiente a Avanzado.
                        </p>
                    </div>
                </div>
            </div>
            {/* Text & Edge Insights */}
            <div className="md:col-span-6 space-y-6">
                <h3 className="font-display text-2xl text-white tracking-tight mb-4">Validación Industrial y Fiabilidad</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    El sistema se validó en un canal de monitoreo independiente (IMS Bearing 2) para garantizar el desempeño en condiciones operativas normales, manteniendo un registro de <strong>cero falsas alarmas</strong> y obteniendo una especificidad superior al 98%.
                </p>
                <div className="bg-white/[0.03] border border-white/10 p-5 rounded-lg mt-4">
                    <h4 className="text-white font-sans font-medium text-[11px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
                        Edge Insights: Problemas FPU en Hardware
                    </h4>
                    <p className="font-mono text-gray-300 text-xs leading-relaxed text-justify mt-3">
                        Durante las pruebas físicas, el modelo SVM fue descartado debido a errores de precisión catastróficos en la unidad de punto flotante (FPU) del ESP32, donde la pérdida de precisión de la instrucción <code className="bg-black/30 px-1 rounded text-white">expf()</code> invertía fronteras de decisión válidas. Esto subraya la urgencia crítica de <strong>validar benchmarks en el hardware final en lugar de limitarse a simulaciones analíticas</strong>.
                    </p>
                </div>
            </div>
          </div>
        </section>

      </main>

      {/* Call to Action */}
      <footer className="w-full border-t border-white/10 py-20 text-center bg-black/20">
        <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Status del Manuscrito</h2>
            <p className="font-mono text-gray-400 text-[11px] md:text-xs leading-relaxed uppercase tracking-wider mb-10">
                El trabajo está atravesando la fase de corrección de pares "Double-blind review". Los resultados de evaluación del comité científico se darán a conocer en mayo.
            </p>
            <button disabled className="inline-flex flex-col items-center gap-1 px-8 py-4 bg-gray-800 text-gray-400 font-mono text-[11px] uppercase tracking-widest border border-white/5 rounded-2xl cursor-not-allowed transition-colors shadow-inner w-full md:w-auto">
                <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg> Paper Status</span>
                <span className="text-[10px] text-gray-500 font-sans tracking-normal capitalize">Under Review (Decision expected May 17th, 2026)</span>
            </button>
            <div className="mt-8">
                <Link to="/project/fault-detection" className="font-sans font-light text-[10px] text-white/50 uppercase tracking-[0.2em] hover:underline hover:text-white/80 transition-colors">
                    ← Ver Investigación Previa (BDAI)
                </Link>
            </div>
        </div>
      </footer>

    </div>
  );
};

export default FaultDetectionCASE;
