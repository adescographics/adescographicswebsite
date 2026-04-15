'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { Send, Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
      setErrors({});
    }, 1000);
  };

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Get in Touch"
          title={
            <>
              Let&apos;s start a
              <br />
              <span className="text-muted-foreground">conversation.</span>
            </>
          }
          subtitle="Have a project in mind? We'd love to hear about it."
        />
      </Container>

      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display mb-8">Send us a message</h2>

              {submitted ? (
                <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-xl mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ve received your message and will get back to you within 24 hours. Keep an eye on your inbox.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                        className="rounded-full"
                      >
                        Send Another Message
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
                        className={`bg-foreground/[0.02] border-foreground/10 ${errors.name ? 'border-red-500/50' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-foreground/[0.02] border-foreground/10 ${errors.email ? 'border-red-500/50' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">Type of Inquiry *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-foreground/[0.02] border border-foreground/10 rounded-lg text-foreground focus:outline-none focus:border-[#eca8d6]/50 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="project">Project Proposal</option>
                      <option value="support">Support Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">Subject *</label>
                    <Input
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`bg-foreground/[0.02] border-foreground/10 ${errors.subject ? 'border-red-500/50' : ''}`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/10 rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-[#eca8d6]/50 transition-colors ${errors.message ? 'border-red-500/50' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground hover:bg-foreground/90 text-background h-12 rounded-full font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display mb-8">Contact Information</h2>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'hello@adesco.com',
                    subtext: 'We respond within 24 hours',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (555) 123-4567',
                    subtext: 'Mon-Fri, 9AM-6PM EST',
                  },
                  {
                    icon: MapPin,
                    label: 'Office',
                    value: 'San Francisco, CA',
                    subtext: 'Ready for video calls and meetings',
                  },
                ].map((contact, i) => {
                  const Icon = contact.icon;
                  return (
                    <div key={i} className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                      <div className="flex gap-4">
                        <div>
                          <Icon className="w-6 h-6 text-[#eca8d6] flex-shrink-0 mt-1" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                          <p className="font-medium mb-1">{contact.value}</p>
                          <p className="text-sm text-muted-foreground">{contact.subtext}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map(social => (
                    <a
                      key={social}
                      href="#"
                      className="flex-1 p-3 border border-foreground/10 rounded-lg text-center text-sm hover:bg-foreground/5 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-3 flex items-center gap-2">
                  ✓ Average Response Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to inquiries within 24 hours on business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="w-full h-96 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-lg flex items-center justify-center border border-foreground/10">
            <span className="text-muted-foreground">Map Component Here</span>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
