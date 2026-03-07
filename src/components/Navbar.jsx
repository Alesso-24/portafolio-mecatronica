import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Awwwards style navbar reveal on load
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <div className="font-display font-bold text-xl tracking-tight">
          JORDI.
        </div>
        
        <div className="hidden md:flex gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
