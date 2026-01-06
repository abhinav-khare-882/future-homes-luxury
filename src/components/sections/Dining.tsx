import { ProductCard } from '@/components/products/ProductCard';

const products = [
  {
    name: 'Aria Dining Table',
    price: 2499,
    category: 'Dining Table',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop',
  },
  {
    name: 'Noir Dining Chair',
    price: 399,
    category: 'Dining Chair',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Stockholm Bar Stool',
    price: 349,
    category: 'Bar Stool',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Oak Sideboard',
    price: 1899,
    category: 'Sideboard',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1887&auto=format&fit=crop',
  },
];

export const Dining = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Dining
          </h2>
          <a
            href="#"
            className="text-text-secondary text-sm tracking-wide hover:text-primary transition-colors hidden md:block"
          >
            View All →
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="text-text-secondary text-sm tracking-wide hover:text-primary transition-colors"
          >
            View All Dining →
          </a>
        </div>
      </div>
    </section>
  );
};
