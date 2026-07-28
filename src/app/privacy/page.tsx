export default function PrivacyPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-8">Politique de Confidentialité</h1>
        <div className="prose text-brand-muted space-y-4 text-sm leading-relaxed">
          <p>AMAYNO collecte uniquement les données nécessaires au traitement de ta commande : nom, numéro de téléphone, ville et adresse de livraison.</p>
          <p><strong className="text-brand-ink">Utilisation :</strong> Ces données servent exclusivement à la préparation et la livraison de ta commande. Nous ne vendons ni ne partageons tes données avec des tiers.</p>
          <p><strong className="text-brand-ink">Conservation :</strong> Tes données sont conservées le temps nécessaire au traitement de la commande et au service après-vente.</p>
          <p><strong className="text-brand-ink">Tes droits :</strong> Tu peux demander la suppression de tes données en nous contactant par WhatsApp.</p>
          <p>Dernière mise à jour : Juillet 2026.</p>
        </div>
      </div>
    </div>
  );
}
