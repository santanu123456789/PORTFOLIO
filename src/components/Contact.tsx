import { motion } from 'motion/react';
import { Send, Twitter, Github, Linkedin, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    emailjs.sendForm(
      'service_nld1gdk',
      'template_e3o65bg',
      form.current,
      'dv0515XUF_hZ6iTuA'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current?.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.05] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display leading-tight"
              >
                Let's <span className="italic">build</span><br /> something new.
              </motion.h2>
              <p className="text-white/50 text-xl font-light max-w-md">
                Have a project in mind? Reach out and let's discuss how we can create something meaningful together.
              </p>
              
              <div className="flex space-x-6">
                {[
                  { icon: <Twitter size={20} />, label: "Twitter" },
                  { icon: <Github size={20} />, label: "Github" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 block">Email me at</span>
                <a 
                  href="mailto:santanujana661@gmail.com" 
                  className="text-3xl md:text-4xl font-display border-b border-white/20 pb-2 flex items-center w-fit group"
                >
                  santanujana661@gmail.com
                  <ArrowUpRight className="ml-2 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-white/30 transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-white/30 transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-white/40 ml-4">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    placeholder="What project are you working on?" 
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none" 
                  />
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="flex items-center justify-center space-x-3 w-full bg-white text-black py-5 rounded-full font-sans font-bold hover:scale-[1.02] transition-transform active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center space-x-2 text-green-400 font-mono text-xs uppercase tracking-widest"
                  >
                    <CheckCircle2 size={14} />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center space-x-2 text-red-400 font-mono text-xs uppercase tracking-widest"
                  >
                    <AlertCircle size={14} />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
        
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-widest font-mono text-white/40">
            © 2024 SANTANU JANA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-mono text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Back to top</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
