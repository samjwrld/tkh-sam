export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  style: string;
  size: string;
  year: string;
  desc: string;
  details: string[];
  imageUrl: string;
  linkUrl: string;
  brief?: string;
  solution?: string;
  result?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  locality: string;
  text: string;
  rating: number;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type ViewState =
  | 'home'
  | 'about'
  | 'projects'
  | 'blogs'
  | 'contact'
  | 'project-pramod'
  | 'project-spoorthi'
  | 'project-anil'
  | 'project-piyush'
  | 'premium-interiors'
  | 'modern-interiors'
  | 'luxury-interiors'
  | 'home-interior-designers-near-me';
