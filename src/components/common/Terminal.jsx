import React from 'react';
import { motion } from 'framer-motion';

const Terminal = ({ children, title = 'terminal', className = '' }) => {
  return (
    <motion.div
      className={`terminal-window ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-text-muted text-sm ml-2 font-mono">{title}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </motion.div>
  );
};

export const TerminalLine = ({ prompt = '$', command, output }) => {
  return (
    <>
      {command && (
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-command">{command}</span>
        </div>
      )}
      {output && (
        <div className="terminal-output">{output}</div>
      )}
    </>
  );
};

export default Terminal;