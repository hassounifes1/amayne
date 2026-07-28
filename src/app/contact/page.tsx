export default function ContactPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <span className="text-6xl block mb-6">💬</span>
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-4">Contactez-nous</h1>
        <p className="text-brand-muted mb-8">Notre équipe est disponible 7j/7 par WhatsApp. Réponse en moins de 5 minutes.</p>
        <a
          href="https://wa.me/212600000000?text=Salam%2C%20j%27ai%20une%20question%20sur%20AMAYNO"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
        >
          WhatsApp — Discuter maintenant
        </a>
        <p className="text-brand-muted text-sm mt-8">Email : contact@amayno.ma</p>
      </div>
    </div>
  );
}
