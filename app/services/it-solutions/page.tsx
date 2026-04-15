import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'IT Solutions - Adesco Graphics',
  description: 'Comprehensive IT solutions and technical support services.',
};

export default function ITSolutionsPage() {
  return (
    <ServiceTemplate
      title="IT Solutions"
      description="Comprehensive IT services and technical support for smooth business operations."
      image="/images/services/it-solutions.jpg"
      videoId="O9IjuajlpWg"
      overview="Our IT specialists provide end-to-end solutions for your technology needs. From system setup to ongoing support, we ensure your infrastructure runs reliably and securely."
      benefits={[
        'System optimization',
        'Security hardening',
        'Performance monitoring',
        'Proactive maintenance',
        'Emergency support',
        'Cost-effective solutions',
      ]}
      process={[
        {
          step: 1,
          title: 'Assessment',
          description: 'Comprehensive IT infrastructure audit.',
        },
        {
          step: 2,
          title: 'Planning',
          description: 'Customized IT solution planning.',
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'System setup and configuration.',
        },
        {
          step: 4,
          title: 'Testing',
          description: 'Thorough quality assurance testing.',
        },
        {
          step: 5,
          title: 'Deployment',
          description: 'Smooth rollout with minimal disruption.',
        },
        {
          step: 6,
          title: 'Support',
          description: 'Ongoing monitoring and maintenance.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$200-400',
          features: [
            'Basic IT support',
            'Email support',
            'Business hours response',
            'Problem troubleshooting',
            'Monthly check-up',
          ],
        },
        {
          name: 'Professional',
          price: '$500-1000',
          features: [
            'Full IT management',
            'Priority support',
            'Proactive monitoring',
            'Security updates',
            'Performance optimization',
            'Weekly reports',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Dedicated IT team',
            '24/7 support',
            'SLA guarantee',
            'Full infrastructure',
            'Strategic planning',
            'Unlimited services',
          ],
        },
      ]}
      faq={[
        {
          question: 'What IT services do you provide?',
          answer: 'We offer hardware support, software management, security, networking, cloud services, and more.',
        },
        {
          question: 'Is there 24/7 support available?',
          answer: 'Yes, enterprise plans include 24/7 support. Other plans offer business hours support.',
        },
        {
          question: 'How do you handle security?',
          answer: 'We implement industry-standard security practices, regular updates, backups, and monitoring.',
        },
        {
          question: 'Can you migrate from old systems?',
          answer: 'Absolutely. We specialize in smooth system migrations with minimal data loss and downtime.',
        },
      ]}
      cta="Get IT Support"
    />
  );
}
