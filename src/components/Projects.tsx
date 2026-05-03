import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Nova Dashboard",
    category: "Product Design / development",
    description: "A comprehensive analytics platform for enterprise SaaS companies focusing on data visualiziation.",
    image: "https://images.unsplash.com/photo-1551288049-bbda4e1a06ad?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Aura Mobile App",
    category: "Mobile UI/UX",
    description: "A meditation and mindfulness app built to help users find their inner peace in a noisy world.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Zephyr Identity",
    category: "Branding / Web",
    description: "Complete visual identity and website design for a high-performance cloud infrastructure startup.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 mb-4 block"
            >
              Selected Work (2023-2024)
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display leading-[1.1] text-balance"
            >
              Transforming complex ideas into <span className="italic opacity-60">elegant</span> solutions.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="group flex items-center space-x-2 text-sm text-white/60 hover:text-white transition-colors">
              <span>View all projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-white/40">
                    {project.category}
                  </span>
                  <ExternalLink size={14} className="text-white/20 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display tracking-tight group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[90%]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
