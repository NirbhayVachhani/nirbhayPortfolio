import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Terminal, Cpu, Rocket, Braces, Coffee } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Dynamic typing sequence
  const typeSequence = [
    'Nirbhay', 1000, 
    'a Developer', 1000, 
    'a Problem Solver', 1000,
    'a UI Designer', 1000,
    'a Full-Stack Engineer', 1000
  ];

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Flutter', 'AWS', 'Docker'
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 pt-16 relative overflow-hidden">
      {/* Custom cursor elements */}
      <div 
        className="custom-cursor-dot" 
        style={{ 
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />
      <div 
        className="custom-cursor"
        style={{ 
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />
      
      {/* Animated background with stars/grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,rgba(6,182,212,0)_50%)]"></div>
      <div className="absolute inset-0 bg-grid-slate-700/[0.03] bg-[size:40px_40px]"></div>
      
      {/* Particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, index) => {
          const size = Math.random() * 4 + 1;
          const speed = Math.random() * 50 + 20;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full bg-cyan-400"
              style={{
                width: size,
                height: size,
                opacity: Math.random() * 0.5 + 0.1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 1000],
                x: [0, Math.random() * 200 - 100]
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                delay: Math.random() * speed
              }}
            />
          );
        })}
      </div>
      
      {/* Soft glowing shapes in the background (much more subtle) */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div 
            key={index}
            className="absolute rounded-full opacity-20 bg-gradient-to-br from-cyan-500/30 to-slate-900/0"
            style={{
              width: 300 + Math.random() * 300,
              height: 300 + Math.random() * 300,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(80px)'
            }}
            animate={{
              x: [0, 30, 0, -30, 0],
              y: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glassmorphism card effect */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/30 shadow-2xl"
        >
          <div className="text-center">
            <motion.div 
              className="inline-block mb-8 p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Terminal size={44} className="text-cyan-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white leading-tight"
            >
              Hello! I'm{' '}
              <span className="inline-flex items-center gap-1">
                <TypeAnimation
                  sequence={typeSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300 inline-block"
                />
                <span className="typing-cursor mt-2"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-cyan-100/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              A passionate software developer crafting innovative solutions and elegant digital experiences
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-5 mb-12"
            >
              {[
                { icon: <Github size={22} />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin size={22} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail size={22} />, href: "mailto:email@example.com", label: "Email" },
                { icon: <Code size={22} />, href: "#projects", label: "Projects" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hoverable flex items-center gap-2 px-5 py-3 bg-slate-800/60 hover:bg-cyan-900/60 text-white rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20 border border-slate-700/50 backdrop-blur-sm"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10"
            >
              <p className="text-slate-400 mb-4 text-sm uppercase tracking-wider font-semibold">Technologies I work with</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {skills.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="hoverable px-4 py-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 text-cyan-300 rounded-full text-sm font-mono border border-cyan-900/50 shadow-inner"
                    whileHover={{ 
                      scale: 1.08, 
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                      boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)"
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;