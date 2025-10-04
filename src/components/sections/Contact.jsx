import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code2, BookOpen, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import Button from '../common/Button';
import Terminal, { TerminalLine } from '../common/Terminal';
import Card from '../common/Card';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      color: '#00ff41'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@rishavtraining',
      href: profileData.links.github,
      color: '#00d9ff'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@rishavSnehil',
      href: profileData.links.linkedin,
      color: '#a855f7'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      value: '@rishavSnehil',
      href: profileData.links.leetcode,
      color: '#ff006e'
    },
    {
      icon: BookOpen,
      label: 'Medium',
      value: '@rishav_snehil',
      href: profileData.links.medium,
      color: '#fbbf24'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-bg-primary relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-cyan">07.</span>{' '}
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="h-1 w-32 bg-terminal-green rounded mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Terminal title="contact.sh">
              <TerminalLine prompt="$" command="cat contact.txt" />
              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <span className="text-cyber-cyan">name:</span>{' '}
                  <span className="text-text-primary">"{profileData.name}"</span>
                </div>
                <div>
                  <span className="text-cyber-cyan">role:</span>{' '}
                  <span className="text-text-primary">"{profileData.role}"</span>
                </div>
                <div>
                  <span className="text-cyber-cyan">location:</span>{' '}
                  <span className="text-text-primary">"{profileData.location}"</span>
                </div>
                <div>
                  <span className="text-cyber-cyan">email:</span>{' '}
                  <span className="text-terminal-green">"{profileData.email}"</span>
                </div>
                <div>
                  <span className="text-cyber-cyan">phone:</span>{' '}
                  <span className="text-terminal-green">"{profileData.phone}"</span>
                </div>
                <div className="pt-4 border-t border-border-color">
                  <span className="text-cyber-cyan">status:</span>{' '}
                  <span className="text-terminal-green">"Available"</span>
                </div>
              </div>
            </Terminal>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${contact.color}20`,
                          borderColor: contact.color,
                          borderWidth: '1px'
                        }}
                      >
                        <contact.icon size={24} style={{ color: contact.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-text-primary font-semibold">{contact.label}</h4>
                        <p className="text-text-secondary text-sm font-mono">{contact.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="primary" size="lg" href={`mailto:${profileData.email}`}>
            Send me an Email
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;