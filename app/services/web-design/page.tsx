import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Web Design Services - Adesco Graphics',
  description: 'Professional web design services creating beautiful, conversion-focused interfaces.',
};

export default function WebDesignPage() {
  return (
    <ServiceTemplate
      title="Web Design"
      description="Beautiful, user-focused website design that engages visitors and drives conversions."
      image="/images/services/web-design.jpg"
      videoId="jNQXAC9IVRw"
      overview="Our designers create stunning, intuitive interfaces that balance aesthetics with functionality. Every design is crafted to reflect your brand, engage your audience, and achieve your business goals."
      benefits={[
        'Brand-aligned custom designs',
        'User-centered design approach',
        'Mobile-first responsive layouts',
        'High-converting interfaces',
        'Accessibility compliance',
        'Fast performance optimization',
      ]}
      process={[
        {
          step: 1,
          title: 'Brand Discovery',
          description: 'We learn about your brand, values, and target audience.',
        },
        {
          step: 2,
          title: 'Research & Wireframing',
          description: 'Market research and wireframes to plan user flows.',
        },
        {
          step: 3,
          title: 'Design Mockups',
          description: 'High-fidelity designs and interactive prototypes.',
        },
        {
          step: 4,
          title: 'Feedback & Refinement',
          description: 'Iterative design improvements based on your feedback.',
        },
        {
          step: 5,
          title: 'Finalization',
          description: 'Production-ready design files and design system.',
        },
        {
          step: 6,
          title: 'Handoff',
          description: 'Complete documentation for seamless development.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$500-1000',
          features: [
            'Up to 5 pages',
            'Custom design',
            'Mobile responsive',
            '2 rounds of revisions',
            'Design files included',
          ],
        },
        {
          name: 'Professional',
          price: '$1500-3000',
          features: [
            'Up to 15 pages',
            'Brand guidelines',
            'Responsive design',
            'Unlimited revisions',
            'Interactive prototypes',
            'Design system',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Unlimited pages',
            'Complete branding',
            'Advanced interactions',
            'Dedicated designer',
            'Ongoing updates',
            'Full design system',
          ],
        },
      ]}
      faq={[
        {
          question: 'How do you understand my brand?',
          answer: 'We conduct thorough discovery sessions to understand your brand identity, values, target market, and business goals.',
        },
        {
          question: 'Can I request changes?',
          answer: 'Absolutely. We offer unlimited revisions in our professional and enterprise plans to ensure you love the design.',
        },
        {
          question: 'Do you provide design files?',
          answer: 'Yes, all design files are provided in Figma or Adobe XD format for your team to use.',
        },
        {
          question: 'Is the design responsive?',
          answer: 'All our designs are mobile-first and fully responsive across all devices and screen sizes.',
        },
      ]}
      cta="Start Design Project"
    />
  );
}
