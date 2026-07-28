import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Politique de Confidentialité — AMAYNE',
  description: 'Comment AMAYNE collecte, utilise et protège tes données personnelles. Politique de confidentialité complète.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Politique de Confidentialité</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-2">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-brand-muted mb-8">Dernière mise à jour : Juillet 2026</p>

        <div className="space-y-8 text-brand-muted leading-relaxed">
          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">1. Introduction</h2>
            <p className="text-sm">
              Chez AMAYNE, ta vie privée est notre priorité. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons tes données personnelles lorsque tu utilises notre site web et nos services. En utilisant notre site, tu acceptes les pratiques décrites dans cette politique.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">2. Données que nous collectons</h2>
            <p className="text-sm mb-3">Nous collectons les informations suivantes :</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li><strong>Informations de commande :</strong> nom, prénom, adresse de livraison, numéro de téléphone, email (optionnel)</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de la visite</li>
              <li><strong>Données de communication :</strong> messages envoyés via WhatsApp ou le formulaire de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">3. Utilisation de tes données</h2>
            <p className="text-sm mb-3">Nous utilisons tes données pour :</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Traiter et livrer tes commandes</li>
              <li>T&apos;envoyer des confirmations et mises à jour de commande par SMS</li>
              <li>Te contacter en cas de problème avec ta commande</li>
              <li>Améliorer notre site et nos services</li>
              <li>T&apos;envoyer des offres et nouveautés (uniquement si tu as donné ton consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">4. Partage de tes données</h2>
            <p className="text-sm">
              Nous ne vendons jamais tes données personnelles à des tiers. Nous partageons uniquement les informations nécessaires avec :
            </p>
            <ul className="text-sm space-y-2 list-disc list-inside mt-3">
              <li><strong>Nos partenaires de livraison</strong> pour livrer ta commande</li>
              <li><strong>Les services de paiement</strong> pour traiter les transactions</li>
              <li><strong>Les autorités compétentes</strong> si la loi l&apos;exige</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">5. Sécurité de tes données</h2>
            <p className="text-sm">
              Nous prenons la sécurité de tes données au sérieux. Nous utilisons des protocoles de chiffrement (SSL/TSL) pour protéger tes informations lors de la transmission. Cependant, aucun méthode de transmission sur Internet n&apos;est 100% sécurisée, et nous ne pouvons garantir une sécurité absolue.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">6. Cookies</h2>
            <p className="text-sm">
              Notre site utilise des cookies pour améliorer ton expérience de navigation. Les cookies nous aident à comprendre comment tu utilises notre site et à personnaliser le contenu. Tu peux configurer ton navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">7. Tes droits</h2>
            <p className="text-sm mb-3">Tu as le droit de :</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Accéder à tes données personnelles</li>
              <li>Demander la correction de données inexactes</li>
              <li>Demander la suppression de tes données</li>
              <li>T&apos;opposer au traitement de tes données à des fins marketing</li>
              <li>Retirer ton consentement à tout moment</li>
            </ul>
            <p className="text-sm mt-3">
              Pour exercer ces droits, contacte-nous à <strong>privacy@amayne.ma</strong> ou via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">8. Conservation des données</h2>
            <p className="text-sm">
              Nous conservons tes données personnelles uniquement le temps nécessaire aux fins pour lesquelles elles ont été collectées, ou conformément aux obligations légales. Les données de commande sont conservées pendant 3 ans à des fins comptables.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">9. Modifications</h2>
            <p className="text-sm">
              Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour mise à jour. Nous t&apos;encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">10. Contact</h2>
            <p className="text-sm">
              Pour toute question concernant cette politique de confidentialité ou tes données personnelles, contacte-nous :
            </p>
            <ul className="text-sm space-y-1 mt-3">
              <li>Email : <strong>privacy@amayne.ma</strong></li>
              <li>WhatsApp : <strong>+212 6 00 00 00 00</strong></li>
              <li>Siège social : Casablanca, Maroc</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
