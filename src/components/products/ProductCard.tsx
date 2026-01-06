import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category?: string;
}

export const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover image-zoom"
        />
        
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Add to Cart Button */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="w-full bg-background text-primary py-3 text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2 border border-border">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        {category && (
          <span className="text-text-muted text-xs tracking-wide uppercase">
            {category}
          </span>
        )}
        <h3 className="text-text-primary text-sm font-medium">{name}</h3>
        <p className="text-text-secondary text-sm">${price.toLocaleString()}</p>
      </div>
    </div>
  );
};
