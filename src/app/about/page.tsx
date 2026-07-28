import Link from 'next/link';
import { ChevronRight, Heart, Star, Truck, Shield, RefreshCw, Award, Users } from 'lucide-react';

export const metadata = {
  title: 'À Propos — AMAYNE | Notre Histoire',
  description: 'Découvre l\'histoire d\'AMAYNE, la première marque marocaine dédiée aux femmes grande taille. Conçue au Maroc, pour les femmes du Maroc.',
};

export default function AboutPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">À Propos</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-plum via-brand-plum to-brand-rose text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Notre Histoire
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            AMAYNE est née de la rage. De la frustration de marcher dans 50 boutiques et sortir les mains vides.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-rose/10 text-brand-rose px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Pourquoi AMAYNE ?
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-4">
                &ldquo;On n&apos;a pas ta taille&rdquo;
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                C&apos;est la phrase que 70% des femmes marocaines entendent à chaque visite en boutique. 
                Un pays où la majorité des femmes portent au-dessus du 46, mais où 95% des marques s&apos;arrêtent au XL.
              </p>
              <p className="text-brand-muted leading-relaxed mb-4">
                Nous avons décidé de changer ça. Pas avec un &ldquo;collection grande taille&rdquo; jeté en bout de rayon. 
                Pas avec des vêtements &ldquo;qui font le travail&rdquo;. Mais avec une <strong className="text-brand-ink">vraie marque</strong>, 
                entièrement dédiée aux femmes tailles 46 à 56.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Chaque pièce est conçue au Maroc, pour des corps marocains. 
                Pas adaptée de tailles plus petites. Pas un&rsquo;afterthought. 
                <strong className="text-brand-ink"> AMAYNE, c&apos;est créé pour toi, depuis le premier croquis.</strong>
              </p>
            </div>
            <div className="aspect-square bg-brand-blush rounded-3xl flex items-center justify-center">
              <div className="text-center text-brand-muted/50">
                <span className="text-6xl block mb-4">💪</span>
                <p className="font-medium">Photo de l&apos;équipe</p>
                <p className="text-sm">Fondatrice & équipe AMAYNE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Nos Valeurs
            </h2>
            <p className="text-brand-muted text-lg max-w-xl mx-auto">
              Ce en quoi nous croyons, et comment nous le vivons chaque jour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-cream rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-brand-rose" />
              </div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">Inclusivité</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Nous ne faisons pas de &ldquo;collection grande taille&rdquo;. Nous sommes LA grande taille. 
                Chaque femme mérite de se sentir belle, peu importe sa taille.
              </p>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-brand-sage" />
              </div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">Qualité Premium</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Lin naturel, satin premium, coton égyptien — nous sélectionnons les mêmes matériaux 
                que les grandes marques européennes, à prix marocain.
              </p>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-brand-gold" />
              </div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">Marocain</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Créé au Maroc, pour les Marocaines. Nous comprenons nos clientes parce que nous sommes d&apos;ici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-10 text-center">
            Notre Parcours
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-rose rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                2024
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">L&apos;idée naît</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  De la frustration de ne pas trouver de vêtements taille 48-52 au Maroc, l&apos;idée d&apos;AMAYNE germe.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-plum rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                2025
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">Première collection</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  15 pièces, des robes aux pantalons. Chaque pièce testée et approuvée par des femmes marocaines tailles 46-56.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                2026
              </div>
              <div>
                <h3 className="font-semibold text-brand-ink mb-1">Expansion</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Plus de 2847 clientes satisfaites, 4.8/5 de note moyenne, et une communauté qui grandit chaque jour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-brand-rose">2,847+</p>
              <p className="text-brand-muted mt-1">Clientes satisfaites</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-brand-rose">4.8/5</p>
              <p className="text-brand-muted mt-1">Note moyenne</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-brand-rose">100%</p>
              <p className="text-brand-muted mt-1">Livraison gratuite</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-brand-rose">30j</p>
              <p className="text-brand-muted mt-1">Politique de retour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 md:py-24 bg-brand-plum text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Notre Promesse
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Nous promettons de ne jamais te dire &ldquo;on n&apos;a pas ta taille&rdquo;. 
            Chaque pièce que nous créons est pensée pour toi, testée par des femmes comme toi, 
            et livrée avec le respect que tu mérites.
          </p>
          <Link
            href="/collections/robes"
            className="inline-flex items-center bg-white text-brand-plum px-8 py-4 rounded-full font-bold hover:bg-brand-cream transition-colors"
          >
            Découvrir nos Collections
          </Link>
        </div>
      </section>
    </div>
  );
}
