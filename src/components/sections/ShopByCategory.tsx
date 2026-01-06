import { CategoryCard } from '@/components/products/CategoryCard';

const categories = [
  {
    name: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Living',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop',
  },
  {
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop',
  },
  {
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop',
  },
  {
    name: 'Soft Furnishings',
    image: 'https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Décor',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Storage',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1887&auto=format&fit=crop',
  },
];

export const ShopByCategory = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              image={category.image}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
