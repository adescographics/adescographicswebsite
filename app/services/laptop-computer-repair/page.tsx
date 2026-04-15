import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Laptop & Computer Repair - Adesco Graphics',
  description: 'Professional laptop and computer repair services.',
};

export default function ComputerRepairPage() {
  return (
    <ServiceTemplate
      title="Laptop & Computer Repair"
      description="Professional repair services for laptops, desktops, and workstations."
      image="/images/services/computer-repair.jpg"
      videoId="aJZsIzOUcUs"
      overview="Our technicians diagnose and repair hardware and software issues quickly and affordably. Whether it's a performance issue, hardware failure, or virus removal, we get your device back to working order."
      benefits={[
        'Fast diagnostics',
        'Expert troubleshooting',
        'Hardware repair',
        'Software restoration',
        'Virus removal',
        'Warranty on repairs',
      ]}
      process={[
        {
          step: 1,
          title: 'Diagnosis',
          description: 'Free diagnostic to identify the issue.',
        },
        {
          step: 2,
          title: 'Assessment',
          description: 'Repair options and cost estimate provided.',
        },
        {
          step: 3,
          title: 'Authorization',
          description: 'Get approval before we start repairs.',
        },
        {
          step: 4,
          title: 'Repair',
          description: 'Professional technician performs the repair.',
        },
        {
          step: 5,
          title: 'Testing',
          description: 'Thorough testing before return.',
        },
        {
          step: 6,
          title: 'Delivery',
          description: 'Device returned to you in working condition.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$100-300',
          features: [
            'Free diagnostics',
            'Software repair',
            'Virus removal',
            'System optimization',
            '30-day warranty',
          ],
        },
        {
          name: 'Professional',
          price: '$300-800',
          features: [
            'Hardware repair',
            'Component replacement',
            'Full cleaning',
            'Software installation',
            '90-day warranty',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Complex repairs',
            'Data recovery',
            'Full restoration',
            'Multiple devices',
            '1-year warranty',
          ],
        },
      ]}
      faq={[
        {
          question: 'Do you provide free diagnostics?',
          answer: 'Yes, initial diagnostics are completely free. You\'ll only pay if you authorize repairs.',
        },
        {
          question: 'How long do repairs take?',
          answer: 'Most repairs are completed within 1-3 days. Complex repairs may take longer.',
        },
        {
          question: 'Do you fix all brands?',
          answer: 'Yes, we repair Dell, HP, Lenovo, Apple, Asus, and all major computer brands.',
        },
        {
          question: 'What warranty do you provide?',
          answer: 'We provide 30-90 days warranty on repairs, depending on the type of repair.',
        },
      ]}
      cta="Schedule Repair"
    />
  );
}
