import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate software developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend development, I love creating
                seamless user experiences that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in tech has led me to work with various technologies and frameworks,
                always staying current with the latest industry trends and best practices.
                I believe in writing clean, maintainable code and creating scalable solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <Code2 size={300} className="text-teal-600 opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;