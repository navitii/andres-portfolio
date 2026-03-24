import { motion } from 'framer-motion';
import { Briefcase, Trophy, Star, Zap, ShieldCheck } from 'lucide-react';

const experiences = [
  {
    company: "Hornstromp Series",
    role: "Front-End Developer",
    period: "2025 - 2026",
    description: "Architecting React front-end systems, optimizing Lighthouse metrics, and managing global state with MongoDB integration.",
    icon: <Zap className="text-cyan-400" />
  },
  {
    company: "Noble Medical Group",
    role: "IT Leader",
    period: "2023 - 2024",
    description: "Designed PHP/MySQL financial systems for multi-clinic environments, automating reconciliation steps.",
    icon: <Star className="text-purple-400" />
  },
  {
    company: "ChicksGold Inc.",
    role: "Front-End Developer",
    period: "2023",
    description: "Developed UI features using Aurelia/JavaScript, collaborating with C# APIs to stabilize component performance.",
    icon: <ShieldCheck className="text-emerald-400" />
  },
  {
    company: "Alfaco Peru",
    role: "Full Stack Web Developer",
    period: "2022 - 2023",
    description: "Implemented RESTful CRUD services and secure auth flows using MVC patterns on Heroku.",
    icon: <Briefcase className="text-blue-400" />
  },
  {
    company: "Esports Professional Circuit",
    role: "Team Captain & Pro Player",
    period: "2020 - Present",
    description: "5-time National Champion in League of Legends. Strategic leadership and shot-calling under high-pressure.",
    icon: <Trophy className="text-yellow-400" />
  }
];

export const Experience = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center italic tracking-wider">
          PROFESSIONAL TRAJECTORY
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start group"
            >
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                {exp.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-cyan-500 font-medium mb-2 text-sm uppercase tracking-widest">{exp.role}</p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};