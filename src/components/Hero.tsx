import { motion } from 'framer-motion';
import { Trophy, Code2, Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <div className="flex justify-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
            <Code2 size={14} /> Full Stack Engineer
          </span>
          <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
            <Trophy size={14} /> 5x National Champion
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent italic tracking-tighter">
          Andres Briceño
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          I build high-performance web architectures and immersive digital experiences. 
          Bridging the gap between <span className="text-white font-medium">competitive leadership</span> and <span className="text-white font-medium">software engineering</span>.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 group"
          >
            View Projects 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <motion.a 
            href="/Andres_Briceno_FullStack_Engineer.pdf"
            target="_blank"
            download="Andres_Briceno_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <Download size={18} /> Download CV
          </motion.a>
        </div>
        
      </motion.div>
    </section>
  );
};