export default function ShippingReturnsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-8">Livraison & Retours</h1>
        <div className="space-y-8 text-brand-muted">
          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="font-bold text-lg text-brand-ink mb-4">🚚 Livraison</h2>
            <ul className="space-y-3 text-sm">
              <li><strong className="text-brand-ink">Gratuite</strong> sur toutes les commandes, partout au Maroc.</li>
              <li><strong className="text-brand-ink">Délai :</strong> 3-5 jours ouvrés (grandes villes), 5-7 jours (autres villes).</li>
              <li><strong className="text-brand-ink">Suivi :</strong> SMS de confirmation à l&apos;expédition + appel du livreur 30 min avant.</li>
              <li><strong className="text-brand-ink">Paiement :</strong> Uniquement à la livraison (COD). Tu paies en cash au livreur.</li>
            </ul>
          </section>
          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="font-bold text-lg text-brand-ink mb-4">🔄 Retours & Échanges</h2>
            <ul className="space-y-3 text-sm">
              <li><strong className="text-brand-ink">30 jours</strong> pour retourner un pot non ouvert.</li>
              <li><strong className="text-brand-ink">Produit abîmé :</strong> Contacte-nous sous 24h — remplacement gratuit.</li>
              <li><strong className="text-brand-ink">Process :</strong> WhatsApp avec n° de commande → ramassage gratuit → remboursement sous 48h.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
