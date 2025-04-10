import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal, Rocket, Github, Linkedin, Mail, Cpu } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 8]);
  
  // Navigation items with icons
  const navLinks = [
    { name: 'About', icon: <Cpu size={14} className="mr-1" /> },
    { name: 'Projects', icon: <Code size={14} className="mr-1" /> },
    { name: 'Experience', icon: <Rocket size={14} className="mr-1" /> },
    { name: 'Skills', icon: <Terminal size={14} className="mr-1" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['hero', 'about', 'projects', 'experience', 'skills'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(2, 6, 23, 0.85)' : 'transparent',
        backdropFilter: `blur(${isScrolled ? 12 : 0}px)`,
        borderBottom: isScrolled ? '1px solid rgba(51, 65, 85, 0.3)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(2, 6, 23, 0.7)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.a 
            href="#" 
            className="hoverable flex items-center group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative mr-3 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg p-2 group-hover:from-cyan-400 group-hover:to-cyan-600 transition-all duration-300">
              <Terminal className="text-white" size={20} />
              <motion.div 
                className="absolute inset-0 rounded-lg bg-cyan-400/20" 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.2, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-cyan-500">NV</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className={`hoverable relative px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden ${
                  activeSection === link.name.toLowerCase() 
                    ? 'text-white bg-cyan-600/20' 
                    : 'text-slate-300 hover:text-white'
                }`}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="relative z-10 flex items-center">
                  {link.icon}
                  {link.name}
                </span>
                <span className={`absolute inset-0 rounded-full ${
                  activeSection === link.name.toLowerCase() 
                    ? 'bg-gradient-to-r from-cyan-600/30 to-cyan-700/20 border border-cyan-500/30' 
                    : 'bg-transparent group-hover:bg-slate-800/50'
                } transition-all duration-300`}></span>
                <span className={`absolute bottom-0 left-0 h-0.5 ${
                  activeSection === link.name.toLowerCase() ? 'w-full' : 'w-0'
                } bg-cyan-400 group-hover:w-full transition-all duration-300`}></span>
              </motion.a>
            ))}
            
            <motion.div
              variants={itemVariants}
              className="flex ml-3 space-x-2"
            >
              {[
                { icon: <Github size={18} />, href: "https://github.com" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
                { icon: <Mail size={18} />, href: "mailto:email@example.com" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="hoverable flex items-center justify-center w-8 h-8 bg-slate-800 hover:bg-cyan-700/40 rounded-full text-slate-300 hover:text-white transition-all duration-300"
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 5px 15px -5px rgba(6, 182, 212, 0.5)"
                  }}
                  whileTap={{ y: 0 }}
                >
                  {item.icon}
                </motion.a>
              ))}
              
              <motion.a
                href="mailto:email@example.com"
                className="hoverable ml-2 px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full text-sm font-medium shadow-lg shadow-cyan-700/20 flex items-center border border-cyan-500/30"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(8, 145, 178, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={14} className="mr-1" />
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile Navigation Button */}
          <motion.button
            className="hoverable md:hidden text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-800/50 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 z-50 overflow-hidden"
            >
              <div className="px-3 py-4 space-y-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={`#${link.name.toLowerCase()}`}
                    className={`hoverable flex items-center px-3 py-2 rounded-lg ${
                      activeSection === link.name.toLowerCase()
                        ? 'bg-cyan-900/30 text-cyan-300 border-l-2 border-cyan-500'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-cyan-300'
                    } transition-all`}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    {link.name}
                  </motion.a>
                ))}
                
                <div className="pt-2 pb-1 mt-2 border-t border-slate-800/70">
                  <div className="flex justify-between px-3 py-2">
                    {[
                      { icon: <Github size={20} />, href: "https://github.com" },
                      { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                      { icon: <Mail size={20} />, href: "mailto:email@example.com" }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="hoverable w-10 h-10 flex items-center justify-center bg-slate-800/70 text-slate-300 hover:text-cyan-300 rounded-full"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </div>
                  
                  <motion.a
                    href="mailto:email@example.com"
                    className="hoverable mt-3 block text-center px-3 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg font-medium shadow-inner shadow-cyan-500/20"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hire Me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;