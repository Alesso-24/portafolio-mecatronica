import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith('/project');

  useEffect(() => {
    // Awwwards style navbar reveal on load
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150); // Delay allows Home page to render before scrolling
    } else {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav ref={navRef} className="w-[95%] max-w-3xl glass-panel rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300 pointer-events-auto">
        <div className="flex items-center gap-6 text-brand-primary">
            <Link to="/" className="font-display font-medium text-lg tracking-wide hover:text-white transition-colors duration-300">
              ALESSANDRO.
            </Link>
            <a href="https://github.com/Alesso-24" target="_blank" rel="noopener noreferrer" className="hidden sm:block font-sans text-[10px] uppercase tracking-widest text-brand-primary/60 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              ★ GitHub
            </a>
            {isProjectPage && (
              <Link to="/" className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-brand-primary/60 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                ← Back to Work
              </Link>
            )}
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.15em] text-gray-400">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors cursor-pointer duration-300">About</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors cursor-pointer duration-300">Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors cursor-pointer duration-300">Contact</a>
        </div>

        <div className="md:hidden flex items-center gap-4 text-brand-primary">
            {isProjectPage && (
              <Link to="/" className="sm:hidden font-mono text-[10px] uppercase tracking-widest text-brand-primary/60 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                ← Back
              </Link>
            )}
            <button aria-label="Open Menu" className="hover:text-white transition-colors">
              <Menu size={20} strokeWidth={1.5} />
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
