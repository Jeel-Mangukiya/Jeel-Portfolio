import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 bg-[#090d16] border-b border-slate-800 flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">Project Details</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Header info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider text-slate-300">
                Key Features & Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Links */}
          <div className="px-6 py-4 bg-[#090d16] border-t border-slate-800 flex items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              {project.metrics ? `⚡ ${project.metrics}` : 'Ready for Demo'}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
