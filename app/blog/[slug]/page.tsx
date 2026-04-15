'use client';

import { use } from 'react';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/ui/back-button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { getPostBySlug, getRelatedPosts } from '@/lib/mock-data/blog-posts';
import { Calendar, User, Share2, ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <PageLayout>
      <Container>
        <div className="py-8 mb-12">
          <BackButton href="/blog" label="Back to Blog" />
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-mono bg-[#eca8d6]/10 px-3 py-1 rounded text-[#eca8d6]">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-display mb-6 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-foreground/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#eca8d6]/20 flex items-center justify-center text-[#eca8d6] font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground sm:ml-auto">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {publishDate}
              </div>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  }
                }}
                className="hover:text-foreground transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-[#eca8d6]/20 to-[#eca8d6]/5 rounded-lg overflow-hidden">
            {post.image ? (
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-lg text-muted-foreground">{post.title}</span>
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-display">
              {post.excerpt}
            </p>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none space-y-8">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headers
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-display mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                // Handle regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-lg text-foreground/80 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-foreground/10">
              <p className="text-sm text-muted-foreground mb-4">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <Link
                    key={i}
                    href={`/blog?search=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 rounded-full bg-foreground/10 text-foreground/70 text-sm hover:bg-foreground/20 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Author Card */}
            <div className="p-6 border border-foreground/10 rounded-lg bg-foreground/[0.02] mb-8">
              <h3 className="font-display text-lg mb-4">About the Author</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#eca8d6]/20 flex items-center justify-center text-[#eca8d6] text-2xl font-bold flex-shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate about creating quality content and sharing insights with the community.
              </p>
            </div>

            {/* Share Card */}
            <div className="p-6 border border-foreground/10 rounded-lg bg-foreground/[0.02] mb-8">
              <h3 className="font-display text-lg mb-4">Share This Article</h3>
              <div className="space-y-2">
                {[
                  { name: 'Twitter', icon: '𝕏' },
                  { name: 'LinkedIn', icon: 'in' },
                  { name: 'Facebook', icon: 'f' },
                ].map((social) => (
                  <button
                    key={social.name}
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="w-full p-2 text-sm border border-foreground/10 rounded hover:bg-foreground/10 transition-colors"
                  >
                    Share on {social.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 lg:py-24 border-t border-foreground/10 mt-16">
            <Container>
              <h2 className="text-3xl font-display mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group p-6 border border-foreground/10 rounded-lg bg-foreground/[0.02] hover:border-[#eca8d6]/50 hover:bg-foreground/[0.04] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs px-2 py-1 rounded bg-[#eca8d6]/10 text-[#eca8d6]">
                        {relatedPost.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{relatedPost.readTime} min</span>
                    </div>
                    <h3 className="font-display text-lg mb-2 group-hover:text-[#eca8d6] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </Container>
    </PageLayout>
  );
}
