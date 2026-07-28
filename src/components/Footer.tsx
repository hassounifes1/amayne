import Link from 'next/link';

const footerLinks = {
  shop: [
    { href: '/collections/classiques', label: 'Classiques' },
    { href: '/collections/gourmand', label: 'Gourmand' },
    { href: '/collections/premium', label: 'Premium & Bio' },
    { href: '/collections/sante', label: 'Santé & Light' },
    { href: '/collections/packs', label: 'Packs & Coffrets' },
  ],
  help: [
    { href: '/shipping-returns', label: 'Livraison & Retours' },
    { href: '/faq', label: 'Questions Fréquentes' },
    { href: '/contact', label: 'Contactez-nous' },
  ],
  legal: [
    { href: '/privacy', label: 'Politique de Confidentialité' },
    { href: '/terms', label: 'Conditions Générales' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">🚚</span>
              <span className="text-sm font-medium">Livraison Gratuite</span>
              <span className="text-xs text-white/60">Partout au Maroc</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">💳</span>
              <span className="text-sm font-medium">Paiement à la Livraison</span>
              <span className="text-xs text-white/60">Zéro risque</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">🌿</span>
              <span className="text-sm font-medium">100% Naturel</span>
              <span className="text-xs text-white/60">Sans conservateurs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">💬</span>
              <span className="text-sm font-medium">Support WhatsApp</span>
              <span className="text-xs text-white/60">7j/7 disponible</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🫙</span>
              <span className="font-display text-2xl font-bold tracking-wide">AMAYNO</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              L&apos;amlou authentique du Souss, livré chez toi. 100% naturel, fabriqué au Maroc par des coopératives féminines.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/amayno.official" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Boutique</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Aide</h3>
            <ul className="space-y-2">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2026 AMAYNO. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Fabriqué au Maroc 🇲🇦 — Du Souss à ta table</p>
        </div>
      </div>
    </footer>
  );
}
