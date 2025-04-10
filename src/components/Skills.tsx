import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Layers, Settings, Users } from 'lucide-react';
import { SkillCategory } from '../data/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
  highlightedSkill?: string;
  onSkillClick: (skill: string) => void;
}

const Skills = ({ categories, highlightedSkill, onSkillClick }: SkillsProps) => {
  // Map category names to icons
  const getCategoryIcon = (categoryName: string) => {
    switch(categoryName) {
      case 'Front-End':
        return <Code className="text-teal-400" size={24} />;
      case 'Back-End':
        return <Database className="text-teal-400" size={24} />;
      case 'Full-Stack':
        return <Layers className="text-teal-400" size={24} />;
      case 'Tools, Platforms & Operating Systems':
        return <Settings className="text-teal-400" size={24} />;
      case 'SDLC Methods':
        return <Users className="text-teal-400" size={24} />;
      default:
        return <Cpu className="text-teal-400" size={24} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technical expertise and capabilities I've developed over the years
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover-glow"
            >
              <div className="flex items-center mb-4">
                {getCategoryIcon(category.name)}
                <h3 className="text-xl font-bold ml-3 text-teal-300">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.button
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSkillClick(skill === highlightedSkill ? '' : skill)}
                    className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                      skill === highlightedSkill
                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20'
                        : 'bg-gray-700 text-teal-300 hover:bg-gray-600 border border-gray-600'
                    }`}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;