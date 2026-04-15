export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  pricing: 'standard' | 'premium' | 'enterprise';
}

export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Custom web applications built with modern technologies',
    shortDescription: 'Scalable, high-performance web solutions',
    image: '/images/services/web-development.jpg',
    icon: 'Code',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO-Friendly Architecture',
      'Modern Frameworks',
      'API Integration',
      'Real-time Features'
    ],
    deliverables: [
      'Fully functional web application',
      'Source code and documentation',
      'Deployment setup',
      'Performance optimization',
      'Security implementation'
    ],
    timeline: '8-16 weeks',
    pricing: 'premium'
  },
  {
    id: 'web-design',
    name: 'Web Design',
    slug: 'web-design',
    description: 'Beautiful, user-centered website design',
    shortDescription: 'Stunning interfaces that convert',
    image: '/images/services/web-design.jpg',
    icon: 'Palette',
    features: [
      'UI/UX Design',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Accessibility Compliance',
      'Brand Integration'
    ],
    deliverables: [
      'Complete design system',
      'High-fidelity mockups',
      'Interactive prototypes',
      'Design specifications',
      'Handoff documentation'
    ],
    timeline: '4-8 weeks',
    pricing: 'premium'
  },
  {
    id: 'video-creation',
    name: 'Video Creation',
    slug: 'video-creation',
    description: 'Professional video production and editing',
    shortDescription: 'Compelling visual storytelling',
    image: '/images/services/video-creation.jpg',
    icon: 'Film',
    features: [
      'Concept Development',
      'Professional Videography',
      'Post-Production Editing',
      'Motion Graphics',
      'Animation',
      'Sound Design'
    ],
    deliverables: [
      'Finished video (multiple formats)',
      'Raw footage',
      'Project files',
      'Subtitles/Captions',
      'Social media versions'
    ],
    timeline: '3-6 weeks',
    pricing: 'premium'
  },
  {
    id: 'it-solutions',
    name: 'IT Solutions',
    slug: 'it-solutions',
    description: 'Comprehensive IT infrastructure and support',
    shortDescription: 'Tech infrastructure that works',
    image: '/images/services/it-solutions.jpg',
    icon: 'Server',
    features: [
      'Infrastructure Setup',
      'Cloud Migration',
      'Security Management',
      '24/7 Support',
      'Disaster Recovery',
      'Compliance Management'
    ],
    deliverables: [
      'Infrastructure architecture',
      'Implementation plan',
      'Documentation',
      'Training materials',
      'Support contracts'
    ],
    timeline: '6-12 weeks',
    pricing: 'enterprise'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByPricing = (pricing: 'standard' | 'premium' | 'enterprise'): Service[] => {
  return services.filter(service => service.pricing === pricing);
};

export const getServiceStats = () => {
  return {
    totalServices: services.length,
    premiumServices: services.filter(s => s.pricing === 'premium').length,
    enterpriseServices: services.filter(s => s.pricing === 'enterprise').length,
  };
};
