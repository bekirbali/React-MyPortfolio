import React from 'react';
import { Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-panel border-b-0 border-l-0 border-r-0 mt-20 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">
            Bekir<span className="text-[var(--accent)]">.</span>
          </h3>
          <p className="text-slate-400 text-sm">
            Full-Stack Developer. Fikirleri dijital gerçekliğe dönüştürür.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/bekirbali" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-[var(--accent)] hover:bg-slate-800 transition-all border border-slate-700/50">
            {/* Github SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/bekirbali/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-[var(--accent)] hover:bg-slate-800 transition-all border border-slate-700/50">
            {/* Linkedin SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:bfbali43@gmail.com" className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-[var(--accent)] hover:bg-slate-800 transition-all border border-slate-700/50">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Bekir. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
