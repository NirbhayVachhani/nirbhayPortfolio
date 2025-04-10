import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Building, 
  Award, 
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  Star,
  Cpu,
  Tag,
  Milestone,
  TimerReset,
  Sparkles
} from 'lucide-react';
import { Experience as ExperienceType } from '../data/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
  highlightedSkill?: string;
}

const ExperienceCard = ({ 
  experience, 
  isExpanded, 
  onToggle, 
  highlightedSkill,
  index
}: { 
  experience: ExperienceType, 
  isExpanded: boolean, 
  onToggle: () => void, 
  highlightedSkill?: string,
  index: number
}) => {
  // Calculate duration in months for progress bar
  const calculateDuration = () => {
    let endDate = experience.endDate === 'Present' ? new Date() : new Date(experience.endDate);
    let startDate = new Date(experience.startDate);
    return Math.max(1, Math.round((endDate.getTime() - startDate.getTime()) / (30 * 24 * 60 * 60 * 1000)));
  };
  
  const duration = calculateDuration();
  const maxDuration = 36; // 3 years as max for visualization
  const durationPercentage = Math.min(100, (duration / maxDuration) * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="hoverable bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/30 overflow-hidden shadow-lg mb-6 lg:mb-8"
    >
      {/* Card Header */}
      <div 
        onClick={onToggle}
        className={`relative cursor-pointer p-5 sm:p-6 transition-all ${
          isExpanded ? 'bg-gradient-to-r from-slate-800/70 to-slate-900/70' : 'hover:bg-slate-800/30'
        }`}
      >
        {/* Top gradient line when expanded */}
        {isExpanded && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/80 via-cyan-400/50 to-transparent"></div>
        )}
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          {/* Role & Company */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className={`flex-shrink-0 p-2.5 rounded-lg ${
              isExpanded 
                ? 'bg-gradient-to-br from-cyan-500 to-cyan-700 text-white shadow-md shadow-cyan-500/20' 
                : 'bg-slate-800 text-cyan-400'
            } transition-all duration-300`}>
              <Briefcase size={20} className="sm:size-[22px]" />
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-white/95 group-hover:text-white">
                {experience.role}
              </h3>
              <div className="flex items-center text-cyan-400 font-medium mt-0.5">
                <Building size={14} className="mr-1.5 text-cyan-500/70" />
                {experience.company}
              </div>
            </div>
          </div>
          
          {/* Duration & Location */}
          <div className="flex flex-col sm:items-end text-sm text-slate-300 ml-9 sm:ml-0">
            <div className="flex items-center mb-1">
              <Calendar size={14} className="mr-1.5 text-cyan-500/70" />
              <span className="whitespace-nowrap">{experience.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1.5 text-cyan-500/70" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-5 right-5 text-cyan-400 sm:relative sm:top-auto sm:right-auto sm:ml-2"
          >
            <div className="size-8 flex items-center justify-center">
              <ChevronRight size={isExpanded ? 24 : 20} className="transition-all" />
            </div>
          </motion.div>
        </div>
        
        {/* Pill badges for Employment Type */}
        <div className="flex mt-3 ml-12 sm:ml-14">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/20 text-cyan-300 border border-cyan-900/30">
            <Tag size={10} className="mr-1" /> 
            {experience.type}
          </span>
        </div>
      </div>
      
      {/* Card Details (expanded content) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-slate-700/30 bg-slate-950/20"
          >
            <div className="p-5 sm:p-6 space-y-6">
              {/* Duration Timeline */}
              <div className="bg-slate-800/40 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                  <div className="flex items-center">
                    <Clock size={12} className="mr-1.5 text-cyan-400" />
                    <span>
                      {experience.startDate && experience.startDate.includes('-') ? 
                        new Date(experience.startDate).toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) : 
                        experience.startDate}
                    </span>
                  </div>
                  <div className="text-xs font-medium">
                    <span className="text-cyan-400">{duration}</span>
                    <span className="text-slate-500 ml-1">months</span>
                  </div>
                  <div className="flex items-center">
                    {experience.endDate === 'Present' 
                      ? <span className="animate-pulse text-cyan-300 font-medium">Present</span> 
                      : <span>
                          {experience.endDate && experience.endDate.includes('-') ?
                            new Date(experience.endDate).toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) :
                            experience.endDate}
                        </span>
                    }
                  </div>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${durationPercentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full" 
                  />
                </div>
              </div>
              
              {/* Responsibilities */}
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                    <Milestone size={12} />
                  </div>
                  <h4 className="text-base font-semibold text-white">Key Responsibilities</h4>
                </div>
                
                <ul className="space-y-2.5 ml-1">
                  {experience.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                      className="flex items-start gap-2.5 group"
                    >
                      <CheckCircle2 size={14} className="text-cyan-400 mt-1.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-slate-300 text-sm">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                    <Sparkles size={12} />
                  </div>
                  <h4 className="text-base font-semibold text-white">Skills & Expertise</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className={`hoverable inline-flex items-center px-3 py-1 rounded-full text-xs ${
                        skill === highlightedSkill
                          ? 'bg-cyan-600/50 text-white border border-cyan-500/50 shadow-sm shadow-cyan-500/20' 
                          : 'bg-slate-800/60 text-cyan-300 border border-slate-700/60'
                      } transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: skill === highlightedSkill ? "rgba(8, 145, 178, 0.5)" : "rgba(8, 145, 178, 0.2)" 
                      }}
                    >
                      <Star size={10} className="mr-1 text-cyan-300" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = ({ experiences, highlightedSkill }: ExperienceProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  
  // Sort experiences by start date in descending order (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aDate = a.startDate === "Present" ? new Date() : new Date(a.startDate);
    const bDate = b.startDate === "Present" ? new Date() : new Date(b.startDate);
    return bDate.getTime() - aDate.getTime();
  });
  
  // State to track expanded nodes
  const [expandedNodes, setExpandedNodes] = useState<Record<number, boolean>>(
    sortedExperiences.reduce((acc, exp) => ({...acc, [exp.id]: true}), {})
  );
  
  // Toggle node expansion
  const toggleNode = (id: number) => {
    setExpandedNodes(prev => ({...prev, [id]: !prev[id]}));
  };
  
  // Group experiences by year for the side timeline
  const experiencesByYear = sortedExperiences.reduce((acc, exp) => {
    const year = exp.startDate.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(exp);
    return acc;
  }, {} as Record<string, ExperienceType[]>);
  
  const years = Object.keys(experiencesByYear).sort((a, b) => Number(b) - Number(a));
  
  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-slate-700/[0.03] bg-[size:32px_32px] opacity-25"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(12,74,110,0))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">Experience</h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-cyan-100/70 max-w-2xl mx-auto text-base sm:text-lg">
            My professional journey through various roles and responsibilities
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Side timeline for tablet/desktop */}
          <div className="hidden md:block w-44 xl:w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-12 px-4">
              {years.map((year, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-8 border-l-2 border-slate-700"
                >
                  <motion.div 
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-cyan-500"
                    whileHover={{ scale: 1.2, backgroundColor: "#06b6d4" }}
                  />
                  <h3 className="text-xl font-bold text-white">{year}</h3>
                  <div className="mt-1 text-slate-400 text-sm">
                    {experiencesByYear[year].length} position{experiencesByYear[year].length === 1 ? '' : 's'}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        
          {/* Main content */}
          <div className="flex-1">
            <AnimatePresence>
              {sortedExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  isExpanded={expandedNodes[experience.id]}
                  onToggle={() => toggleNode(experience.id)}
                  highlightedSkill={highlightedSkill}
                  index={index}
                />
              ))}
            </AnimatePresence>
            
            {/* Summary footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-between mt-10 pt-6 border-t border-slate-700/30 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <TimerReset size={16} className="text-cyan-500" />
                <span>Total: <span className="text-cyan-400 font-medium">{sortedExperiences.length}</span> professional positions</span>
              </div>
              
              <div className="flex items-center text-slate-500">
                <span className="text-cyan-500 mr-2">&lt;/</span>
                <span>experience</span>
                <span className="text-cyan-500 ml-0.5">&gt;</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;