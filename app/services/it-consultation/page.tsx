import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'IT Consultation - Adesco Graphics',
  description: 'Strategic IT consultation and advisory services.',
};

export default function ITConsultationPage() {
  return (
    <ServiceTemplate
      title="IT Consultation"
      description="Expert guidance on IT strategy, infrastructure, and technology decisions."
      image="/images/services/it-consultation.jpg"
      videoId="LaT1Z62q-x0"
      overview="Our IT consultants provide strategic advice to help you make informed technology decisions. We analyze your business needs, assess your current infrastructure, and recommend solutions that align with your goals."
      benefits={[
        'Strategic planning',
        'Cost optimization',
        'Security assessment',
        'Technology recommendations',
        'Vendor evaluation',
        'Roadmap development',
      ]}
      process={[
        {
          step: 1,
          title: 'Discovery',
          description: 'Understanding your business and IT goals.',
        },
        {
          step: 2,
          title: 'Assessment',
          description: 'Current infrastructure and risk analysis.',
        },
        {
          step: 3,
          title: 'Analysis',
          description: 'Deep dive into technology and processes.',
        },
        {
          step: 4,
          title: 'Recommendations',
          description: 'Strategic guidance and solutions.',
        },
        {
          step: 5,
          title: 'Planning',
          description: 'Implementation roadmap and timeline.',
        },
        {
          step: 6,
          title: 'Execution Support',
          description: 'Ongoing guidance during implementation.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$200/hour',
          features: [
            'Initial consultation',
            'Quick recommendations',
            'Email support',
            'Flexible scheduling',
            'Basic assessment',
          ],
        },
        {
          name: 'Professional',
          price: '$3000-6000',
          features: [
            'Full assessment',
            'Detailed recommendations',
            'Implementation plan',
            'Quarterly reviews',
            'Support included',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Ongoing advisory',
            'Strategic planning',
            'Quarterly meetings',
            'Technology roadmap',
            'Priority access',
          ],
        },
      ]}
      faq={[
        {
          question: 'What does IT consultation cover?',
          answer: 'We advise on infrastructure, security, cloud adoption, system selection, budgeting, and technology strategy.',
        },
        {
          question: 'How long does consultation take?',
          answer: 'Initial consultation is 1-2 hours. Full assessments typically take 1-4 weeks.',
        },
        {
          question: 'Will you help with implementation?',
          answer: 'We can provide implementation support and work with your existing vendors for smooth transitions.',
        },
        {
          question: 'Is the consultation confidential?',
          answer: 'Yes, all consultations are completely confidential and covered by NDA.',
        },
      ]}
      cta="Book Consultation"
    />
  );
}
