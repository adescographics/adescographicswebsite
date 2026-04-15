import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'System Recovery - Adesco Graphics',
  description: 'Professional data recovery and system restoration services.',
};

export default function SystemRecoveryPage() {
  return (
    <ServiceTemplate
      title="System Recovery"
      description="Professional data recovery and system restoration when things go wrong."
      image="/images/services/system-recovery.jpg"
      videoId="p3Q5EUhD-54"
      overview="Lost files? Crashed system? Corrupted data? Our expert technicians use specialized tools and techniques to recover your data and restore your system to working condition."
      benefits={[
        'High recovery success rate',
        'Confidential handling',
        'Fast turnaround',
        'Data integrity assured',
        'Expert diagnostics',
        'No data, no fee options',
      ]}
      process={[
        {
          step: 1,
          title: 'Diagnostics',
          description: 'Determine the cause and extent of damage.',
        },
        {
          step: 2,
          title: 'Assessment',
          description: 'Evaluate recovery possibilities and timeline.',
        },
        {
          step: 3,
          title: 'Recovery',
          description: 'Use specialized tools for data extraction.',
        },
        {
          step: 4,
          title: 'Verification',
          description: 'Verify recovered data integrity.',
        },
        {
          step: 5,
          title: 'Transfer',
          description: 'Transfer recovered data to storage device.',
        },
        {
          step: 6,
          title: 'Restoration',
          description: 'System restoration and optimization.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$200-500',
          features: [
            'Logical recovery',
            'Software issues',
            'Corrupted files',
            'Basic diagnostics',
            'Quick turnaround',
          ],
        },
        {
          name: 'Professional',
          price: '$500-1500',
          features: [
            'Physical damage',
            'Hardware failure',
            'Drive replacement',
            'Full diagnostics',
            'Expert recovery',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Critical infrastructure',
            'Server recovery',
            'Lab recovery',
            'Priority processing',
            'Guaranteed results',
          ],
        },
      ]}
      faq={[
        {
          question: 'Can you recover deleted files?',
          answer: 'Yes, most deleted files can be recovered unless the drive has been overwritten.',
        },
        {
          question: 'What about physically damaged drives?',
          answer: 'We have laboratory facilities for physical recovery. Success depends on damage severity.',
        },
        {
          question: 'How long does recovery take?',
          answer: 'Simple recoveries take 1-2 days. Complex cases may take 1-2 weeks.',
        },
        {
          question: 'Is my data secure?',
          answer: 'Yes, all data is handled confidentially and securely. We can sign NDAs if needed.',
        },
      ]}
      cta="Start Recovery"
    />
  );
}
