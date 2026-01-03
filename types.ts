
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  longDescription?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'core' | 'framework' | 'tool';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'certification' | 'award' | 'milestone';
  imageUrl?: string;
}
