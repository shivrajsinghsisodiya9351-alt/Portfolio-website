import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Avatar Graphic */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-1 relative">
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            {/* Executive Portrait Profile Frame */}
            <div className="relative w-64 sm:w-72 lg:w-80 aspect-square rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-teal-300 to-purple-500 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950 relative flex items-center justify-center">
                {/* Profile Image */}
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (PERSONAL_INFO.fallbackPhoto && e.currentTarget.src !== PERSONAL_INFO.fallbackPhoto) {
                      e.currentTarget.src = PERSONAL_INFO.fallbackPhoto;
                    }
                  }}
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
          
          {/* Role Sub-Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            {PERSONAL_INFO.badge}
          </div>

          {/* Name Display */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-3 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-slate-900 via-cyan-600 to-indigo-700 dark:from-slate-100 dark:via-cyan-200 dark:to-purple-300 bg-clip-text text-transparent">
              {PERSONAL_INFO.fullName}
            </span>
          </h1>

          {/* Tagline with Vibrant Colorful Highlight */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mb-6">
            Turning messy data into decisions —{' '}
            <span className="inline-inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-500/15 via-teal-500/15 to-purple-500/15 dark:from-cyan-500/25 dark:via-teal-500/25 dark:to-purple-500/25 border border-cyan-500/40 dark:border-cyan-400/50 shadow-sm dark:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all hover:scale-105">
              <span className="bg-gradient-to-r from-cyan-700 via-teal-700 to-indigo-700 dark:from-cyan-300 dark:via-teal-200 dark:to-amber-300 bg-clip-text text-transparent font-extrabold">
                SQL, Power BI & analytics with a healthcare edge.
              </span>
            </span>
          </p>

          {/* Professional Bio */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl shadow-lg">
            {PERSONAL_INFO.bio}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            {/* Contact Me Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              id="hero-contact-btn"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* View Projects Button */}
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              id="hero-projects-btn"
            >
              View Projects
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mr-2 hidden sm:inline">Connect:</span>
            
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
              id="hero-social-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
              aria-label="GitHub Profile"
              id="hero-social-github"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Email */}
            <a
              href={PERSONAL_INFO.emailUrl}
              className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
              aria-label="Send Email"
              id="hero-social-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
