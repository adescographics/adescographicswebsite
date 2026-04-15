import { ServiceTemplate } from '@/components/sections/service-template';

export const metadata = {
  title: 'OS Installation & Upgrade - Adesco Graphics',
  description: 'Professional OS installation, upgrade, and bootable drive creation.',
};

export default function OSInstallationPage() {
  return (
    <ServiceTemplate
      title="OS Installation & Upgrade"
      description="Professional Windows, Linux, and macOS installation, upgrades, and bootable drive creation."
      image="/images/services/os-installation.jpg"
      videoId="lwhDCCh5qho"
      overview="We handle OS installation and upgrades for smooth transitions. From Windows 10 to Windows 11, Linux distributions, or custom bootable drives, we ensure your system is configured perfectly."
      benefits={[
        'Clean installations',
        'Smooth upgrades',
        'Bootable USB/CD creation',
        'Driver installation',
        'System optimization',
        'Backup & recovery',
      ]}
      process={[
        {
          step: 1,
          title: 'Preparation',
          description: 'System assessment and data backup.',
        },
        {
          step: 2,
          title: 'Installation',
          description: 'OS installation with proper configuration.',
        },
        {
          step: 3,
          title: 'Drivers',
          description: 'Installation of all necessary drivers.',
        },
        {
          step: 4,
          title: 'Updates',
          description: 'System updates and security patches.',
        },
        {
          step: 5,
          title: 'Testing',
          description: 'Complete system functionality testing.',
        },
        {
          step: 6,
          title: 'Optimization',
          description: 'Performance tuning and cleanup.',
        },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '$100-200',
          features: [
            'Clean OS install',
            'Driver installation',
            'Basic configuration',
            'System updates',
            '30-day support',
          ],
        },
        {
          name: 'Professional',
          price: '$250-450',
          features: [
            'OS upgrade',
            'Data migration',
            'Full optimization',
            'Software installation',
            '90-day support',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Multi-boot setup',
            'Virtual machines',
            'Network configuration',
            'Enterprise support',
            '1-year support',
          ],
        },
      ]}
      faq={[
        {
          question: 'Can you upgrade from Windows 10 to 11?',
          answer: 'Yes, we handle smooth upgrades and ensure all compatibility. Data is preserved when possible.',
        },
        {
          question: 'Do you create bootable drives?',
          answer: 'Yes, we create bootable USB and NVMe drives for Windows, Linux, and rescue environments.',
        },
        {
          question: 'Can I choose a Linux distribution?',
          answer: 'Absolutely. We install Ubuntu, CentOS, Debian, Fedora, and other distributions.',
        },
        {
          question: 'How long does installation take?',
          answer: 'Typical installation takes 1-3 hours depending on complexity and data migration needs.',
        },
      ]}
      cta="Schedule Installation"
    />
  );
}
