"use client";

import { Facebook, Youtube, Instagram, Mail, MessageCircle, Phone, Linkedin, Github, X, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  Services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Video Creation", href: "/services/video-creation" },
    { name: "IT Solutions", href: "/services/it-solutions" },
  ],
  Support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Reviews", href: "/reviews" },
  ],
  Resources: [
    { name: "Toolbar", href: "/toolbar" },
    { name: "Changelog", href: "/changelog" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
  ],
  Account: [
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
    { name: "Dashboard", href: "/client/dashboard" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "X", href: "https://x.com", icon: X },
  { name: "Gmail", href: "mailto:contact@adescographics.com", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/1234567890", icon: MessageCircle },
  { name: "Call", href: "tel:+1234567890", icon: Phone },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
];

function SocialWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#eca8d6]/20 text-white hover:text-[#eca8d6] transition-all duration-300"
        title="Social Links"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Spiral Menu with Curved Animation */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-6 z-50">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            const angle = (index / socialLinks.length) * Math.PI * 2;
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#eca8d6] text-white hover:text-black transition-all duration-300"
                style={{
                  animation: `spiralIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${index * 0.06}s`,
                  '--spiral-x': `${x}px`,
                  '--spiral-y': `${y}px`,
                } as React.CSSProperties & { '--spiral-x': string; '--spiral-y': string }}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @keyframes spiralIn {
          from {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          to {
            opacity: 1;
            transform: translate(var(--spiral-x), var(--spiral-y)) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Reorganize footer links into a 3-column structure
  const footerColumns = {
    "Product": [
      { name: "Services", href: "/services/web-development" },
      { name: "Pricing", href: "#pricing" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Changelog", href: "/changelog" },
    ],
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Shop", href: "/shop" },
    ],
    "Legal": [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Status", href: "/status" },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Watermark background text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] font-display font-black text-white/8 whitespace-nowrap leading-none">
          ADESCO
        </div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
            {/* Left Section - Newsletter */}
            <div>
              <h3 className="text-3xl md:text-4xl font-display text-white mb-4 leading-tight">
                Stay ahead of the curve.
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Get updates on our latest services, design trends, and exclusive insights delivered to your inbox.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="mb-10">
                <div className="flex gap-2 mb-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-[#eca8d6] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors duration-300"
                  >
                    Join
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-[#eca8d6]">Thanks for subscribing!</p>
                )}
              </form>

              {/* Social Icons - Inline */}
              <div className="flex items-center gap-3">
                {socialLinks.slice(0, 3).map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                      className="flex items-center justify-center w-8 h-8 text-white/60 hover:text-[#eca8d6] transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Section - Links Grid */}
            <div className="grid grid-cols-3 gap-8 lg:gap-16">
              {Object.entries(footerColumns).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">{title}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 hover:text-[#eca8d6] transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs text-white/50">
              © 2025 Adesco Graphics. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Crafted with passion for digital excellence
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#eca8d6] animate-pulse" />
            <span className="text-xs text-white/60">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
