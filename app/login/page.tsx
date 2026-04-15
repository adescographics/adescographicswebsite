'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
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
    setIsLoading(true);
    setError('');

    // Simulate authentication
    setTimeout(() => {
      if (formData.email && formData.password) {
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
              <h1 className="text-4xl font-display mb-3 text-foreground">Welcome back</h1>
              <p className="text-muted-foreground">
                Sign in to access your client dashboard and manage your projects.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 mb-8">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-foreground/20 bg-foreground/5"
                  />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link href="#" className="text-sm text-[#eca8d6] hover:text-[#eca8d6]/80 transition-colors font-medium">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black h-12 rounded-full font-medium transition-all duration-300"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">or continue with</span>
              </div>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { name: 'Google', emoji: '🔵' },
                { name: 'GitHub', emoji: '⚫' },
                { name: 'Apple', emoji: '🍎' }
              ].map(provider => (
                <Button
                  key={provider.name}
                  variant="outline"
                  className="rounded-full h-11 border-foreground/10 hover:border-[#eca8d6]/30 hover:bg-[#eca8d6]/5 transition-all"
                  disabled={isLoading}
                >
                  {provider.emoji}
                </Button>
              ))}
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#eca8d6] font-medium hover:text-[#eca8d6]/80 transition-colors">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
