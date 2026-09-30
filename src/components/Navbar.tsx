import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Code2, FolderKanban, Wrench, UserCheck, Award, Mail } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'about', label: 'About', icon: UserCheck },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center relative">
        
        {/* Empty left placeholder for balance on non-large screens */}
        <div className="lg:hidden w-10"></div>

        {/* Desktop Nav Capsule */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full shadow-2xl border border-slate-200/90 dark:border-slate-800/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-slate-950 font-bold bg-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.6)] scale-105'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100/90 dark:hover:bg-slate-800/60'
                }`}
                id={`nav-link-${item.id}`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-600 dark:text-cyan-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/60 flex items-center justify-center text-slate-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            title={darkMode ? 'Switch to Light Mode (Day)' : 'Switch to Dark Mode (Night)'}
            aria-label="Toggle visual theme"
            id="theme-toggle-btn"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-md"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-md mx-auto glass-card border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 bg-white/95 dark:bg-slate-900/95">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-4 py-3 text-sm font-semibold rounded-xl flex items-center gap-3 transition-all ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-cyan-600 dark:hover:text-cyan-300'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-600 dark:text-cyan-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
