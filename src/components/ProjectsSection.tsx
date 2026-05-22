import { ArrowRight, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);
  const categories = ['All', 'Web', 'Mobile', 'Design'];

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(4); // Reset visible count on filter change
  };

  return (
    <section id="work" className="py-section-gap border-t border-outline-variant/20">
      <motion.div 
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-[80px] md:leading-[90px] font-bold text-on-surface mb-6 tracking-tight">
          Selected Projects
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A curated collection of digital experiences, blending precise engineering
          with evocative aesthetics. Exploring the intersection of form and function
          across various mediums.
        </p>
      </motion.div>

      {/* Filter Navigation */}
      <motion.div 
        className="flex flex-wrap gap-4 md:gap-8 mb-16 border-b border-surface-container-highest pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`text-[12px] font-medium uppercase tracking-[0.05em] pb-2 px-1 transition-colors ${
              filter === cat
                ? 'text-primary border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-24" layout>
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`glass-card rounded-lg group flex flex-col h-full ${project.app_url ? 'cursor-pointer' : ''} ${
                index % 2 !== 0 ? 'md:mt-16' : ''
              }`}
              onClick={() => {
                if (project.app_url) {
                  window.open(project.app_url, '_blank');
                }
              }}
            >
              <div className="card-image-wrapper rounded-t-lg aspect-[4/3] bg-surface-container-highest relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="inline-flex items-center text-primary text-[12px] font-medium uppercase tracking-[0.05em]">
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-surface-container border border-surface-container-highest rounded text-on-surface-variant text-[10px] font-medium uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-[32px] font-semibold text-on-surface mb-3 leading-tight">
                  {project.title}
                </h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Action */}
      <AnimatePresence>
        {hasMore && (
          <motion.div 
            className="mt-24 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <button 
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="text-[12px] font-medium uppercase tracking-[0.05em] px-8 py-4 border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all duration-300 rounded flex items-center gap-2 group"
            >
              Load More Projects
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
