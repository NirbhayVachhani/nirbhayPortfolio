import React, { useState, useEffect } from 'react';
import { projects, experiences, skillCategories } from './data/portfolio';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { motion, AnimatePresence } from 'framer-motion';

// Simplified About component
const About = () => (
  <div 
    id="about"
    style={{
      padding: '80px 20px',
      backgroundColor: '#1f2937'
    }}
  >
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '20px',
        textAlign: 'center'
      }}>About Me</h2>
      <div style={{
        width: '80px',
        height: '4px',
        backgroundColor: '#0d9488',
        margin: '0 auto 40px'
      }}></div>
      
      <div style={{
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        gap: '40px'
      }}>
        <div style={{
          flex: 1,
          backgroundColor: '#111827',
          padding: '30px',
          borderRadius: '8px',
          border: '1px solid #374151'
        }}>
          <p style={{ color: '#d1d5db', marginBottom: '20px' }}>
            I'm a passionate software developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend development, I love creating
            seamless user experiences that solve real-world problems.
          </p>
          <p style={{ color: '#d1d5db' }}>
            My journey in tech has led me to work with various technologies and frameworks,
            always staying current with the latest industry trends and best practices.
            I believe in writing clean, maintainable code and creating scalable solutions.
          </p>
        </div>
        
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ 
            width: '300px', 
            height: '300px', 
            backgroundColor: '#0d9488',
            opacity: 0.2,
            borderRadius: '50%',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              {'</>'}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// Simplified Skills component
const Skills = ({ 
  categories, 
  highlightedSkill, 
  onSkillClick 
}: { 
  categories: any[], 
  highlightedSkill?: string,
  onSkillClick: (skill: string) => void
}) => {
  return (
    <div 
      id="skills"
      style={{
        padding: '80px 20px',
        backgroundColor: '#1f2937'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '36px', 
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px',
          textAlign: 'center'
        }}>Skills</h2>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#0d9488',
          margin: '0 auto 40px'
        }}></div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {categories.map(category => (
            <div key={category.name} style={{
              backgroundColor: '#111827',
              borderRadius: '8px',
              padding: '20px',
              border: '1px solid #374151'
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '15px'
              }}>{category.name}</h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {category.skills.map((skill: string) => (
                  <button
                    key={skill}
                    onClick={() => onSkillClick(skill === highlightedSkill ? '' : skill)}
                    style={{
                      backgroundColor: skill === highlightedSkill ? '#0d9488' : '#374151',
                      color: skill === highlightedSkill ? 'white' : '#5eead4',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      transition: 'all 0.2s'
                    }}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simplified Footer component
const Footer = () => (
  <div style={{
    padding: '40px 20px',
    backgroundColor: '#0f172a',
    borderTop: '1px solid #1f2937',
    textAlign: 'center'
  }}>
    <p style={{ color: '#9ca3af', fontSize: '14px' }}>
      © {new Date().getFullYear()} Nirbhay. All rights reserved.
    </p>
    <p style={{ color: '#64748b', fontSize: '12px', marginTop: '10px' }}>
      Built with React, TypeScript & Love
    </p>
  </div>
);

// Simplified Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      padding: '15px 20px',
      transition: 'all 0.3s',
      zIndex: 1000,
      borderBottom: isScrolled ? '1px solid #1f2937' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#0d9488',
          textDecoration: 'none'
        }}>
          NV
        </a>
        
        <div style={{
          display: 'flex',
          gap: '20px'
        }}>
          {['About', 'Projects', 'Experience', 'Skills'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// ScrollToTop component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  if (!isVisible) return null;
  
  return (
    <button 
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#0d9488',
        color: 'white',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000
      }}
    >
      ↑
    </button>
  );
};

function App() {
  const [highlightedSkill, setHighlightedSkill] = useState<string>('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const clearFilter = () => {
      setHighlightedSkill('');
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("clearFilter", clearFilter);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("clearFilter", clearFilter);
      clearTimeout(timer);
    };
  }, []);
  
  const handleSkillClick = (skill: string) => {
    setHighlightedSkill(skill);
    // Scroll to projects section when a skill is selected
    if (skill) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["20%", "50%", "20%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-teal-500"
          >
            <div className="w-full h-full bg-slate-900 scale-[0.85] flex items-center justify-center text-cyan-500 text-xl font-bold">
              NV
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative font-sans"
        >
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
          
          <Navbar />
          <Hero />
          <About />
          <Projects 
            projects={projects} 
            highlightedSkill={highlightedSkill} 
          />
          <Experience 
            experiences={experiences}
            highlightedSkill={highlightedSkill}
          />
          <Skills
            categories={skillCategories}
            highlightedSkill={highlightedSkill}
            onSkillClick={handleSkillClick}
          />
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;