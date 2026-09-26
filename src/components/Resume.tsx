import React, { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadResume = () => {
    setDownloading(true);

    const link = document.createElement('a');
    link.href = '/Jeel_Mangukiya_Resume.pdf';
    link.download = 'Jeel_Mangukiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 600);
  };

  return (
    <section id="resume" className="py-20 relative bg-[#090d16]/90 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Looking for my <span className="text-gradient">Complete Resume</span>?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              Download a copy of my resume or view the interactive version directly in your browser.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleDownloadResume}  
              disabled={downloading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Preparing Resume...' : 'Download Resume'}</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 hover:scale-[1.03]"
            >
              <Eye className="w-5 h-5 text-cyan-400" />
              <span>View Interactive Resume</span>
            </button>
          </div>

          {/* Resume Snapshot Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-bold block">DEGREE</span>
              <p className="text-xs font-semibold text-white">B.Tech in CSE</p>
              <p className="text-[11px] text-slate-400">PDEU (2022–2026)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-bold block">EXPERIENCE</span>
              <p className="text-xs font-semibold text-white">Helios Infotech Intern</p>
              <p className="text-[11px] text-slate-400">Jan 2026 – May 2026</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-bold block">CORE STACK</span>
              <p className="text-xs font-semibold text-white">MERN, Next.js & TS</p>
              <p className="text-[11px] text-slate-400">Full-Stack SaaS & AI</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
