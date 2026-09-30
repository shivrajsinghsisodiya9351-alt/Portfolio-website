import React, { useState, useEffect } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200">
      {/* Background Grid & Particles */}
      <BackgroundParticles />

      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
