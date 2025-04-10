import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code, Terminal, ArrowUpRight, Folder, FolderTree, Globe, Layers, Star, PanelRight } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectsProps {
  projects: Project[];
  highlightedSkill?: string;
}

const Projects = ({ projects, highlightedSkill }: ProjectsProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = highlightedSkill
    ? projects.filter(project => project.technologies.includes(highlightedSkill))
    : projects;

  // Particle effect for projects section
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-cyan-500"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-cyan-100/70 max-w-2xl mx-auto text-lg">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
          
          {highlightedSkill && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 inline-flex items-center px-4 py-2 bg-cyan-900/40 text-cyan-300 rounded-full backdrop-blur-sm border border-cyan-800/50"
            >
              <Star size={14} className="mr-2" />
              <span>Filtered by: <span className="font-semibold">{highlightedSkill}</span></span>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('clearFilter'))} 
                className="ml-2 text-cyan-400 hover:text-white"
              >
                ×
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        {filteredProjects.length > 2 && (
          <div className="hidden md:flex items-center justify-center mb-8 text-slate-400 text-sm">
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PanelRight size={16} className="mr-2 inline-block" />
              <span>Scroll to see more projects</span>
            </motion.div>
          </div>
        )}

        {/* Projects grid with improved responsive display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`hoverable bg-slate-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 shadow-xl transition-all duration-300 ${
                  highlightedSkill && project.technologies.includes(highlightedSkill)
                    ? 'ring-2 ring-cyan-500/50 shadow-cyan-500/10'
                    : ''
                }`}
              >
                {/* Terminal-style header */}
                <div className="h-9 bg-slate-800/80 flex items-center justify-between px-4 border-b border-slate-700/50">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-1.5 mr-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <Folder size={14} className="text-cyan-400 mr-2" />
                    <span className="text-xs font-mono text-slate-300">{project.title.toLowerCase().replace(/\s+/g, '_')}.dev</span>
                  </div>
                </div>
                
                {/* Project image with overlay */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-all duration-700 filter brightness-90 group-hover:brightness-110 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80" 
                  />
                  
                  {/* Floating icon overlay */}
                  <motion.div 
                    className="absolute top-3 right-3 bg-cyan-900/40 backdrop-blur-md p-2 rounded-full border border-cyan-700/30"
                    animate={{ 
                      y: [0, 5, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Globe size={20} className="text-cyan-300" />
                  </motion.div>
                  
                  {/* Project title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Project details */}
                <div className="p-5">
                  <p className="text-slate-300 text-sm mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies used */}
                  <div className="mb-5">
                    <div className="flex items-center mb-2">
                      <Layers size={14} className="text-cyan-500 mr-2" />
                      <span className="text-xs font-medium text-slate-400">TECHNOLOGIES</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-full text-xs ${
                            tech === highlightedSkill
                              ? 'bg-cyan-600/40 text-white border border-cyan-500/50'
                              : 'bg-slate-800/80 text-cyan-300 border border-slate-700/60 hover:border-cyan-700/60 transition-colors'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-800/80">
                    <motion.a
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hoverable flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} className="mr-1.5" />
                      <span className="text-sm">View Code</span>
                    </motion.a>
                    
                    {project.demoUrl ? (
                      <motion.a
                        whileHover={{ scale: 1.05, x: -3 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hoverable flex items-center text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <span className="text-sm">Live Demo</span>
                        <ArrowUpRight size={16} className="ml-1.5" />
                      </motion.a>
                    ) : (
                      <span className="text-xs text-slate-500 italic">No demo available</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50"
            >
              <Terminal size={40} className="mx-auto mb-4 text-slate-500" />
              <h3 className="text-xl text-slate-400 mb-2">No matching projects</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                No projects match the selected skill filter. 
                Try selecting a different skill or clear the filter.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;