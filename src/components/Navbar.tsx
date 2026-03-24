'use client';

import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[50] flex justify-center p-2 md:p-4"
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
        <div 
          className="flex items-center gap-2 cursor-pointer shrink-0" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-7 h-7 md:w-8 md:h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.5)] text-sm md:text-base">
            AB
          </div>
          <span className="hidden sm:block font-mono text-[10px] md:text-xs tracking-tighter text-gray-300">
            ANDRES_BRICEÑO.EXE
          </span>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-8 text-[10px] md:text-[11px] uppercase tracking-widest font-medium text-gray-400">
          {['Projects', 'Skills', 'Experience'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="text-[9px] md:text-[10px] font-bold px-4 md:px-6 py-2 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all uppercase tracking-widest whitespace-nowrap"
        >
          LET'S TALK
        </a>
      </div>
    </motion.nav>
  );
};