import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ children, color = 'terminal-green', className = '', ...props }) => {
  const colorMap = {
    'terminal-green': 'border-terminal-green text-terminal-green',
    'cyber-cyan': 'border-cyber-cyan text-cyber-cyan',
    'electric-purple': 'border-electric-purple text-electric-purple',
    'neon-pink': 'border-neon-pink text-neon-pink',
    'warning-yellow': 'border-warning-yellow text-warning-yellow'
  };
  
  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 text-xs font-mono border rounded-full ${colorMap[color]} ${className}`}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;