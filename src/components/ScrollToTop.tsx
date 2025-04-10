import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Terminal } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);
      
      setScrollPercentage(percentage);
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end"
        >
          <motion.div 
            className="hoverable text-xs bg-slate-800/80 backdrop-blur-sm text-cyan-300 px-3 py-1.5 rounded-full mb-3 font-mono border border-cyan-900/30 shadow-lg"
            animate={{ 
              opacity: [0.8, 1, 0.8], 
              y: [0, -5, 0],
              boxShadow: [
                "0 4px 12px rgba(8, 145, 178, 0.1)",
                "0 4px 12px rgba(8, 145, 178, 0.3)",
                "0 4px 12px rgba(8, 145, 178, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="mr-1 font-bold">{scrollPercentage}</span>
            <span className="opacity-70">%</span>
          </motion.div>
          
          <motion.button
            whileHover={{ 
              scale: 1.1,
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(8, 145, 178, 0.5)"
            }}
            whileTap={{ scale: 0.95, y: 0 }}
            onClick={scrollToTop}
            className="hoverable relative p-3 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-700/30"
          >
            <div className="relative z-10">
              <ArrowUp size={24} />
            </div>
            
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(6, 182, 212, 0.7)",
                  "0 0 0 8px rgba(6, 182, 212, 0)",
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            
            {/* Progress circle */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="none" 
                stroke="rgba(6, 182, 212, 0.2)" 
                strokeWidth="3"
              />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="none" 
                stroke="rgba(6, 182, 212, 0.8)" 
                strokeWidth="3"
                strokeDasharray="251.2" 
                animate={{ 
                  strokeDashoffset: 251.2 - (251.2 * scrollPercentage / 100) 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;