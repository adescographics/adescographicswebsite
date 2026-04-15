'use client';

import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ConfirmationPage() {
  const orderNumber = 'ORD-2024-' + Math.random().toString(36).substring(7).toUpperCase();
  const orderDate = new Date().toLocaleDateString();

  return (
    <PageLayout>
      <Container>
        <div className="py-12 lg:py-16">
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-[#eca8d6]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-display mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for your purchase. We&apos;ve received your order and will begin working on your services shortly.
            </p>
          </div>

          {/* Order Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Details */}
            <div className="lg:col-span-2">
              <div className="border border-foreground/10 bg-foreground/[0.02] rounded-lg overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-foreground/10 bg-gradient-to-r from-foreground/5 to-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                      <p className="font-display text-2xl">{orderNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                      <p className="font-display">{orderDate}</p>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <div className="divide-y divide-foreground/10">
                  <div className="p-6">
                    <h3 className="font-display mb-4">Order Items</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between pb-4 border-b border-foreground/10">
                        <div>
                          <p className="font-medium">Website Design Package</p>
                          <p className="text-sm text-muted-foreground">Qty: 1</p>
                        </div>
                        <span className="font-medium">$1,500.00</span>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">Web Development Service</p>
                          <p className="text-sm text-muted-foreground">Qty: 1</p>
                        </div>
                        <span className="font-medium">$2,500.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>$4,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax (8%)</span>
                        <span>$320.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-foreground/10">
                      <span className="font-display">Total</span>
                      <span className="font-display text-2xl text-[#eca8d6]">$4,320.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping & Billing */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                  <h4 className="font-display mb-4">Shipping Address</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    John Doe<br />
                    123 Main Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
                <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                  <h4 className="font-display mb-4">Payment Method</h4>
                  <p className="text-sm text-muted-foreground">
                    Visa ending in<br />
                    <span className="font-mono">**** **** **** 4242</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg space-y-3">
                <h3 className="font-display mb-4">What&apos;s Next?</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 border border-foreground/10 rounded-lg text-left hover:bg-foreground/5 transition-colors">
                    <p className="font-medium text-sm mb-1">📧 View Email</p>
                    <p className="text-xs text-muted-foreground">Confirmation sent to your email</p>
                  </button>
                  <button className="w-full p-3 border border-foreground/10 rounded-lg text-left hover:bg-foreground/5 transition-colors">
                    <p className="font-medium text-sm mb-1">📋 Download Invoice</p>
                    <p className="text-xs text-muted-foreground">Get your invoice in PDF</p>
                  </button>
                  <button className="w-full p-3 border border-foreground/10 rounded-lg text-left hover:bg-foreground/5 transition-colors">
                    <p className="font-medium text-sm mb-1">📱 Track Order</p>
                    <p className="text-xs text-muted-foreground">Check your order status</p>
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-4">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#eca8d6]" />
                      <div className="w-0.5 h-12 bg-foreground/10" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Order Placed</p>
                      <p className="text-xs text-muted-foreground">Today</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-foreground/20" />
                      <div className="w-0.5 h-12 bg-foreground/10" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">In Progress</p>
                      <p className="text-xs text-muted-foreground">3-5 business days</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-foreground/20" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Delivered</p>
                      <p className="text-xs text-muted-foreground">You&apos;ll be notified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about your order?
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full rounded-full h-10 text-sm">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Ready to explore more services?</p>
            <Link href="/shop">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 rounded-full">
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
