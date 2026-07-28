export default function TermsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-8">Conditions Générales</h1>
        <div className="prose text-brand-muted space-y-4 text-sm leading-relaxed">
          <section>
            <h2 className="font-bold text-brand-ink text-base mb-2">Commandes</h2>
            <p>En passant commande sur AMAYNO, tu acceptes ces conditions. La commande est confirmée par SMS après validation.</p>
          </section>
          <section>
            <h2 className="font-bold text-brand-ink text-base mb-2">Paiement</h2>
            <p>Le paiement s&apos;effectue exclusivement à la livraison (COD). Le montant affiché est le montant final — pas de frais cachés.</p>
          </section>
          <section>
            <h2 className="font-bold text-brand-ink text-base mb-2">Produits</h2>
            <p>Nos produits sont des denrées alimentaires naturelles. Conserver à température ambiante, à l&apos;abri de la lumière. La séparation naturelle de l&apos;huile est normale — remuer avant usage.</p>
          </section>
          <section>
            <h2 className="font-bold text-brand-ink text-base mb-2">Responsabilité</h2>
            <p>AMAYNO s&apos;engage sur la qualité et la fraîcheur de ses produits. En cas de produit non conforme, contacte-nous sous 24h pour un remplacement gratuit.</p>
          </section>
          <p>Dernière mise à jour : Juillet 2026.</p>
        </div>
      </div>
    </div>
  );
}
