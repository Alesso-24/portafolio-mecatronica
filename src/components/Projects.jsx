import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: "Self-Balancing Platform with Computer Vision",
        category: "Robotics & Control Systems",
        tech: "ESP32 • Python • C/C++ • Servomotors • PID Control",
        // Using Vite's import.meta.env.BASE_URL to handle GitHub Pages subpaths
        image: `${import.meta.env.BASE_URL}images/project1.png`,
        link: "/project/self-balancing-platform"
    },
    {
        id: 2,
        title: "Industrial Fault Detection via Machine Learning",
        category: "Data Science & Machine Learning",
        tech: "Python • Supervised Learning • NASA Datasets • LaTeX",
        image: `${import.meta.env.BASE_URL}images/project2.png`, // Using AI generated sci-fi cover
        link: "/project/fault-detection"
    },
    {
        id: 3,
        title: "Edge AI Fault Diagnosis Scheme for Bearing Detection",
        category: "Publicación Científica (IEEE CASE)",
        tech: "C/C++ • ESP32 • Random Forest • Hardware Latency",
        image: `${import.meta.env.BASE_URL}images/project2.png`, 
        link: "/project/fault-detection-case"
    }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Parallax effect on images
    const images = gsap.utils.toArray('.img-parallax');
    
    images.forEach(img => {
      gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentNode,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-4 md:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-20">
            <h2 className="font-display font-medium text-4xl md:text-7xl text-white tracking-tight leading-none">
                Selected<br/>Works<span className="text-brand-cyan">.</span>
            </h2>
            <p className="font-mono text-brand-cyan uppercase tracking-widest text-[11px] hidden md:block border border-white/20 px-3 py-1 rounded-full">
                (2025 - Present)
            </p>
        </div>

        <div className="flex flex-col gap-32">
            {projectsData.map((project, index) => {
                const Wrapper = project.link ? Link : 'div';
                return (
                <Wrapper to={project.link || "#"} key={project.id} className={`flex flex-col block ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group cursor-pointer`}>
                    
                    {/* Image Container with hidden overflow for parallax */}
                    <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg relative">
                        <div className="absolute inset-x-0 -inset-y-[15%] w-full h-[130%]">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="img-parallax w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/5 flex flex-col justify-center">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                            {project.category}
                        </span>
                        <h3 className="font-display font-medium text-3xl md:text-5xl text-white mb-6 tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                            {project.title}
                        </h3>
                        <div className="w-full h-[1px] bg-white/10 mb-6 group-hover:w-0 transition-all duration-500"></div>
                        <p className="font-mono text-[13px] text-gray-400 mb-10 max-w-sm uppercase tracking-wider">{project.tech}</p>
                        
                        <div className="flex items-center gap-4 text-white font-mono uppercase text-[11px] tracking-[0.2em] transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            View Project <span className="bg-white text-black p-2 rounded-full">→</span>
                        </div>
                    </div>

                </Wrapper>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
