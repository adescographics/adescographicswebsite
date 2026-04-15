'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Animated 500 */}
        <div className="mb-8">
          <span className="text-[200px] md:text-[300px] font-display font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
            500
          </span>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-display mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          An unexpected error occurred. Our team has been notified and is investigating the issue.
        </p>

        {/* Error Message */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-8 text-left">
            <p className="text-xs text-red-300 font-mono">{error.message}</p>
          </div>
        )}

        {/* Suggested Actions */}
        <div className="bg-foreground/[0.02] border border-foreground/10 rounded-lg p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-4">You can try:</p>
          <ul className="text-left text-sm text-white/60 space-y-2">
            <li>• Try the action again</li>
            <li>• Clear your browser cache</li>
            <li>• Come back in a few minutes</li>
            <li>• Contact our support team for help</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => reset()}
            className="bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black rounded-full font-medium px-8 h-12 text-base"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-[#eca8d6]/30 hover:bg-[#eca8d6]/5 rounded-full h-12 px-8 text-base">
              Back to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Support */}
        <div className="pt-8 border-t border-foreground/10">
          <p className="text-sm text-muted-foreground mb-4">Need assistance?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="text-sm text-[#eca8d6] hover:underline">
              Contact Support
            </Link>
            <a href="mailto:support@adescographics.com" className="text-sm text-[#eca8d6] hover:underline">
              Email Us
            </a>
            <Link href="/" className="text-sm text-[#eca8d6] hover:underline">
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
