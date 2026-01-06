import { ProductCard } from '@/components/products/ProductCard';

const products = [
  {
    name: 'Linen Cushion Set',
    price: 129,
    category: 'Cushions',
    image: 'https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Moroccan Mat',
    price: 199,
    category: 'Mats',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Wool Runner',
    price: 349,
    category: 'Runners',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop',
  },
  {
    name: 'Organic Kitchen Towels',
    price: 49,
    category: 'Kitchen Towels',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop',
  },
];

export const SoftFurnishings = () => {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Soft Furnishings
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
            View All Soft Furnishings →
          </a>
        </div>
      </div>
    </section>
  );
};
