import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, Play, Code2 } from 'lucide-react';

export const TechVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'ai' | 'collab'>('stack');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const snippets = {
    stack: {
      filename: "JeelMangukiya.config.ts",
      lang: "TypeScript",
      code: `import { Developer } from '@jeel/core';

export const jeel = new Developer({
  name: "Jeel Mangukiya",
  role: "Software Developer",
  degree: "B.Tech CSE @ PDEU (2022-2026)",
  location: "Gujarat, India",
  coreStack: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "MySQL"],
    authAndPayments: ["JWT", "Clerk"]
  },
  status: "Ready for Software Development Roles"
});`
    },
    ai: {
      filename: "AIWebsiteGenerator.ts",
      lang: "TypeScript",
      code: `import { OpenAI, Stripe, Mongoose } from '@helios/stack';

export async function generateSiteFromPrompt(userPrompt: string, userId: string) {
  // 1. Verify credit quota via Stripe & Database
  const hasQuota = await checkUserCredits(userId);
  if (!hasQuota) throw new Error("Insufficient credits");

  // 2. Synthesize layout JSON using prompt pipeline
  const siteStructure = await OpenAI.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "system", content: "Output valid JSON React layout" }]
  });

  // 3. Deduct 1 credit & persist project state
  await deductCredit(userId, 1);
  return siteStructure;
}`
    },
    collab: {
      filename: "CollaborativeSync.ts",
      lang: "TypeScript",
      code: `import { Server } from 'socket.io';
import { RichTextEngine } from '@jeel/editor';

const io = new Server(3000, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  socket.on('doc-delta', ({ docId, delta, userCursor }) => {
    // Broadcast sub-50ms operational transform updates
    socket.to(docId).emit('doc-update', {
      delta,
      userCursor,
      timestamp: Date.now()
    });
  });
});`
    }
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setLogs(["$ initializing runtime environment...", "$ connecting to mongodb & redis cache..."]);

    setTimeout(() => {
      setLogs(prev => [...prev, "$ loading Jeel's full stack modules..."]);
    }, 600);

    setTimeout(() => {
      setLogs(prev => [...prev, "✔ All systems operational! Status: READY"]);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-xl mx-auto glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-950/30">
      {/* Code Window Header */}
      <div className="px-4 py-3 bg-[#0d1322] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            {currentSnippet.filename}
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'stack' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'ai' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            AI Engine
          </button>
          <button
            onClick={() => setActiveTab('collab')}
            className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'collab' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            Socket.io
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="relative p-4 sm:p-5 bg-[#090d16] font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[260px]">
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-cyan-400 border border-slate-700 transition-colors"
            title="Run Code Simulation"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed pr-16"
          >
            {currentSnippet.code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell pr-4 text-slate-600 select-none text-right w-6">{idx + 1}</span>
                <span className="table-cell">
                  {line.includes('import') && <span className="text-cyan-400">{line.slice(0, 6)}</span>}
                  {line.includes('import') ? line.slice(6) : line}
                </span>
              </div>
            ))}
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Terminal Output Console */}
      <div className="px-4 py-2.5 bg-[#05080e] border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Console: {logs.length > 0 ? logs[logs.length - 1] : "Click 'Run' to execute"}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>Node.js v20.x</span>
        </div>
      </div>
    </div>
  );
};
