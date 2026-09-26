export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    description?: string;
    popular?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  category: 'Full Stack' | 'AI & Web3' | 'Real-Time' | 'Tools';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  highlights: string[];
  metrics?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  location: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
  date: string;
}
