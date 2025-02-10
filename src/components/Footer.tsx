import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:email@example.com"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nirbhay. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;