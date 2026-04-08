import React from 'react';
import AnimatedGradientBackground from './ui/animated-gradient-background';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-brand-dark min-h-screen flex flex-col justify-between relative overflow-hidden border-t border-white/5">
      
      {/* Background dynamic glow */}
      <AnimatedGradientBackground />

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center py-20">
        
        <h2 className="font-display font-light text-[10vw] md:text-[8vw] leading-none tracking-tight text-white text-center transition-all duration-300 mb-16 opacity-90">
            Let's Talk<span className="text-white/20">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-10 max-w-5xl mx-auto w-full z-10">
            <div className="flex flex-col justify-center">
                <h3 className="font-sans font-medium text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                    Connection
                </h3>
                <p className="text-white/80 mb-10 max-w-sm font-sans font-light text-sm md:text-base leading-relaxed">
                    Ready to build the future of mechatronics and software together? Feel free to reach out.
                </p>
                <div className="space-y-6 text-lg font-display tracking-wide">
                    <div>
                        <a href="mailto:jordi.reyes.martinez@gmail.com" className="block text-white hover:text-white/60 transition-colors duration-300 text-xl md:text-2xl">
                            jordi.reyes.martinez@gmail.com
                        </a>
                        <p className="text-white/30 font-sans text-[10px] tracking-[0.1em] mt-2">* Please CC your email to jordi.reyes@iberopuebla.mx</p>
                    </div>
                    <p className="text-white/40 font-sans text-xs uppercase tracking-[0.2em]">Puebla, Mexico</p>
                </div>
            </div>

            <form className="flex flex-col gap-10 glass-panel p-8 md:p-12 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                    <input 
                        type="text" 
                        placeholder="NAME" 
                        className="w-full bg-transparent border-b border-white/10 pb-4 text-white font-sans text-sm tracking-widest placeholder-white/30 outline-none focus:border-white transition-colors"
                    />
                </div>
                <div className="relative group">
                    <input 
                        type="email" 
                        placeholder="EMAIL" 
                        className="w-full bg-transparent border-b border-white/10 pb-4 text-white font-sans text-sm tracking-widest placeholder-white/30 outline-none focus:border-white transition-colors"
                    />
                </div>
                <div className="relative group">
                    <textarea 
                        placeholder="MESSAGE" 
                        rows="4"
                        className="w-full bg-transparent border-b border-white/10 pb-4 text-white font-sans text-sm tracking-widest placeholder-white/30 outline-none focus:border-white transition-colors resize-none"
                    ></textarea>
                </div>
                
                <button type="submit" className="self-end mt-4 px-10 py-4 bg-white text-black font-sans text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-black hover:text-white hover:border hover:border-white/20 transition-all duration-300">
                    Send Message
                </button>
            </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-24 flex flex-col md:flex-row gap-6 justify-between items-center font-sans font-light text-[10px] text-white/40 uppercase tracking-[0.1em] border-t border-white/10 pt-10 z-10 pb-4">
        <p>© 2026 Alessandro Reyes. All rights reserved.</p>
        <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/alessandro-reyes-mtz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/Alesso-24" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
