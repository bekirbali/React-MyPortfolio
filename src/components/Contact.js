"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Birlikte <span className="text-[var(--accent)]">Çalışalım</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Yeni bir projen mi var? Veya ekibine yetenekli bir Full-Stack Developer mı arıyorsun? Bir mesaj uzağındayım.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl border-slate-700/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[80px]" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-white">İletişime Geç</h3>
              <p className="text-slate-400">
                Projelerin için doğru mimariyi kurmaktan, ürünü canlıya almaya kadar her adımda profesyonel destek verebilirim. Aşağıdaki formdan veya doğrudan sosyal hesaplarımdan bana ulaşabilirsin.
              </p>
              
              <div className="space-y-4 pt-4">
                <a href="mailto:bfbali43@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-[var(--accent)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors border border-slate-700">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">bfbali43@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/bekirbali/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-[var(--accent)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors border border-slate-700">
                    <MessageSquare size={20} />
                  </div>
                  <span className="font-medium">LinkedIn'den Yaz</span>
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Adınız" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="E-posta Adresiniz" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
                <div>
                  <textarea placeholder="Mesajınız" rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[var(--accent)] hover:bg-sky-400 text-slate-950 font-bold rounded-xl px-4 py-3 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-glow)]">
                  Gönder <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
