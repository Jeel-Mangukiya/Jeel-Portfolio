import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, ShieldCheck, Wrench, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const categoryIcons: Record<string, React.ElementType> = {
    "Frontend Development": Layout,
    "Backend Development": Server,
    "Databases & ORM": Database,
    "Authentication & Payments": ShieldCheck,
    "Tools & DevOps": Wrench
  };

  // Filter skills based on selected category and search string
  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technologies I use to build <span className="text-gradient">modern applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base"
          >
            Clean code, robust architecture, and modern full-stack tools.
          </motion.p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Next.js, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup, idx) => {
              if (!catGroup) return null;
              const IconComp = categoryIcons[catGroup.title] || Layout;

              return (
                <motion.div
                  key={catGroup.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-slate-200 font-bold text-lg border-b border-slate-800/80 pb-2">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span>{catGroup.title}</span>
                    <span className="text-xs font-mono text-slate-400">({catGroup.skills.length})</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="glass-panel glass-panel-hover px-4 py-3 rounded-xl border border-slate-800/80 flex items-center gap-2.5 group transition-all duration-200 hover:border-cyan-500/40 hover:bg-slate-900/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
