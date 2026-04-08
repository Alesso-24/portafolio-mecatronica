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
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-gray-100 font-sans selection:bg-brand-cyan selection:text-black">

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="fade-up">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-white font-mono uppercase text-[11px] tracking-[0.2em] mb-12 hover:text-brand-cyan transition-colors"
          >
              <span className="bg-white/10 p-2 rounded-full rotate-180">→</span> Regresar al Inicio
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-cyan mb-6 block">Publicación Científica</span>
          
          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-12">
            Comparative Evaluation of Lightweight Supervised Machine Learning Techniques for Industrial Rotating Machinery.
          </h1>
        </div>

        {/* Project Meta - Academic Format */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-y border-white/10 py-8 fade-up">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Autores</h4>
            <div className="font-mono text-[12px] text-gray-300 leading-relaxed font-semibold">
              Jordi Alessandro Reyes Martinez¹<br/>
              Karime Melissa Pastrana Monzon¹<br/>
              Javier Osorio Figueroa¹<br/>
              Oliver Ochoa Garcia¹
            </div>
            <p className="font-mono text-[10px] text-gray-500 mt-2">¹ Universidad Iberoamericana Puebla</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Conferencia</h4>
            <p className="font-mono text-[12px] text-gray-300 italic">IEEE International Conference on Big Data and Artificial Intelligence (BDAI)</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Presentación</h4>
            <p className="font-mono text-[12px] text-gray-300">Del 3 al 5 de julio de 2026<br/>Chongqing, China.</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">Estado</h4>
            <p className="font-mono text-[11px] px-3 py-1 bg-brand-cyan/10 text-brand-cyan inline-block rounded-full border border-brand-cyan/20">Aceptado para publicación</p>
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
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-wider relative z-10">Abstract</h3>
                <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    Este proyecto presenta un enfoque basado en datos para el mantenimiento predictivo en maquinaria rotativa industrial utilizando el dataset de rodamientos IMS de la NASA. Mediante el uso de características estadísticas en el dominio del tiempo, se desarrolló un modelo ligero que elimina la necesidad de cálculos complejos como la Transformada Rápida de Fourier (FFT). El modelo Random Forest optimizado logró una precisión superior al 99.85%. Adicionalmente, se propone una arquitectura Edge AI estructurada sobre FreeRTOS para el microcontrolador ESP32-S3, la cual estima una reducción del consumo de energía de transmisión en aproximadamente un 98.4% frente al procesamiento tradicional en la nube (Cloud offloading) bajo simulaciones teóricas ideales.
                </p>
            </div>
        </section>

        {/* Hero Image (Algorithm Comparison) */}
        <section className="fade-up mb-24">
            <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper1.png`} 
                alt="Algorithm Comparison Hero"
                className="w-full h-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                />
                <div className="p-4 bg-white/5 border-t border-white/5">
                    <p className="font-mono text-gray-400 text-[11px] text-center">
                        <strong className="text-white">Fig. 1.</strong> Comparativa de rendimiento: Random Forest supera a SVM y k-NN con una precisión del 99.85%.
                    </p>
                </div>
            </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

        {/* 1. Contexto e Introducción */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6">
                <h3 className="font-display text-3xl text-white tracking-tight mb-4">I. Introducción y Contexto</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    La maquinaria rotativa funge como el actuador primario en sectores fundamentales como la energía eólica y el ensamblaje automotriz. Los rodamientos de elementos rodantes son propensos a sufrir degradación severa por fatiga y desalineación, representando casi el 40% de las fallas en motores de inducción.
                </p>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    Las estrategias tradicionales como el "Run-to-Failure" o mantenimientos preventivos guiados por calendario presentan serios desafíos operativos, provocando detenciones de planta imprevistas. Aunque la Industria 4.0 empuja el Mantenimiento Predictivo (PdM) con Deep Learning (DL), depender de GPUs y matemática compleja limita la viabilidad del monitoreo descentralizado por baterías.
                </p>
            </div>
            <div className="md:col-span-6">
                 {/* Imagen Técnica 1 */}
                <div className="w-full rounded-lg shadow-xl overflow-hidden border border-white/10 bg-white/5">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper5.png`} 
                    alt="Time-domain comparison"
                    className="w-full h-auto"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1) contrast(1.2)' }}
                    />
                    <div className="p-3 border-t border-white/5 text-center px-4">
                        <p className="font-mono text-gray-400 text-[10px] leading-tight">
                            <strong className="text-white">Fig. 2.</strong> Análisis de vibración en el dominio del tiempo: Contraste entre un estado operativo saludable y una falla crítica.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* 2. Metodología e Ingeniería de Características */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Image goes first on mobile, but text goes first logically. Let's flip order visually on desktop */}
            <div className="md:col-span-5 order-2 md:order-1">
                 {/* Imagen Técnica 3 */}
                 <div className="w-full rounded-lg shadow-xl overflow-hidden border border-white/10 bg-white/5">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper6.png`} 
                    alt="Feature Importance Analysis"
                    className="w-full h-auto"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                    />
                    <div className="p-3 border-t border-white/5 text-center px-4">
                        <p className="font-mono text-gray-400 text-[10px] leading-tight">
                            <strong className="text-white">Fig. 3.</strong> Análisis de importancia: El valor RMS domina como la métrica más discriminativa para la detección de fallas frente a variables como Skewness o Shape Factor.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-7 space-y-6 order-1 md:order-2">
                <h3 className="font-display text-3xl text-white tracking-tight mb-4">II. Ingeniería de Características</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    Para asegurar que el modelo fuese suficientemente ligero para un microcontrolador, se omitió deliberadamente el uso de la Transformada Rápida de Fourier (FFT), la cual requiere una complejidad logarítmica <code className="bg-white/10 px-1 rounded">O(N log N)</code>. En su lugar, el sistema evalúa de manera unidimensional la evolución estadística temporal de las vibraciones en complejidad <code className="bg-white/10 px-1 rounded">O(N)</code>.
                </p>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    Se calcularon métricas candidatas como el Factor de Forma, Crest Factor, Skewness (Asimetría) y Curtosis. Tras el análisis de Importancia de Variables (Gini impurity), se concluyó que el Root Mean Square (RMS) y la magnitud de máxima amplitud mantenían la mayor penalización sobre el clasificador, fungiendo como métricas ideales por su tendencia monotónica correlacionada directamente al desgaste físico progresivo.
                </p>
            </div>
          </div>
        </section>

        {/* 3. Resultados y Despliegue en Edge */}
        <section className="fade-up mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
                <h3 className="font-display text-3xl text-white tracking-tight mb-4">III. Resultados y Edge Computing</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed text-justify">
                    Previniendo el sobreajuste (overfitting), los hiperparámetros fueron entonados vía validación cruzada estructurada sobre ciclos temporales para aislar el "Data Leakage". El modelo SVM y k-NN resultaron competentes, pero el <strong>Random Forest (100 estimadores) dominó con una efectividad superior al 99.85%.</strong> A nivel analítico, reportar 0 falsos positivos fue el hito fundamental para validarlo como protocolo seguro de detención de emergencia sin parar la fábrica arbitrariamente.
                </p>
                <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-6 rounded-lg mt-6">
                    <h4 className="text-brand-cyan font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></div>
                        Relevancia de Energía Edge (ESP32)
                    </h4>
                    <p className="font-sans text-gray-300 text-sm leading-relaxed">
                        Este enfoque se extrapoló matemáticamente a una arquitectura conectada IoT (ESP32-S3 y sistema RTOS). Al inferir localmente las ramificaciones de los árboles en Hardware y usar MQTT para transmitir *exclusivamente* un payload de alarma, se estimó teóricamente que el dispositivo utilizará 0.99 mJ por ejecución. Esto denota un <strong>ahorro del 98.4% de energía</strong> respecto a forzar un streaming de todos los datos en crudo vía Wi-Fi hacia la Nube.
                    </p>
                </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-8">
                 {/* Imagen Técnica 2 (Confusion Matrix) */}
                <div className="w-full rounded-lg shadow-xl overflow-hidden border border-white/10 bg-white/5">
                    <img 
                    src={`${import.meta.env.BASE_URL}images/paper3.png`} 
                    alt="Confusion Matrix"
                    className="w-full h-auto transform scale-95"
                    style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1)' }}
                    />
                    <div className="p-3 border-t border-white/5 text-center px-4">
                        <p className="font-mono text-gray-400 text-[10px] leading-tight">
                            <strong className="text-white">Fig. 4.</strong> Matriz de confusión del modelo optimizado, demostrando absoluta fiabilidad sin falsos positivos incidentales ni negativos (False Acceptance Rate de 0%).
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

      </main>

      {/* Call to Action */}
      <footer className="w-full border-t border-white/10 py-20 text-center bg-black/20">
        <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Disponibilidad del Documento</h2>
            <p className="font-mono text-gray-400 text-[11px] md:text-xs leading-relaxed uppercase tracking-wider mb-10">
                El "Camera-Ready Script" finalizará su indexación editorial tras la conferencia. La descarga del PDF completo y anexos de datos estarán liberados al público a mediados de 2026 en el repositorio IEEE Xplore.
            </p>
            <button disabled className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-gray-500 font-mono text-[11px] uppercase tracking-widest border border-white/10 rounded-full cursor-not-allowed transition-colors shadow-inner">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Ver Paper Oficial en IEEE (Bloqueado)
            </button>
        </div>
      </footer>

    </div>
  );
};

export default FaultDetection;
