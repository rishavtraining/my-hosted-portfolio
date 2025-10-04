import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import Button from '../common/Button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = `${profileData.name}`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-background"></div>
      <div className="absolute inset-0 scanline"></div>

      {/* Floating Code Snippets (Decorative) */}
      <motion.div
        className="absolute top-20 left-10 text-terminal-green opacity-10 font-mono text-sm"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        const developer = &#123; ... &#125;;
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-cyber-cyan opacity-10 font-mono text-sm"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        function build() &#123; ... &#125;
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal Prompt */}
          <motion.div
            className="font-mono text-sm text-text-secondary text-left max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-cyber-cyan">$</span> whoami
          </motion.div>

          {/* Name with Typewriter Effect */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-cyber-cyan">&gt;</span>{' '}
            <span className="text-gradient">{displayText}</span>
            {showCursor && <span className="text-terminal-green">_</span>}
          </motion.h1>

          {/* Role & Company */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl text-text-primary font-semibold">
              {profileData.role}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary font-mono">
              <span className="text-terminal-green">@</span> {profileData.company}
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {profileData.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Button variant="primary" href="#experience">
              View Experience
            </Button>
            <Button variant="secondary" href="#contact">
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <motion.a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-terminal-green transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-cyber-cyan transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={profileData.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-electric-purple transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Code2 size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 3, duration: 0.5 },
            y: { duration: 1.5, repeat: Infinity }
          }}
        >
          <ArrowDown className="text-terminal-green" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;