import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square lg:aspect-[4/5] overflow-hidden bg-card">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Thumbnails - Horizontal below main image */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-300 ${
              selectedIndex === index
                ? 'border-primary'
                : 'border-transparent hover:border-border'
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
