import Link from 'next/link';
import { ChevronRight, MessageCircle, Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';

export const metadata = {
  title: 'Contact — AMAYNE',
  description: 'Contacte-nous par WhatsApp, email ou Instagram. Notre équipe est disponible 7j/7 pour répondre à tes questions.',
};

export default function ContactPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Contact</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Contacte-nous
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Une question, un conseil, un souci ? Notre équipe est là pour toi.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-brand-plum rounded-2xl p-8 md:p-12 text-center text-white mb-10">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Le plus rapide : WhatsApp
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-md mx-auto">
            Réponse en quelques minutes. Disponible 7 jours sur 7.
          </p>
          <a
            href="https://wa.me/212600000000?text=Bonjour, j'ai une question pour AMAYNE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-brand-plum px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-cream transition-colors"
          >
            <MessageCircle size={22} className="mr-2" />
            Ouvrir WhatsApp
          </a>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl border border-brand-border p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-brand-rose" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">Email</h3>
                <p className="text-brand-muted text-sm mb-2">
                  Pour les demandes détaillées ou les partenariats.
                </p>
                <a
                  href="mailto:contact@amayne.ma"
                  className="text-brand-rose font-medium text-sm hover:underline"
                >
                  contact@amayne.ma
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram size={24} className="text-brand-rose" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">Instagram</h3>
                <p className="text-brand-muted text-sm mb-2">
                  Suis-nous pour les nouveautés et inspirations.
                </p>
                <a
                  href="https://instagram.com/amayne.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-rose font-medium text-sm hover:underline"
                >
                  @amayne.official
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-brand-rose" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">Horaires</h3>
                <p className="text-brand-muted text-sm">
                  Lundi — Samedi : 9h — 20h<br />
                  Dimanche : 10h — 18h
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-brand-rose" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">Adresse</h3>
                <p className="text-brand-muted text-sm">
                  Casablanca, Maroc
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Topics */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 md:p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-brand-ink mb-4">
            Questions les plus fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/shipping-returns"
              className="flex items-center space-x-3 bg-brand-cream rounded-xl p-4 hover:bg-brand-blush transition-colors"
            >
              <div className="w-8 h-8 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-brand-rose text-sm">📦</span>
              </div>
              <div>
                <p className="font-medium text-brand-ink text-sm">Livraison & Retours</p>
                <p className="text-xs text-brand-muted">Délais, frais, politique de retour</p>
              </div>
            </Link>

            <Link
              href="/size-guide"
              className="flex items-center space-x-3 bg-brand-cream rounded-xl p-4 hover:bg-brand-blush transition-colors"
            >
              <div className="w-8 h-8 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-brand-rose text-sm">📏</span>
              </div>
              <div>
                <p className="font-medium text-brand-ink text-sm">Guide des Tailles</p>
                <p className="text-xs text-brand-muted">Trouver la bonne taille</p>
              </div>
            </Link>

            <Link
              href="/faq"
              className="flex items-center space-x-3 bg-brand-cream rounded-xl p-4 hover:bg-brand-blush transition-colors"
            >
              <div className="w-8 h-8 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-brand-rose text-sm">❓</span>
              </div>
              <div>
                <p className="font-medium text-brand-ink text-sm">Questions Fréquentes</p>
                <p className="text-xs text-brand-muted">Réponses aux questions courantes</p>
              </div>
            </Link>

            <Link
              href="/privacy"
              className="flex items-center space-x-3 bg-brand-cream rounded-xl p-4 hover:bg-brand-blush transition-colors"
            >
              <div className="w-8 h-8 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-brand-rose text-sm">🔒</span>
              </div>
              <div>
                <p className="font-medium text-brand-ink text-sm">Confidentialité</p>
                <p className="text-xs text-brand-muted">Protection de tes données</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-brand-muted text-sm mb-4">Retrouve-nous sur les réseaux sociaux</p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://instagram.com/amayne.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white border border-brand-border rounded-full flex items-center justify-center text-brand-muted hover:text-brand-rose hover:border-brand-rose transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://tiktok.com/@amayne.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white border border-brand-border rounded-full flex items-center justify-center text-brand-muted hover:text-brand-ink hover:border-brand-ink transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.18v-3.45a4.85 4.85 0 01-2-.81z" />
              </svg>
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white border border-brand-border rounded-full flex items-center justify-center text-brand-muted hover:text-green-500 hover:border-green-500 transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
