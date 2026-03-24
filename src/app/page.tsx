'use client';

import { useState, useEffect, useMemo } from 'react';
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Experience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { motion } from 'framer-motion';
import { GraduationCap, Award, Mail } from 'lucide-react';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

const BackgroundStars = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stars = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  }, []);

  if (!isMounted) return <div className="fixed inset-0 z-[-1] bg-[#050505]" />;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full"
          style={{ left: star.x, top: star.y }}
          animate={{
            opacity: [0.05, 0.4, 0.05],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30">
      <BackgroundStars />
      <Navbar />

      <main className="flex flex-col relative z-10 pt-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="skills" className="py-12">
          <Skills />
        </section>

        <section id="projects" className="py-12">
          <ProjectGrid />
        </section>

        <section id="experience" className="py-12">
          <Experience />
        </section>

        <section className="py-12 px-4 border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 italic tracking-tight uppercase">
              <GraduationCap className="text-cyan-500" /> Education & Certifications
            </h2>
            
            <div className="grid gap-6">
              <div className="group border-l-2 border-white/10 pl-6 relative hover:border-cyan-500/50 transition-all">
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#06b6d4]" />
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">B.Sc. in Computer Engineering</h3>
                <p className="text-cyan-500/80 text-sm font-mono uppercase tracking-widest">Dr. Rafael Belloso Chacin University | 2018 - 2022</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-2xl">
                  Focused on software architecture, data structures, and hardware-software integration. 
                </p>
              </div>

              <div className="group border-l-2 border-white/10 pl-6 relative hover:border-purple-500/50 transition-all">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#a855f7]" />
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">Full Stack Web Developer Diploma</h3>
                <p className="text-purple-500/80 text-sm font-mono uppercase tracking-widest">Dr. Rafael Belloso Chacin University | 2022</p>
              </div>

              <div className="group border-l-2 border-white/10 pl-6 relative hover:border-green-500/50 transition-all">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#10b981]" />
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">Course - JavaScript </h3>
                <p className="text-green-500/80 text-sm font-mono uppercase tracking-widest">Dr. Rafael Belloso Chacin University | 2019</p>
              </div>

              <div className="group border-l-2 border-white/10 pl-6 relative hover:border-red-500/50 transition-all">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#a855f7]" />
                <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors">Course - Logical and Structured Programming </h3>
                <p className="text-red-500/80 text-sm font-mono uppercase tracking-widest">CENTECPRO | 2018</p>
              </div>

              <div className="group border-l-2 border-white/10 pl-6 relative hover:border-orange-500/50 transition-all">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#f97316]" />
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">Course - Web Development(Basic Level) </h3>
                <p className="text-orange-500/80 text-sm font-mono uppercase tracking-widest">CENTECPRO | 2018</p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <Award className="text-yellow-500" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">EF SET English Certificate (C1 Advanced)</h4>
                  <p className="text-gray-400 text-sm">Certified at advanced proficiency for international collaboration.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-16 border-t border-white/5 bg-black/80 backdrop-blur-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-4 text-center"
          >
            <p className="text-cyan-400 text-lg md:text-xl font-medium italic mb-8 leading-relaxed">
              "Driven by the same discipline that earned 5 national titles, I approach every line of code with a championship mindset."
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              <a href="mailto:aeduardobri@gmail.com" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-500/20 transition-all">
                  <Mail size={20} className="text-gray-400 group-hover:text-cyan-400" />
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-tighter font-mono">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/aeduardobri/" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-all">
                  <LinkedIn size={20} className="text-gray-400 group-hover:text-blue-400" />
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-tighter font-mono">LinkedIn</span>
              </a>
              <a href="https://github.com/navitii" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/20 transition-all">
                  <GitHub size={20} className="text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-tighter font-mono">GitHub</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase font-mono">
                Andres Briceño — Full Stack Engineer © 2026
              </p>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}