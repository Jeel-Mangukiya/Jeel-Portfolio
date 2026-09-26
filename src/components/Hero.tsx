import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechVisualizer } from './TechVisualizer';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const techBadges = ["React.js", "Express.js", "TypeScript", "Node.js", "MongoDB", "MySQL"];

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Dynamic Radial Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide">
                Available for Software Development Roles
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient">Jeel Mangukiya</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-mono">&lt;</span>
                {PERSONAL_INFO.title}
                <span className="text-cyan-400 font-mono">/&gt;</span>
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              "{PERSONAL_INFO.tagline}"
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm text-slate-400 max-w-xl leading-relaxed"
            >
              {PERSONAL_INFO.subtext}
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Location & Social Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 text-xs text-slate-400 border-t border-slate-800/60 w-full"
            >
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Bhavnagar, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Code Terminal Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <TechVisualizer />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
