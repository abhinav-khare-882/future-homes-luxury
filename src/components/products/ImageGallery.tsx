import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto hide-scrollbar">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 overflow-hidden border-2 transition-all duration-300 ${
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

      {/* Main Image */}
      <div className="flex-1 aspect-square lg:aspect-[4/5] overflow-hidden bg-card">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
    </div>
  );
};
