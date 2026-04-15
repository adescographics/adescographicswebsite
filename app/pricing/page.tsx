import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';

export const metadata = {
  title: 'Pricing - Adesco Graphics',
  description: 'Transparent pricing for all our services. Choose the plan that fits your needs.',
};

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and businesses',
    price: '$500',
    period: 'per project',
    features: [
      'Basic service package',
      'Up to 5 hours of work',
      'Email support',
      '2 weeks turnaround',
      'Basic revisions',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    price: '$1,500',
    period: 'per project',
    features: [
      'Full service package',
      'Up to 20 hours of work',
      'Priority support',
      '1 week turnaround',
      'Unlimited revisions',
      'Project management',
      'Advanced features',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'tailored quote',
    features: [
      'Custom solution',
      'Dedicated team',
      'Unlimited hours',
      '24/7 support',
      'SLA guarantee',
      'Monthly check-ins',
      'Training included',
      'Full customization',
    ],
    highlight: false,
  },
];

const services = [
  {
    category: 'Web Services',
    items: [
      { name: 'Website Design', price: 'Starting at $500' },
      { name: 'Web Development', price: 'Starting at $1,500' },
      { name: 'E-commerce Setup', price: 'Custom pricing' },
    ],
  },
  {
    category: 'Creative Services',
    items: [
      { name: 'Content Creation', price: 'Starting at $300' },
      { name: 'Video Production', price: 'Starting at $800' },
      { name: 'Graphic Design', price: 'Starting at $200' },
    ],
  },
  {
    category: 'IT Services',
    items: [
      { name: 'Computer Repair', price: 'Starting at $100' },
      { name: 'System Setup', price: 'Starting at $150' },
      { name: 'IT Consultation', price: 'Starting at $200/hour' },
    ],
  },
  {
    category: 'Support & Maintenance',
    items: [
      { name: 'Ongoing Support', price: '$200/month' },
      { name: '24/7 Managed Support', price: '$500/month' },
      { name: 'Hosting & Maintenance', price: '$100-500/month' },
    ],
  },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Transparent Pricing"
          title={
            <>
              Choose the right plan
              <br />
              <span className="text-muted-foreground">for your business.</span>
            </>
          }
          subtitle="Flexible pricing options for businesses of all sizes. All plans include quality, reliability, and our commitment to your success."
        />
      </Container>

      {/* Main Pricing Plans */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative p-8 border rounded-lg transition-all ${
                  plan.highlight
                    ? 'border-foreground/30 bg-foreground/[0.05] ring-1 ring-foreground/10'
                    : 'border-foreground/10 bg-foreground/[0.02]'
                } ${i === 1 ? 'lg:scale-105' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#eca8d6] text-background text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="text-5xl font-display">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                <Button
                  className={`w-full rounded-full h-12 mb-8 ${
                    plan.highlight
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'border border-foreground/20 hover:bg-foreground/5'
                  }`}
                  variant={plan.highlight ? 'default' : 'outline'}
                >
                  Choose Plan
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-[#eca8d6] flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Pricing Breakdown */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Service Pricing Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.category} className="border border-foreground/10 bg-foreground/[0.02] rounded-lg p-8">
                <h3 className="text-2xl font-display mb-6">{service.category}</h3>
                <div className="space-y-4">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-foreground/10 last:border-0">
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-[#eca8d6] font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-16">
            Pricing FAQs
          </h2>

          <div className="space-y-6 max-w-3xl">
            {[
              {
                q: 'Can you provide custom pricing?',
                a: 'Absolutely! For enterprise projects or unique requirements, we offer tailored pricing. Contact us for a custom quote.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we can arrange payment plans for larger projects. Discuss your preference when we connect.',
              },
              {
                q: 'What&apos;s included in support?',
                a: 'Our support packages include bug fixes, minor updates, performance monitoring, and technical assistance.',
              },
              {
                q: 'Are there hidden fees?',
                a: 'No. We believe in transparent pricing. All costs are clearly outlined before we begin work.',
              },
              {
                q: 'What if needs change mid-project?',
                a: 'We can adjust scope and pricing as needed. Communication and transparency are key to our process.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-3 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Choose your plan or contact us to discuss a custom solution tailored to your needs.
            </p>
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full"
            >
              Schedule Consultation
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
