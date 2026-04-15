'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/ui/back-button';
import { Input } from '@/components/ui/input';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { blogPosts } from '@/lib/mock-data/blog-posts';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <PageLayout>
      <Container>
        <div className="mb-8">
          <BackButton href="/" label="Back to Home" />
        </div>
        <PageHeader
          eyebrow="Insights & Stories"
          title={
            <>
              Read our latest
              <br />
              <span className="text-muted-foreground">insights and articles.</span>
            </>
          }
          subtitle="Stay updated with industry trends, best practices, and success stories."
        />
      </Container>

      {/* Search and Filter Section */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-foreground/[0.02] border-foreground/10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-foreground text-background'
                    : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                }`}
              >
                All Articles
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-foreground text-background'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} {searchQuery ? `matching "${searchQuery}"` : ''}
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border border-foreground/10 rounded-lg bg-foreground/[0.02] hover:border-[#eca8d6]/50 hover:bg-foreground/[0.04] transition-all duration-300">
                    {/* Featured Image */}
                    <div className="md:col-span-1">
                      <div className="w-full h-48 md:h-full bg-gradient-to-br from-[#eca8d6]/20 to-[#eca8d6]/5 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">{post.category}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        {/* Category and Read Time */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-mono bg-[#eca8d6]/10 px-3 py-1 rounded text-[#eca8d6]">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-display mb-4 group-hover:text-[#eca8d6] transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded bg-foreground/10 text-foreground/70">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metadata Footer */}
                      <div className="flex items-center justify-between pt-6 mt-6 border-t border-foreground/10">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author.name}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">
                No articles found matching your search.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                variant="outline"
                className="rounded-full"
              >
                Clear filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Featured Articles Section */}
      {filteredPosts.length > 0 && (
        <section className="py-16 lg:py-24 border-t border-foreground/10">
          <Container>
            <h2 className="text-3xl font-display mb-12">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 border border-foreground/10 rounded-lg bg-foreground/[0.02] hover:border-[#eca8d6]/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-[#eca8d6]/10 text-[#eca8d6]">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime} min</span>
                  </div>
                  <h3 className="font-display text-lg mb-2 group-hover:text-[#eca8d6] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </PageLayout>
  );
}
