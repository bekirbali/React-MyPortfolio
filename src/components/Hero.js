"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Terminal } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              Freelance & İşe Hazır
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Fikirleri <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-indigo-400">Canlıya</span> Taşıyorum
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0"
            >
              Ben Bekir. Sadece kod yazmıyor, şirketler için Next.js ve Django ile uçtan uca dijital ürünler geliştiriyorum. Müşterilerinizin hayatını kolaylaştıran ölçeklenebilir ve premium web uygulamaları inşa ediyorum.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="px-8 py-4 bg-[var(--accent)] text-slate-950 font-semibold rounded-full hover:bg-sky-300 transition-all flex items-center gap-2 shadow-[0_0_20px_var(--accent-glow)] w-full sm:w-auto justify-center">
                Projeleri İncele <ArrowRight size={18} />
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 transition-all w-full sm:w-auto justify-center">
                İletişime Geç
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0"
          >
            <div className="glass-panel p-6 rounded-2xl border-slate-700/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-indigo-500" />
              
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono flex-1 text-center pr-6">developer@bekir:~</div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <Terminal size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400">~/portfolio $</span> <span className="text-[var(--accent)]">npx</span> create-next-app --premium
                  </div>
                </div>
                
                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_fill-mode-forwards]">
                  <Code2 size={18} className="text-indigo-400 mt-0.5 shrink-0" />
                  <div className="text-slate-300">
                    <span className="text-indigo-400">Loading</span> Full-Stack Developer skills...<br/>
                    [+] Frontend: Next.js, React, Tailwind<br/>
                    [+] Backend: Django, Python, REST APIs<br/>
                    [+] Database: PostgreSQL, SQLite
                  </div>
                </div>

                <div className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.5s_ease-out_2s_fill-mode-forwards]">
                  <Rocket size={18} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div className="text-emerald-400">
                    Success! Ready to build amazing products.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 lg:-left-12 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 border-indigo-500/30 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#000000] border border-slate-700 flex items-center justify-center">
                <span className="text-white font-bold text-xs border border-white rounded-full w-6 h-6 flex items-center justify-center">N</span>
              </div>
              <div>
                <div className="text-xs text-slate-400">Frontend</div>
                <div className="text-sm font-bold text-white">Next.js</div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 lg:-right-12 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 border-emerald-500/30 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#092E20] border border-slate-700 flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-sm">dj</span>
              </div>
              <div>
                <div className="text-xs text-slate-400">Backend</div>
                <div className="text-sm font-bold text-white">Django</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
