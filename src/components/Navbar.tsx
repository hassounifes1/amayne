'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/collections/robes', label: 'Robes' },
  { href: '/collections/ensembles', label: 'Ensembles' },
  { href: '/collections/hauts', label: 'Hauts' },
  { href: '/collections/pantalons', label: 'Pantalons' },
  { href: '/collections/manteaux', label: 'Manteaux' },
  { href: '/size-guide', label: 'Guide des Tailles' },
  { href: '/about', label: 'À Propos' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-brand-plum text-white text-center py-2 px-4 text-sm font-medium">
        <span className="urgency-pulse">🔥</span>{' '}
        Livraison gratuite sur toutes les commandes — Paiement à la livraison{' '}
        <span className="urgency-pulse">🔥</span>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-brand-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-ink"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-display text-2xl md:text-3xl font-bold text-brand-plum tracking-wider">
                AMAYNE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-ink hover:text-brand-rose transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-brand-ink hover:text-brand-rose transition-colors"
                aria-label="Panier"
              >
                <ShoppingBag size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-cream border-t border-brand-border">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-brand-ink hover:bg-brand-blush rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
