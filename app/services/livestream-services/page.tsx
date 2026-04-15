import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Livestream Setup & Services - Adesco Graphics',
  description: 'Professional livestream setup and technical support services.',
};

export default function LivestreamServicesPage() {
  return (
    <ServiceTemplate
      title="Livestream Setup & Services"
      description="Professional livestream setup, configuration, and technical support for events and broadcasts."
      image="/images/services/livestream.jpg"
      videoId="c_kNK_5jkxQ"
      overview="Whether it's a webinar, event, or broadcast, we handle the technical setup and support. From equipment configuration to platform setup, we ensure smooth, professional livestreams."
      benefits={[
        'Professional equipment',
        'Multi-platform streaming',
        'Live technical support',
        'Quality optimization',
        'Backup systems',
        'Post-stream analytics',
      ]}
      process={[
        {
          step: 1,
          title: 'Planning',
          description: 'Understand your event and requirements.',
        },
        {
          step: 2,
          title: 'Setup',
          description: 'Configure equipment and streaming platforms.',
        },
        {
          step: 3,
          title: 'Testing',
          description: 'Run through rehearsals and troubleshoot.',
        },
        {
          step: 4,
          title: 'Go Live',
          description: 'Monitor and manage the livestream event.',
        },
        {
          step: 5,
          title: 'Support',
          description: 'Real-time technical support during broadcast.',
        },
        {
          step: 6,
          title: 'Analytics',
          description: 'Provide post-stream metrics and reports.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$300-600',
          features: [
            'Single camera setup',
            'Basic platform',
            'Chat moderation',
            '2-hour support',
            'Recording included',
          ],
        },
        {
          name: 'Professional',
          price: '$800-1500',
          features: [
            'Multi-camera setup',
            'Multiple platforms',
            'Graphics overlay',
            'Live switching',
            'Full day support',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Full production team',
            'Professional equipment',
            'Multi-event support',
            ' Advanced graphics',
            'Extended support',
          ],
        },
      ]}
      faq={[
        {
          question: 'What platforms can you livestream to?',
          answer: 'We stream to YouTube, Facebook, Twitch, LinkedIn, Instagram, and custom RTMP servers.',
        },
        {
          question: 'Do you provide equipment?',
          answer: 'Yes, we provide cameras, microphones, lighting, and all necessary equipment.',
        },
        {
          question: 'Can you add graphics and overlays?',
          answer: 'Absolutely. We create custom graphics, lower thirds, and professional overlays.',
        },
        {
          question: 'What if something goes wrong during the stream?',
          answer: 'We have backup systems and live technical support to quickly resolve any issues.',
        },
      ]}
      cta="Book Livestream"
    />
  );
}
