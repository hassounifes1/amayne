import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <span className="text-6xl block text-center mb-6">🫙</span>
        <h1 className="font-display text-4xl font-bold text-brand-ink text-center mb-6">Notre Histoire</h1>
        <div className="prose prose-lg max-w-none text-brand-muted space-y-6">
          <p className="text-xl text-brand-ink font-medium text-center leading-relaxed">
            AMAYNO est né d&apos;une colère simple : pourquoi les Marocains mangent du Nutella quand l&apos;amlou — leur propre trésor — existe depuis des siècles ?
          </p>
          <p>
            Dans les montagnes de l&apos;Anti-Atlas, les femmes berbères préparent l&apos;amlou depuis des générations. Amandes torréfiées, huile d&apos;argan pressée à froid, miel pur — trois ingrédients, une recette immuable. C&apos;est le petit-déjeuner royal du Souss.
          </p>
          <p>
            Pourtant, dans les grandes villes, on trouve du Nutella dans chaque frigo et de l&apos;amlou douteux dans les souks — parfois coupé à l&apos;huile de tournesol, parfois sans amandes du tout. Nous avons décidé de changer ça.
          </p>
          <p>
            <strong className="text-brand-ink">AMAYNO</strong> travaille directement avec les coopératives féminines du Souss-Massa. Chaque pot est préparé en petite quantité, avec des ingrédients traçables. Pas d&apos;intermédiaires. Pas de compromis. Du Souss à ta table.
          </p>
          <div className="bg-brand-sand rounded-2xl p-6 border border-brand-border">
            <h2 className="font-bold text-brand-ink text-lg mb-3">Notre Mission</h2>
            <ul className="space-y-2">
              <li>✓ Démocratiser l&apos;amlou authentique dans tout le Maroc</li>
              <li>✓ Soutenir les coopératives féminines du Souss</li>
              <li>✓ Offrir une alternative 100% naturelle au Nutella</li>
              <li>✓ Livrer partout au Maroc — paiement à la livraison</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/collections/classiques" className="inline-flex items-center bg-brand-amber text-brand-brown px-8 py-4 rounded-full font-bold hover:bg-brand-honey transition-colors">
            Découvrir nos saveurs <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
