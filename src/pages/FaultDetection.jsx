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
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-white font-mono uppercase text-[11px] tracking-[0.2em] mb-12 hover:text-brand-cyan transition-colors"
          >
              <span className="bg-white/10 p-2 rounded-full rotate-180">→</span> Regresar al Inicio
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-cyan mb-6 block">Publicación Científica</span>
          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-8">
            Comparative Evaluation of Lightweight Supervised Machine Learning Techniques for Industrial Rotating Machinery.
          </h1>
          <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mb-12">
            Este proyecto presenta un enfoque basado en datos para el mantenimiento predictivo en maquinaria rotativa industrial utilizando el dataset de rodamientos IMS de la NASA. Mediante el uso de características estadísticas en el dominio del tiempo, se desarrolló un modelo ligero que elimina la necesidad de cálculos complejos. El modelo Random Forest optimizado logró una precisión superior al 99%. Adicionalmente, se propone una arquitectura Edge AI para el microcontrolador ESP32 que estima una reducción del consumo de energía de transmisión en aproximadamente un 98% frente al procesamiento tradicional en la nube.
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-y border-white/10 py-8 fade-up mt-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Autores</h4>
            <div className="font-mono text-[13px] text-white leading-relaxed">
              Jordi Alessandro Reyes Martinez<br/>
              Karime Melissa Pastrana Monzon<br/>
              Javier Osorio Figueroa<br/>
              Oliver Ochoa Garcia
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Conferencia</h4>
            <p className="font-mono text-[13px] text-white">IEEE International Conference on Big Data and Artificial Intelligence (BDAI)</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Presentación</h4>
            <p className="font-mono text-[13px] text-white">Del 3 al 5 de julio de 2026<br/>Chongqing, China.</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Estado</h4>
            <p className="font-mono text-[13px] text-brand-cyan">Aceptado para publicación</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 max-w-5xl mx-auto pb-32">
        
        {/* Imagen Principal (Hero Image) */}
        <section className="fade-up mb-24">
            <div className="w-full bg-white/5 rounded-lg overflow-hidden border border-white/10 rounded-lg shadow-lg">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper1.png`} 
                alt="Algorithm Comparison"
                className="w-full h-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-400 text-[11px] uppercase tracking-widest">Comparativa de rendimiento: Random Forest supera a SVM y k-NN con una precisión del 99.85%.</span>
                </div>
            </div>
        </section>

        {/* Puntos Clave Técnicos */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 fade-up mb-24 border-t border-white/10 pt-24">
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl text-white tracking-tight sticky top-24">Puntos Clave Técnicos</h3>
          </div>
          <div className="md:col-span-8 font-mono text-gray-300 text-sm leading-relaxed space-y-6">
            <ul className="list-disc pl-5 space-y-6">
              <li><strong className="text-brand-cyan font-bold">Algoritmos Evaluados:</strong> Se realizó un estudio comparativo entre Random Forest, Support Vector Machines (SVM) y k-Nearest Neighbors (k-NN) para detectar fallas mecánicas antes de que ocurran.</li>
              <li><strong className="text-brand-cyan font-bold">Alta Precisión:</strong> El clasificador Random Forest alcanzó una precisión del 99.85% en el conjunto de prueba.</li>
              <li><strong className="text-brand-cyan font-bold">Eficiencia Energética:</strong> La solución de Edge Computing estima un consumo de solo 0.99 mJ por inferencia, demostrando la viabilidad para nodos IoT alimentados por batería.</li>
              <li><strong className="text-brand-cyan font-bold">Robustez Comprobada:</strong> El modelo mantiene una precisión superior al 90% incluso al inyectar ruido sintético en las señales de vibración.</li>
            </ul>
          </div>
        </section>

        {/* Imágenes Técnicas */}
        <section className="grid grid-cols-1 gap-16 fade-up border-t border-white/10 pt-24">
           {/* Imagen Técnica 1 */}
           <div className="w-full bg-white/5 rounded-lg shadow-lg overflow-hidden border border-white/10 rounded-lg">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper5.png`} 
                alt="Análisis de vibración en el dominio del tiempo"
                className="w-full h-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1) contrast(1.2)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-400 text-[11px] uppercase tracking-widest">Análisis de vibración en el dominio del tiempo: Contraste entre un estado operativo saludable y una falla crítica.</span>
                </div>
            </div>

            {/* Imagen Técnica 2 */}
            <div className="w-full bg-white/5 rounded-lg shadow-lg overflow-hidden border border-white/10 rounded-lg">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper3.png`} 
                alt="Matriz de confusión"
                className="w-full h-auto md:w-3/4 mx-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-400 text-[11px] uppercase tracking-widest">Matriz de confusión del modelo optimizado, demostrando una fiabilidad excepcional sin falsos positivos ni negativos.</span>
                </div>
            </div>

            {/* Imagen Técnica 3 */}
            <div className="w-full bg-white/5 rounded-lg shadow-lg overflow-hidden border border-white/10 rounded-lg">
                <img 
                src={`${import.meta.env.BASE_URL}images/paper6.png`} 
                alt="Feature Importance Analysis"
                className="w-full h-auto w-full md:w-3/4 mx-auto"
                style={{ filter: 'invert(0.85) hue-rotate(180deg) brightness(1.2)' }}
                />
                <div className="p-4 border-t border-white/5 text-center">
                    <span className="font-mono text-gray-400 text-[11px] uppercase tracking-widest">Análisis de importancia: El valor RMS domina como la métrica más discriminativa para la detección de fallas.</span>
                </div>
            </div>
        </section>

      </main>

      {/* Call to Action */}
      <footer className="w-full border-t border-white/10 py-16 text-center">
        <button disabled className="inline-block px-8 py-4 bg-gray-800/50 text-gray-500 font-mono text-[11px] uppercase tracking-widest border border-white/10 rounded-full cursor-not-allowed transition-colors">
            Ver Paper Oficial (Disponible post-conferencia en julio)
        </button>
      </footer>

    </div>
  );
};

export default FaultDetection;
