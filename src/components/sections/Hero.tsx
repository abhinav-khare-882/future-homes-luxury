import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
          alt="Luxury living room with modern furniture"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 lg:px-12 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-6 animate-fade-up">
            Curated Elegance for Modern Living
          </h1>
          <p className="text-background/80 text-lg mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Discover furniture that transforms spaces into sanctuaries of style and comfort.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" className="bg-background text-primary hover:bg-background/90">
              Shop Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
