import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  Database, 
  Copy, 
  Check, 
  Github, 
  Layers, 
  CheckCircle, 
  HelpCircle, 
  Code2, 
  TrendingUp, 
  ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SqlProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SqlProjectModal: React.FC<SqlProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen || !project) return null;

  const handleCopyQuery = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
        id="sql-project-modal-backdrop"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          id="sql-project-modal-container"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
            <div className="flex items-start gap-4 pr-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
                    {project.databaseEngine || 'SQL DATABASE'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
              aria-label="Close modal"
              id="sql-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Business Problem & Analytical Objectives */}
            {project.businessProblem && project.businessProblem.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-2 mb-3">
                  <HelpCircle className="w-4 h-4" />
                  Business Problem & Analytical Scope
                </h4>
                <div className="space-y-2 bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {project.businessProblem.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools & SQL Techniques */}
            {project.tools && project.tools.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4" />
                  Techniques & SQL Operators Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Schema Overview */}
            {project.schemaDetails && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4" />
                  Relational Schema Architecture
                </h4>
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto">
                  {project.schemaDetails}
                </div>
              </div>
            )}

            {/* Interactive SQL Queries Showcase */}
            {project.sqlQueries && project.sqlQueries.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Production SQL Queries & Logic
                  </h4>
                </div>

                {/* Query Selector Tabs */}
                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                  {project.sqlQueries.map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                        activeQueryIndex === idx
                          ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      Query #{idx + 1}: {query.queryTitle.split(' ')[0]}...
                    </button>
                  ))}
                </div>

                {/* Active Query Box */}
                {project.sqlQueries[activeQueryIndex] && (
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs">
                      <div>
                        <span className="font-mono font-bold text-cyan-400">
                          {project.sqlQueries[activeQueryIndex].queryTitle}
                        </span>
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {project.sqlQueries[activeQueryIndex].description}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyQuery(
                            project.sqlQueries![activeQueryIndex].code,
                            activeQueryIndex
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0 ml-4"
                        title="Copy SQL Query"
                      >
                        {copiedIndex === activeQueryIndex ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Copy SQL</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 overflow-x-auto font-mono text-xs text-cyan-300/90 leading-relaxed bg-[#0b1120]">
                      <code>{project.sqlQueries[activeQueryIndex].code}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Key Business Insights & Outcomes */}
            {project.keyInsights && project.keyInsights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Key Business Insights & Data Impact
                </h4>
                <div className="space-y-2 bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {project.keyInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-semibold transition-colors"
            >
              Close
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
