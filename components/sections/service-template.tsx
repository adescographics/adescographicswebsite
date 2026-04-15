import { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/ui/back-button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { ArrowRight, Play } from 'lucide-react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  overview: string;
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  pricing: Array<{
    name: string;
    price: string;
    features: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  image?: string;
  videoId?: string;
  cta?: string;
}

export function ServiceTemplate({
  title,
  description,
  overview,
  benefits,
  process,
  pricing,
  faq,
  image,
  videoId,
  cta = 'Get Started Today',
}: ServiceTemplateProps) {
  return (
    <PageLayout>
      <Container>
        <div className="mb-8">
          <BackButton href="/services" label="Back to Services" />
        </div>
        <PageHeader
          eyebrow={title}
          title={
            <>
              Professional
              <br />
              <span className="text-muted-foreground">{title.toLowerCase()} services.</span>
            </>
          }
          subtitle={description}
        />
      </Container>

      {/* Service Image Section */}
      {image && (
        <section className="py-16 lg:py-24 border-t border-foreground/10">
          <Container>
            <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden border border-foreground/10">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Overview Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {overview}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#eca8d6] flex items-center justify-center text-xs text-background font-bold mt-0.5">
                      ✓
                    </div>
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      {videoId && (
        <section className="py-16 lg:py-24 border-t border-foreground/10">
          <Container>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
              See It In Action
            </h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden border border-foreground/10 bg-foreground/[0.02]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`${title} - Video Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <div className="text-5xl font-display text-[#eca8d6] mb-4">
                  {item.step.toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-display mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div
                key={plan.name}
                className={`p-8 border rounded-lg transition-all ${
                  i === 1
                    ? 'border-foreground/30 bg-foreground/[0.05]'
                    : 'border-foreground/10 bg-foreground/[0.02]'
                }`}
              >
                <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
                <div className="text-4xl font-display mb-8">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground">
                      <span className="text-[#eca8d6]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={i === 1 ? 'default' : 'outline'}
                  className={`w-full rounded-full h-11 ${
                    i === 1
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : ''
                  }`}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl">
            {faq.map((item, i) => (
              <div key={i} className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="text-xl font-display mb-4">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business with {title.toLowerCase()}.
            </p>
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              {cta}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
