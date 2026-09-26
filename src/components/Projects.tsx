import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Zap, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Web3', 'Full Stack', 'Real-Time', 'Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-gradient">Engineering Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base"
          >
            Real-world full-stack web applications built with modern tools & clean code.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                {/* Visual Header / Stylized Window Bar */}
                <div className="relative bg-[#0b0f19] p-4 border-b border-slate-800/80 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {project.id}.app
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Screenshot / Visual Representation Banner */}
                  <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-slate-900/90 via-[#0d1322] to-slate-950 border border-slate-800/60 relative group-hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.metrics && (
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {project.metrics}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  
                  {/* Problem & Solution Snippet */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-1">
                      <span className="font-mono font-bold text-rose-400 text-[10px] uppercase tracking-wider block">
                        Problem:
                      </span>
                      <p className="text-slate-300 leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-1">
                      <span className="font-mono font-bold text-emerald-400 text-[10px] uppercase tracking-wider block">
                        Solution:
                      </span>
                      <p className="text-slate-300 leading-relaxed line-clamp-2">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-800">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Architecture & Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                          title="View Code on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
