import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Rocket, Terminal, ExternalLink, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 pt-16 pb-8 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-[size:20px_20px] opacity-20"></div>
      
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center">
              <Terminal size={28} className="text-white" />
              <motion.div 
                className="absolute inset-0 rounded-full opacity-60" 
                animate={{ 
                  boxShadow: ["0 0 0px 0px rgba(6, 182, 212, 0.5)", "0 0 20px 5px rgba(6, 182, 212, 0.3)", "0 0 0px 0px rgba(6, 182, 212, 0.5)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-3">
              {['About', 'Projects', 'Experience', 'Skills'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1 hoverable"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{link}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex space-x-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:email@example.com", label: "Email" },
              { icon: <ExternalLink size={18} />, href: "https://example.com", label: "Portfolio" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="hoverable p-3 bg-slate-800/80 hover:bg-cyan-900/80 text-slate-300 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center border border-slate-700/50 hover:border-cyan-700/50"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(8, 145, 178, 0.5)"
                }}
                whileTap={{ y: 0 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          
          {/* Copyright */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-slate-400 text-sm mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center">
              <span>© {currentYear} Nirbhay</span>
              <Heart size={12} className="mx-2 text-cyan-500 animate-pulse" />
              <span>All rights reserved</span>
            </div>
            
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Code size={14} className="text-cyan-500 mx-1" />
              <span>and</span>
              <Rocket size={14} className="text-cyan-500 mx-1" />
            </div>
          </motion.div>
          
          <motion.p 
            className="text-slate-500 text-xs font-mono text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            &lt;Built with React, TypeScript, Tailwind CSS & Framer Motion /&gt;
          </motion.p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="hoverable absolute right-6 bottom-6 p-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full shadow-lg shadow-cyan-900/50"
        whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(8, 145, 178, 0.6)" }}
        whileTap={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 0.2 }
        }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;