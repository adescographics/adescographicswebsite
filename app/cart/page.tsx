'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock cart data
const mockCartItems = [
  {
    id: 1,
    name: 'Website Design Package',
    price: 1500,
    quantity: 1,
    slug: 'website-design-package',
  },
  {
    id: 2,
    name: 'Web Development Service',
    price: 2500,
    quantity: 1,
    slug: 'web-development-service',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [couponCode, setCouponCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <PageLayout>
        <Container>
          <div className="py-24 text-center">
            <h1 className="text-4xl font-display mb-4">Your cart is empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our services and add items to get started.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 rounded-full">
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Container>
        <div className="py-12 lg:py-16">
          <h1 className="text-4xl font-display mb-12">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-lg">{item.name}</h3>
                      <p className="text-muted-foreground">SKU: {item.id}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex items-center border border-foreground/10 rounded-lg w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-foreground/5"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-foreground/5"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">
                        ₦{item.price.toLocaleString()}
                      </p>
                      <p className="font-display text-lg text-[#eca8d6]">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/shop">
                <Button variant="outline" className="w-full rounded-full h-12">
                  Continue Shopping
                </Button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Summary Box */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg space-y-4">
                <h2 className="font-display text-xl">Order Summary</h2>

                <div className="space-y-3 border-t border-b border-foreground/10 py-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>₦{tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <span className="font-display">Total</span>
                  <span className="font-display text-2xl text-[#eca8d6]">
                    ₦{total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Coupon */}
              <div className="space-y-3">
                <label className="text-sm font-medium block">Promo Code</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="bg-foreground/[0.02] border-foreground/10"
                  />
                  <Button variant="outline" className="px-4 rounded-full h-10">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <Button className="w-full bg-foreground hover:bg-foreground/90 text-background h-14 rounded-full">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Security Info */}
              <div className="p-4 border border-foreground/10 bg-foreground/[0.02] rounded-lg text-center">
                <p className="text-xs text-muted-foreground">
                  🔒 Your transaction is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
