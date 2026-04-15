'use client';

import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { Button } from '@/components/ui/button';
import { AlertCircle, Star, Heart, ShoppingCart, Filter } from 'lucide-react';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Premium Web Design Package',
    price: 2499,
    rating: 4.8,
    reviews: 124,
    image: 'bg-gradient-to-br from-blue-600 to-blue-800',
    category: 'Design',
  },
  {
    id: 2,
    name: 'Full Stack Development',
    price: 4999,
    rating: 4.9,
    reviews: 89,
    image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    category: 'Development',
  },
  {
    id: 3,
    name: 'Content Creation Service',
    price: 1299,
    rating: 4.7,
    reviews: 156,
    image: 'bg-gradient-to-br from-pink-600 to-pink-800',
    category: 'Content',
  },
  {
    id: 4,
    name: 'IT Solutions Package',
    price: 3499,
    rating: 4.6,
    reviews: 92,
    image: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
    category: 'IT',
  },
  {
    id: 5,
    name: 'Video Production',
    price: 3999,
    rating: 4.9,
    reviews: 76,
    image: 'bg-gradient-to-br from-orange-600 to-orange-800',
    category: 'Video',
  },
  {
    id: 6,
    name: 'SEO Optimization',
    price: 1599,
    rating: 4.5,
    reviews: 118,
    image: 'bg-gradient-to-br from-red-600 to-red-800',
    category: 'Marketing',
  },
  {
    id: 7,
    name: 'Brand Identity Design',
    price: 1999,
    rating: 4.8,
    reviews: 143,
    image: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
    category: 'Design',
  },
  {
    id: 8,
    name: 'Mobile App Development',
    price: 5499,
    rating: 4.9,
    reviews: 67,
    image: 'bg-gradient-to-br from-cyan-600 to-cyan-800',
    category: 'Development',
  },
];

const categories = ['All', 'Design', 'Development', 'Content', 'Video', 'Marketing', 'IT'];

export default function ShopPage() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animateContent, setAnimateContent] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <PageLayout>
      {/* Coming Soon Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#eca8d6]/10 mb-6">
                <AlertCircle className="w-8 h-8 text-[#eca8d6]" />
              </div>
              <h2 className="text-3xl font-display mb-3 text-foreground">Coming Soon</h2>
              <p className="text-muted-foreground mb-2">
                Shop and E-Commerce
              </p>
              <p className="text-sm text-muted-foreground/70 mb-8">
                We&apos;re launching our marketplace with curated services and packages. Browse our exclusive offerings soon!
              </p>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black rounded-full font-medium"
              >
                Got it
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Blurred Shop Background */}
      <div className="transition-all duration-500" style={{filter: showOverlay ? 'blur(4px)' : 'blur(0px)'}}>
        <style>{`
          * { filter: inherit !important; }
          button, a, span, h1, h2, h3, p, div > * { filter: none !important; }
        `}</style>
        <Container>
          <div className="py-8 lg:py-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-display text-foreground mb-2">Shop</h1>
              <p className="text-muted-foreground">Browse our collection of premium services and packages.</p>
            </div>

            {/* Filter Bar */}
            <div
              className="mb-12 flex flex-col gap-4"
              style={{
                opacity: animateContent ? 1 : 0,
                transform: animateContent ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#eca8d6] text-black font-medium'
                        : 'border border-foreground/20 text-foreground hover:border-foreground/40'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-foreground/[0.02] border border-foreground/10 rounded-lg overflow-hidden hover:border-[#eca8d6]/20 transition-all duration-300 group"
                  style={{
                    opacity: animateContent ? 1 : 0,
                    transform: animateContent ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 50}ms`,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Product Image Placeholder */}
                  <div className={`w-full h-48 ${product.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-all duration-300"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-colors ${
                          favorites.includes(product.id) 
                            ? 'fill-[#eca8d6] text-[#eca8d6]' 
                            : 'text-muted-foreground hover:text-[#eca8d6]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground font-mono bg-foreground/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-display text-foreground mt-3 mb-2 line-clamp-2 group-hover:text-[#eca8d6] transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-[#eca8d6] text-[#eca8d6]'
                                : 'text-foreground/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-display text-foreground">
                        ₦{product.price.toLocaleString()}
                      </span>
                      <button className="p-2 rounded-full bg-[#eca8d6]/10 hover:bg-[#eca8d6]/20 text-[#eca8d6] transition-all duration-300">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div
              className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-8 max-w-2xl"
              style={{
                opacity: animateContent ? 1 : 0,
                transform: animateContent ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-display text-foreground flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Shopping Cart
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#eca8d6] text-black font-medium text-sm">
                  {filteredProducts.length} items available
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Start adding items to your cart to see them here. All orders include priority support and 30-day guarantee.
              </p>
              <button className="w-full py-3 px-4 rounded-lg bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black font-medium transition-all duration-300">
                View Cart
              </button>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
