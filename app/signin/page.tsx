'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
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
        // In a real app, this would call an API
        window.location.href = '/dashboard';
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <PageLayout>
      <Container>
        <div className="max-w-md mx-auto py-12 lg:py-16">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-display mb-3">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to access your account and orders.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-12 bg-foreground/[0.02] border-foreground/10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-12 bg-foreground/[0.02] border-foreground/10"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-foreground/20"
                />
                <span className="text-sm">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#eca8d6] hover:text-[#eca8d6]/80">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-foreground hover:bg-foreground/90 text-background h-12 rounded-full font-medium"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {['Google', 'GitHub', 'Apple'].map(provider => (
              <Button
                key={provider}
                variant="outline"
                className="rounded-full h-11 border-foreground/10"
              >
                {provider === 'Google' && '🔵'}
                {provider === 'GitHub' && '⚫'}
                {provider === 'Apple' && '🍎'}
              </Button>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-foreground font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </Container>
    </PageLayout>
  );
}
