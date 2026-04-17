"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

const formatPrice = (value: number | null) => {
  if (value === null) return "Custom";
  return value.toLocaleString("en-NG");
};

const plans = [
  {
    name: "Starter",
    description: "For small projects and businesses",
    price: { monthly: 500, annual: 5000 },
    features: [
      "1 professional project",
      "Basic web design",
      "5 pages included",
      "Email support",
      "3 months of updates",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: { monthly: 1500, annual: 15000 },
    features: [
      "Unlimited projects",
      "Custom web design",
      "Advanced features",
      "Priority support",
      "1 year of updates",
      "SEO optimization",
      "Content strategy",
    ],
    cta: "Start project",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: { monthly: null, annual: null },
    features: [
      "Dedicated team",
      "Custom solutions",
      "Full suite of services",
      "24/7 support",
      "SLA guarantee",
      "Advanced analytics",
      "Training included",
      "Unlimited updates",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-12 md:py-24 lg:py-32 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4 sm:mb-8">
              <span className="w-6 sm:w-12 h-px bg-foreground/30" />
              Pricing
            </span>

            <h2
              className={`text-4xl sm:text-5xl md:text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Transparent
              <br />
              <span className="text-stroke">pricing.</span>
            </h2>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-10 gap-2">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 text-sm border transition ${
              !isAnnual
                ? "bg-foreground text-background"
                : "border-foreground/20"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 text-sm border transition ${
              isAnnual
                ? "bg-foreground text-background"
                : "border-foreground/20"
            }`}
          >
            Annual
          </button>
        </div>

        {/* Pricing cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-0">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-background border transition-all duration-700 ${
                  plan.highlight
                    ? "border-foreground lg:-mx-2 lg:z-10 lg:scale-105"
                    : "border-foreground/10 lg:first:-mr-2 lg:last:-ml-2"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Header */}
                  <div className="mb-6 sm:mb-8 pb-4 sm:pb-8 border-b border-foreground/10">
                    <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-display mt-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 sm:mb-8">
                    {plan.price.monthly !== null ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">
                          ₦
                          {formatPrice(
                            isAnnual
                              ? plan.price.annual
                              : plan.price.monthly
                          )}
                        </span>
                        <span className="text-muted-foreground text-xs sm:text-sm">
                          /{isAnnual ? "yr" : "mo"}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl sm:text-3xl md:text-4xl font-display">
                        Custom
                      </span>
                    )}

                    {plan.price.monthly !== null && (
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 font-mono">
                        {isAnnual ? "billed annually" : "billed monthly"}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-10">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-all group ${
                      plan.highlight
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-8 pt-6 sm:pt-8 md:pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6]" />
              Professional service
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6]" />
              Flexible terms
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6]" />
              Full support
            </span>
          </div>

          <a
            href="#"
            className="text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            View service details
          </a>
        </div>
      </div>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}