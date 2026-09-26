import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Web Technology",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Operating Systems",
    "Computer Networks"
  ];

  return (
    <section id="education" className="py-20 relative bg-[#090d16]/90 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient">Qualifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base"
          >
            Foundation in Computer Science & Engineering fundamentals.
          </motion.p>
        </div>

        {/* Education Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden space-y-8"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* University & Degree */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 shrink-0">
                  <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    GRADUATE B.TECH
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-base font-semibold text-slate-300 mt-0.5">
                    {EDUCATION.degree} — {EDUCATION.field}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 text-cyan-300">
                  <Calendar className="w-4 h-4" />
                  <span>{EDUCATION.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{EDUCATION.location}</span>
                </div>
              </div>
            </div>

            {/* Core Coursework Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200 font-mono">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>CORE COMPUTER SCIENCE COURSEWORK</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University Highlights */}
            {/* <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200 font-mono">
                <Award className="w-4 h-4 text-amber-400" />
                <span>DEGREE HIGHLIGHTS</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {EDUCATION.highlights.map((highlight, hIdx) => (
                  <p key={hIdx} className="leading-relaxed text-slate-300">
                    • {highlight}
                  </p>
                ))}
              </div>
            </div> */}

          </motion.div>
        </div>

      </div>
    </section>
  );
};
