import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Adesco Graphics - Our Story & Values',
  description: 'Learn about Adesco Graphics, our mission, team, and commitment to delivering exceptional digital solutions.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="About Our Company"
          title={
            <>
              We craft digital
              <br />
              <span className="text-muted-foreground">experiences that matter.</span>
            </>
          }
          subtitle="Adesco Graphics is a team of passionate designers, developers, and technicians dedicated to helping businesses succeed in the digital world."
        />
      </Container>

      {/* Story Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between exceptional design and technical excellence, Adesco Graphics has been at the forefront of digital innovation for over 15 years.
                </p>
                <p>
                  We started with a simple belief: great digital experiences should be accessible to businesses of all sizes. What began as a small team of passionate creators has grown into a comprehensive digital solutions provider.
                </p>
                <p>
                  Today, we partner with businesses across industries, delivering web solutions, creative content, and IT expertise that drive real results.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <div className="text-5xl font-display mb-3">50+</div>
                <p className="text-muted-foreground">Projects completed successfully</p>
              </div>
              <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <div className="text-5xl font-display mb-3">98%</div>
                <p className="text-muted-foreground">Client satisfaction rate</p>
              </div>
              <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <div className="text-5xl font-display mb-3">15+</div>
                <p className="text-muted-foreground">Years of combined expertise</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest quality in every project, detail, and interaction.',
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to solve complex problems.',
              },
              {
                title: 'Transparency',
                description: 'We communicate clearly and honestly with our clients every step of the way.',
              },
              {
                title: 'Reliability',
                description: 'You can count on us to deliver on time, every time, with consistent quality.',
              },
              {
                title: 'Collaboration',
                description: 'We work closely with our clients to understand their vision and bring it to life.',
              },
              {
                title: 'Growth',
                description: 'We invest in continuous learning and improvement to better serve our clients.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-xl font-display mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Meet Our Team
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            Our diverse team brings together web developers, designers, content creators, and IT specialists with a shared passion for excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Team Lead', role: 'Creative Director' },
              { name: 'Development Team', role: 'Web Developers & Engineers' },
              { name: 'Design Team', role: 'UI/UX Designers' },
              { name: 'Content Team', role: 'Content Creators & Videographers' },
              { name: 'IT Team', role: 'IT Specialists & Support' },
              { name: 'Client Success', role: 'Account Managers' },
            ].map((member) => (
              <div
                key={member.name}
                className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#eca8d6] to-[#eca8d6]/50 rounded-full mx-auto mb-4" />
                <h3 className="font-display text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
              Ready to work with us?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Let's discuss how Adesco Graphics can help transform your digital presence.
            </p>
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
