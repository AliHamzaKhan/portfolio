import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'expertise', 'process', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is currently in the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 glass-nav border-b border-on-surface-variant/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-[1280px] mx-auto">
        <a
          href="#"
          className="text-3xl font-bold text-primary hover:opacity-80 transition-all tracking-tight"
        >
          MOBILEAPP.DEV
        </a>

        <div className="hidden md:flex items-center space-x-8 text-[12px] uppercase tracking-[0.05em] font-medium">
          <a
            href="#work"
            className={`${
              activeSection === 'work' ? 'text-primary' : 'text-on-surface-variant'
            } hover:text-primary transition-colors duration-300`}
          >
            Work
          </a>
          <a
            href="#expertise"
            className={`${
              activeSection === 'expertise' ? 'text-primary' : 'text-on-surface-variant'
            } hover:text-primary transition-colors duration-300`}
          >
            Expertise
          </a>
          <a
            href="#process"
            className={`${
              activeSection === 'process' ? 'text-primary' : 'text-on-surface-variant'
            } hover:text-primary transition-colors duration-300`}
          >
            Process
          </a>
          <a
            href="#contact"
            className={`${
              activeSection === 'contact' ? 'text-primary' : 'text-on-surface-variant'
            } hover:text-primary transition-colors duration-300`}
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center bg-primary-container text-on-primary text-[12px] font-medium uppercase tracking-[0.05em] px-6 py-3 rounded hover:opacity-90 active:scale-95 transition-all duration-300"
        >
          Get in Touch
        </a>

        <button className="md:hidden text-on-surface">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
}
