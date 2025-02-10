import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../data/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
  highlightedSkill?: string;
}

const Experience = ({ experiences, highlightedSkill }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`bg-white rounded-lg shadow-md p-6 ${
                highlightedSkill && experience.skills.includes(highlightedSkill)
                  ? 'ring-2 ring-teal-500'
                  : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{experience.role}</h3>
                  <p className="text-teal-600">{experience.company}</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  <p>{experience.period}</p>
                  <p className="text-sm">{experience.location} • {experience.type}</p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      skill === highlightedSkill
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;