import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Left Brand Identity */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 font-display font-bold text-xl text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors mb-2"
              id="footer-logo"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                SS
              </div>
              &lt;/shivraj.sisodiya&gt;
            </a>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-sm">
              Data Analyst & BI Developer turning complex metrics into decisions.
            </p>
          </div>

          {/* Center Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Home</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">About</button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Contact</button>
          </div>

          {/* Right Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              aria-label="LinkedIn"
              id="footer-linkedin-link"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              aria-label="GitHub"
              id="footer-github-link"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.emailUrl}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              aria-label="Email"
              id="footer-email-link"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold flex items-center justify-center transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] ml-2"
              title="Back to top"
              aria-label="Back to top"
              id="footer-back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4 text-slate-950" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Shivraj Singh Sisodiya. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
