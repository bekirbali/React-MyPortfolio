"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sadece Kod Yazmıyor, <span className="text-[var(--accent)]">Ürün Geliştiriyorum.</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-lg">
              <p>
                Freelance geçmişim bana paha biçilemez bir yetenek kazandırdı: Bir işi sadece teknik olarak çözmek değil, müşterinin asıl problemine odaklanarak baştan sona bir dijital ürün ortaya çıkarmak.
              </p>
              <p>
                Bir şirkette sadece bir "dişli" olmak yerine, projelerin her aşamasında (tasarım, mimari, veritabanı, frontend, deployment) sorumluluk aldım ve ürünleri başarıyla canlıya taşıdım.
              </p>
              <p>
                Next.js ve Django ikilisi ile çalışıyorum çünkü bu bana hem mükemmel SEO ve performans sunan kullanıcı arayüzleri hem de her türlü entegrasyona (CMS, i18n, randevu) açık güçlü arka plan mimarileri kurma imkanı veriyor.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="glass-panel p-8 rounded-3xl border-slate-700/50 relative shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)]/20 rounded-full blur-[30px]" />
              
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">Yaklaşımım</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 border border-slate-700 text-[var(--accent)] font-bold">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Müşteri Odaklılık</h4>
                    <p className="text-sm text-slate-400">Önce problemi anlar, ardından o problemi çözecek en iyi mimariyi tasarlarım.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 border border-slate-700 text-[var(--accent)] font-bold">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Uçtan Uca Sorumluluk</h4>
                    <p className="text-sm text-slate-400">Frontend, veritabanı tasarımı ve deployment dâhil tüm süreçleri baştan sona yönetirim.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 border border-slate-700 text-[var(--accent)] font-bold">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ölçeklenebilirlik</h4>
                    <p className="text-sm text-slate-400">Günü kurtaran kodlar değil, yarın rahatça büyüyecek modüler sistemler yazarım.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
