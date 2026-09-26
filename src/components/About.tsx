import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, Zap, ShieldCheck, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const strengths = [
    {
      icon: Code2,
      title: "Full-Stack Web Architecture",
      desc: "Specialized in building end-to-end web applications using React.js, Next.js, Node.js, Express, and TypeScript with clean design patterns.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Real-Time Systems",
      desc: "Experienced in constructing low-latency WebSockets & Socket.io applications, such as real-time collaborative document editors.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "AI & Platform Integration",
      desc: "Skilled in developing prompt-driven website generators, incorporating LLM APIs, dynamic preview engines, and streaming output.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: ShieldCheck,
      title: "Auth & Payment Engines",
      desc: "Proficient in implementing enterprise authentication (JWT, Clerk) and Stripe credit billing pipelines with secure webhooks.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090d16]/90 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CSE GRADUATE & SOFTWARE DEVELOPER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineering scalable web apps with <span className="text-gradient">modern technology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base leading-relaxed"
          >
            I hold a Bachelor of Technology in Computer Science & Engineering from Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat. I build high-performance, user-centric web applications and real-time collaboration platforms.
          </motion.p>
        </div>

        {/* Info Grid & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Box: Academic & Personal Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                  JM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Jeel Mangukiya</h3>
                  <p className="text-xs text-cyan-400 font-mono">Computer Science & Engineering Graduate</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                My passion lies in bridging complex backend systems with fluid, pixel-perfect frontend interfaces. During my Software Developer Internship at Helios Infotech, I led the creation of an AI-powered website builder and a real-time collaborative document workspace.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">B.Tech CSE</span> — Pandit Deendayal Energy University (PDEU), 2022–2026
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-1.5 rounded-lg bg-slate-800 text-purple-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Helios Infotech Intern</span> — Software Developer (Jan–May 2026)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill Row */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-[11px] font-medium text-slate-300">{stat.label}</div>
                  <div className="text-[10px] text-slate-400">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Box: Technical Strengths Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} p-[1px] shadow-md`}>
                      <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
