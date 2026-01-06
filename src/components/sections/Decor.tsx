import { ProductCard } from '@/components/products/ProductCard';

const products = [
  {
    name: 'Ceramic Vase',
    price: 149,
    category: 'Vase',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Arc Floor Lamp',
    price: 599,
    category: 'Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Bronze Figurine',
    price: 249,
    category: 'Figurine',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1926&auto=format&fit=crop',
  },
  {
    name: 'Abstract Wall Art',
    price: 399,
    category: 'Wall Art',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop',
  },
  {
    name: 'Brass Mirror',
    price: 449,
    category: 'Mirrors',
    image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=1780&auto=format&fit=crop',
  },
];

export const Decor = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Décor
          </h2>
          <a
            href="#"
            className="text-text-secondary text-sm tracking-wide hover:text-primary transition-colors hidden md:block"
          >
            View All →
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
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
            View All Décor →
          </a>
        </div>
      </div>
    </section>
  );
};
