import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Database, 
  ChevronDown, 
  Code2, 
  Check, 
  Filter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SqlProjectModal } from './SqlProjectModal';

export const ProjectsSection: React.FC = () => {
  // Category state - Default strictly to 'powerbi'
  const [activeCategory, setActiveCategory] = useState<'powerbi' | 'sql'>('powerbi');
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
  const [selectedSqlProject, setSelectedSqlProject] = useState<Project | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right/next, -1 for left/prev

  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsCategoryPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter projects by active category (strictly real projects)
  const filteredProjects = PROJECTS.filter(
    (p) => !p.isPlaceholder && p.projectType === activeCategory
  );

  const powerBiCount = PROJECTS.filter((p) => !p.isPlaceholder && p.projectType === 'powerbi').length;
  const sqlCount = PROJECTS.filter((p) => !p.isPlaceholder && p.projectType === 'sql').length;

  const PROJECTS_PER_SLIDE = 6;
  const totalSlides = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_SLIDE));

  // Reset slide when category changes if out of bounds
  const validSlide = Math.min(currentSlide, Math.max(0, totalSlides - 1));

  const handleSelectCategory = (cat: 'powerbi' | 'sql') => {
    setActiveCategory(cat);
    setCurrentSlide(0);
    setIsCategoryPopupOpen(false);
  };

  // Get current slide projects
  const currentSlideProjects = filteredProjects.slice(
    validSlide * PROJECTS_PER_SLIDE,
    (validSlide + 1) * PROJECTS_PER_SLIDE
  );

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleGoToSlide = (index: number) => {
    setDirection(index > validSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Horizontal slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Layers className="w-3.5 h-3.5" />
              PORTFOLIO PROJECTS & WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
              <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 dark:from-cyan-300 dark:via-teal-200 dark:to-purple-300 text-transparent bg-clip-text">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm">
              {activeCategory === 'powerbi' ? (
                <>Interactive Power BI Dashboards & Reports ({powerBiCount} Projects)</>
              ) : (
                <>Production SQL Queries, Schemas & Data Pipeline Analytics ({sqlCount} Projects)</>
              )}
            </p>
          </div>

          {/* Controls Group: Category Selector Popup + Slide Navigation */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            
            {/* Category Filter Popup / Dropdown Button */}
            <div className="relative" ref={popupRef}>
              <button
                onClick={() => setIsCategoryPopupOpen(!isCategoryPopupOpen)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-900 dark:text-slate-100 shadow-md transition-all text-xs font-mono font-bold"
                id="project-category-popup-btn"
                aria-expanded={isCategoryPopupOpen}
                aria-haspopup="true"
              >
                <Filter className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Domain:</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  {activeCategory === 'powerbi' ? (
                    <>
                      <BarChart3 className="w-3.5 h-3.5 text-yellow-500" />
                      <span>Power BI ({powerBiCount})</span>
                    </>
                  ) : (
                    <>
                      <Database className="w-3.5 h-3.5 text-cyan-500" />
                      <span>SQL ({sqlCount})</span>
                    </>
                  )}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isCategoryPopupOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Popup Dropdown Menu */}
              <AnimatePresence>
                {isCategoryPopupOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 lg:left-auto lg:right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-30 p-2 overflow-hidden"
                    id="project-category-popup-menu"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      Select Project Type
                    </div>

                    <div className="p-1 space-y-1">
                      {/* Power BI Option (Default) */}
                      <button
                        onClick={() => handleSelectCategory('powerbi')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left group ${
                          activeCategory === 'powerbi'
                            ? 'bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/30 text-cyan-900 dark:text-cyan-200'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                        }`}
                        id="select-powerbi-category-btn"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                            <BarChart3 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold font-display flex items-center gap-1.5">
                              Power BI Projects
                              <span className="px-1.5 py-0.2 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-mono font-bold">
                                {powerBiCount}
                              </span>
                            </div>
                            <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                              Interactive dashboards & DAX
                            </p>
                          </div>
                        </div>
                        {activeCategory === 'powerbi' && (
                          <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        )}
                      </button>

                      {/* SQL Option */}
                      <button
                        onClick={() => handleSelectCategory('sql')}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left group ${
                          activeCategory === 'sql'
                            ? 'bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/30 text-cyan-900 dark:text-cyan-200'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                        }`}
                        id="select-sql-category-btn"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                            <Database className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold font-display flex items-center gap-1.5">
                              SQL Projects
                              <span className="px-1.5 py-0.2 rounded-md bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-[10px] font-mono font-bold">
                                {sqlCount}
                              </span>
                            </div>
                            <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                              Complex queries, CTEs & Schemas
                            </p>
                          </div>
                        </div>
                        {activeCategory === 'sql' && (
                          <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Switcher Tabs */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => handleSelectCategory('powerbi')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeCategory === 'powerbi'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-300 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                id="quick-tab-powerbi"
              >
                <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
                <span>Power BI ({powerBiCount})</span>
              </button>
              <button
                onClick={() => handleSelectCategory('sql')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeCategory === 'sql'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-300 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                id="quick-tab-sql"
              >
                <Database className="w-3.5 h-3.5 text-cyan-500" />
                <span>SQL ({sqlCount})</span>
              </button>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              <button
                onClick={handlePrev}
                disabled={totalSlides <= 1}
                className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                  totalSlides > 1
                    ? 'bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 hover:text-cyan-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-40'
                }`}
                title="Previous Slide"
                aria-label="Previous Slide"
                id="projects-prev-slide-btn"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-2 text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-300">
                {validSlide + 1}/{totalSlides}
              </span>

              <button
                onClick={handleNext}
                disabled={totalSlides <= 1}
                className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                  totalSlides > 1
                    ? 'bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 hover:text-cyan-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-40'
                }`}
                title="Next Slide"
                aria-label="Next Slide"
                id="projects-next-slide-btn"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Animated Slide Container */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${activeCategory}-${validSlide}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentSlideProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 shadow-md dark:shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] flex flex-col justify-between group bg-white dark:bg-slate-950/60"
                  id={`project-card-${project.id}`}
                >
                  <div>
                    {/* Card Image */}
                    <div 
                      className={`relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800 ${
                        project.projectType === 'sql' ? 'cursor-pointer' : ''
                      }`}
                      onClick={() => {
                        if (project.projectType === 'sql' && project.sqlQueries) {
                          setSelectedSqlProject(project);
                        }
                      }}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Project Type Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md flex items-center gap-1 ${
                          project.projectType === 'sql'
                            ? 'bg-cyan-950/80 border border-cyan-400 text-cyan-300'
                            : 'bg-slate-950/80 border border-amber-400/50 text-amber-300'
                        }`}>
                          {project.projectType === 'sql' ? (
                            <>
                              <Database className="w-3 h-3 text-cyan-400" />
                              {project.databaseEngine || 'SQL'}
                            </>
                          ) : (
                            <>
                              <BarChart3 className="w-3 h-3 text-amber-400" />
                              POWER BI
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Project Name Below Image */}
                    <div 
                      className={`p-5 ${project.projectType === 'sql' ? 'cursor-pointer' : ''}`}
                      onClick={() => {
                        if (project.projectType === 'sql' && project.sqlQueries) {
                          setSelectedSqlProject(project);
                        }
                      }}
                    >
                      <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 line-clamp-2">
                          {project.subtitle}
                        </p>
                      )}

                      {/* SQL Highlights tags if SQL project */}
                      {project.projectType === 'sql' && project.tools && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tools.slice(0, 3).map((tool, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-700 dark:text-slate-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Buttons: View Button & GitHub Logo */}
                  <div className="p-5 pt-0 flex items-center gap-3">
                    {project.projectType === 'powerbi' ? (
                      /* Power BI View Dashboard Link */
                      project.dashboardUrl ? (
                        <a
                          href={project.dashboardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 transition-all"
                          id="project-view-dashboard-btn"
                        >
                          <BarChart3 className="w-4 h-4 text-slate-950" />
                          <span>View</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-950 ml-0.5" />
                        </a>
                      ) : null
                    ) : (
                      /* SQL View Query Direct Link */
                      <a
                        href={project.queryUrl || project.dashboardUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 transition-all"
                        id={`view-sql-query-${project.id}`}
                      >
                        <Code2 className="w-4 h-4 text-slate-950" />
                        <span>View Query</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-950 ml-0.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shrink-0 shadow-sm"
                        title="View GitHub Repository"
                        aria-label="View GitHub Repository"
                        id="project-github-repo-btn"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* SQL Project Details & Query Viewer Modal */}
      <SqlProjectModal
        isOpen={selectedSqlProject !== null}
        project={selectedSqlProject}
        onClose={() => setSelectedSqlProject(null)}
      />
    </section>
  );
};
