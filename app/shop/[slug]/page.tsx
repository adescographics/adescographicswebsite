'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const productData = {
  'website-design-package': {
    name: 'Professional Website Design Package',
    price: 1500,
    rating: 4.8,
    reviews: 24,
    image: 'Website Design',
    description: 'Complete website design package tailored to your brand.',
    details: [
      'Custom design for 5-10 pages',
      'Mobile responsive layout',
      'Brand-aligned color scheme',
      'Interactive prototypes',
      'Unlimited revision rounds',
      'Design system documentation',
    ],
    includes: [
      'Initial consultation',
      'Brand research',
      'Wireframing',
      'High-fidelity mockups',
      'Design handoff',
      'Support included',
    ],
    timeline: '3-4 weeks',
    category: 'Web Design',
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1);
  const product = productData['website-design-package'];

  return (
    <PageLayout>
      <Container>
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 lg:py-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="w-full aspect-square bg-gradient-to-br from-[#eca8d6]/20 to-[#eca8d6]/5 rounded-lg flex items-center justify-center">
              <span className="text-lg text-muted-foreground">{product.image}</span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gradient-to-br from-[#eca8d6]/10 to-[#eca8d6]/5 rounded-lg border border-foreground/10 cursor-pointer hover:border-foreground/20"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-mono text-muted-foreground mb-2 block">{product.category}</span>
              <h1 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'fill-[#eca8d6] text-[#eca8d6]' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price & Purchase */}
            <div className="border-t border-foreground/10 border-b border-foreground/10 py-6">
              <div className="mb-6">
                <span className="text-sm text-muted-foreground block mb-2">Price</span>
                <span className="text-5xl font-display text-[#eca8d6]">${product.price}</span>
                <p className="text-sm text-muted-foreground mt-2">One-time project fee</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-foreground/10 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-foreground/5 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-l border-r border-foreground/10">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-foreground/5 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-foreground hover:bg-foreground/90 text-background h-14 rounded-full"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full h-14"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Save for Later
                </Button>
              </div>

              <div className="mt-4 flex gap-4 justify-center">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Key Details */}
            <div>
              <h3 className="font-display text-lg mb-4">Project Timeline</h3>
              <p className="text-foreground">{product.timeline}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Description Section */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display mb-6">About This Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <h3 className="text-2xl font-display mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {product.includes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#eca8d6] font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-[#eca8d6]">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-3">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about this service?
                </p>
                <Button variant="outline" className="w-full rounded-full h-10">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <h2 className="text-3xl font-display mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <div className="w-full h-32 bg-gradient-to-br from-[#eca8d6]/10 to-[#eca8d6]/5 rounded-lg mb-4" />
                <h3 className="font-display mb-2">Related Service</h3>
                <p className="text-muted-foreground text-sm mb-4">Service description</p>
                <span className="font-display text-[#eca8d6]">From $500</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
