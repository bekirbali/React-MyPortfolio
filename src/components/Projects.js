"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Server, Globe } from 'lucide-react';

const projects = [
  {
    title: 'YQ Union Kurumsal Web Platformu',
    description: 'Uluslararası ticaret yapan bir firma için i18n (Çoklu Dil) destekli, dinamik duyuru yönetimi içeren sıfırdan kurumsal platform.',
    tech: ['Next.js', 'Django', 'i18n', 'Tailwind CSS'],
    features: ['İngilizce ve Türkçe tam dil desteği', 'Admin panelinden duyuru ve içerik yönetimi', 'Kurumsal yapıya uygun SEO mimarisi'],
    link: 'https://yqunion.vercel.app/',
    icon: <Globe size={28} className="text-[var(--accent)]" />
  },
  {
    title: 'Deko Elektrik B2B Çözümü',
    description: 'Firmanın dışa bağımlılığını bitiren, kendi ürünlerini ve haberlerini yönetebilecekleri özel içerik yönetim sistemine sahip kurumsal B2B site.',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'REST API'],
    features: ['Dinamik ürün kataloğu yönetimi', 'Özelleştirilmiş blog ve haber sistemi', 'Modern, hızlı ve responsive arayüz'],
    link: 'https://www.dekoelektrik.com.tr/',
    icon: <Layout size={28} className="text-[var(--accent)]" />
  },
  {
    title: 'Next PDR - Danışmanlık Platformu',
    description: 'Psikolojik danışmanlar için özel olarak geliştirilmiş; makale paylaşımı ve Whatsapp entegreli randevu sistemi barındıran platform.',
    tech: ['Next.js', 'Django', 'Whatsapp API'],
    features: ['Eğitim yazıları ve makale yayınlama (Özel CMS)', 'Hızlı randevu iletişim akışı', 'Danışan kazanımına yönelik optimize edilmiş UX'],
    link: 'https://next-pdr-portfolio.vercel.app/',
    icon: <Server size={28} className="text-[var(--accent)]" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Seçilmiş <span className="text-[var(--accent)]">Projeler</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Geliştirdiğim projeler sadece koddan ibaret değil; işletmelerin sorunlarını çözen, ölçeklenebilir ve yönetilebilir dijital ürünlerdir.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 md:p-10 rounded-2xl glass-panel-hover flex flex-col md:flex-row gap-8 items-start group relative overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 shadow-lg">
                {project.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--accent)] mb-3 uppercase tracking-wider">Değer Önerisi (Ne Çözdü?)</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 relative z-10">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-all border border-slate-600 hover:border-slate-500 shadow-lg"
                  >
                    Canlı Siteyi Gör <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
