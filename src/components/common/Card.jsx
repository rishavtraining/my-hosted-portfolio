import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glow = false, ...props }) => {
  const baseStyles = 'bg-bg-secondary border border-border-color rounded-lg p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:-translate-y-2 hover:border-terminal-green hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]' : '';
  const glowStyles = glow ? 'border-terminal-green shadow-[0_0_20px_rgba(0,255,65,0.3)]' : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;