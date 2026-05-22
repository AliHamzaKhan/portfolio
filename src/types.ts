export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  availableForNewProjects: boolean;
  email: string;
  phone?: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    dribbble?: string;
  };
  heroImage: string;
}

export interface Expertise {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  app_url?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  expertise: Expertise[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  testimonials: Testimonial[];
}
