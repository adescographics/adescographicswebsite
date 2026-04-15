import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Web Development Services - Adesco Graphics',
  description: 'Custom web development services for responsive, high-performance websites and web applications.',
};

export default function WebDevelopmentPage() {
  return (
    <ServiceTemplate
      title="Web Development"
      description="Custom websites and web applications built with modern technologies, designed for performance and user experience."
      image="/images/services/web-development.jpg"
      videoId="dQw4w9WgXcQ"
      overview="We create fully responsive, high-performance websites and web applications tailored to your business needs. Our development process combines clean code, modern frameworks, and best practices to deliver solutions that scale with your business."
      benefits={[
        'Fully responsive design for all devices',
        'Fast loading times and optimized performance',
        'SEO-friendly architecture',
        'Secure and scalable infrastructure',
        'Integration with your existing systems',
        'Ongoing maintenance and support',
      ]}
      process={[
        {
          step: 1,
          title: 'Discovery & Planning',
          description: 'We understand your requirements, goals, and target audience to create a comprehensive development plan.',
        },
        {
          step: 2,
          title: 'Design & Prototyping',
          description: 'Our designers create interactive prototypes to visualize your website before development begins.',
        },
        {
          step: 3,
          title: 'Development',
          description: 'Our developers build your website using modern technologies and best practices.',
        },
        {
          step: 4,
          title: 'Testing & QA',
          description: 'Rigorous testing ensures your website works flawlessly across all browsers and devices.',
        },
        {
          step: 5,
          title: 'Deployment',
          description: 'We deploy your website to production with zero downtime and monitor performance.',
        },
        {
          step: 6,
          title: 'Support',
          description: 'Ongoing maintenance and support to keep your website running smoothly.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$500-1500',
          features: [
            'Up to 5 pages',
            'Responsive design',
            'Basic SEO',
            '3 months support',
            'Email support',
          ],
        },
        {
          name: 'Professional',
          price: '$1500-4000',
          features: [
            'Up to 15 pages',
            'Advanced features',
            'CMS integration',
            '1 year support',
            'Priority support',
            'Advanced SEO',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Unlimited pages',
            'Custom functionality',
            'E-commerce ready',
            'Dedicated support',
            'SLA guarantee',
            'Training included',
          ],
        },
      ]}
      faq={[
        {
          question: 'How long does it take to develop a website?',
          answer: 'Timeline depends on complexity. Typically, a starter website takes 2-4 weeks, while professional projects take 4-8 weeks.',
        },
        {
          question: 'Do you provide ongoing support after launch?',
          answer: 'Yes, we offer various support packages from basic maintenance to 24/7 managed hosting and support.',
        },
        {
          question: 'Can you integrate with my existing systems?',
          answer: 'Absolutely. We can integrate with APIs, databases, payment gateways, CRM systems, and more.',
        },
        {
          question: 'Is the website mobile-friendly?',
          answer: 'All our websites are built mobile-first and fully responsive across all devices and screen sizes.',
        },
        {
          question: 'What about SEO?',
          answer: 'We build SEO best practices into every website, including proper structure, meta tags, performance optimization, and more.',
        },
      ]}
      cta="Start Your Project"
    />
  );
}
