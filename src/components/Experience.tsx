import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#090d16]/90 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Software Development <span className="text-gradient">Internship</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base"
          >
            Delivering production-grade AI & real-time SaaS features at Helios Infotech.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 sm:pl-20 mb-12"
            >
              {/* Timeline Icon Badge */}
              <div className="hidden sm:flex absolute left-3 top-1.5 -translate-x-1/2 w-10 h-10 rounded-xl bg-[#0b0f19] border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
                <Building2 className="w-5 h-5" />
              </div>

              {/* Main Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-6">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-slate-300 flex items-center gap-2 mt-1">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Accomplishments Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center">Stack:</span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
