import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, BookOpen } from 'lucide-react';
import { profileData } from '../../data/profile';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: profileData.links.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.links.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: profileData.links.leetcode, label: 'LeetCode' },
    { icon: BookOpen, href: profileData.links.medium, label: 'Medium' }
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-color py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-mono text-lg font-bold text-terminal-green mb-2">
              <span className="text-cyber-cyan">&lt;</span>
              Rishav Snehil
              <span className="text-cyber-cyan">/&gt;</span>
            </h3>
            <p className="text-text-muted text-sm font-mono">Software Developer II @ Barclays</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-terminal-green transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-muted text-sm font-mono">
              © {new Date().getFullYear()} <span className="text-cyber-cyan">$</span> Built with React
            </p>
            <p className="text-text-muted text-xs font-mono mt-1">
              Designed & Developed by Rishav Snehil
            </p>
          </div>
        </div>

        {/* Terminal-style line */}
        <div className="mt-8 pt-8 border-t border-border-color">
          <div className="text-center font-mono text-xs text-terminal-green">
            <span className="text-cyber-cyan">$</span> echo "Thanks for visiting!"
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;