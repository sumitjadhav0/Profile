export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "ai"
    | "database"
    | "devops"
    | "tools";
  level: number;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  image?: string;
}