import { Quote } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-section-gap border-t border-outline-variant/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary-container/5 rounded-full blur-[100px] -z-10"></div>
      
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[40px] font-semibold text-on-surface mb-4 leading-tight">
          Voices of Partnership
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Don't just take my word for it. Here is what my clients and collaborators
          have to say about our work together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`glass-card p-8 rounded-xl flex flex-col justify-between ${
              index % 2 !== 0 ? 'translate-y-0 md:translate-y-8' : ''
            }`}
          >
            <div>
              <Quote className="text-primary-container w-10 h-10 mb-6 opacity-50" />
              <p className="text-lg text-on-surface mb-8 italic leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-on-surface uppercase tracking-wider">
                  {testimonial.name}
                </h4>
                <p className="text-[12px] font-medium text-on-surface-variant">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
