'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';
import Logo from '@/components/Logo';

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    shop: [
      { href: '/collections/classiques', label: t('footer_classics') },
      { href: '/collections/gourmand', label: t('footer_gourmand') },
      { href: '/collections/premium', label: t('footer_premium') },
      { href: '/collections/sante', label: t('footer_health') },
      { href: '/collections/packs', label: t('footer_packs') },
    ],
    help: [
      { href: '/shipping-returns', label: t('footer_shipping') },
      { href: '/faq', label: t('footer_faq') },
      { href: '/contact', label: t('footer_contact') },
    ],
    legal: [
      { href: '/privacy', label: t('footer_privacy') },
      { href: '/terms', label: t('footer_terms') },
    ],
  };

  const trustItems = [
    { emoji: '🚚', title: t('footer_ship'), sub: t('footer_ship_sub') },
    { emoji: '💳', title: t('footer_cod'), sub: t('footer_cod_sub') },
    { emoji: '🌿', title: t('footer_natural'), sub: t('footer_natural_sub') },
    { emoji: '💬', title: t('footer_whatsapp'), sub: t('footer_whatsapp_sub') },
  ];

  return (
    <footer className="bg-brand-brown text-white safe-bottom">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-5 sm:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {trustItems.map(item => (
              <div key={item.title} className="flex flex-col items-center px-1">
                <span className="text-xl sm:text-2xl mb-1">{item.emoji}</span>
                <span className="text-xs sm:text-sm font-medium leading-tight">{item.title}</span>
                <span className="text-[10px] sm:text-xs text-white/60 mt-0.5">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="gold" size="md" showTagline />
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">{t('footer_desc')}</p>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t('footer_shop')}</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t('footer_help')}</h3>
            <ul className="space-y-2">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t('footer_legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors inline-block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-white/60 text-center sm:text-start">
          <p>© 2026 AMAYNO. {t('footer_rights')}</p>
          <p>{t('footer_made')}</p>
        </div>
      </div>
    </footer>
  );
}
