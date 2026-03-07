import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Awwwards style text reveal on scroll
    const letters = textRef.current.children;
    
    gsap.fromTo(letters, 
      { opacity: 0.2, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, []);

  // Split text into lines for animation
  const text = "As a Mechatronics Engineering student at Ibero Puebla, I thrive at the intersection of mechanical design, electronic control, and software architecture. I build systems that move, think, and solve real-world problems.";
  const words = text.split(" ");

  return (
    <section id="about" ref={triggerRef} className="py-32 px-4 md:px-8 bg-brand-dark min-h-screen flex items-center border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 w-full">
        
        {/* Left column info */}
        <div className="md:w-1/4 flex flex-col justify-start">
            <h2 className="font-mono text-[10px] text-gray-500 tracking-[0.2em] mb-12 uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                Intro
            </h2>
            
            <div className="space-y-12">
                <div>
                    <h3 className="text-white text-sm mb-2 font-mono uppercase tracking-widest border-b border-white/10 pb-2 inline-block">What I do</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-mono mt-4">
                        I operate and deliver advanced <span className="text-white">Mechatronics Projects</span>.
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm leading-relaxed font-mono">
                        Hardware • Software<br/>
                        Embedded Systems<br/>
                        IoT Architecture
                    </p>
                </div>
            </div>
        </div>

        {/* Right column large text */}
        <div className="md:w-3/4">
            <h3 ref={textRef} className="text-2xl md:text-5xl lg:text-[4rem] font-display font-medium leading-[1.1] tracking-tight text-white flex flex-wrap gap-x-3 gap-y-2">
                {words.map((word, i) => (
                    <span key={i} className="inline-block relative">
                        {word}
                    </span>
                ))}
            </h3>
            
            <div className="mt-20 flex flex-wrap gap-3">
                {['Robotics', 'C++', 'React', 'Three.js', 'Arduino', 'Python', 'CAD'].map((skill, i) => (
                    <span key={i} className="px-4 py-2 font-mono text-[11px] uppercase tracking-widest border border-white/10 text-gray-400 hover:text-white transition-colors duration-300">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
