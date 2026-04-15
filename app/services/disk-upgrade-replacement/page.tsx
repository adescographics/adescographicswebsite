import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'Disk Upgrade & Replacement - Adesco Graphics',
  description: 'Professional disk upgrade and replacement services.',
};

export default function DiskUpgradePage() {
  return (
    <ServiceTemplate
      title="Disk Upgrade & Replacement"
      description="Fast, affordable disk and storage upgrades to improve system performance."
      image="/images/services/disk-upgrade.jpg"
      videoId="4ZCQdWB-5W0"
      overview="Upgrade your computer with faster SSDs or increase storage capacity. Our technicians handle the installation, data migration, and system optimization for seamless upgrades."
      benefits={[
        'Faster boot times',
        'Increased storage',
        'Better performance',
        'Data preservation',
        'Professional installation',
        'System optimization',
      ]}
      process={[
        {
          step: 1,
          title: 'Consultation',
          description: 'Assess your storage needs and recommend upgrades.',
        },
        {
          step: 2,
          title: 'Backup',
          description: 'Complete backup of your existing data.',
        },
        {
          step: 3,
          title: 'Installation',
          description: 'Professional installation of new storage.',
        },
        {
          step: 4,
          title: 'Migration',
          description: 'Data transfer to new disk if needed.',
        },
        {
          step: 5,
          title: 'Optimization',
          description: 'System configuration for best performance.',
        },
        {
          step: 6,
          title: 'Testing',
          description: 'Full system testing and verification.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$150-300',
          features: [
            '256GB SSD upgrade',
            'Installation included',
            'Data migration',
            'Labor included',
            '1-year warranty',
          ],
        },
        {
          name: 'Professional',
          price: '$300-600',
          features: [
            '512GB-1TB upgrade',
            'High-speed SSD',
            'Full data migration',
            'System optimization',
            '2-year warranty',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Large capacity drives',
            'RAID configuration',
            'Professional support',
            'On-site installation',
            '3-year warranty',
          ],
        },
      ]}
      faq={[
        {
          question: 'How long does an upgrade take?',
          answer: 'Typical upgrades take 1-2 hours. Complex setups may take longer.',
        },
        {
          question: 'Will my data be safe?',
          answer: 'Yes, we back up all data before upgrading and carefully migrate it to the new disk.',
        },
        {
          question: 'What type of disks do you install?',
          answer: 'We install high-quality SSDs and HDDs from trusted brands like Samsung, Kingston, WD, and Seagate.',
        },
        {
          question: 'Do you handle all computer types?',
          answer: 'Yes, we upgrade laptops, desktops, and workstations from all major manufacturers.',
        },
      ]}
      cta="Schedule Upgrade"
    />
  );
}
