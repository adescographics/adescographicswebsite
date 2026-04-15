'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { Star, Filter } from 'lucide-react';
import Link from 'next/link';

interface Review {
  id: string;
  author: string;
  rating: number;
  service: string;
  title: string;
  content: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    rating: 5,
    service: 'Web Development',
    title: 'Exceeded All Expectations',
    content: 'The team delivered an exceptional website that transformed our business online presence. Professional, responsive, and delivered on time.',
    date: '2024-03-15',
    verified: true,
  },
  {
    id: '2',
    author: 'Michael Chen',
    rating: 5,
    service: 'Web Design',
    title: 'Outstanding Design Work',
    content: 'Beautifully designed website with excellent UX. The designers really understood our brand vision and executed it perfectly.',
    date: '2024-03-10',
    verified: true,
  },
  {
    id: '3',
    author: 'Emma Williams',
    rating: 4,
    service: 'IT Solutions',
    title: 'Great Support and Solutions',
    content: 'Professional IT team that provided solid solutions. Great communication throughout the process. Would recommend.',
    date: '2024-03-05',
    verified: true,
  },
  {
    id: '4',
    author: 'David Martinez',
    rating: 5,
    service: 'Video Production',
    title: 'Professional Video Content',
    content: 'Created stunning video content for our marketing campaign. High quality production and creative direction.',
    date: '2024-02-28',
    verified: true,
  },
  {
    id: '5',
    author: 'Jessica Lee',
    rating: 5,
    service: 'Content Creation',
    title: 'Excellent Content Strategy',
    content: 'The content team developed a comprehensive strategy that increased our engagement by 300%. Highly professional.',
    date: '2024-02-20',
    verified: true,
  },
  {
    id: '6',
    author: 'Robert Taylor',
    rating: 4,
    service: 'Laptop Repair',
    title: 'Quick and Reliable Repair',
    content: 'Quickly diagnosed and fixed my laptop issues. Fair pricing and professional service. Very satisfied.',
    date: '2024-02-15',
    verified: true,
  },
];

export default function ReviewsPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('all');

  const services = ['all', ...new Set(reviews.map(r => r.service))];
  
  const filteredReviews = reviews.filter(review => {
    const ratingMatch = selectedRating === null || review.rating === selectedRating;
    const serviceMatch = selectedService === 'all' || review.service === selectedService;
    return ratingMatch && serviceMatch;
  });

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Customer Feedback"
          title={
            <>
              What Our Clients
              <br />
              <span className="text-muted-foreground">Are Saying.</span>
            </>
          }
          subtitle="Read authentic reviews from businesses we've helped succeed."
        />
      </Container>

      {/* Filters */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter by Rating
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedRating(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRating === null
                      ? 'bg-foreground text-background'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  All Ratings
                </button>
                {[5, 4, 3].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                      selectedRating === rating
                        ? 'bg-foreground text-background'
                        : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                    }`}
                  >
                    {rating}
                    <Star className="w-4 h-4 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-4">Filter by Service</p>
              <div className="flex flex-wrap gap-3">
                {services.map(service => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedService === service
                        ? 'bg-[#eca8d6] text-background'
                        : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                    }`}
                  >
                    {service === 'all' ? 'All Services' : service}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          <p className="text-muted-foreground mb-8">
            Showing {filteredReviews.length} of {reviews.length} reviews
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map(review => (
              <div
                key={review.id}
                className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/50 hover:bg-foreground/[0.04] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg mb-1">{review.author}</h3>
                    <p className="text-xs text-muted-foreground">{review.service}</p>
                  </div>
                  {review.verified && (
                    <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-[#eca8d6] text-[#eca8d6]'
                          : 'text-foreground/20'
                      }`}
                    />
                  ))}
                </div>

                <h4 className="font-medium mb-3">{review.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {review.content}
                </p>

                <p className="text-xs text-muted-foreground">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
              Share Your Experience
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Have you worked with us? We'd love to hear about your experience and help others discover the quality of our services.
            </p>
            <Link href="/submit-review">
              <Button
                size="lg"
                className="bg-[#eca8d6] hover:bg-[#eca8d6]/90 text-background px-8 h-14 text-base rounded-full"
              >
                Write a Review
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
