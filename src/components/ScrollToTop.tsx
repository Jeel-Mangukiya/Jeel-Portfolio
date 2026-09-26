import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setIsVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const strokeDashoffset = circumference - (circumference * scrollProgress) / 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0b0f19]/90 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-110 transition-all duration-300 group flex items-center justify-center cursor-pointer"
        >
          {/* Scroll progress ring */}
          <svg className="w-12 h-12 absolute inset-0 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#38bdf8"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          <ArrowUp className="w-5 h-5 relative z-10 text-cyan-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
