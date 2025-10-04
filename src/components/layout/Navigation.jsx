import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' }
];

const Navigation = ({ mobile = false, onNavigate }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onNavigate) onNavigate();
    }
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-text-secondary hover:text-terminal-green transition-colors duration-300 font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-cyber-cyan">0{index + 1}.</span> {item.label}
          </motion.a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="text-text-secondary hover:text-terminal-green transition-colors duration-300 font-mono text-sm relative group"
          whileHover={{ y: -2 }}
        >
          <span className="text-cyber-cyan text-xs">0{index + 1}.</span> {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terminal-green group-hover:w-full transition-all duration-300"></span>
        </motion.a>
      ))}
    </nav>
  );
};

export default Navigation;