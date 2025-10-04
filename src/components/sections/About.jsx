import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import { profileData } from '../../data/profile';
import { educationData } from '../../data/experience';
import Terminal, { TerminalLine } from '../common/Terminal';
import Card from '../common/Card';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-bg-primary relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-cyan">01.</span>{' '}
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-32 bg-terminal-green rounded"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Window - System Info */}
          <Terminal title="system-info.sh">
            <TerminalLine prompt="$" command="cat /proc/developer/info" />
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
                <span className="text-cyber-cyan">company:</span>{' '}
                <span className="text-text-primary">"{profileData.company}"</span>
              </div>
              <div>
                <span className="text-cyber-cyan">location:</span>{' '}
                <span className="text-text-primary">"{profileData.location}"</span>
              </div>
              <div>
                <span className="text-cyber-cyan">email:</span>{' '}
                <span className="text-text-primary">"{profileData.email}"</span>
              </div>
              <div className="pt-4 border-t border-border-color">
                <span className="text-cyber-cyan">status:</span>{' '}
                <span className="text-terminal-green">"Available for opportunities"</span>
              </div>
            </div>
          </Terminal>

          {/* Education Card */}
          <Card hover={false}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg bg-terminal-green/10 border border-terminal-green flex items-center justify-center flex-shrink-0">
                  <User className="text-terminal-green" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Education</h3>
                  <div className="space-y-2">
                    <p className="text-terminal-green font-semibold">{educationData.degree}</p>
                    <p className="text-text-secondary">{educationData.institution}</p>
                    <p className="text-cyber-cyan font-mono text-sm">CGPA: {educationData.gpa}</p>
                    <p className="text-text-muted text-sm font-mono">{educationData.duration}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border-color pt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="text-cyber-cyan" size={16} />
                    <span className="text-text-secondary">{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="text-terminal-green" size={16} />
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-text-secondary hover:text-terminal-green transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="text-electric-purple" size={16} />
                    <span className="text-text-secondary">{profileData.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <motion.div
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card>
            <p className="text-text-secondary leading-relaxed">
              {profileData.summary2}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;