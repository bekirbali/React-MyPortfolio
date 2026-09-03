"use client";
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["Next.js (App Router)", "React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    title: "Backend Development",
    skills: ["Django", "Python", "RESTful APIs", "Next.js API Routes", "Celery", "i18n Entegrasyonları"]
  },
  {
    title: "Database & Tools",
    skills: ["PostgreSQL", "SQLite", "Redis", "Git & GitHub", "Docker", "Vercel & Linux Sunucular"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[100px] -z-10 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -z-10 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Teknoloji <span className="text-[var(--accent)]">Cephaneliğim</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hem modern arayüzler inşa ediyor hem de arka planda güçlü, güvenli ve hızlı çalışan mimariler kuruyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl border-slate-700/50 hover:border-[var(--accent)]/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
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
}
