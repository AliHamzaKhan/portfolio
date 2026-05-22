import { Linkedin, Code, Mail, Phone } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import { PersonalInfo } from '../types';

interface HeroProps {
  personal: PersonalInfo;
}

export function Hero({ personal }: HeroProps) {
  return (
    <section className="py-section-gap flex flex-col lg:flex-row items-center gap-24 min-h-[819px]">
      <motion.div 
        className="w-full lg:w-1/2 space-y-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {personal.availableForNewProjects && (
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface-variant text-[12px] font-medium uppercase tracking-[0.05em]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>Available for new projects</span>
          </motion.div>
        )}

        <motion.h1 
          className="text-5xl md:text-[80px] md:leading-[90px] font-bold text-on-surface tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {personal.name}
          <br />
          <span className="text-primary-container">{personal.role}</span>
        </motion.h1>

        <motion.p 
          className="text-lg text-on-surface-variant max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center gap-6 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary-container text-on-primary text-[12px] font-medium uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            Start a Project
          </a>

          <div className="flex space-x-4">
            {personal.social.linkedin && (
              <a
                href={personal.social.linkedin}
                className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full border border-outline-variant/30 hover:border-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {personal.social.github && (
              <a
                href={personal.social.github}
                className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full border border-outline-variant/30 hover:border-primary"
              >
                <Code className="w-5 h-5" />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full border border-outline-variant/30 hover:border-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
            {personal.phone && (
              <a
                href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full border border-outline-variant/30 hover:border-primary"
              >
                <Phone className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full lg:w-1/2 relative mt-12 lg:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden glass-card p-2">
          <div className="w-full h-full rounded-lg bg-surface-container-high overflow-hidden relative group">
            <img
              src={personal.heroImage}
              alt={personal.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="absolute -z-10 top-1/2 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/4"></div>
      </motion.div>
    </section>
  );
}
