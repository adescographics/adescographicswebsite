'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { BackButton } from '@/components/ui/back-button';
import { PageHeader } from '@/components/sections/page-header';

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Legal & Compliance"
        title={
          <>
            Terms of Service
            <br />
            <span className="text-muted-foreground">Understand our agreement.</span>
          </>
        }
        subtitle="Please read these terms carefully before using our services"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-12">
            <BackButton href="/" label="Back to Home" />
          </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Adesco Graphics services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Adesco Graphics for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Modify or copy the materials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Use the materials for any commercial purpose or for any public display</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Attempt to decompile or reverse engineer any software contained on the website</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Remove any copyright or other proprietary notations from the materials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#eca8d6]">•</span>
                    <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">3. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on Adesco Graphics are provided on an "as is" basis. Adesco Graphics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">4. Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Adesco Graphics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Adesco Graphics, even if Adesco Graphics or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">5. Accuracy of Materials</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on Adesco Graphics could include technical, typographical, or photographic errors. Adesco Graphics does not warrant that any of the materials on our website are accurate, complete, or current. Adesco Graphics may make changes to the materials contained on our website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">6. Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adesco Graphics has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Adesco Graphics of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">7. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adesco Graphics may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Adesco Graphics is located, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
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
