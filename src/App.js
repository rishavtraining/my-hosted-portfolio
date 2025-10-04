import React, { useEffect } from 'react';
import './App.css';
import './styles/globals.css';
import './styles/terminal.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

// Custom Hooks
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Enable smooth scrolling with Lenis
  useSmoothScroll();

  // Add lenis class to html element for proper styling
  useEffect(() => {
    document.documentElement.classList.add('lenis', 'lenis-smooth');
    
    return () => {
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return (
    <div className="App bg-bg-primary min-h-screen">
      {/* Background Effects */}
      <div className="grid-background"></div>
      <div className="scanline"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
