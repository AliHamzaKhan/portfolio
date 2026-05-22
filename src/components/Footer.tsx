import React from 'react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personal: PersonalInfo;
}

export function Footer({ personal }: FooterProps) {
  return (
    <footer className="w-full py-section-gap border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto gap-8">
        <div className="text-[32px] font-semibold text-primary opacity-100 hover:opacity-70 transition-opacity">
          MOBILEAPP.DEV
        </div>
        <div className="flex gap-6">
          {personal.social.twitter && (
            <a
              href={personal.social.twitter}
              className="text-base text-on-surface-variant hover:text-primary transition-colors"
            >
              Twitter
            </a>
          )}
          {personal.social.github && (
            <a
              href={personal.social.github}
              className="text-base text-on-surface-variant hover:text-primary transition-colors"
            >
              GitHub
            </a>
          )}
          {personal.social.linkedin && (
            <a
              href={personal.social.linkedin}
              className="text-base text-on-surface-variant hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          )}
          {personal.social.dribbble && (
            <a
              href={personal.social.dribbble}
              className="text-base text-on-surface-variant hover:text-primary transition-colors"
            >
              Dribbble
            </a>
          )}
        </div>
        <div className="text-base text-on-surface-variant text-center md:text-right">
          © {new Date().getFullYear()} MOBILEAPP.DEV — Built with Precision
        </div>
      </div>
    </footer>
  );
}
