import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Zap, Trophy, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Briefcase: Briefcase,
    GraduationCap: GraduationCap,
    Code2: Code2,
    Zap: Zap
  };

  return (
    <section id="achievements" className="py-20 relative bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>MILESTONES & HIGHLIGHTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Key Highlights & <span className="text-gradient">Accomplishments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base"
          >
            A snapshot of academic, internship, and development achievements.
          </motion.p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Star;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group relative overflow-hidden space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-black text-cyan-400 font-mono tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-xs font-semibold text-slate-400">
                    {item.statLabel}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
