import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import GitHub from '@mui/icons-material/GitHub';
import Image from 'next/image';

const projects = [
  {
    title: "StellarDash",
    image: "/stellar.png",
    screenshots: ["/stellar.png", "/stellar2.png", "/stellar3.png"],
    repo: "https://github.com/navitii/stellar-dash",
    description: "High-performance space monitoring platform using React 19 and NASA APIs. Features real-time satellite tracking.",
    tech: ["React 19", "Tailwind v4", "Framer Motion"],
    size: "md:col-span-2 md:row-span-2",
    color: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] border-cyan-500/20"
  },
  {
    title: "ReactEcommerce",
    image: "/ecommerce.png",
    screenshots: ["/ecommerce.png", "/commerce1.png", "/commerce2.png"],
    repo: "https://github.com/navitii/ReactEcommerce",
    description: "Full-stack restaurant engine with Next.js 15. Implements an immutable event timeline.",
    tech: ["Next.js 15", "TypeScript", "Tailwind"],
    size: "md:col-span-1 md:row-span-1",
    color: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] border-purple-500/20"
  },
  {
    title: "ArchiVault",
    image: "/archivault.png",
    screenshots: ["/archivault.png","/archi1.png","/archi2.png","/archi3.png"],
    repo: "https://github.com/navitii/archivault",
    description: "Minimalist architecture portfolio focused on editorial design and Vue.js 3.",
    tech: ["Vue.js 3", "Tailwind CSS"],
    size: "md:col-span-1 md:row-span-1",
    color: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] border-emerald-500/20"
  },
  {
    title: "Angular Bank System",
    image: "/angularcrud.png",
    screenshots: ["/angularcrud.png", "/bank2.png"],
    repo: "https://github.com/navitii/AngularCrud",
    description: "Full-stack banking application built with Angular and Node.js.",
    tech: ["Angular", "Node.js", "MongoDB"],
    size: "md:col-span-2 md:row-span-1",
    color: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] border-orange-500/20"
  }
];

export const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] md:auto-rows-[240px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl border bg-[#0d0d0d] transition-all duration-500 ${project.color} ${project.size}`}
            >
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                </div>
              )}
              
              <div className="absolute top-4 right-4 z-20 flex gap-2 md:translate-y-[-10px] opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                  <GitHub className="w-5 h-5 text-white" />
                </a>
                <button 
                  onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }}
                  className="p-2.5 rounded-full bg-cyan-500/30 backdrop-blur-md border border-cyan-500/50 hover:bg-cyan-500/40 transition-colors"
                >
                  <Maximize2 size={20} className="text-cyan-400" />
                </button>
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-end pointer-events-none">
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  {project.title} <Sparkles size={14} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-300 text-xs mb-4 max-w-[90%] line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-medium bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-300 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {selectedProject.screenshots.length > 1 && (
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-[-60px] z-[120] pointer-events-none">
                  <button 
                    onClick={prevImage} 
                    className="p-2 md:p-4 rounded-full bg-black/40 md:bg-transparent text-white/70 hover:text-white transition-colors pointer-events-auto md:translate-x-[-60px]"
                  >
                    <ChevronLeft size={32} className="md:w-[48px] md:h-[48px]" />
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="p-2 md:p-4 rounded-full bg-black/40 md:bg-transparent text-white/70 hover:text-white transition-colors pointer-events-auto md:translate-x-[60px]"
                  >
                    <ChevronRight size={32} className="md:w-[48px] md:h-[48px]" />
                  </button>
                </div>
              )}

              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#050505]"
              >
                <Image 
                  src={selectedProject.screenshots[currentImageIndex]} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              <div className="absolute bottom-[-30px] md:bottom-[-40px] flex gap-2">
                {selectedProject.screenshots.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-cyan-500' : 'bg-white/20'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};