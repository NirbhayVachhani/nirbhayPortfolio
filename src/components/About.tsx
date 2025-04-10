import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Terminal, BrainCircuit, Laptop, Coffee, Stars, Cpu, Database, Braces, Layers } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  
  const floatingIcons = [
    { icon: <Coffee className="text-cyan-400" />, position: "top-10 left-20", size: 60, rotation: 15, duration: 6 },
    { icon: <BrainCircuit className="text-cyan-400" />, position: "bottom-20 right-10", size: 70, rotation: -10, duration: 7 },
    { icon: <Laptop className="text-cyan-300" />, position: "top-40 right-20", size: 50, rotation: 5, duration: 8 },
    { icon: <Stars className="text-cyan-400" />, position: "bottom-10 left-20", size: 60, rotation: -5, duration: 5 },
    { icon: <Cpu className="text-cyan-300" />, position: "top-5 right-40", size: 40, rotation: 10, duration: 9 },
    { icon: <Database className="text-cyan-400" />, position: "bottom-40 left-10", size: 45, rotation: -8, duration: 7.5 },
  ];

  const codeSnippets = [
    { title: "aboutMe", content: "I'm a passionate software developer with expertise in building modern web applications. With a strong foundation in both frontend and backend development, I love creating seamless user experiences that solve real-world problems." },
    { title: "techJourney", content: "My journey in tech has led me to work with various technologies and frameworks, always staying current with the latest industry trends and best practices. I believe in writing clean, maintainable code and creating scalable solutions." },
    { title: "approach", content: "I approach each project with a focus on performance, accessibility, and user experience. My goal is to create applications that are not only visually appealing but also intuitive to use and maintain." }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full overflow-hidden">
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              className={`absolute opacity-20 ${icon.position}`}
              animate={{
                y: [0, 20, 0],
                rotate: [0, icon.rotation, 0],
              }}
              transition={{
                duration: icon.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ width: icon.size, height: icon.size }}
            >
              {React.cloneElement(icon.icon, { size: icon.size })}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-cyan-100/70 max-w-2xl mx-auto text-lg">
            Get to know me and my approach to development
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover-glow hoverable">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="ml-auto">
                  <Braces size={18} className="text-cyan-400/50" />
                </div>
              </div>
              
              <div className="space-y-6">
                {codeSnippets.map((snippet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="font-mono text-cyan-400 mb-2 flex items-center gap-2">
                      <Layers size={14} />const {snippet.title} = () =&gt; {`{`}
                    </div>
                    
                    <div className="text-slate-300 leading-relaxed mb-4 pl-6 border-l-2 border-cyan-900/50 font-light">
                      <span className="text-cyan-400 font-medium">return</span> <span className="text-blue-300">'</span>
                        {snippet.content}
                      <span className="text-blue-300">'</span>
                    </div>
                    
                    <div className="font-mono text-cyan-400">{'}'}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ scale, opacity }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 flex justify-center relative"
          >
            <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-slate-900/20 rounded-2xl border border-cyan-800/30 backdrop-blur-sm">
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 60px rgba(6, 182, 212, 0.2)",
                      "0 0 20px rgba(6, 182, 212, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-72 h-72 mx-auto relative rounded-full flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 30, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full" />
                    <div className="absolute top-1/4 right-0 w-3 h-3 bg-cyan-400 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full" />
                    <div className="absolute top-1/2 left-0 w-3 h-3 bg-cyan-400 rounded-full" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ 
                      rotate: -360,
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                    className="w-56 h-56 rounded-full border-2 border-dashed border-cyan-500/30 flex items-center justify-center"
                  >
                    <motion.div 
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                      className="w-40 h-40 rounded-full border-2 border-dashed border-cyan-400/40 flex items-center justify-center"
                    >
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/80 to-cyan-700/80 flex items-center justify-center text-white">
                        <Terminal size={40} />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="mt-8 text-center">
                  <p className="text-cyan-300 font-medium">Technologies & Frameworks</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["React", "TypeScript", "Node.js", "AWS", "Flutter"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="inline-block px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-cyan-900/70 hoverable"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;