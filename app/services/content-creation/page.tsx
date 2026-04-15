import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Content Creation Services - Adesco Graphics',
  description: 'Professional content creation services for engaging your audience.',
};

export default function ContentCreationPage() {
  return (
    <ServiceTemplate
      title="Content Creation"
      description="Professional content that resonates with your audience and drives engagement."
      image="/images/services/content-creation.jpg"
      videoId="aqz-KE-bpKQ"
      overview="Our content creators develop compelling written, visual, and multimedia content tailored to your brand voice and audience. From blog posts to social media, we create content that tells your story effectively."
      benefits={[
        'Brand-aligned messaging',
        'SEO-optimized content',
        'Engaging copy writing',
        'Visual content creation',
        'Social media ready',
        'Consistent publishing schedule',
      ]}
      process={[
        {
          step: 1,
          title: 'Strategy Development',
          description: 'Creating a content strategy aligned with your goals.',
        },
        {
          step: 2,
          title: 'Planning & Outlining',
          description: 'Content calendar and detailed outlines.',
        },
        {
          step: 3,
          title: 'Creation',
          description: 'Professional copywriting and content production.',
        },
        {
          step: 4,
          title: 'Editing & Optimization',
          description: 'Quality review and SEO optimization.',
        },
        {
          step: 5,
          title: 'Publication',
          description: 'Scheduled publishing across channels.',
        },
        {
          step: 6,
          title: 'Analytics',
          description: 'Performance tracking and optimization.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$300-500',
          features: [
            '4 blog posts/month',
            'Social media content',
            'Basic SEO',
            'Monthly reporting',
            'Revisions included',
          ],
        },
        {
          name: 'Professional',
          price: '$800-1500',
          features: [
            '8 blog posts/month',
            'Social media strategy',
            'Email campaigns',
            'Video scripts',
            'Advanced SEO',
            'Weekly reporting',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Unlimited content',
            'Dedicated writer',
            'Full strategy',
            'All formats',
            'Priority support',
            'Custom reporting',
          ],
        },
      ]}
      faq={[
        {
          question: 'How do you maintain brand voice?',
          answer: 'We develop detailed brand guidelines and voice documentation to ensure consistency across all content.',
        },
        {
          question: 'Can content be customized?',
          answer: 'Yes, all content is custom-created for your brand and audience, never templates or generic copy.',
        },
        {
          question: 'What about SEO optimization?',
          answer: 'All content includes keyword research and SEO optimization for better search engine visibility.',
        },
        {
          question: 'How often can we publish?',
          answer: 'We can accommodate any publishing frequency. Discuss your ideal schedule during consultation.',
        },
      ]}
      cta="Start Content Strategy"
    />
  );
}
