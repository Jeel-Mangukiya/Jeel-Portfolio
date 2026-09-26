import { Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 py-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base">Jeel Mangukiya</span>
              <p className="text-xs text-slate-300 font-mono">Software Developer</p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-300">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-slate-300 font-mono">
            <span>No bugs were harmed in the making of this website. 🐛</span>
            {/* <span>in Gujarat, India</span> */}
          </div>
        </div>

      </div>
    </footer>
  );
};
