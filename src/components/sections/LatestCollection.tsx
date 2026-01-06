import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const products = [
  {
    name: 'Sculptural Lounge Chair',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Modular Sectional',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Travertine Dining Table',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Boucle Accent Chair',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop',
  },
  {
    name: 'Minimalist Console',
    price: 899,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780&auto=format&fit=crop',
  },
  {
    name: 'Statement Floor Lamp',
    price: 799,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1770&auto=format&fit=crop',
  },
];

export const LatestCollection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-background-secondary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Explore the Latest Collection
          </h2>
          
          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pl-6 lg:pl-12"
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="flex-shrink-0 w-72 md:w-80 lg:w-96 group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover image-zoom"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              
              {/* Add to Cart Button */}
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <button className="w-full bg-background text-primary py-3 text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2 border border-border">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-1">
              <h3 className="text-text-primary text-sm font-medium">{product.name}</h3>
              <p className="text-text-secondary text-sm">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
        
        {/* Spacer for last item visibility */}
        <div className="flex-shrink-0 w-6 lg:w-12" />
      </div>

      {/* Mobile Swipe Hint */}
      <div className="mt-6 text-center md:hidden">
        <span className="text-text-muted text-xs">Swipe to explore →</span>
      </div>
    </section>
  );
};
