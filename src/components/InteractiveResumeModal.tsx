import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadPdf: () => void;
}

export const InteractiveResumeModal: React.FC<InteractiveResumeModalProps> = ({
  isOpen,
  onClose,
  onDownloadPdf
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header Controls */}
          <div className="px-6 py-4 bg-[#080c14] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <h3 className="text-sm font-bold text-white font-mono">Jeel_Mangukiya_Resume.pdf</h3>

              {/* View mode toggle */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setViewMode('interactive')}
                  className={`px-2.5 py-1 rounded-md transition-all ${viewMode === 'interactive' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  Document View
                </button>
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`px-2.5 py-1 rounded-md transition-all ${viewMode === 'pdf' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  PDF Viewer
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/Jeel_Mangukiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                title="Open PDF in new browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open PDF</span>
              </a>

              <button
                onClick={onDownloadPdf}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          {viewMode === 'pdf' ? (
            <div className="w-full h-[70vh] bg-slate-900 flex flex-col relative">
              <object
                data="/Jeel_Mangukiya_Resume.pdf"
                type="application/pdf"
                className="w-full h-full border-0"
              >
                <iframe
                  src="/Jeel_Mangukiya_Resume.pdf"
                  title="Jeel Mangukiya Resume PDF"
                  className="w-full h-full border-0"
                />
                <div className="p-8 text-center space-y-4 my-auto bg-[#0b0f19]">
                  <p className="text-sm text-slate-300">
                    Inline PDF preview is not supported by your browser viewer.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="/Jeel_Mangukiya_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open PDF in Tab</span>
                    </a>
                    <button
                      onClick={onDownloadPdf}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            /* Resume Document Paper View */
            <div className="p-6 sm:p-10 overflow-y-auto bg-[#090d16] text-slate-200 font-sans space-y-8">

              {/* Header / Contact Info */}
              <div className="border-b border-slate-800 pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                      JEEL MANGUKIYA
                    </h1>
                    <p className="text-cyan-400 font-semibold text-sm">
                      Full Stack Software Developer | CSE Graduate
                    </p>
                  </div>
                  <div className="text-xs text-slate-400 font-mono space-y-1 sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-300 pt-1">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                    <GithubIcon className="w-3.5 h-3.5" /> github.com/Jeel-Mangukiya
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                    <LinkedinIcon className="w-3.5 h-3.5" /> linkedin.com/in/jeel-mangukiya
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Computer Science & Engineering graduate (2022–2026) from Pandit Deendayal Energy University (PDEU) and Full Stack Software Developer with experience in engineering production-grade web applications, AI website generation tools, and real-time collaboration engines using React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, and TypeScript.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">
                  WORK EXPERIENCE
                </h2>
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-sm text-white">{exp.role}</span>
                        <span className="text-slate-400 font-semibold"> — {exp.company}</span>
                      </div>
                      <span className="font-mono text-slate-400">{exp.period} | {exp.location}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">
                  FEATURED PROJECTS
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">{proj.title}</span>
                        <span className="text-[10px] font-mono text-cyan-300">{proj.techStack.slice(0, 4).join(', ')}</span>
                      </div>
                      <p className="text-xs text-slate-300">{proj.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.title} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                      <span className="font-bold text-cyan-300 block mb-1">{cat.title}:</span>
                      <span>{cat.skills.map(s => s.name).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">
                  EDUCATION
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-sm text-white">{EDUCATION.institution}</span>
                    <span className="text-slate-400 block">{EDUCATION.degree} in {EDUCATION.field}</span>
                  </div>
                  <span className="font-mono text-slate-400">{EDUCATION.period} | {EDUCATION.location}</span>
                </div>
              </div>

            </div>
          )}

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-[#080c14] border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">PDF Ready</span>
            <button
              onClick={onDownloadPdf}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
