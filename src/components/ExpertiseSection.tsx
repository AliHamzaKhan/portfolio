import React from 'react';
import { Palette, Code2, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { Expertise } from '../types';

interface ExpertiseSectionProps {
  expertise: Expertise[];
}

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ExpertiseSection({ expertise }: ExpertiseSectionProps) {
  return (
    <section id="expertise" className="py-section-gap border-t border-outline-variant/20">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[40px] font-semibold text-on-surface mb-4 leading-tight">
          Core Expertise
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A holistic approach to digital product creation, ensuring uncompromising
          quality from the first wireframe to the final deployment.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-8 rounded-xl hover:border-primary/50 transition-colors duration-500 group"
          >
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary text-primary transition-colors duration-300">
              {iconMap[item.icon] || <Lightbulb className="w-6 h-6" />}
            </div>
            <h3 className="text-[32px] font-semibold text-on-surface mb-3 leading-tight">
              {item.title}
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
