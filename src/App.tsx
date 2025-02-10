import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { projects, experiences, skillCategories } from './data/portfolio';

function App() {
 

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects}  />
      <Experience experiences={experiences}  />
      <Skills
        categories={skillCategories}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;