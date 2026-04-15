'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { ArrowRight, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      if (formData.email && formData.password && formData.firstName) {
        window.location.href = '/client/dashboard';
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <PageLayout>
      <Container>
        <div className="min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 mt-16 sm:mt-20 lg:mt-24">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-display mb-3 text-foreground">Create account</h1>
              <p className="text-muted-foreground">
                Join us and start managing your projects with our client dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-2 text-foreground">First Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#eca8d6] transition-colors" />
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="pl-12 bg-foreground/[0.02] border-foreground/10 focus:border-[#eca8d6]/30 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2 text-foreground">Last Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#eca8d6] transition-colors" />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="pl-12 bg-foreground/[0.02] border-foreground/10 focus:border-[#eca8d6]/30 transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2 text-foreground">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#eca8d6] transition-colors" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 bg-foreground/[0.02] border-foreground/10 focus:border-[#eca8d6]/30 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2 text-foreground">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#eca8d6] transition-colors" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-12 pr-12 bg-foreground/[0.02] border-foreground/10 focus:border-[#eca8d6]/30 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2 text-foreground">Confirm Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#eca8d6] transition-colors" />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-12 pr-12 bg-foreground/[0.02] border-foreground/10 focus:border-[#eca8d6]/30 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-foreground/20 bg-foreground/5 mt-1"
                  required
                />
                <span className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#eca8d6] hover:text-[#eca8d6]/80 font-medium transition-colors">
                    terms of service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#eca8d6] hover:text-[#eca8d6]/80 font-medium transition-colors">
                    privacy policy
                  </Link>
                </span>
              </label>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black h-12 rounded-full font-medium transition-all duration-300"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            {/* Sign In Link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-[#eca8d6] font-medium hover:text-[#eca8d6]/80 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
