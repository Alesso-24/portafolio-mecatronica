import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-brand-dark min-h-screen flex flex-col justify-between relative overflow-hidden border-t border-white/5">
      
      {/* Background glow (muted for minimalist look) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        
        <h2 className="font-display font-medium text-[12vw] leading-none tracking-tight text-white text-center transition-all duration-300 mb-12">
            Let's Talk.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-4xl mx-auto w-full z-10">
            <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                    Contact Info
                </h3>
                <p className="text-gray-400 mb-8 max-w-xs font-mono text-[13px] leading-relaxed">Ready to build the future of mechatronics together? Reach out to me.</p>
                <div className="space-y-4 text-lg">
                    <a href="mailto:jordi@iberopuebla.mx" className="block text-white hover:opacity-70 transition-opacity">jordi@iberopuebla.mx</a>
                    <p className="text-gray-500">Puebla, Mexico</p>
                </div>
            </div>

            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-mono text-[11px] tracking-widest uppercase placeholder-gray-600 outline-none focus:border-white transition-colors"
                />
                <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-mono text-[11px] tracking-widest uppercase placeholder-gray-600 outline-none focus:border-white transition-colors"
                />
                <textarea 
                    placeholder="MESSAGE" 
                    rows="3"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-mono text-[11px] tracking-widest uppercase placeholder-gray-600 outline-none focus:border-white transition-colors resize-none"
                ></textarea>
                
                <button type="submit" className="self-end mt-4 px-8 py-4 bg-white text-black font-mono text-[11px] tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300">
                    Send Message
                </button>
            </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-32 flex justify-between items-center font-mono text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/10 pt-8 z-10">
        <p>© 2026 Jordi All rights reserved.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
