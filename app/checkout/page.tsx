'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const subtotal = 4000;
  const tax = 320;
  const total = 4320;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <PageLayout>
      <Container>
        <div className="py-12 lg:py-16">
          <h1 className="text-4xl font-display mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step Indicator */}
              <div className="flex items-center gap-4">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display ${
                        s <= step
                          ? 'bg-foreground text-background'
                          : 'bg-foreground/10 text-muted-foreground'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`h-1 w-12 ${
                          s < step ? 'bg-foreground' : 'bg-foreground/10'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display mb-6">Shipping Address</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-2">Email</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-foreground/[0.02] border-foreground/10"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-2">First Name</label>
                          <Input
                            name="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-foreground/[0.02] border-foreground/10"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">Last Name</label>
                          <Input
                            name="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-foreground/[0.02] border-foreground/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium block mb-2">Address</label>
                        <Input
                          name="address"
                          placeholder="123 Main St"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="bg-foreground/[0.02] border-foreground/10"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-2">City</label>
                          <Input
                            name="city"
                            placeholder="New York"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="bg-foreground/[0.02] border-foreground/10"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">ZIP Code</label>
                          <Input
                            name="zip"
                            placeholder="10001"
                            value={formData.zip}
                            onChange={handleInputChange}
                            className="bg-foreground/[0.02] border-foreground/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setStep(2)}
                    className="w-full bg-foreground hover:bg-foreground/90 text-background h-12 rounded-full"
                  >
                    Continue to Payment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display mb-6">Payment Method</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-2">Cardholder Name</label>
                        <Input
                          name="cardName"
                          placeholder="John Doe"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="bg-foreground/[0.02] border-foreground/10"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium block mb-2">Card Number</label>
                        <Input
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="bg-foreground/[0.02] border-foreground/10"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium block mb-2">Expiry Date</label>
                          <Input
                            name="expiry"
                            placeholder="MM/YY"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            className="bg-foreground/[0.02] border-foreground/10"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium block mb-2">CVV</label>
                          <Input
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="bg-foreground/[0.02] border-foreground/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1 rounded-full h-12"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      className="flex-1 bg-foreground hover:bg-foreground/90 text-background rounded-full h-12"
                    >
                      Review Order
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display mb-6">Review Order</h2>

                    <div className="space-y-4 p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg mb-6">
                      <div className="flex justify-between pb-4 border-b border-foreground/10">
                        <span className="font-medium">Shipping to:</span>
                        <span className="text-muted-foreground">
                          {formData.firstName} {formData.lastName}, {formData.address}, {formData.city}
                        </span>
                      </div>
                      <div className="flex justify-between pb-4 border-b border-foreground/10">
                        <span className="font-medium">Payment method:</span>
                        <span className="text-muted-foreground">Card ending in {formData.cardNumber.slice(-4)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1 rounded-full h-12"
                    >
                      Back
                    </Button>
                    <Link href="/checkout/confirmation" className="flex-1">
                      <Button className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full h-12">
                        Place Order
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <h3 className="font-display mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Website Design Package</span>
                    <span>$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Web Development Service</span>
                    <span>$2,500</span>
                  </div>
                </div>

                <div className="border-t border-b border-foreground/10 py-4 mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax}</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <span className="font-display">Total</span>
                  <span className="font-display text-2xl text-[#eca8d6]">${total}</span>
                </div>
              </div>

              <div className="p-4 border border-foreground/10 bg-foreground/[0.02] rounded-lg flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#eca8d6] flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Your transaction is secure and encrypted with 256-bit SSL encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
