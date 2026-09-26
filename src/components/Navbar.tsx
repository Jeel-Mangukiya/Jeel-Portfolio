import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Download, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Highlights' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll tracking
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
              <Code2 className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
              Jeel<span className="text-cyan-400">.dev</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">SOFT WARE DEV</span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 bg-slate-900/70 hover:bg-slate-800/90 border border-slate-700/60 hover:border-cyan-500/40 rounded-lg transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="group relative inline-flex items-center justify-center p-0.5 text-xs font-medium rounded-lg overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-[#0b0f19] rounded-[7px] text-white group-hover:bg-transparent transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
              <span>Hire Me</span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white bg-slate-900/80 rounded-xl border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50'
                    }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  )}
                </button>
              ))}

              <div className="pt-4 grid grid-cols-2 gap-2 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Resume</span>
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
