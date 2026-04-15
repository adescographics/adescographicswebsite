'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { BackButton } from '@/components/ui/back-button';
import { PageHeader } from '@/components/sections/page-header';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols.',
    },
    {
      icon: Shield,
      title: 'Regular Security Audits',
      description: 'We conduct comprehensive security audits and penetration testing quarterly to identify and address vulnerabilities.',
    },
    {
      icon: Eye,
      title: 'Access Control',
      description: 'Role-based access control ensures that only authorized personnel can access sensitive data and systems.',
    },
    {
      icon: AlertTriangle,
      title: 'Threat Monitoring',
      description: '24/7 monitoring and intrusion detection systems protect our infrastructure from malicious activity.',
    },
  ];

  const certifications = [
    'ISO 27001 Certified',
    'GDPR Compliant',
    'SOC 2 Type II Certified',
    'Data Protection Certified',
  ];

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Legal & Compliance"
        title={
          <>
            Security & Compliance
            <br />
            <span className="text-muted-foreground">We take security seriously.</span>
          </>
        }
        subtitle="How we protect your data and maintain industry-leading security standards"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-12">
            <BackButton href="/" label="Back to Home" />
          </div>
          <div className="mb-20">
            <h2 className="text-3xl font-display mb-12">Our Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-foreground/20 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#eca8d6]/10 border border-[#eca8d6]/30 flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#eca8d6]" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compliance & Certifications */}
          <div className="mb-20 pb-20 border-b border-foreground/10">
            <h2 className="text-3xl font-display mb-12">Certifications & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-display">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-20">
            <h2 className="text-3xl font-display mb-8">Data Protection Practices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl mb-3">Encryption Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All sensitive information including passwords and payment details are encrypted and securely hashed.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl mb-3">Data Backups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain automated daily backups of all critical data with redundancy across geographically distributed data centers. Backups are encrypted and tested regularly for recovery capability.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl mb-3">Access Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multi-factor authentication is required for all staff access. We implement principle of least privilege, ensuring employees only access data necessary for their role.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl mb-3">Incident Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain a comprehensive incident response plan with 24/7 monitoring. In the event of any security incident, we notify affected users within 24 hours as required by regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Security Updates */}
          <div>
            <h2 className="text-3xl font-display mb-8">Security Updates & Patches</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We apply security patches and updates on an ongoing basis. Our systems are configured to automatically apply critical security updates. We test all patches in a staging environment before production deployment.
            </p>
            <div className="p-6 border border-green-500/30 bg-green-500/10 rounded-lg">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-green-500 mb-1">Last Security Update</p>
                  <p className="text-sm text-muted-foreground">April 5, 2026 - All systems current with latest security patches</p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Vulnerability */}
          <div className="mt-20 pt-20 border-t border-foreground/10">
            <h2 className="text-3xl font-display mb-6">Report a Vulnerability</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you discover a security vulnerability in our systems, please report it responsibly to our security team. We appreciate your efforts to responsibly disclose security issues and will work with you to verify and fix the problem.
            </p>
            <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
              <p className="font-display mb-2">Email: security@adesographics.com</p>
              <p className="text-sm text-muted-foreground">
                Please include a description of the vulnerability, affected systems, and steps to reproduce if possible.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 pt-12 border-t border-foreground/10">
            <p className="text-sm text-muted-foreground">
              For security-related questions or concerns, please contact our security team at security@adesographics.com
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Last updated: April 8, 2026
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
