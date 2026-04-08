/**
 * @file About.jsx
 * @description "About Me" section — presented as an information-dense Bento Grid layout.
 *
 * Design:
 *  - Inspired by modern SaaS Bento layouts (e.g., Linear, Vercel dashboards).
 *  - Uses CSS Grid with `glass-panel` utility (backdrop-blur + border + shadow) for each cell.
 *  - Background glow is a CSS `radial-gradient` (NOT `filter: blur`) to prevent GPU paint storms.
 *
 * Content:
 *  - Bio, education, key skills, tools, languages, and a "Currently Working On" panel.
 *
 * Animation:
 *  - GSAP ScrollTrigger batch reveals each `.bento-item` with a staggered y-translate + opacity
 *    as the section enters the viewport. Trigger resets on leave for re-play on scroll-up.
 */
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
  const text = "I am a Mechatronics Engineering student with a strong interest in solving problems through hardware and software integration. I enjoy working on projects involving robotics, C/C++ and Python programming, and applying machine learning for data analysis. When I'm not coding or building circuits, you can find me studying German, playing the guitar, or discovering new places to eat.";
  const words = text.split(" ");

  return (
    <section id="about" ref={triggerRef} className="py-32 px-4 md:px-8 bg-brand-dark min-h-screen flex items-center relative overflow-hidden">
      {/* Background glow - optimized for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-16">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-white tracking-tight">
                Profile<span className="text-white/30">.</span>
            </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* Main Intro Panel */}
            <div className="col-span-1 lg:col-span-2 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <h3 className="text-brand-primary text-xs mb-8 font-sans uppercase tracking-[0.2em] opacity-50">About Me</h3>
                <div ref={textRef} className="text-2xl md:text-3xl font-display font-light leading-[1.4] text-white flex flex-wrap gap-x-2 gap-y-1">
                    {words.map((word, i) => (
                        <span key={i} className="inline-block relative">
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {/* Side Panel: Focus Areas */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors duration-500">
                <div>
                   <h3 className="text-brand-primary text-xs mb-8 font-sans uppercase tracking-[0.2em] opacity-50">Focus Areas</h3>
                   <ul className="space-y-4 font-sans font-light text-[15px] text-[#a3a3a3]">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span> Intelligent Systems</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span> Hardware Integration</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span> Machine Learning</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span> Control Systems</li>
                   </ul>
                </div>
                <div className="pt-8 mt-8 border-t border-white/5">
                    <p className="font-sans font-light text-xs uppercase tracking-widest text-[#a3a3a3]/60">Currently available for opportunities</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="col-span-1 lg:col-span-3 glass-panel p-8 md:p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 hover:border-white/20 transition-colors duration-500">
                <div className="w-full">
                    <h3 className="text-brand-primary text-xs mb-8 font-sans uppercase tracking-[0.2em] opacity-50">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Robotics', 'C/C++', 'Python', 'Machine Learning', 'ESP32', 'Data Analysis', 'React', 'TailwindCSS'].map((skill, i) => (
                            <span key={i} className="px-4 py-2 font-sans font-medium text-xs bg-white/[0.03] border border-white/5 rounded-full text-[#a3a3a3] hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
