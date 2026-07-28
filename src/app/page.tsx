'use client';

import Link from 'next/link';
import { Star, Truck, Shield, RefreshCw, ArrowRight, ShoppingBag, Heart, Award } from 'lucide-react';
import { products, collections, testimonials, getBestsellers } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

const stats = [
  { number: '2,847+', label: 'Clientes satisfaites', icon: Heart },
  { number: '4.8/5', label: 'Note moyenne', icon: Star },
  { number: '100%', label: 'Livraison gratuite', icon: Truck },
  { number: '30 jours', label: 'Politique de retour', icon: RefreshCw },
];

export default function HomePage() {
  const { addItem } = useCart();
  const bestsellers = getBestsellers();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-plum via-brand-plum to-brand-rose overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-brand-rose/20 text-brand-rose-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Nouvelle Collection Été 2026
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                La Mode Qui <br />
                <span className="text-brand-gold">Te Mérite</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                Conçue au Maroc pour les femmes qui refusent de compromettre entre style et confort. 
                Tailles 46 à 56. Pas un accessoire. Pas un après-pensée. <strong className="text-white">Une marque entière pour toi.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collections/robes"
                  className="bg-brand-rose text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-rose-dark transition-colors inline-flex items-center justify-center"
                >
                  Découvrir la Collection
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/size-guide"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Guide des Tailles
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-[3/4] bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                <div className="text-center text-white/40 p-8">
                  <div className="text-6xl mb-4">👗</div>
                  <p className="text-lg font-medium">Photo Hero Lifestyle</p>
                  <p className="text-sm">Femme confiante, taille 48+</p>
                  <p className="text-sm">Style marocain moderne</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-brand-plum px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                -30% Nouvelle Collection
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-brand-plum px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center">
                <Star size={14} className="text-brand-gold mr-1" fill="currentColor" />
                4.8/5 — 312 avis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center space-x-3">
                <stat.icon size={24} className="text-brand-rose" />
                <div>
                  <p className="font-bold text-brand-ink text-lg">{stat.number}</p>
                  <p className="text-xs text-brand-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              L&apos;Industrie T&apos;Ignore. <span className="text-brand-rose">AMAYNE T&apos;a Créée.</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              70% des femmes marocaines portent au-dessus du 46. Pourtant, 95% des marques s&apos;arrêtent au XL. Nous avons décidé de changer ça.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="font-bold text-xl text-brand-ink mb-4">Ce que tu vis aujourd&apos;hui</h3>
              <ul className="space-y-3 text-brand-muted">
                <li className="flex items-start">
                  <span className="text-brand-coral mr-2">✗</span>
                  &quot;On n&apos;a pas ta taille&quot; — dans 50 boutiques sur 50
                </li>
                <li className="flex items-start">
                  <span className="text-brand-coral mr-2">✗</span>
                  Des marques qui disent &quot;inclusive&quot; mais s&apos;arrêtent au XL
                </li>
                <li className="flex items-start">
                  <span className="text-brand-coral mr-2">✗</span>
                  Des vendeurs qui te disent &quot;prends plus simple&quot;
                </li>
                <li className="flex items-start">
                  <span className="text-brand-coral mr-2">✗</span>
                  Tu portes le même t-shirt large parce que tu n&apos;as rien d&apos;autre
                </li>
                <li className="flex items-start">
                  <span className="text-brand-coral mr-2">✗</span>
                  L&apos;humiliation de commander en ligne et que ça ne va pas
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-white rounded-2xl p-8 border-2 border-brand-rose/30">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold text-xl text-brand-ink mb-4">Ce qu&apos;AMAYNE change</h3>
              <ul className="space-y-3 text-brand-muted">
                <li className="flex items-start">
                  <span className="text-brand-sage mr-2">✓</span>
                  Tailles 46 à 56 — <strong>chaque pièce</strong> dans ta taille
                </li>
                <li className="flex items-start">
                  <span className="text-brand-sage mr-2">✓</span>
                  Mode avant-garde, pas juste &quot;couvrir&quot;
                </li>
                <li className="flex items-start">
                  <span className="text-brand-sage mr-2">✓</span>
                  Qualité premium à prix accessible
                </li>
                <li className="flex items-start">
                  <span className="text-brand-sage mr-2">✓</span>
                  Livraison gratuite, retour gratuit, 30 jours
                </li>
                <li className="flex items-start">
                  <span className="text-brand-sage mr-2">✓</span>
                  Paiement à la livraison — tu paies seulement quand tu reçois
                </li>
              </ul>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-brand-rose font-semibold hover:text-brand-rose-dark transition-colors"
              >
                Découvre notre histoire <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Nos Collections
            </h2>
            <p className="text-brand-muted text-lg">
              Chaque catégorie est pensée pour des corps réels avec des vies réelles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {collections.map(collection => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group relative aspect-[4/5] bg-brand-blush rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plum/80 via-brand-plum/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {collection.id === 'robes' ? '👗' :
                     collection.id === 'ensembles' ? '👠' :
                     collection.id === 'hauts' ? '👚' :
                     collection.id === 'pantalons' ? '👖' :
                     collection.id === 'manteaux' ? '🧥' : '🩱'}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="font-bold text-lg md:text-xl mb-1">{collection.name}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{collection.description}</p>
                  <span className="inline-flex items-center mt-3 text-sm font-semibold text-brand-gold group-hover:text-white transition-colors">
                    Découvrir <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-rose/10 text-brand-rose px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              🔥 Bestsellers
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Nos Plus Belles Ventes
            </h2>
            <p className="text-brand-muted text-lg">
              Les pièces que nos clientes adorent et recommandent.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.slice(0, 8).map(product => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-brand-border"
              >
                <div className="aspect-[3/4] bg-brand-blush relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-40">👗</span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-brand-coral text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-3 right-3 bg-brand-plum text-white px-2 py-1 rounded-full text-xs font-bold">
                      Nouveau
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-brand-rose font-medium mb-1">{product.marketingName}</p>
                  <h3 className="font-semibold text-brand-ink text-sm line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(product.rating) ? 'text-brand-gold' : 'text-brand-border'}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="text-xs text-brand-muted ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-bold text-brand-ink">{product.price} MAD</span>
                    {product.originalPrice && (
                      <span className="text-sm text-brand-muted line-through">{product.originalPrice} MAD</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.sizes[2] || product.sizes[0], product.colors[0]?.name || 'Noir');
                    }}
                    className="mt-3 w-full bg-brand-plum text-white py-2 rounded-full text-sm font-semibold hover:bg-brand-rose transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag size={14} className="mr-1" />
                    Ajouter au Panier
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Ce Que Disent Nos Clientes
            </h2>
            <p className="text-brand-muted text-lg">
              De vraies femmes, de vraies histoires. 4.8/5 basé sur 312 avis vérifiés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map(testimonial => (
              <div key={testimonial.id} className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? 'text-brand-gold' : 'text-brand-border'}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-brand-ink text-sm leading-relaxed mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-brand-ink text-sm">{testimonial.name}</p>
                    <p className="text-xs text-brand-muted">{testimonial.city}</p>
                  </div>
                  <span className="text-xs bg-brand-sage/10 text-brand-sage px-2 py-1 rounded-full font-medium">
                    ✓ Vérifié
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story CTA */}
      <section className="py-16 md:py-24 bg-brand-plum text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Notre Histoire
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            AMAYNE est née de la rage. De la frustration de marcher dans 50 boutiques et sortir les mains vides. 
            De la colère d&apos;entendre &quot;on n&apos;a pas ta taille&quot; pour la millième fois. 
            Nous avons décidé de créer la marque que le Maroc n&apos;a jamais eue — une vraie marque pour les femmes grandes tailles, 
            pas un &quot;collection complète&quot; jetée en bout de rayon.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center bg-white text-brand-plum px-8 py-4 rounded-full font-bold hover:bg-brand-cream transition-colors"
          >
            Lire notre histoire complète <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Pourquoi Choisir AMAYNE ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-border">
              <div className="w-16 h-16 bg-brand-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-brand-rose" />
              </div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">Qualité Premium</h3>
              <p className="text-brand-muted text-sm">
                Chaque tissu est sélectionné personnellement. Les mêmes matériaux que les grandes marques européennes — à prix marocain.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-brand-border">
              <div className="w-16 h-16 bg-brand-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} className="text-brand-sage" />
              </div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">Livraison Gratuite</h3>
              <p className="text-brand-muted text-sm">
                Partout au Maroc. Pas de montant minimum. Pas de frais cachés. Tu paies le prix que tu vois, point.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-brand-border">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-brand-gold" />
              </div>
              <h3 className="font-bold text-lg text-brand-ink mb-2">Retour Gratuit 30 Jours</h3>
              <p className="text-brand-muted text-sm">
                La taille ne va pas ? On récupère chez toi et on t&apos;envoie la bonne. Gratuit. Sans justificatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-brand-rose">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Reste Connectée
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Sois la première à découvrir nos nouvelles collections et nos offres exclusives.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Ton email"
              className="flex-1 px-6 py-4 rounded-full text-brand-ink focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-brand-plum text-white px-8 py-4 rounded-full font-bold hover:bg-brand-ink transition-colors">
              S&apos;inscrire
            </button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            Pas de spam. Désinscription en un clic.
          </p>
        </div>
      </section>
    </div>
  );
}
