import { GraduationCap } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import { Experience, Education } from '../types';

interface ExperienceSectionProps {
  experience: Experience[];
  education: Education[];
}

export function ExperienceSection({ experience, education }: ExperienceSectionProps) {
  return (
    <section id="process" className="py-section-gap border-t border-outline-variant/20 flex flex-col gap-section-gap">
      {/* Header */}
      <motion.header 
        className="flex flex-col gap-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-[80px] md:leading-[90px] font-bold text-on-surface tracking-tight">
          Experience Timeline
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A chronological overview of my professional journey, highlighting key roles
          and responsibilities in architecting scalable systems and designing intuitive
          interfaces.
        </p>
      </motion.header>

      {/* Professional Timeline */}
      <div className="flex flex-col gap-12">
        <motion.h2 
          className="text-[40px] font-semibold text-on-surface border-b border-outline-variant/20 pb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Professional Roles
        </motion.h2>
        <div className="flex flex-col relative">
          {experience.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item relative pl-0 md:pl-24 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-line hidden md:block absolute left-0 top-0 h-full w-12">
                <div className={`absolute left-5 top-2 w-3 h-3 rounded-full ring-4 ring-background z-10 ${index === 0 ? 'bg-primary-container' : 'bg-outline'}`}></div>
              </div>
              <div className="glass-card p-8 rounded-xl flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col gap-2">
                  <span className="text-[12px] font-medium text-primary uppercase tracking-[0.05em]">
                    {item.period}
                  </span>
                  <h3 className="text-[32px] font-semibold text-on-surface leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-base text-on-surface-variant">
                    {item.company}
                  </span>
                </div>
                <div className="md:w-2/3 flex flex-col gap-4">
                  <p className="text-base text-on-surface leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {item.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-surface-container rounded-full text-[12px] font-medium text-on-surface-variant"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academic Foundation */}
      <div className="flex flex-col gap-12 pt-12">
        <motion.h2 
          className="text-[40px] font-semibold text-on-surface border-b border-outline-variant/20 pb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Academic Foundation
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className={`glass-card p-8 rounded-xl border-l-4 ${index === 0 ? 'border-l-primary-container' : 'border-l-outline'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className={`w-8 h-8 ${index === 0 ? 'text-primary' : 'text-outline'}`} />
                <h3 className="text-[32px] font-semibold text-on-surface leading-tight">
                  {item.degree}
                </h3>
              </div>
              <p className="text-base text-on-surface-variant mb-2">
                {item.school}
              </p>
              <p className="text-base text-on-surface leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
