import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { Download, GraduationCap, UserCheck, Shield, Sparkles, ExternalLink } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header matching Screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            BACKGROUND & EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-700 dark:from-cyan-300 dark:via-teal-200 dark:to-fuchsia-400 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base">
            Data Analyst with a healthcare domain edge
          </p>
        </div>

        {/* Two-Column Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 bg-white dark:bg-slate-950/60">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Profile
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
              {PERSONAL_INFO.bio}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 mb-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Healthcare & Pharma Analytics Domain Edge
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Applying rigorous scientific data discipline, statistical accuracy, and pharmaceutical dataset structure to commercial business intelligence, inventory tracking, and sales performance.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Core Stack Highlights
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-medium">
                Core tools: <span className="text-cyan-700 dark:text-cyan-300 font-bold">SQL</span>, <span className="text-cyan-700 dark:text-cyan-300 font-bold">Power BI</span>, <span className="text-teal-700 dark:text-teal-300 font-bold font-mono">DAX</span>, <span className="text-cyan-700 dark:text-cyan-300 font-bold">Excel</span>, <span className="text-purple-700 dark:text-purple-300 font-bold">Python</span>, <span className="text-cyan-700 dark:text-cyan-300 font-bold">PostgreSQL</span>.
              </p>
            </div>

            {/* Download Resume Button pointing to exact Google Drive URL */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              id="about-download-resume-btn"
            >
              <Download className="w-4 h-4 text-slate-950" />
              Download Resume
              <ExternalLink className="w-3.5 h-3.5 text-slate-950 ml-1" />
            </a>
          </div>

          {/* Right Column: Education Timeline matching Screenshot 3 */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-2xl relative group hover:border-cyan-500/40 transition-all duration-300 bg-white dark:bg-slate-950/60">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Education
              </h3>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group/timeline">
                  
                  {/* Cyan Glowing Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 border-4 border-white dark:border-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover/timeline:scale-125 transition-transform" />

                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-300/60 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold mb-2">
                    {edu.duration}
                  </span>

                  <h4 className="text-xl font-display font-extrabold text-slate-900 dark:text-slate-100 group-hover/timeline:text-cyan-600 dark:group-hover/timeline:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>

                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </p>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {edu.university}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200">
                    <span className="text-slate-500 dark:text-slate-400">CGPA:</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-bold">{edu.cgpa}</span>
                  </div>

                  {edu.details && (
                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
