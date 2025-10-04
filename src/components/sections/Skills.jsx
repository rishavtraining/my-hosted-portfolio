import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import Card from '../common/Card';
import Terminal from '../common/Terminal';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-text-primary font-mono text-sm">{skill.name}</span>
        <span className="text-terminal-green font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden border border-border-color">
        <motion.div
          className="h-full bg-gradient-to-r from-terminal-green to-cyber-cyan"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', data: skillsData.languages, icon: 'languages' },
    { title: 'Frameworks', data: skillsData.frameworks, icon: 'frameworks' },
    { title: 'Cloud & DevOps', data: skillsData.cloud, icon: 'cloud' },
    { title: 'Tools', data: skillsData.tools, icon: 'tools' },
    { title: 'AI/ML', data: skillsData.ai_ml, icon: 'ai' }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-bg-secondary relative">
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
            <span className="text-cyber-cyan">04.</span>{' '}
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-1 w-32 bg-terminal-green rounded"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal-style Skills Overview */}
          <div className="lg:col-span-2">
            <Terminal title="skills.sh">
              <div className="font-mono text-sm space-y-1">
                <div>
                  <span className="text-cyber-cyan">$</span>{' '}
                  <span className="text-text-primary">ls -la /skills/</span>
                </div>
                <div className="text-text-secondary mt-2">
                  drwxr-xr-x languages/
                </div>
                <div className="text-text-secondary">
                  drwxr-xr-x frameworks/
                </div>
                <div className="text-text-secondary">
                  drwxr-xr-x cloud-devops/
                </div>
                <div className="text-text-secondary">
                  drwxr-xr-x tools/
                </div>
                <div className="text-text-secondary">
                  drwxr-xr-x ai-ml/
                </div>
                <div className="mt-2">
                  <span className="text-cyber-cyan">$</span>{' '}
                  <span className="text-text-primary">echo "Proficiency levels displayed below"</span>
                </div>
              </div>
            </Terminal>
          </div>

          {/* Skill Categories */}
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-terminal-green mb-6 font-mono">
                  <span className="text-cyber-cyan">//</span> {category.title}
                </h3>
                <div className="space-y-4">
                  {category.data.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
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

export default Skills;