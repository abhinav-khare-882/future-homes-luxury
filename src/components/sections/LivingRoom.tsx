import { ProductCard } from '@/components/products/ProductCard';

const products = [
  {
    name: 'Oslo Sofa',
    price: 3299,
    category: 'Sofa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Bergen Armchair',
    price: 1499,
    category: 'Armchair',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
  },
  {
    name: 'Marble Coffee Table',
    price: 899,
    category: 'Coffee Table',
    image: 'https://images.unsplash.com/photo-1611486212355-d276af4581c0?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Walnut TV Unit',
    price: 1899,
    category: 'TV Unit',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1770&auto=format&fit=crop',
  },
  {
    name: 'Noir Side Table',
    price: 449,
    category: 'Side Table',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop',
  },
  {
    name: 'Vienna Lounge Chair',
    price: 1799,
    category: 'Armchair',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop',
  },
];

export const LivingRoom = () => {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Living Room
          </h2>
          <a
            href="#"
            className="text-text-secondary text-sm tracking-wide hover:text-primary transition-colors hidden md:block"
          >
            View All →
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
            View All Living Room →
          </a>
        </div>
      </div>
    </section>
  );
};
