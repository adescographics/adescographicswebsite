import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#eca8d6]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#eca8d6]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl w-full">
        {/* Error Code Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-8">
            <div className="relative">
              <span className="text-9xl md:text-[200px] font-display font-black leading-none text-[#eca8d6] drop-shadow-[0_0_30px_rgba(236,168,214,0.2)]">
                404
              </span>
              <div className="absolute inset-0 text-9xl md:text-[200px] font-display font-black blur-xl text-[#eca8d6]/20">
                404
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-2 max-w-xl mx-auto">
            The page you&apos;re looking for has wandered off into the digital void.
          </p>
          <p className="text-sm md:text-base text-white/40 max-w-xl mx-auto">
            It might have been moved, deleted, or perhaps you mistyped the URL. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/" className="flex-1 sm:flex-none">
            <Button className="w-full sm:w-auto bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-black rounded-lg font-semibold px-8 h-12 text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#eca8d6]/20">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
          <Link href="/contact" className="flex-1 sm:flex-none">
            <Button variant="outline" className="w-full sm:w-auto border border-white/20 hover:border-[#eca8d6]/50 hover:bg-white/5 text-white rounded-lg font-semibold px-8 h-12 text-base transition-all duration-300">
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-[#eca8d6] mt-1">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-medium mb-2">Looking for something?</p>
              <p className="text-white/60 text-sm">Try using our search feature or navigate through our main menu to find what you need.</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/50 font-mono uppercase tracking-widest mb-8 text-center">Quick links</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link href="/" className="text-sm text-[#eca8d6]/80 hover:text-[#eca8d6] transition-colors py-2 px-3 hover:bg-white/5 rounded">
              Home
            </Link>
            <Link href="/services" className="text-sm text-[#eca8d6]/80 hover:text-[#eca8d6] transition-colors py-2 px-3 hover:bg-white/5 rounded">
              Services
            </Link>
            <Link href="/shop" className="text-sm text-[#eca8d6]/80 hover:text-[#eca8d6] transition-colors py-2 px-3 hover:bg-white/5 rounded">
              Shop
            </Link>
            <Link href="/contact" className="text-sm text-[#eca8d6]/80 hover:text-[#eca8d6] transition-colors py-2 px-3 hover:bg-white/5 rounded">
              Contact
            </Link>
            <Link href="/" className="text-sm text-[#eca8d6]/80 hover:text-[#eca8d6] transition-colors py-2 px-3 hover:bg-white/5 rounded">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
