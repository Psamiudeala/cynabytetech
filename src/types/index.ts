export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  coreFocus: string;
  tagline: string;
  overview: string;
  deliverables: string[];
  techStack: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
