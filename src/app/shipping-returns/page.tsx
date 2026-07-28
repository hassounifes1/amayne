import Link from 'next/link';
import { ChevronRight, Truck, RefreshCw, Clock, MapPin, CreditCard, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Livraison & Retours — AMAYNE',
  description: 'Informations sur la livraison gratuite AMAYNE partout au Maroc, et notre politique de retour et échange sous 30 jours.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Livraison & Retours</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Livraison & Retours
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Tout ce que tu dois savoir pour commander en toute sérénité.
          </p>
        </div>

        {/* Shipping Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center mr-4">
              <Truck size={24} className="text-brand-rose" />
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-ink">Livraison</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-sage/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Truck size={20} className="text-brand-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Livraison 100% Gratuite</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    La livraison est entièrement gratuite sur toutes les commandes, partout au Maroc. Pas de montant minimum, pas de frais cachés. Le prix que tu vois est le prix que tu paies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock size={20} className="text-brand-rose" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Délais de livraison</h3>
                  <ul className="text-brand-muted text-sm leading-relaxed space-y-2 mt-2">
                    <li className="flex items-start">
                      <span className="text-brand-sage mr-2">✓</span>
                      <span><strong>Grandes villes</strong> (Casablanca, Rabat, Marrakech, Tanger, Fes, Agadir) : 3 à 5 jours ouvrés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-sage mr-2">✓</span>
                      <span><strong>Autres villes</strong> (Meknès, Oujda, Kenitra, Tetouan, etc.) : 5 à 7 jours ouvrés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-sage mr-2">✓</span>
                      <span><strong>Zone rurale</strong> : 7 à 10 jours ouvrés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CreditCard size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Paiement à la livraison (COD)</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Tu ne paies rien en avance. Le paiement se fait uniquement à la réception de ta commande, directement au livreur. Tu peux payer en espèces. Tu reçois un SMS de confirmation dès que ta commande est expédiée.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-plum/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-brand-plum" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Suivi de commande</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Tu reçois un SMS avec le numéro de suivi dès l&apos;expédition. Tu peux aussi nous contacter par WhatsApp à tout moment avec ton numéro de commande pour un statut en temps réel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Returns Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center mr-4">
              <RefreshCw size={24} className="text-brand-rose" />
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-ink">Retours & Échanges</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-sage/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <RefreshCw size={20} className="text-brand-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Retour gratuit sous 30 jours</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Tu as 30 jours après réception pour retourner un article non porté avec les étiquettes encore attachées. Le retour est entièrement gratuit — on récupère chez toi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Truck size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Comment retourner un article ?</h3>
                  <ol className="text-brand-muted text-sm leading-relaxed space-y-2 mt-2 list-decimal list-inside">
                    <li>Envoie-nous un message WhatsApp avec ton numéro de commande et la raison du retour</li>
                    <li>On programme un ramassage gratuit à ton domicile sous 48h</li>
                    <li>Le livreur récupère l&apos;article chez toi — aucun déplacement nécessaire</li>
                    <li>On traite ton retour sous 48h</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CreditCard size={20} className="text-brand-rose" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Remboursement</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Le remboursement se fait en cash lors de ta prochaine livraison, ou par virement mobile (inwi money, m-wallet) selon ta préférence. Le remboursement est traité sous 48h après réception du retour.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-plum/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle size={20} className="text-brand-plum" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink mb-1">Échange de taille</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    La taille ne convient pas ? Pas de problème ! Contacte-nous par WhatsApp sous 30 jours pour un échange gratuit. On t&apos;envoie la bonne taille et on récupère l&apos;autre à ton domicile. Sans frais, sans justificatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-brand-plum rounded-2xl p-8 text-white">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-3">Une question ?</h2>
            <p className="text-white/70 mb-6">
              Notre équipe est disponible 7j/7 par WhatsApp pour t&apos;aider.
            </p>
            <a
              href="https://wa.me/212600000000?text=Bonjour, j'ai une question sur la livraison"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-brand-plum px-8 py-3 rounded-full font-bold hover:bg-brand-cream transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Contacter par WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
