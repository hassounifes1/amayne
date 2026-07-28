import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Conditions Générales — AMAYNE',
  description: 'Conditions générales de vente et d\'utilisation du site AMAYNE. Mode grande taille femme au Maroc.',
};

export default function TermsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Conditions Générales</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-2">
          Conditions Générales de Vente
        </h1>
        <p className="text-sm text-brand-muted mb-8">Dernière mise à jour : Juillet 2026</p>

        <div className="space-y-8 text-brand-muted leading-relaxed">
          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">1. Objet</h2>
            <p className="text-sm">
              Les présentes conditions générales de vente (CGV) régissent les relations entre la société AMAYNE, marque de mode grande taille femme basée au Maroc, et ses clientes dans le cadre de la vente de produits vestimentaires via le site amayne.ma.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">2. Produits</h2>
            <p className="text-sm">
              Chaque produit est présenté avec une description détaillée incluant le nom, le marketing name, la composition, les tailles disponibles (46 à 56), les couleurs et les prix. Les photos des produits sont aussi fidèles que possible à la réalité, mais des légères variations de couleur peuvent exister selon les écrans.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">3. Prix</h2>
            <p className="text-sm mb-3">
              Tous les prix sont indiqués en Dirhams Marocains (MAD) et comprennent la TVA. Les prix affichés sont ceux en vigueur au moment de la commande. AMAYNE se réserve le droit de modifier ses prix à tout moment, sans effet sur les commandes déjà confirmées.
            </p>
            <p className="text-sm">
              Aucun frais supplémentaire n&apos;est ajouté au prix affiché. La livraison est gratuite et le paiement se fait à la livraison.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">4. Commande</h2>
            <p className="text-sm mb-3">Pour passer commande, la cliente doit :</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Choisir les produits et les ajouter au panier</li>
              <li>Remplir le formulaire de commande avec ses informations de livraison</li>
              <li>Confirmer la commande</li>
            </ul>
            <p className="text-sm mt-3">
              La commande est considérée comme confirmée après validation du formulaire. Un SMS de confirmation est envoyé à la cliente.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">5. Paiement</h2>
            <p className="text-sm">
              Le paiement s&apos;effectue exclusivement à la livraison (Cash on Delivery / COD). La cliente paie le montant total de sa commande en espèces au livreur lors de la réception du colis. Aucun paiement en ligne n&apos;est requis.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">6. Livraison</h2>
            <p className="text-sm">
              La livraison est gratuite sur tout le territoire marocain. Les délais de livraison sont de 3 à 5 jours ouvrés pour les grandes villes et 5 à 7 jours ouvrés pour les autres zones. Ces délais sont indicatifs et peuvent varier en cas de circonstances exceptionnelles.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">7. Droit de rétractation et retours</h2>
            <p className="text-sm">
              Conformément à la législation marocaine, la cliente dispose d&apos;un délai de 30 jours après réception pour retourner un article non porté, non lavé, avec les étiquettes encore attachées. Le retour est gratuit et un ramassage est programmé au domicile de la cliente. Le remboursement s&apos;effectue en cash ou par virement mobile sous 48h après réception du retour.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">8. Échanges</h2>
            <p className="text-sm">
              En cas de problème de taille, un échange gratuit est possible sous 30 jours. La cliente contacte le service client par WhatsApp, et un échange est organisé sans frais supplémentaires.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">9. Responsabilité</h2>
            <p className="text-sm">
              AMAYNE ne saurait être tenu responsable des dommages résultant d&apos;une utilisation non conforme des produits. Les produits doivent être entretenus conformément aux instructions figurant sur l&apos;étiquette et la fiche produit.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">10. Protection des données personnelles</h2>
            <p className="text-sm">
              Les données personnelles collectées sont traitées conformément à notre Politique de Confidentialité. La cliente dispose d&apos;un droit d&apos;accès, de rectification et de suppression de ses données en contactant privacy@amayne.ma.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">11. Litiges</h2>
            <p className="text-sm">
              En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, les tribunaux compétents de Casablanca seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl text-brand-ink mb-3">12. Contact</h2>
            <p className="text-sm">
              Pour toute question relative aux présentes CGV :
            </p>
            <ul className="text-sm space-y-1 mt-3">
              <li>Email : <strong>contact@amayne.ma</strong></li>
              <li>WhatsApp : <strong>+212 6 00 00 00 00</strong></li>
              <li>Instagram : <strong>@amayne.official</strong></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
