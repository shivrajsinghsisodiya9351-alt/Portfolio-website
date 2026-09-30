import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle, Calendar, Building2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-700 dark:from-cyan-300 dark:via-teal-200 dark:to-purple-400 text-transparent bg-clip-text">
              Certifications
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base">
            Professional industry-recognized analytics training
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-3xl p-8 border border-slate-200/90 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 group shadow-md dark:shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between bg-white dark:bg-slate-950/60"
              id={`cert-card-${cert.id}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-2 text-sm font-medium text-cyan-700 dark:text-cyan-400 mb-6">
                  <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{cert.provider}</span>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Competencies Validated
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsValidated.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-xs font-mono flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Verified Certificate</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{cert.provider}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
