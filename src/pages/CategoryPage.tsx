import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';

// Helper to convert slug to display name
const slugToName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Mock products data organized by category/subcategory
const productsByCategory: Record<string, Array<{
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}>> = {
  'living-room': [
    { id: 1, name: 'Modern Linen Sofa', price: 2499, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sofa' },
    { id: 2, name: 'Velvet Armchair', price: 899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', category: 'Armchair' },
    { id: 3, name: 'Oak Coffee Table', price: 649, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600', category: 'Coffee Table' },
    { id: 4, name: 'Minimalist TV Unit', price: 1299, image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600', category: 'TV Unit' },
    { id: 5, name: 'Marble Side Table', price: 449, image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600', category: 'Side Table' },
    { id: 6, name: 'Curved Sectional Sofa', price: 3299, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600', category: 'Sofa' },
    { id: 7, name: 'Leather Lounge Chair', price: 1199, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600', category: 'Armchair' },
    { id: 8, name: 'Glass Coffee Table', price: 549, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600', category: 'Coffee Table' },
  ],
  'bedroom': [
    { id: 9, name: 'King Platform Bed', price: 1899, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600', category: 'Bed' },
    { id: 10, name: 'Oak Nightstand', price: 399, image: 'https://images.unsplash.com/photo-1551298370-9d3d53b55cba?w=600', category: 'Nightstand' },
    { id: 11, name: 'Linen Upholstered Bed', price: 2199, image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600', category: 'Bed' },
    { id: 12, name: 'Walnut Dresser', price: 1499, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600', category: 'Dresser' },
  ],
  'dining-room': [
    { id: 13, name: 'Oak Dining Table', price: 1899, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', category: 'Dining Table' },
    { id: 14, name: 'Upholstered Dining Chair', price: 349, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600', category: 'Dining Chair' },
    { id: 15, name: 'Marble Dining Table', price: 2499, image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600', category: 'Dining Table' },
    { id: 16, name: 'Modern Bar Stool', price: 299, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600', category: 'Bar Stool' },
    { id: 17, name: 'Oak Sideboard', price: 1699, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sideboard' },
    { id: 18, name: 'Leather Dining Chair', price: 449, image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600', category: 'Dining Chair' },
  ],
  'office': [
    { id: 19, name: 'Executive Desk', price: 1299, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600', category: 'Desk' },
    { id: 20, name: 'Ergonomic Office Chair', price: 899, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600', category: 'Office Chair' },
    { id: 21, name: 'Bookshelf', price: 649, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600', category: 'Bookshelf' },
  ],
  'outdoor': [
    { id: 22, name: 'Teak Outdoor Sofa', price: 2899, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', category: 'Outdoor Sofa' },
    { id: 23, name: 'Outdoor Dining Set', price: 1999, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', category: 'Outdoor Dining' },
  ],
  'furniture': [
    { id: 1, name: 'Modern Linen Sofa', price: 2499, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sofa' },
    { id: 9, name: 'King Platform Bed', price: 1899, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600', category: 'Bed' },
    { id: 13, name: 'Oak Dining Table', price: 1899, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', category: 'Dining Table' },
    { id: 19, name: 'Executive Desk', price: 1299, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600', category: 'Desk' },
    { id: 22, name: 'Teak Outdoor Sofa', price: 2899, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', category: 'Outdoor Sofa' },
    { id: 2, name: 'Velvet Armchair', price: 899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', category: 'Armchair' },
  ],
  'living': [
    { id: 1, name: 'Modern Linen Sofa', price: 2499, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sofa' },
    { id: 2, name: 'Velvet Armchair', price: 899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', category: 'Armchair' },
    { id: 3, name: 'Oak Coffee Table', price: 649, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600', category: 'Coffee Table' },
    { id: 4, name: 'Minimalist TV Unit', price: 1299, image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600', category: 'TV Unit' },
    { id: 5, name: 'Marble Side Table', price: 449, image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600', category: 'Side Table' },
  ],
  'sofas': [
    { id: 1, name: 'Modern Linen Sofa', price: 2499, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sofa' },
    { id: 6, name: 'Curved Sectional Sofa', price: 3299, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600', category: 'Sofa' },
  ],
  'armchairs': [
    { id: 2, name: 'Velvet Armchair', price: 899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', category: 'Armchair' },
    { id: 7, name: 'Leather Lounge Chair', price: 1199, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600', category: 'Armchair' },
  ],
  'coffee-tables': [
    { id: 3, name: 'Oak Coffee Table', price: 649, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600', category: 'Coffee Table' },
    { id: 8, name: 'Glass Coffee Table', price: 549, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600', category: 'Coffee Table' },
  ],
  'tv-units': [
    { id: 4, name: 'Minimalist TV Unit', price: 1299, image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600', category: 'TV Unit' },
  ],
  'side-tables': [
    { id: 5, name: 'Marble Side Table', price: 449, image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600', category: 'Side Table' },
  ],
  'dining': [
    { id: 13, name: 'Oak Dining Table', price: 1899, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', category: 'Dining Table' },
    { id: 14, name: 'Upholstered Dining Chair', price: 349, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600', category: 'Dining Chair' },
    { id: 15, name: 'Marble Dining Table', price: 2499, image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600', category: 'Dining Table' },
    { id: 16, name: 'Modern Bar Stool', price: 299, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600', category: 'Bar Stool' },
    { id: 17, name: 'Oak Sideboard', price: 1699, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sideboard' },
    { id: 18, name: 'Leather Dining Chair', price: 449, image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600', category: 'Dining Chair' },
  ],
  'dining-tables': [
    { id: 13, name: 'Oak Dining Table', price: 1899, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', category: 'Dining Table' },
    { id: 15, name: 'Marble Dining Table', price: 2499, image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600', category: 'Dining Table' },
  ],
  'dining-chairs': [
    { id: 14, name: 'Upholstered Dining Chair', price: 349, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600', category: 'Dining Chair' },
    { id: 18, name: 'Leather Dining Chair', price: 449, image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600', category: 'Dining Chair' },
  ],
  'bar-stools': [
    { id: 16, name: 'Modern Bar Stool', price: 299, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600', category: 'Bar Stool' },
  ],
  'sideboards': [
    { id: 17, name: 'Oak Sideboard', price: 1699, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sideboard' },
  ],
  'soft-furnishings': [
    { id: 24, name: 'Linen Cushion Set', price: 129, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600', category: 'Cushions' },
    { id: 25, name: 'Wool Throw Blanket', price: 189, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Throws' },
    { id: 26, name: 'Moroccan Rug', price: 899, image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600', category: 'Rugs' },
    { id: 27, name: 'Linen Curtains', price: 249, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600', category: 'Curtains' },
  ],
  'cushions': [
    { id: 24, name: 'Linen Cushion Set', price: 129, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600', category: 'Cushions' },
  ],
  'throws': [
    { id: 25, name: 'Wool Throw Blanket', price: 189, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Throws' },
  ],
  'rugs': [
    { id: 26, name: 'Moroccan Rug', price: 899, image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600', category: 'Rugs' },
  ],
  'curtains': [
    { id: 27, name: 'Linen Curtains', price: 249, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600', category: 'Curtains' },
  ],
  'decor': [
    { id: 28, name: 'Ceramic Vase', price: 89, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600', category: 'Vases' },
    { id: 29, name: 'Table Lamp', price: 199, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600', category: 'Lamps' },
    { id: 30, name: 'Abstract Wall Art', price: 349, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600', category: 'Wall Art' },
    { id: 31, name: 'Round Mirror', price: 449, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600', category: 'Mirrors' },
    { id: 32, name: 'Bronze Figurine', price: 159, image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600', category: 'Figurines' },
  ],
  'vases': [
    { id: 28, name: 'Ceramic Vase', price: 89, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600', category: 'Vases' },
  ],
  'lamps': [
    { id: 29, name: 'Table Lamp', price: 199, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600', category: 'Lamps' },
  ],
  'wall-art': [
    { id: 30, name: 'Abstract Wall Art', price: 349, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600', category: 'Wall Art' },
  ],
  'mirrors': [
    { id: 31, name: 'Round Mirror', price: 449, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600', category: 'Mirrors' },
  ],
  'figurines': [
    { id: 32, name: 'Bronze Figurine', price: 159, image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600', category: 'Figurines' },
  ],
  'collections': [
    { id: 1, name: 'Modern Linen Sofa', price: 2499, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sofa' },
    { id: 28, name: 'Ceramic Vase', price: 89, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600', category: 'Vases' },
    { id: 13, name: 'Oak Dining Table', price: 1899, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', category: 'Dining Table' },
  ],
  'new-arrivals': [
    { id: 6, name: 'Curved Sectional Sofa', price: 3299, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600', category: 'Sofa' },
    { id: 15, name: 'Marble Dining Table', price: 2499, image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600', category: 'Dining Table' },
  ],
  'best-sellers': [
    { id: 1, name: 'Modern Linen Sofa', price: 2499, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Sofa' },
    { id: 2, name: 'Velvet Armchair', price: 899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', category: 'Armchair' },
  ],
  'limited-edition': [
    { id: 7, name: 'Leather Lounge Chair', price: 1199, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600', category: 'Armchair' },
  ],
  'sale': [
    { id: 5, name: 'Marble Side Table', price: 449, image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600', category: 'Side Table' },
    { id: 16, name: 'Modern Bar Stool', price: 299, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600', category: 'Bar Stool' },
  ],
  'lighting': [
    { id: 29, name: 'Table Lamp', price: 199, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600', category: 'Lamps' },
    { id: 33, name: 'Pendant Light', price: 349, image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600', category: 'Pendant' },
    { id: 34, name: 'Floor Lamp', price: 279, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600', category: 'Floor Lamp' },
  ],
  'storage': [
    { id: 35, name: 'Oak Bookshelf', price: 899, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600', category: 'Bookshelf' },
    { id: 36, name: 'Storage Cabinet', price: 749, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', category: 'Cabinet' },
  ],
};

const CategoryPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  
  const slug = subcategory || category || '';
  const displayName = slugToName(slug);
  const products = productsByCategory[slug] || [];

  // Build breadcrumb
  const parentCategory = subcategory ? slugToName(category || '') : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-text-muted hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li className="text-text-muted">/</li>
              {parentCategory && (
                <>
                  <li>
                    <a 
                      href={`/category/${category}`} 
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      {parentCategory}
                    </a>
                  </li>
                  <li className="text-text-muted">/</li>
                </>
              )}
              <li className="text-primary">{displayName}</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              {displayName}
            </h1>
            <p className="text-text-secondary">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={String(product.id)}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">No products found in this category.</p>
              <a 
                href="/" 
                className="inline-block mt-6 text-primary hover:underline"
              >
                ← Back to Home
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
