import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Heart, Share2, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ImageGallery } from '@/components/products/ImageGallery';
import { VariantSelector } from '@/components/products/VariantSelector';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Oslo Sofa',
  price: 3299,
  description: 'The Oslo Sofa embodies Scandinavian design principles with its clean lines and exceptional comfort. Crafted with a solid oak frame and premium fabric upholstery, this piece brings timeless elegance to any living space.',
  details: [
    'Solid oak wood frame',
    'High-density foam cushions',
    'Removable cushion covers',
    'Stain-resistant fabric',
    'Weight capacity: 400 lbs',
  ],
  dimensions: {
    width: '220 cm',
    depth: '95 cm',
    height: '85 cm',
    seatHeight: '45 cm',
  },
  images: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1770&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1770&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1909&auto=format&fit=crop',
  ],
  colors: ['Charcoal', 'Sand', 'Ivory', 'Slate'],
  sizes: ['2 Seater', '3 Seater', 'L-Shaped'],
  category: 'Living Room',
};

const relatedProducts = [
  {
    id: '2',
    name: 'Bergen Armchair',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
    category: 'Armchair',
  },
  {
    id: '3',
    name: 'Marble Coffee Table',
    price: 899,
    image: 'https://images.unsplash.com/photo-1611486212355-d276af4581c0?q=80&w=1770&auto=format&fit=crop',
    category: 'Coffee Table',
  },
  {
    id: '4',
    name: 'Walnut TV Unit',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1770&auto=format&fit=crop',
    category: 'TV Unit',
  },
  {
    id: '5',
    name: 'Noir Side Table',
    price: 449,
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop',
    category: 'Side Table',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[1]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast({
      title: 'Added to Cart',
      description: `${mockProduct.name} (${selectedSize}, ${selectedColor}) x ${quantity}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <nav className="flex items-center gap-2 text-sm text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-primary transition-colors cursor-pointer">
            {mockProduct.category}
          </span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-text-primary">{mockProduct.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-6 lg:px-12 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <ImageGallery images={mockProduct.images} productName={mockProduct.name} />

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="text-text-muted text-sm tracking-widest uppercase">
                {mockProduct.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
                {mockProduct.name}
              </h1>
              <p className="text-2xl md:text-3xl text-text-secondary">
                ${mockProduct.price.toLocaleString()}
              </p>
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">
              {mockProduct.description}
            </p>

            {/* Variants */}
            <div className="space-y-6 pt-4 border-t border-border">
              <VariantSelector
                label="Color"
                options={mockProduct.colors}
                selected={selectedColor}
                onSelect={setSelectedColor}
                type="color"
              />

              <VariantSelector
                label="Size"
                options={mockProduct.sizes}
                selected={selectedSize}
                onSelect={setSelectedSize}
              />
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <span className="text-sm text-text-secondary uppercase tracking-wide">
                Quantity
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="luxury"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="luxury-outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="luxury-outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Details */}
            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <h3 className="text-sm text-text-secondary uppercase tracking-wide mb-4">
                  Product Details
                </h3>
                <ul className="space-y-2">
                  {mockProduct.details.map((detail, index) => (
                    <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm text-text-secondary uppercase tracking-wide mb-4">
                  Dimensions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(mockProduct.dimensions).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-text-muted capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-text-secondary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <Footer />
    </div>
  );
};

export default ProductDetail;
