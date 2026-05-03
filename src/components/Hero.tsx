import { motion } from 'motion/react';
import { MousePointer2, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
        >
          <MousePointer2 size={14} className="text-white/40" />
          <span className="text-[10px] uppercase tracking-widest font-mono text-white/60">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-display font-light leading-[0.9] tracking-tighter mb-8"
        >
          I'm <span className="italic">Santanu</span><br /> 
          a full-stack <span className="bg-white text-black px-4 rounded-full">developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-white/50 text-lg md:text-xl font-light mb-12 text-balance"
        >
          A multi-disciplinary designer and developer focused on creating clean, 
          functional, and emotionally resonant experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <button className="bg-white text-black px-10 py-4 rounded-full font-sans font-semibold text-sm hover:scale-105 transition-transform">
            View Projects
          </button>
          <button className="text-white border border-white/20 px-10 py-4 rounded-full font-sans font-semibold text-sm hover:bg-white/5 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
