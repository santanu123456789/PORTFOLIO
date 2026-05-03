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
                  As an ambitious developer entering the professional world, I am driven by 
                  a passion for solving complex problems through clean, efficient code 
                  and user-centric design.
                </p>
                <p>
                  I have built a strong foundation in computer science fundamentals, 
                  specializing in modern web technologies and system architecture. I am 
                  constantly exploring new frameworks and methodologies to deliver 
                  high-quality digital solutions.
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
                <div className="text-3xl font-display mb-1">00</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display mb-1">15+</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl font-display mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">Dedication</div>
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
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 block">Academic Focus</span>
              <div className="space-y-8">
                {[
                  { university: "Computer Science", role: "Software Engineering", period: "2020 - 2024" },
                  { university: "Data Structures & Algorithms", role: "Logic & Problem Solving", period: "Focus Area" },
                  { university: "Full Stack Development", role: "Modern Web Tech", period: "Certification" }
                ].map((item) => (
                  <div key={item.university} className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div>
                      <h4 className="text-xl font-display">{item.university}</h4>
                      <p className="text-xs text-white/40 font-mono mt-1">{item.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 block">Achievements</span>
              <div className="space-y-4">
                <div className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-display tracking-tight">GATE 2026 Qualified</h4>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/60">Success</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-1">Gate Score</div>
                      <div className="text-2xl font-display">475</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-1">All India Rank</div>
                      <div className="text-2xl font-display">#9415</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
