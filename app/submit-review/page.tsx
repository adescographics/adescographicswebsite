'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { Star, CheckCircle, AlertCircle } from 'lucide-react';

export default function SubmitReviewPage() {
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    title: '',
    content: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Web Design',
    'Content Creation',
    'Video Production',
    'IT Solutions',
    'Laptop Repair',
    'System Recovery',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', service: '', title: '', content: '' });
      setRating(5);
    }, 1000);
  };

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Share Your Feedback"
          title={
            <>
              Submit Your
              <br />
              <span className="text-muted-foreground">Review.</span>
            </>
          }
          subtitle="Help others discover the quality of our work by sharing your experience."
        />
      </Container>

      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-xl mb-2">Review Submitted Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for taking the time to share your experience. Your review helps us improve and helps others discover our services. We appreciate your feedback!
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      Submit Another Review
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Name *</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-foreground/[0.02] border-foreground/10"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-foreground/[0.02] border-foreground/10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-foreground/[0.02] border border-foreground/10 rounded-lg text-foreground focus:outline-none focus:border-[#eca8d6]/50 transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Rating *</label>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(i + 1)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            i < rating
                              ? 'fill-[#eca8d6] text-[#eca8d6]'
                              : 'text-foreground/30'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Review Title *</label>
                  <Input
                    name="title"
                    placeholder="Summarize your experience"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="bg-foreground/[0.02] border-foreground/10"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Your Review *</label>
                  <textarea
                    name="content"
                    placeholder="Share details about your experience..."
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/10 rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-[#eca8d6]/50 transition-colors"
                    required
                  />
                </div>

                <div className="p-4 bg-foreground/[0.02] border border-foreground/10 rounded-lg flex gap-3">
                  <AlertCircle className="w-5 h-5 text-[#eca8d6] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Your review will be displayed on our site after verification. We appreciate honest feedback!
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground hover:bg-foreground/90 text-background h-12 rounded-full font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
