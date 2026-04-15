'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { Search, ChevronDown, MessageCircle, Mail, Phone, Clock } from 'lucide-react';

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'Creating an account is simple. Click on the Sign Up button in the navigation menu, fill in your details, and follow the verification steps. You&apos;ll be able to access your account immediately after.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise clients.',
      },
      {
        question: 'Is there a free trial available?',
        answer: 'Yes, we offer a 14-day free trial for most services. No credit card required to get started.',
      },
    ],
  },
  {
    category: 'Orders & Services',
    faqs: [
      {
        question: 'How long does it take to complete a project?',
        answer: 'Project timelines vary based on complexity. Simple services like consultations are completed within 1-2 days, while larger projects like web development can take 2-6 weeks.',
      },
      {
        question: 'Can I request revisions?',
        answer: 'Absolutely! All our service packages include unlimited revision rounds. We want to ensure you&apos;re completely satisfied with the result.',
      },
      {
        question: 'What if I need to cancel my order?',
        answer: 'You can cancel orders within 24 hours of purchase for a full refund. After that period, cancellation fees may apply based on the service terms.',
      },
    ],
  },
  {
    category: 'Billing & Account',
    faqs: [
      {
        question: 'How do I update my billing information?',
        answer: 'You can update your billing information in your account settings under the Billing section. Changes take effect immediately for future orders.',
      },
      {
        question: 'Do you offer discounts for bulk orders?',
        answer: 'Yes! We offer volume discounts for organizations ordering multiple services. Contact our sales team for a custom quote.',
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee for all services. If you&apos;re not satisfied, contact support for a full refund.',
      },
    ],
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-foreground/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-foreground/[0.02] transition-colors text-left"
      >
        <span className="font-medium">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-foreground/10 text-muted-foreground">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const filteredFAQs = faqCategories[selectedCategory]?.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Support"
          title={
            <>
              How can we
              <br />
              <span className="text-muted-foreground">help you?</span>
            </>
          }
          subtitle="Browse our FAQ, knowledge base, and contact support for assistance."
        />
      </Container>

      {/* Quick Actions */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Live Chat',
                description: 'Chat with our support team in real-time',
              },
              {
                icon: Mail,
                title: 'Email Support',
                description: 'Send us an email and we&apos;ll respond within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone Support',
                description: 'Call us for urgent matters',
              },
            ].map((action, i) => {
              const Icon = action.icon;
              return (
                <div key={i} className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg text-center hover:border-foreground/20 transition-all cursor-pointer">
                  <Icon className="w-8 h-8 text-[#eca8d6] mx-auto mb-4" />
                  <h3 className="font-display mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ Search */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-6">Frequently Asked Questions</h2>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-foreground/[0.02] border-foreground/10 h-12"
              />
            </div>
          </div>

          {/* Categories & FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {faqCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedCategory === i
                        ? 'bg-foreground text-background'
                        : 'text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3 space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, i) => (
                  <FAQItem key={i} item={faq} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 border-t border-foreground/10 bg-foreground/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display mb-4">Didn&apos;t find what you&apos;re looking for?</h2>
              <p className="text-muted-foreground">
                Our support team is ready to help. Get in touch with us today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  label: 'Email',
                  value: 'support@adesco.com',
                  icon: '📧',
                },
                {
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                  icon: '📞',
                },
                {
                  label: 'Business Hours',
                  value: 'Mon-Fri, 9AM-6PM EST',
                  icon: '🕐',
                },
              ].map((info, i) => (
                <div key={i} className="text-center p-6 border border-foreground/10 rounded-lg">
                  <span className="text-3xl mb-3 block">{info.icon}</span>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                asChild
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-12 rounded-full"
              >
                <a href="mailto:support@adesco.com">Send Email</a>
              </Button>
              <Button variant="outline" className="px-8 h-12 rounded-full">
                Start Live Chat
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Knowledge Base Links */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <h2 className="text-3xl font-display mb-8">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started Guide',
                description: 'Learn the basics and set up your account',
              },
              {
                title: 'API Documentation',
                description: 'Integrate our services with your platform',
              },
              {
                title: 'Troubleshooting Guide',
                description: 'Common issues and how to resolve them',
              },
              {
                title: 'Best Practices',
                description: 'Tips and tricks for optimal results',
              },
              {
                title: 'Security & Privacy',
                description: 'How we protect your data',
              },
              {
                title: 'Terms & Policies',
                description: 'Review our legal documents',
              },
            ].map((item, i) => (
              <a key={i} href="#" className="group p-6 border border-foreground/10 rounded-lg hover:border-foreground/20 hover:bg-foreground/[0.02] transition-all">
                <h3 className="font-display mb-2 group-hover:text-[#eca8d6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
