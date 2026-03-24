import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Rocket } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: <Layout className="text-cyan-400" />,
    skills: ["React 19", "Next.js 15", "Angular", "TypeScript", "Tailwind CSS v4", "Framer Motion","Vue.js 3"]
  },
  {
    title: "Backend & Data",
    icon: <Database className="text-purple-400" />,
    skills: ["PHP (MVC)", "MySQL", "MongoDB", "Node.js", "RESTful APIs", "Query Optimization"]
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="text-gray-400" />,
    skills: ["Azure", "Jira / Trello", "Git", "Vercel / Heroku", "CI/CD", "Unit Testing"]
  },
  {
    title: "Leadership & Performance",
    icon: <Rocket className="text-yellow-400" />,
    skills: ["Team Leadership", "Project Management", "Agile Methodologies", "Competitive Strategy"]
  }
];

export const Skills = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Code2 className="text-cyan-500" /> Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="mb-4 p-3 rounded-lg bg-black/40 w-fit group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};