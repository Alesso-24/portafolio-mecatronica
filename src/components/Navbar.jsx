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
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        
        <div className="flex items-center gap-6">
            <Link to="/" className="font-display font-bold text-xl tracking-tight hover:opacity-70 transition-opacity">
              ALESSANDRO.
            </Link>
            {isProjectPage && (
              <Link to="/" className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-white border border-white/20 px-3 py-1.5 hover:bg-white hover:text-black transition-all">
                ← Back to Work
              </Link>
            )}
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors cursor-pointer">Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>

        <div className="md:hidden flex items-center gap-4">
            {isProjectPage && (
              <Link to="/" className="sm:hidden font-mono text-[10px] uppercase tracking-widest text-white border border-white/20 px-3 py-1.5 hover:bg-white hover:text-black transition-all">
                ← Back
              </Link>
            )}
            <button aria-label="Open Menu">
              <Menu size={24} />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
