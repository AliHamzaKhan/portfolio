import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import data from './data.json';
import { PortfolioData } from './types';

// Cast the imported JSON to our PortfolioData type
const portfolioData = data as PortfolioData;

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-on-primary">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <Hero personal={portfolioData.personal} />
        
        <ExpertiseSection expertise={portfolioData.expertise} />
        
        <ExperienceSection 
          experience={portfolioData.experience} 
          education={portfolioData.education} 
        />
        
        <ProjectsSection projects={portfolioData.projects} />
        
        <TestimonialsSection testimonials={portfolioData.testimonials} />
        
        {/* Simple CTA before Contact */}
        <motion.section 
          className="py-section-gap my-section-gap glass-card rounded-2xl p-12 text-center relative overflow-hidden border border-outline-variant/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <motion.h2 
              className="text-5xl md:text-[80px] md:leading-[90px] font-bold text-on-surface mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Ready to start?
            </motion.h2>
            <motion.p 
              className="text-lg text-on-surface-variant mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Let's discuss how we can bring your vision to life. I'm currently accepting new projects.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary text-[12px] font-medium uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-all hover:scale-105 duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </div>
        </motion.section>

        <ContactSection personal={portfolioData.personal} />
      </main>

      <Footer personal={portfolioData.personal} />
    </div>
  );
}
