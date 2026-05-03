import { motion } from 'motion/react';

const skills = [
  "Frontend Development", "Backend Development", "DBMS", "DSA", 
  "Network Programming", "React", "TypeScript", "Node.js",
  "Tailwind CSS", "PostgreSQL", "C++", "System Design"
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 block"
              >
                The Philosophy
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display leading-[1.1]"
              >
                Simplicity is the ultimate sophistication.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-white/60 text-lg leading-relaxed font-light"
              >
                <p>
                  With over 6 years of experience in the digital space, I've learned that 
                  the best designs aren't just beautiful—they are functional, accessible, 
                  and solve real problems.
                </p>
                <p>
                  I bridge the gap between design and technology, ensuring that every 
                  pixel has a purpose and every interaction feels deliberate. I believe 
                  in writing clean code that powers meaningful user experiences.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-display mb-1">08+</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display mb-1">40+</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-display mb-1">12+</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">Global Awards</div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 block">Expertise</span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-6 py-3 rounded-full border border-white/10 text-xs font-mono bg-white/[0.03] hover:bg-white hover:text-black transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 block">Work Experience</span>
              <div className="space-y-8">
                {[
                  { company: "Stripe", role: "Product Designer", period: "2022 - Present" },
                  { company: "Airbnb", role: "UI Engineer", period: "2020 - 2022" },
                  { company: "Apple", role: "Design Intern", period: "2019 - 2020" }
                ].map((job) => (
                  <div key={job.company} className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div>
                      <h4 className="text-xl font-display">{job.company}</h4>
                      <p className="text-xs text-white/40 font-mono mt-1">{job.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase">{job.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
