'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { BackButton } from '@/components/ui/back-button';
import { PageHeader } from '@/components/sections/page-header';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Legal & Compliance"
        title={
          <>
            Privacy Policy
            <br />
            <span className="text-muted-foreground">Your data is our priority.</span>
          </>
        }
        subtitle="How we collect, use, and protect your information"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-12">
            <BackButton href="/" label="Back to Home" />
          </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adesco Graphics ("we," "us," "our," or "Company") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg mb-2">2.1 Information You Provide Directly</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Personal identification information (name, email address, phone number) when you register for an account, contact us, or request our services. Information about your business and service preferences. Payment information processed securely through third-party payment processors.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2">2.2 Information Collected Automatically</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Browser type, IP address, and device information. Pages visited and time spent on our website. Analytics data to improve our services. Cookies and similar tracking technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">3. How We Use Your Information</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Process your requests and transactions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Send you promotional emails and updates (with your consent)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Analyze website usage and improve user experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Comply with legal obligations and protect our rights</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement comprehensive security measures to protect your personal information, including encryption, secure servers, and regular security audits. While we strive to protect your data, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. These providers are obligated to use your data only as necessary to provide services to us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@adesographics.com or visit our contact page.
                </p>
              </div>

              <div className="pt-8 border-t border-foreground/10 text-xs text-muted-foreground">
                <p>Last updated: April 8, 2026</p>
              </div>
            </div>
        </Container>
      </section>
    </PageLayout>
  );
}
