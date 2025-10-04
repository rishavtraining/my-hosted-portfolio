import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 border';
  
  const variants = {
    primary: 'bg-transparent border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-bg-primary hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]',
    secondary: 'bg-transparent border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-bg-primary hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]',
    ghost: 'border-transparent text-text-secondary hover:text-terminal-green hover:border-terminal-green'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const Component = motion.button;
  
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <Component
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;