import { ArrowRight, Send, Globe, Briefcase, Twitter, Dribbble, Phone } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';
import { PersonalInfo } from '../types';

interface ContactSectionProps {
  personal: PersonalInfo;
}

export function ContactSection({ personal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-section-gap">
      <motion.div 
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-[80px] md:leading-[90px] font-bold text-on-surface mb-6 tracking-tight">
          Let's work together
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
          I'm currently available for freelance projects and consulting. Send me a
          message, and let's discuss how we can elevate your next digital experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        <motion.div 
          className="col-span-4 md:col-span-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 md:p-12 shadow-lg shadow-black/20">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="relative w-full group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-on-surface text-base focus:ring-0 focus:border-primary transition-colors duration-300 placeholder-transparent"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-on-surface-variant text-base transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs peer-valid:text-on-surface-variant"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative w-full group">
                  <input
                    type="email"
                    id="email"
                    required
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-on-surface text-base focus:ring-0 focus:border-primary transition-colors duration-300 placeholder-transparent"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-4 text-on-surface-variant text-base transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs peer-valid:text-on-surface-variant"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative w-full group mt-4">
                <textarea
                  id="details"
                  required
                  rows={5}
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-on-surface text-base focus:ring-0 focus:border-primary transition-colors duration-300 placeholder-transparent resize-none"
                  placeholder="Project Details"
                ></textarea>
                <label
                  htmlFor="details"
                  className="absolute left-0 top-4 text-on-surface-variant text-base transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs peer-valid:text-on-surface-variant"
                >
                  Project Details & Objectives
                </label>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="bg-primary-container text-on-primary-container text-[12px] font-medium uppercase tracking-[0.05em] px-8 py-4 rounded-full hover:bg-primary hover:shadow-[0_0_20px_rgba(241,184,45,0.3)] transition-all duration-300 flex items-center gap-3"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div 
          className="col-span-4 md:col-span-4 mt-12 md:mt-0 flex flex-col justify-start"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-surface-container/50 backdrop-blur-md border border-outline-variant/20 rounded-xl p-8 md:p-10 h-full flex flex-col justify-center">
            <h3 className="text-[32px] font-semibold text-on-surface mb-8 border-b border-outline-variant/20 pb-4 leading-tight">
              Connect Through
            </h3>
            <div className="flex flex-col gap-6">
              {personal.social.github && (
                <a
                  href={personal.social.github}
                  className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300"
                >
                  <Globe className="w-6 h-6 font-light group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Github</span>
                </a>
              )}
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300"
                >
                  <Briefcase className="w-6 h-6 font-light group-hover:scale-110 transition-transform" />
                  <span className="text-lg">LinkedIn</span>
                </a>
              )}
              {personal.social.twitter && (
                <a
                  href={personal.social.twitter}
                  className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6 font-light group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Twitter</span>
                </a>
              )}
              {personal.social.dribbble && (
                <a
                  href={personal.social.dribbble}
                  className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300"
                >
                  <Dribbble className="w-6 h-6 font-light group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Dribbble</span>
                </a>
              )}
            </div>

            <div className="mt-auto pt-12 space-y-6">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-on-surface-variant mb-2">
                  Direct Email
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg text-on-surface hover:text-primary transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>
              {personal.phone && (
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-on-surface-variant mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-lg text-on-surface hover:text-primary transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
