import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../../data/experience';
import Card from '../common/Card';
import Badge from '../common/Badge';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-bg-secondary relative">
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
            <span className="text-cyber-cyan">02.</span>{' '}
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-32 bg-terminal-green rounded"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-color"></div>

          {experienceData.map((job, index) => (
            <motion.div
              key={job.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              } md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? 'md:right-0' : 'md:left-0'
                } left-0 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-terminal-green border-4 border-bg-secondary shadow-[0_0_20px_rgba(0,255,65,0.5)]`}
              ></div>

              <Card>
                {/* Company & Role */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-cyber-cyan" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-1">{job.role}</h3>
                    <p className="text-terminal-green font-semibold text-lg">{job.company}</p>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Calendar className="text-electric-purple" size={16} />
                    <span className="font-mono">{job.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <MapPin className="text-neon-pink" size={16} />
                    <span className="font-mono">{job.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-text-secondary text-sm">
                      <span className="text-terminal-green mt-1 flex-shrink-0">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, idx) => (
                    <Badge key={idx} color="terminal-green">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;