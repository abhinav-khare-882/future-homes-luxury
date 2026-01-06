import { Facebook, Instagram, Twitter, Youtube, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  about: {
    title: 'About Future Homes',
    links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers', 'Press'],
  },
  customerService: {
    title: 'Customer Service',
    links: ['Contact Us', 'FAQs', 'Shipping & Delivery', 'Returns & Exchanges', 'Care & Maintenance'],
  },
  categories: {
    title: 'Categories',
    links: ['Furniture', 'Living', 'Dining', 'Bedroom', 'Décor', 'Lighting'],
  },
  quickLinks: {
    title: 'Quick Links',
    links: ['Store Locator', 'Gift Cards', 'Interior Design Services', 'Trade Program', 'Catalog'],
  },
};

export const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="bg-background-secondary">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">
              Stay Inspired
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              Subscribe to receive updates on new collections, exclusive offers, and interior design inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background px-4 py-3 text-sm outline-none border border-border focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-8 py-3 text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Desktop Footer */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <a href="/" className="font-serif text-2xl text-primary">
              Future Homes
            </a>
            <p className="text-text-secondary text-sm mt-4 leading-relaxed">
              Curated luxury furniture and home décor for the modern home.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-primary text-sm font-medium tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-secondary text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden space-y-4">
          {/* Brand */}
          <div className="text-center pb-6 border-b border-border">
            <a href="/" className="font-serif text-2xl text-primary">
              Future Homes
            </a>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Accordion Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="border-b border-border">
              <button
                onClick={() => setOpenSection(openSection === key ? null : key)}
                className="flex items-center justify-between w-full py-4"
              >
                <span className="text-primary text-sm font-medium">{section.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted transition-transform ${
                    openSection === key ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openSection === key && (
                <ul className="pb-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-text-secondary text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted">
              <span>© 2024 Future Homes. All rights reserved.</span>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-transparent text-text-muted text-xs outline-none cursor-pointer">
                <option>United States (USD $)</option>
                <option>United Kingdom (GBP £)</option>
                <option>European Union (EUR €)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
