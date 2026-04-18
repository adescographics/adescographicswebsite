'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const countryCodes = [
  { code: '+234', flag: '🇳🇬' },
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    code: '+234',
    service: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [openCode, setOpenCode] = useState(false);

  const validate = () => {
    const err: any = {};

    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      err.email = 'Enter valid email';
    if (!form.phone.trim() || form.phone.length < 7)
      err.phone = 'Enter valid phone number';
    if (!form.service) err.service = 'Select a service';
    if (form.message.trim().length < 10)
      err.message = 'Message too short';
    if (!form.agree) err.agree = 'You must agree before submitting';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Get In Touch.
            <br />
            <span className="text-muted-foreground">
              Tell us about your project.
            </span>
          </>
        }
        subtitle="Fill the form below and we’ll get back to you within 24 hours."
      />

      <section className="pb-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">

            {/* FORM */}
            <div className="lg:col-span-2 p-8 border border-foreground/10 bg-foreground/[0.02] rounded-2xl">
              <h2 className="text-2xl font-display mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label className="text-sm mb-2 block">Full Name</label>
                  <Input
                    placeholder="e.g. Aaron Adejola"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm mb-2 block">Phone Number</label>

                  <div className="flex gap-2 relative">

                    {/* CUSTOM DROPDOWN */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setOpenCode(!openCode)}
                        className="px-3 h-12 border border-foreground/10 rounded-lg bg-background text-sm flex items-center gap-2"
                      >
                        {countryCodes.find(c => c.code === form.code)?.flag}
                        {form.code}
                      </button>

                      {openCode && (
                        <div className="absolute mt-2 w-28 bg-background border border-foreground/10 rounded-lg shadow-lg z-50">
                          {countryCodes.map((c) => (
                            <div
                              key={c.code}
                              onClick={() => {
                                setForm({ ...form, code: c.code });
                                setOpenCode(false);
                              }}
                              className="px-3 py-2 text-sm flex items-center gap-2 hover:bg-foreground/5 cursor-pointer"
                            >
                              <span>{c.flag}</span>
                              <span>{c.code}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* INPUT */}
                    <Input
                      placeholder="801 234 5678"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-sm mb-2 block">
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-foreground/10 rounded-lg text-sm bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>IT Consultation</option>
                    <option>PC Repair</option>
                    <option>Data Recovery</option>
                    <option>Video & Content Creation</option>
                    <option>Livestream Setup</option>
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm mb-2 block">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your project, goals, timeline, and expectations..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-foreground/10 rounded-lg text-sm bg-background resize-none focus:outline-none focus:border-[#eca8d6]/50"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* CHECKBOX */}
                <div className="flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) =>
                      setForm({ ...form, agree: e.target.checked })
                    }
                  />
                  I agree to the privacy policy
                </div>
                {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}

                {/* BUTTON */}
                <Button className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* INFO PANEL */}
            <div className="space-y-6">

              <div className="p-6 border border-foreground/10 rounded-lg">
                <Mail className="w-5 h-5 text-[#eca8d6] mb-2" />
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  support@adesographics.com
                </p>
              </div>

              <div className="p-6 border border-foreground/10 rounded-lg">
                <Phone className="w-5 h-5 text-[#eca8d6] mb-2" />
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">
                  +234 801 234 5678
                </p>
              </div>

              <div className="p-6 border border-foreground/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#eca8d6] mb-2" />
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  Ilorin, Kwara State, Nigeria
                </p>
              </div>

              {/* SOCIAL */}
              <div className="p-6 border border-foreground/10 rounded-lg">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full hover:bg-foreground/5 transition">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full hover:bg-foreground/5 transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full hover:bg-foreground/5 transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SUCCESS MODAL */}
      {submitted && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-background border border-foreground/10 p-6 rounded-xl text-center">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <p className="text-sm mb-4">
              Message sent successfully. We’ll reply within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}