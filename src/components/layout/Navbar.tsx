import { useState, useEffect } from 'react';
import { Search, MapPin, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Furniture',
    subcategories: ['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'],
  },
  {
    name: 'Living',
    subcategories: ['Sofas', 'Armchairs', 'Coffee Tables', 'TV Units', 'Side Tables'],
  },
  {
    name: 'Dining',
    subcategories: ['Dining Tables', 'Dining Chairs', 'Bar Stools', 'Sideboards'],
  },
  {
    name: 'Soft Furnishings',
    subcategories: ['Cushions', 'Throws', 'Rugs', 'Curtains'],
  },
  {
    name: 'Décor',
    subcategories: ['Vases', 'Lamps', 'Wall Art', 'Mirrors', 'Figurines'],
  },
  {
    name: 'Collections',
    subcategories: ['New Arrivals', 'Best Sellers', 'Limited Edition', 'Sale'],
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="font-serif text-2xl tracking-tight text-primary">
            Future Homes
          </a>

          {/* Category Navigation */}
          <div className="flex items-center space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors text-sm tracking-wide">
                  <span>{category.name}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Dropdown */}
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 pt-4 animate-fade-in">
                    <div className="bg-background border border-border shadow-lg min-w-48 py-4">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-6 py-2 text-sm text-text-secondary hover:text-primary hover:bg-secondary transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-48 bg-transparent border-b border-border focus:border-primary outline-none text-sm py-1 pr-8 transition-all"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Search className="w-4 h-4 text-text-muted absolute right-0" />
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Store Locator */}
            <a
              href="#"
              className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden xl:inline">Stores</span>
            </a>

            {/* Sign In */}
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors text-sm"
            >
              Sign In
            </a>

            {/* Sign Up */}
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors text-sm"
            >
              Sign Up
            </a>

            {/* Cart */}
            <button className="relative text-text-secondary hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <a href="/" className="font-serif text-xl tracking-tight text-primary">
            Future Homes
          </a>

          <div className="flex items-center space-x-4">
            <button className="text-text-secondary hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-text-secondary hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in overflow-y-auto">
            <div className="px-6 py-8">
              {/* Mobile Search */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-secondary px-4 py-3 text-sm outline-none"
                  />
                  <Search className="w-5 h-5 text-text-muted absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Mobile Categories */}
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.name} className="border-b border-border pb-4">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === category.name ? null : category.name
                        )
                      }
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-primary font-medium">{category.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-text-muted transition-transform ${
                          activeDropdown === category.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === category.name && (
                      <div className="mt-4 space-y-3 pl-4">
                        {category.subcategories.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="block text-text-secondary text-sm"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-8 space-y-4">
                <a href="#" className="flex items-center space-x-2 text-text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span>Store Locator</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-text-secondary">
                  <User className="w-5 h-5" />
                  <span>Sign In / Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
