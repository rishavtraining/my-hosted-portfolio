import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Award, Trophy, Medal, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { achievementsData, recognitionsData } from '../../data/achievements';
import Card from '../common/Card';


// --- Constants and Mappings ---

const iconMap = {
  code: Code2,
  award: Award,
  trophy: Trophy,
  medal: Medal,
  'graduation-cap': GraduationCap
};

const ITEMS_PER_PAGE = 3;


// --- Achievements Component ---

const Achievements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate the total number of pages
  const totalPages = Math.ceil(recognitionsData.length / ITEMS_PER_PAGE);

  // Calculate the recognitions to display on the current page
  const paginatedRecognitions = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return recognitionsData.slice(startIndex, endIndex);
  }, [currentPage]); // Re-run when currentPage changes

  // Handlers for pagination
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section id="achievements" className="py-20 md:py-32 bg-bg-primary relative">
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
            <span className="text-cyber-cyan">05.</span>{' '}
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="h-1 w-32 bg-terminal-green rounded"></div>
        </motion.div>

        {/* Achievements Grid (Unchanged) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievementsData.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon];
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${achievement.color}20`,
                      borderColor: achievement.color,
                      borderWidth: '1px'
                    }}
                  >
                    <IconComponent size={32} style={{ color: achievement.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{achievement.title}</h3>
                  <p className="text-text-secondary text-sm mb-3">{achievement.description}</p>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono"
                    style={{
                      backgroundColor: `${achievement.color}20`,
                      color: achievement.color
                    }}
                  >
                    {achievement.stats}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* --- Recognitions Section (Updated for Pagination) --- */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-terminal-green mb-8 text-center">
            <span className="text-cyber-cyan">//</span> Recent Recognitions
          </h3>
          <div className="space-y-6">
            {paginatedRecognitions.map((recognition, index) => (
              <motion.div
                key={recognition.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card hover={false} glow>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-text-primary">{recognition.title}</h4>
                        <span className="px-3 py-1 bg-terminal-green/20 border border-terminal-green rounded-full text-xs font-mono text-terminal-green">
                          {recognition.type}
                        </span>
                      </div>
                      <p className="text-cyber-cyan text-sm font-mono mb-2">{recognition.date}</p>
                      <p className="text-text-secondary text-sm mb-3">
                        <span className="text-text-primary font-semibold">Reason: </span>
                        {recognition.reason}
                      </p>
                      <p className="text-text-secondary text-sm mb-3">{recognition.description}</p>
                      <p className="text-text-muted text-xs font-mono">
                        <span className="text-electric-purple">Awarded by:</span> {recognition.awardedBy}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              {/* Previous Button */}
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                  currentPage === 1
                    ? 'text-text-muted/50 cursor-not-allowed border border-text-muted/30'
                    : 'text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Page Indicator */}
              <span className="text-lg font-mono text-terminal-green">
                Page <span className="text-electric-purple font-bold">{currentPage}</span> of {totalPages}
              </span>
              
              {/* Next Button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                  currentPage === totalPages
                    ? 'text-text-muted/50 cursor-not-allowed border border-text-muted/30'
                    : 'text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10'
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};


export default Achievements;