import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ExternalLink } from 'lucide-react';
import { blogData } from '../../data/blog';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-bg-secondary relative">
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
            <span className="text-cyber-cyan">06.</span>{' '}
            <span className="text-gradient">Blog & Articles</span>
          </h2>
          <div className="h-1 w-32 bg-terminal-green rounded"></div>
        </motion.div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto space-y-8">
          {blogData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-terminal-green/10 border border-terminal-green flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-terminal-green" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{post.title}</h3>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2 text-text-secondary">
                        <Clock className="text-cyber-cyan" size={16} />
                        <span className="font-mono">{post.readTime}</span>
                      </div>
                      <span className="text-text-muted font-mono">{post.date}</span>
                      <span className="px-2 py-0.5 bg-electric-purple/20 border border-electric-purple rounded text-xs font-mono text-electric-purple">
                        {post.platform}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed">{post.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <Badge key={idx} color="terminal-green">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button variant="ghost" size="sm" href={post.url}>
                      Read Article
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button variant="primary" href="https://medium.com/@rishav_snehil">
            View All Articles on Medium
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;