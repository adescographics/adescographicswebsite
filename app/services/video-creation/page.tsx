import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Video Production Services - Adesco Graphics',
  description: 'Professional video creation and production services.',
};

export default function VideoCreationPage() {
  return (
    <ServiceTemplate
      title="Video Creation"
      description="High-quality video production that captures attention and communicates your message."
      image="/images/services/video-production.jpg"
      videoId="9bZkp7q19f0"
      overview="Our videographers and editors create compelling videos for marketing, training, testimonials, and more. From concept to final cut, we handle every aspect of video production with professional quality."
      benefits={[
        '4K video production',
        'Professional editing',
        'Motion graphics',
        'Color grading',
        'Sound design',
        'Multi-format delivery',
      ]}
      process={[
        {
          step: 1,
          title: 'Concept Development',
          description: 'Brainstorming and storyboarding your video.',
        },
        {
          step: 2,
          title: 'Pre-Production',
          description: 'Location scouting, casting, and equipment prep.',
        },
        {
          step: 3,
          title: 'Filming',
          description: 'Professional video production with experienced crew.',
        },
        {
          step: 4,
          title: 'Post-Production',
          description: 'Editing, color grading, and special effects.',
        },
        {
          step: 5,
          title: 'Sound Design',
          description: 'Professional audio mixing and sound effects.',
        },
        {
          step: 6,
          title: 'Delivery',
          description: 'Final video in multiple formats for all platforms.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$800-1500',
          features: [
            '1-2 min video',
            'Single location',
            'Basic editing',
            'Standard quality',
            '2 revisions',
          ],
        },
        {
          name: 'Professional',
          price: '$2000-5000',
          features: [
            '3-5 min video',
            'Multiple locations',
            'Professional editing',
            '4K quality',
            'Motion graphics',
            'Unlimited revisions',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Unlimited duration',
            'Full production team',
            'Cinematic quality',
            'Special effects',
            'Professional crew',
            'Ongoing support',
          ],
        },
      ]}
      faq={[
        {
          question: 'How long does video production take?',
          answer: 'Typical projects take 2-4 weeks. Complex projects may take longer. Timeline discussed upfront.',
        },
        {
          question: 'What video formats do you support?',
          answer: 'We deliver in all standard formats: MP4, MOV, WebM, and optimized versions for social media.',
        },
        {
          question: 'Can I request specific music or sound?',
          answer: 'Yes. We can use licensed music, original compositions, or your provided audio.',
        },
        {
          question: 'What about revisions?',
          answer: 'Revisions are included based on your plan. We work iteratively until you\'re satisfied.',
        },
      ]}
      cta="Start Video Project"
    />
  );
}
