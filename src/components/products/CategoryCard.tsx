interface CategoryCardProps {
  image: string;
  name: string;
}

export const CategoryCard = ({ image, name }: CategoryCardProps) => {
  return (
    <a href="#" className="group cursor-pointer block">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover image-zoom"
        />
        
        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
      </div>

      {/* Category Name */}
      <div className="mt-4">
        <h3 className="text-text-primary text-sm tracking-wide">{name}</h3>
      </div>
    </a>
  );
};
