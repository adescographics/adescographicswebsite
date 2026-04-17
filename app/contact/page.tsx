'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    budget: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err: any = {};
    if (!form.name) err.name = true;
    if (!form.email) err.email = true;
    if (!form.subject) err.subject = true;
    if (!form.message) err.message = true;
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        budget: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <PageLayout>
      <Container>

        {/* BREADCRUMB */}
        <div className="text-xs text-muted-foreground mb-4">
          Home / Contact / Send Message
        </div>

        {/* HEADER */}
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something
              <br />
              <span className="text-muted-foreground">great together.</span>
            </>
          }
          subtitle="Tell us about your idea — we respond within 24 hours."
        />
      </Container>

      {/* FORM AREA */}
      <section className="py-10 lg:py-14 border-t border-foreground/10">
        <Container>

          <div className="grid lg:grid-cols-12 gap-10">

            {/* FORM */}
            <div className="lg:col-span-7 p-6 lg:p-8 border border-foreground/10 rounded-xl bg-foreground/[0.02]">

              <h2 className="text-xl font-display mb-6">
                Project details
              </h2>

              <form onSubmit={submit} className="space-y-4">

                {/* row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <Input name="name" placeholder="Full name" onChange={handleChange} />
                  <Input name="email" placeholder="Email address" onChange={handleChange} />
                </div>

                {/* row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <Input name="phone" placeholder="Phone number (optional)" onChange={handleChange} />

                  <select
                    name="service"
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg bg-foreground/[0.02] border border-foreground/10"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="web">Web Development</option>
                    <option value="design">Design</option>
                    <option value="it">IT Services</option>
                    <option value="video">Video / Content</option>
                  </select>
                </div>

                {/* budget */}
                <Input
                  name="budget"
                  placeholder="Estimated budget (optional)"
                  onChange={handleChange}
                />

                {/* subject */}
                <Input
                  name="subject"
                  placeholder="Project subject"
                  onChange={handleChange}
                />

                {/* message */}
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Describe your project in detail..."
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-foreground/[0.02] border border-foreground/10 resize-none"
                />

                <Button
                  disabled={loading}
                  className="w-full h-12 rounded-full bg-foreground text-background"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* INFO PANEL */}
            <div className="lg:col-span-5 space-y-4">

              <div className="p-6 border border-foreground/10 rounded-xl bg-foreground/[0.02]">
                <h3 className="font-display mb-4">Contact info</h3>

                <div className="space-y-4 text-sm">

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-[#eca8d6]" />
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p>hello@adesco.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-[#eca8d6]" />
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-[#eca8d6]" />
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="p-6 border border-foreground/10 rounded-xl">
                <p className="font-display mb-2">Response time</p>
                <p className="text-sm text-muted-foreground">
                  Usually within 24 hours.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-background border border-foreground/10 rounded-xl p-8 max-w-md w-full relative">

            <button
              onClick={() => setSuccess(false)}
              className="absolute top-3 right-3"
            >
              <X className="w-4 h-4" />
            </button>

            <CheckCircle className="w-10 h-10 text-green-500 mb-4" />

            <h3 className="text-xl font-display mb-2">
              Message Sent Successfully
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              We’ve received your request and will respond within 24 hours.
            </p>

            <Button
              onClick={() => setSuccess(false)}
              className="w-full rounded-full bg-foreground text-background"
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}