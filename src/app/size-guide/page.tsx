import Link from 'next/link';
import { ChevronRight, Ruler } from 'lucide-react';

export const metadata = {
  title: 'Guide des Tailles — AMAYNE',
  description: 'Guide des tailles AMAYNE pour femmes grande taille. Trouve ta taille parfaite parmi nos tailles 46 à 56 avec nos mesures détaillées.',
};

const sizeData = [
  { size: 46, bust: 108, waist: 90, hips: 114, equivalent: 'XL' },
  { size: 48, bust: 112, waist: 94, hips: 118, equivalent: '2XL' },
  { size: 50, bust: 116, waist: 98, hips: 122, equivalent: '3XL' },
  { size: 52, bust: 120, waist: 102, hips: 126, equivalent: '4XL' },
  { size: 54, bust: 124, waist: 106, hips: 130, equivalent: '5XL' },
  { size: 56, bust: 128, waist: 110, hips: 134, equivalent: '6XL' },
];

export default function SizeGuidePage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Guide des Tailles</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Guide des Tailles
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Trouve ta taille parfaite en mesurant ton corps. Nos tailles sont calibrées sur des mesures réelles de femmes marocaines.
          </p>
        </div>

        {/* How to Measure */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 md:p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center mr-4">
              <Ruler size={24} className="text-brand-rose" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brand-ink">
              Comment te mesurer ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-cream rounded-xl p-5">
              <div className="w-10 h-10 bg-brand-rose/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-brand-rose font-bold">1</span>
              </div>
              <h3 className="font-semibold text-brand-ink mb-2">Tour de poitrine</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Mesure le tour le plus large de ta poitrine, à hauteur des pointes. Le mètre ruban doit être horizontal.
              </p>
            </div>

            <div className="bg-brand-cream rounded-xl p-5">
              <div className="w-10 h-10 bg-brand-rose/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-brand-rose font-bold">2</span>
              </div>
              <h3 className="font-semibold text-brand-ink mb-2">Tour de taille</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Mesure au niveau de la taille naturelle, légèrement au-dessus du nombril. Ne serre pas le mètre ruban.
              </p>
            </div>

            <div className="bg-brand-cream rounded-xl p-5">
              <div className="w-10 h-10 bg-brand-rose/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-brand-rose font-bold">3</span>
              </div>
              <h3 className="font-semibold text-brand-ink mb-2">Tour de hanches</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Mesure le tour le plus large de tes hanches et fessiers. Assure-toi que le mètre ruban passe par le point le plus proéminent.
              </p>
            </div>
          </div>
        </div>

        {/* Size Table */}
        <div className="bg-white rounded-2xl border border-brand-border overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-blush">
                  <th className="text-left px-6 py-4 font-semibold text-brand-ink text-sm">Taille AMAYNE</th>
                  <th className="text-center px-4 py-4 font-semibold text-brand-ink text-sm">Équivalent</th>
                  <th className="text-center px-4 py-4 font-semibold text-brand-ink text-sm">Poitrine (cm)</th>
                  <th className="text-center px-4 py-4 font-semibold text-brand-ink text-sm">Taille (cm)</th>
                  <th className="text-center px-4 py-4 font-semibold text-brand-ink text-sm">Hanches (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, i) => (
                  <tr
                    key={row.size}
                    className={`border-t border-brand-border ${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream/50'}`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-bold text-brand-ink text-lg">{row.size}</span>
                    </td>
                    <td className="text-center px-4 py-4 text-sm text-brand-muted">{row.equivalent}</td>
                    <td className="text-center px-4 py-4 text-sm text-brand-ink font-medium">{row.bust} cm</td>
                    <td className="text-center px-4 py-4 text-sm text-brand-ink font-medium">{row.waist} cm</td>
                    <td className="text-center px-4 py-4 text-sm text-brand-ink font-medium">{row.hips} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 md:p-8 mb-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-brand-ink mb-4">
            Conseils pour bien choisir
          </h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-brand-sage mt-0.5">✓</span>
              <p className="text-sm text-brand-muted">
                <strong className="text-brand-ink">Si tu hésites entre deux tailles</strong> — choisis la plus grande. Nos tissus sont conçus pour épouser sans serrer.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-brand-sage mt-0.5">✓</span>
              <p className="text-sm text-brand-muted">
                <strong className="text-brand-ink">Mesures différentes ?</strong> — prends la taille correspondant à la mesure la plus grande entre poitrine, taille et hanches.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-brand-sage mt-0.5">✓</span>
              <p className="text-sm text-brand-muted">
                <strong className="text-brand-ink">Pas sûre ?</strong> — contacte-nous par WhatsApp avec tes mesures et on t&apos;aide à choisir la taille idéale.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-brand-sage mt-0.5">✓</span>
              <p className="text-sm text-brand-muted">
                <strong className="text-brand-ink">La taille ne convient pas ?</strong> — échange gratuit sous 30 jours. On récupère l&apos;ancienne et t&apos;envoie la bonne.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-plum rounded-2xl p-8 text-center text-white">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3">
            Besoin d&apos;aide pour choisir ta taille ?
          </h2>
          <p className="text-white/70 mb-6">
            Notre équipe est disponible pour t&apos;accompagner.
          </p>
          <a
            href="https://wa.me/212600000000?text=Bonjour, j'ai besoin d'aide pour choisir ma taille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-brand-plum px-8 py-3 rounded-full font-bold hover:bg-brand-cream transition-colors"
          >
            Demander conseil sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
