'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useLanguage } from '@/context/LanguageProvider';
import Logo from '@/components/Logo';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const { t, dir } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/collections/classiques', label: t('nav_classics') },
    { href: '/collections/gourmand', label: t('nav_gourmand') },
    { href: '/collections/premium', label: t('nav_premium') },
    { href: '/collections/packs', label: t('nav_packs') },
    { href: '/about', label: t('nav_about') },
    { href: '/faq', label: t('nav_faq') },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="bg-brand-brown text-white text-center py-2.5 px-3 sm:px-4 text-xs sm:text-sm font-medium leading-relaxed break-words">
        <span className="urgency-pulse">🫙</span>{' '}
        {t('announce')}{' '}
        <span className="urgency-pulse">🫙</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 safe-top ${
          scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm' : 'bg-brand-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] lg:flex lg:items-center lg:justify-between h-14 sm:h-16 md:h-20 gap-2 sm:gap-4">
            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ms-1 text-brand-ink touch-target rounded-lg hover:bg-brand-sand/60"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo — centered on mobile/tablet */}
            <Link href="/" className="flex justify-center lg:justify-start min-w-0" onClick={() => setMobileMenuOpen(false)}>
              <Logo variant="dark" size="sm" className="sm:hidden" />
              <Logo variant="dark" size="md" className="hidden sm:flex" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center gap-4 xl:gap-6 mx-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-ink hover:text-brand-amber transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className={`flex items-center gap-1.5 sm:gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher compact />
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-brand-ink hover:text-brand-amber transition-colors touch-target rounded-lg hover:bg-brand-sand/60"
                aria-label={t('nav_cart')}
              >
                <ShoppingBag size={22} className="sm:w-6 sm:h-6" />
                {itemCount > 0 && (
                  <span className="absolute top-0 end-0 bg-brand-amber text-white text-[10px] sm:text-xs min-w-[1.125rem] h-[1.125rem] sm:min-w-[1.25rem] sm:h-5 px-0.5 rounded-full flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / tablet drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[calc(2.5rem+3.5rem)] sm:top-[calc(2.5rem+4rem)] z-40 bg-brand-cream/98 backdrop-blur-md border-t border-brand-border overflow-y-auto pb-safe">
            <nav className="px-3 sm:px-4 py-4 space-y-1 max-w-lg mx-auto">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3.5 text-brand-ink hover:bg-brand-sand rounded-xl transition-colors font-medium text-base touch-target"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-2 flex justify-center">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
