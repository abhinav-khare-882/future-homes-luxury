import { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: string;
  location: string;
  date: string;
  verified: boolean;
  helpful: number;
  notHelpful: number;
}

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    rating: 5,
    title: 'Absolutely stunning piece!',
    content: 'This sofa exceeded all my expectations. The quality is exceptional, and it looks even better in person than in the photos. The fabric is soft yet durable, and the cushions are perfectly firm. Assembly was straightforward and took about 30 minutes. Highly recommend!',
    author: 'Sarah M.',
    location: 'New York, NY',
    date: 'December 15, 2025',
    verified: true,
    helpful: 24,
    notHelpful: 2,
  },
  {
    id: '2',
    rating: 5,
    title: 'Perfect for our living room',
    content: "We've been searching for the perfect sofa for months, and this one was worth the wait. The Scandinavian design fits beautifully with our modern decor. Very comfortable for both sitting and lounging.",
    author: 'Michael R.',
    location: 'Los Angeles, CA',
    date: 'December 10, 2025',
    verified: true,
    helpful: 18,
    notHelpful: 1,
  },
  {
    id: '3',
    rating: 4,
    title: 'Great quality, minor delivery delay',
    content: 'The sofa itself is beautiful and well-made. Deducting one star because delivery took a bit longer than expected. Customer service was helpful in tracking the order. Overall very satisfied with the purchase.',
    author: 'Jennifer L.',
    location: 'Chicago, IL',
    date: 'December 5, 2025',
    verified: true,
    helpful: 12,
    notHelpful: 0,
  },
  {
    id: '4',
    rating: 5,
    title: 'Worth every penny',
    content: 'Invested in this sofa after much deliberation and could not be happier. The craftsmanship is evident in every detail. The oak frame is solid and the upholstery is top-notch.',
    author: 'David K.',
    location: 'Seattle, WA',
    date: 'November 28, 2025',
    verified: true,
    helpful: 31,
    notHelpful: 3,
  },
  {
    id: '5',
    rating: 4,
    title: 'Beautiful and comfortable',
    content: 'Love the design and comfort level. The only reason for 4 stars is that the charcoal color appeared slightly different than expected, but still looks great in our space.',
    author: 'Amanda H.',
    location: 'Austin, TX',
    date: 'November 20, 2025',
    verified: false,
    helpful: 8,
    notHelpful: 1,
  },
];

const ratingDistribution = [
  { stars: 5, count: 98 },
  { stars: 4, count: 21 },
  { stars: 3, count: 5 },
  { stars: 2, count: 2 },
  { stars: 1, count: 1 },
];

export const ProductReviews = ({ rating, reviewCount }: ProductReviewsProps) => {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('most-recent');
  const [helpfulClicked, setHelpfulClicked] = useState<Record<string, 'helpful' | 'not-helpful' | null>>({});

  const totalReviews = ratingDistribution.reduce((sum, r) => sum + r.count, 0);

  const filteredReviews = selectedFilter
    ? mockReviews.filter((r) => r.rating === selectedFilter)
    : mockReviews;

  const handleHelpful = (reviewId: string, type: 'helpful' | 'not-helpful') => {
    setHelpfulClicked((prev) => ({
      ...prev,
      [reviewId]: prev[reviewId] === type ? null : type,
    }));
  };

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-primary">Reviews</h2>
          <button className="text-sm text-text-secondary underline hover:text-primary transition-colors">
            Read or write a review
          </button>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Rating Bars */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-text-primary mb-4">Rating Snapshot</h3>
            {ratingDistribution.map((item) => (
              <button
                key={item.stars}
                onClick={() => setSelectedFilter(selectedFilter === item.stars ? null : item.stars)}
                className={`w-full flex items-center gap-3 group ${
                  selectedFilter === item.stars ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className="text-sm text-text-secondary w-16">{item.stars} stars</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${(item.count / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-text-muted w-8 text-right">{item.count}</span>
              </button>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-medium text-text-primary mb-4">Overall Rating</h3>
            <div className="text-5xl font-serif text-primary mb-2">{rating}</div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating) ? 'fill-primary text-primary' : 'text-border'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-text-muted">{reviewCount} reviews</p>
          </div>

          {/* Review Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-text-primary mb-4">What Customers Say</h3>
            <div className="space-y-2">
              <p className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">98%</span> of reviewers would recommend this product
              </p>
              <p className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Quality</span> — Customers say it's excellent
              </p>
              <p className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Comfort</span> — Highly rated for comfort
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-border">
          <span className="text-sm text-text-muted">Filter by Rating:</span>
          <div className="flex flex-wrap gap-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <button
                key={stars}
                onClick={() => setSelectedFilter(selectedFilter === stars ? null : stars)}
                className={`px-3 py-1.5 text-sm border rounded-full transition-all duration-200 ${
                  selectedFilter === stars
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {stars} Star{stars !== 1 && 's'}
              </button>
            ))}
          </div>
        </div>

        {/* Sort and Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-text-muted">
            {selectedFilter
              ? `Showing ${filteredReviews.length} reviews with ${selectedFilter} star${selectedFilter !== 1 ? 's' : ''}`
              : `${reviewCount} Reviews`}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px] h-9 text-sm border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="most-recent">Most Recent</SelectItem>
                <SelectItem value="highest-rated">Highest Rated</SelectItem>
                <SelectItem value="lowest-rated">Lowest Rated</SelectItem>
                <SelectItem value="most-helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-8">
          {filteredReviews.map((review) => (
            <div key={review.id} className="pb-8 border-b border-border last:border-0">
              {/* Rating and Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-primary text-primary' : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-muted">{review.date}</span>
              </div>

              {/* Title */}
              <h4 className="text-base font-medium text-text-primary mb-2">{review.title}</h4>

              {/* Content */}
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{review.content}</p>

              {/* Author Info */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-text-primary">{review.author}</span>
                <span className="text-sm text-text-muted">•</span>
                <span className="text-sm text-text-muted">{review.location}</span>
                {review.verified && (
                  <>
                    <span className="text-sm text-text-muted">•</span>
                    <span className="inline-flex items-center gap-1 text-xs text-green-600">
                      <Check className="w-3 h-3" />
                      Verified Buyer
                    </span>
                  </>
                )}
              </div>

              {/* Helpful */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">Was this review helpful?</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleHelpful(review.id, 'helpful')}
                    className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                      helpfulClicked[review.id] === 'helpful'
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.helpful + (helpfulClicked[review.id] === 'helpful' ? 1 : 0)}</span>
                  </button>
                  <button
                    onClick={() => handleHelpful(review.id, 'not-helpful')}
                    className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                      helpfulClicked[review.id] === 'not-helpful'
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span>{review.notHelpful + (helpfulClicked[review.id] === 'not-helpful' ? 1 : 0)}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredReviews.length > 0 && (
          <div className="text-center mt-10">
            <Button variant="luxury-outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
