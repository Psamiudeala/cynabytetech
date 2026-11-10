export interface OnePageService {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: OnePageService[] = [
  {
    id: 'web-design-development',
    title: 'Web Design & Development',
    description: 'Stunning, lightning-fast, and responsive websites built to convert traffic into real revenue.'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Seamless cross-platform mobile apps built with clean code and high-performance architecture.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centric interfaces and modern wireframes designed for maximum engagement and ease of use.'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Strategic search engine optimization to rank higher, drive organic traffic, and scale your online visibility.'
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Distinctive brand identities, packaging mockups, and visual assets that make your business unforgettable.'
  }
];

export const SERVICE_OPTIONS = [
  'Web Design & Development',
  'Mobile App Development',
  'UI/UX Design',
  'SEO Optimization',
  'Branding & Design'
] as const;

export const CONTACT_INFO = {
  phone: '+2348148146268',
  phoneDisplay: '+234 814 814 6268',
  email: 'cynabytetech@gmail.com',
  whatsappUrl: 'https://wa.me/2348148146268',
  founderUrl: 'https://www.linkedin.com/in/samueludeala/',
  socials: [
    {
      name: 'LinkedIn',
      label: 'Cynabyte Tech',
      url: 'https://www.linkedin.com/company/cynabytetech/'
    },
    {
      name: 'X (Twitter)',
      label: '@cynabytetech',
      url: 'https://x.com/cynabytetech'
    },
    {
      name: 'TikTok',
      label: '@cynabytetech',
      url: 'https://tiktok.com/@cynabytetech'
    },
    {
      name: 'Instagram',
      label: '@cynabytetech',
      url: 'https://www.instagram.com/cynabytetech'
    }
  ]
};
