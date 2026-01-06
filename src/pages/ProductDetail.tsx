import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Heart, Star, Truck, RotateCcw, Shield, ChevronRight, ChevronDown } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ImageGallery } from '@/components/products/ImageGallery';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Oslo Sofa',
  subtitle: 'Premium Scandinavian Design Collection',
  price: 3299,
  originalPrice: 3899,
  rating: 4.8,
  reviewCount: 127,
  description: 'The Oslo Sofa embodies Scandinavian design principles with its clean lines and exceptional comfort. Crafted with a solid oak frame and premium fabric upholstery, this piece brings timeless elegance to any living space.',
  details: [
    'Solid oak wood frame with natural grain finish',
    'High-density foam cushions for lasting comfort',
    'Removable and washable cushion covers',
    'Stain-resistant premium fabric upholstery',
    'Weight capacity: 400 lbs per seat',
    'Assembly required, hardware included',
  ],
  careInstructions: [
    'Vacuum regularly with upholstery attachment',
    'Spot clean with mild soap and water',
    'Avoid direct sunlight to prevent fading',
    'Professional cleaning recommended annually',
  ],
  dimensions: {
    'Overall Width': '220 cm / 86.6"',
    'Overall Depth': '95 cm / 37.4"',
    'Overall Height': '85 cm / 33.5"',
    'Seat Height': '45 cm / 17.7"',
    'Seat Depth': '55 cm / 21.7"',
    'Arm Height': '60 cm / 23.6"',
  },
  shipping: {
    delivery: 'Free delivery in 5-7 business days',
    returns: 'Free 30-day returns',
    warranty: '5-year limited warranty',
  },
  images: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1770&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1770&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1909&auto=format&fit=crop',
  ],
  colors: [
    { name: 'Charcoal', hex: '#1A1A1A' },
    { name: 'Sand', hex: '#C4B9A9' },
    { name: 'Ivory', hex: '#FFFFF0' },
    { name: 'Slate', hex: '#708090' },
  ],
  category: 'Living Room',
  categorySlug: 'living-room',
};

const peopleAlsoViewed = [
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
  {
    id: '6',
    name: 'Velvet Cushion Set',
    price: 199,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1887&auto=format&fit=crop',
    category: 'Cushions',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: 'Added to Cart',
      description: `${mockProduct.name} (${selectedColor.name}) x ${quantity}`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist',
      description: mockProduct.name,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-12 py-4">
        <nav className="flex items-center gap-2 text-sm text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/category/${mockProduct.categorySlug}`} className="hover:text-primary transition-colors">
            {mockProduct.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">{mockProduct.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-4 lg:px-12 py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <ImageGallery images={mockProduct.images} productName={mockProduct.name} />

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-text-muted text-sm">
                {mockProduct.subtitle}
              </p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
                {mockProduct.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(mockProduct.rating) ? 'fill-primary text-primary' : 'text-border'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-text-primary">{mockProduct.rating}</span>
                <span className="text-sm text-text-muted">({mockProduct.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-medium text-text-primary">
                ${mockProduct.price.toLocaleString()}
              </span>
              {mockProduct.originalPrice && (
                <span className="text-lg text-text-muted line-through">
                  ${mockProduct.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Color Selector */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">Color:</span>
                <span className="text-sm font-medium text-text-primary">{selectedColor.name}</span>
              </div>
              <div className="flex gap-2">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      selectedColor.name === color.name
                        ? 'border-primary ring-2 ring-primary ring-offset-2'
                        : 'border-border hover:border-text-muted'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-text-secondary">Qty:</span>
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-muted transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-muted transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-3 pt-2">
              <Button
                variant="luxury"
                size="lg"
                className="flex-1 h-14"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="luxury-outline" 
                size="lg" 
                className="h-14 w-14 p-0"
                onClick={handleWishlist}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-primary' : ''}`} />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-border">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-text-muted flex-shrink-0" />
                <span className="text-sm text-text-secondary">{mockProduct.shipping.delivery}</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-text-muted flex-shrink-0" />
                <span className="text-sm text-text-secondary">{mockProduct.shipping.returns}</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-text-muted flex-shrink-0" />
                <span className="text-sm text-text-secondary">{mockProduct.shipping.warranty}</span>
              </div>
            </div>

            {/* Accordion Sections */}
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-wider text-text-primary hover:no-underline py-4">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-sm leading-relaxed pb-4">
                  {mockProduct.description}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="details" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-wider text-text-primary hover:no-underline py-4">
                  Product Details
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2">
                    {mockProduct.details.map((detail, index) => (
                      <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-text-muted rounded-full mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dimensions" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-wider text-text-primary hover:no-underline py-4">
                  Dimensions
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2">
                    {Object.entries(mockProduct.dimensions).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-text-muted">{key}</span>
                        <span className="text-text-secondary">{value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="care" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-wider text-text-primary hover:no-underline py-4">
                  Care Instructions
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2">
                    {mockProduct.careInstructions.map((instruction, index) => (
                      <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-text-muted rounded-full mt-1.5 flex-shrink-0" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-wider text-text-primary hover:no-underline py-4">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3 text-sm text-text-secondary">
                    <p><strong className="text-text-primary">Shipping:</strong> {mockProduct.shipping.delivery}</p>
                    <p><strong className="text-text-primary">Returns:</strong> {mockProduct.shipping.returns}. Items must be in original condition.</p>
                    <p><strong className="text-text-primary">Warranty:</strong> {mockProduct.shipping.warranty} covers manufacturing defects.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* People Also Viewed */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-10">
            People Also Viewed
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {peopleAlsoViewed.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
