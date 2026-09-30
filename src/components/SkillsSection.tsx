import React, { useState } from 'react';
import { SKILLS, Skill } from '../data/portfolioData';
import { 
  Database, Server, BarChart3, Cpu, Filter, Network, 
  FileSpreadsheet, Grid, Code, Search, Sparkles, GitMerge, 
  Kanban, Presentation, MessageSquare, Wrench
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Server,
  BarChart3,
  Cpu,
  Filter,
  Network,
  FileSpreadsheet,
  Grid,
  Code,
  Search,
  Sparkles,
  GitMerge,
  Kanban,
  Presentation,
  MessageSquare
};

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'CORE', 'PIPELINES', 'VISUALIZATION', 'DATABASES', 'MODELING'];

  const filteredSkills = activeFilter === 'ALL'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            ANALYTICS STACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-purple-600 dark:from-cyan-300 dark:via-teal-200 dark:to-purple-400 text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-normal text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Focused toolkit spanning data ingestion, modeling, analytics, and insight delivery. Core stack first; expand for supporting tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_16px_rgba(6,182,212,0.5)] scale-105'
                    : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
                id={`skill-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Wrench;

            return (
              <div
                key={skill.id}
                className="glass-card rounded-xl p-3.5 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:-translate-y-0.5 relative flex flex-col justify-between h-full bg-white dark:bg-slate-950/60"
                id={`skill-card-${skill.id}`}
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-2 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xs sm:text-sm font-display font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-0.5 truncate">
                    {skill.name}
                  </h3>

                  {/* Category Tag */}
                  <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[9px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-2">
                    {skill.category}
                  </span>

                  {/* Subtitle / Short Description */}
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono leading-tight mb-2 line-clamp-2">
                    {skill.subtitle}
                  </p>
                </div>

                {/* Accent Indicator Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-300/60 dark:border-slate-800/60 mt-1">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full w-4/5 rounded-full group-hover:w-full transition-all duration-500 shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
