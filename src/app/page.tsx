'use client';

import Link from 'next/link';
import { Star, Truck, Shield, Leaf, ArrowRight, ShoppingBag, Award, Heart } from 'lucide-react';
import { collections, testimonials, getBestsellers } from '@/lib/data';

const stats = [
  { number: '12,400+', label: 'Pots livrés', icon: Heart },
  { number: '4.9/5', label: 'Note moyenne', icon: Star },
  { number: '100%', label: 'Naturel & Bio', icon: Leaf },
  { number: 'Gratuite', label: 'Livraison Maroc', icon: Truck },
];

export default function HomePage() {
  const bestsellers = getBestsellers();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-brown via-brand-brown to-brand-amber overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E8B84A 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-brand-amber/20 text-brand-honey px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-brand-honey/30">
                🫙 N°1 Amlou Authentique au Maroc — 2026
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                L&apos;Amlou du Souss,<br />
                <span className="text-brand-honey">Livré Chez Toi</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 mb-4 max-w-lg leading-relaxed">
                Amandes torréfiées, huile d&apos;argan pressée à froid, miel pur — <strong className="text-white">trois ingrédients, zéro compromis.</strong>
              </p>
              <p className="text-base text-white/70 mb-8 max-w-lg">
                Fini le Nutella plein de sucre. Fini l&apos;amlou douteux du souk. AMAYNO, c&apos;est la tradition berbère dans un pot — 100% naturel, fabriqué au Maroc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collections/classiques"
                  className="bg-brand-amber text-brand-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-honey transition-colors inline-flex items-center justify-center"
                >
                  Commander Maintenant
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Notre Histoire
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/80">
                <span className="flex items-center gap-1"><Truck size={16} /> Livraison gratuite</span>
                <span className="flex items-center gap-1"><Shield size={16} /> Paiement à la livraison</span>
                <span className="flex items-center gap-1"><Leaf size={16} /> 100% naturel</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square product-jar rounded-3xl border border-brand-honey/30 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-8">
                  <div className="text-9xl mb-4">🫙</div>
                  <p className="text-brand-brown font-display text-2xl font-bold">AMAYNO</p>
                  <p className="text-brand-muted text-sm mt-2">Amlou du Souss — 100% Naturel</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-honey text-brand-brown px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                -20% Lancement
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-brand-brown px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center">
                <Star size={14} className="text-brand-amber mr-1" fill="currentColor" />
                4.9/5 — 2,847 avis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center space-x-3">
                <stat.icon size={24} className="text-brand-amber" />
                <div>
                  <p className="font-bold text-brand-ink text-lg">{stat.number}</p>
                  <p className="text-xs text-brand-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Tu Mérites Mieux Que le Nutella
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              70% des Marocains consomment des pâtes à tartiner industrielles. Pourtant, l&apos;amlou — le trésor berbère — existe depuis des siècles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-brand-border">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="font-bold text-xl text-brand-ink mb-4">Ce que tu vis aujourd&apos;hui</h3>
              <ul className="space-y-3 text-brand-muted">
                <li className="flex items-start"><span className="text-brand-terracotta mr-2">✗</span>Nutella plein de sucre, huile de palme et conservateurs</li>
                <li className="flex items-start"><span className="text-brand-terracotta mr-2">✗</span>Amlou du souk — qualité douteuse, origine inconnue</li>
                <li className="flex items-start"><span className="text-brand-terracotta mr-2">✗</span>Pas d&apos;énergie le matin — crash sucre à 10h</li>
                <li className="flex items-start"><span className="text-brand-terracotta mr-2">✗</span>Tes enfants mangent du sucre industriel au petit-déjeuner</li>
                <li className="flex items-start"><span className="text-brand-terracotta mr-2">✗</span>Impossible de trouver du vrai amlou hors du Souss</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-brand-amber/40">
              <div className="text-4xl mb-4">🫙</div>
              <h3 className="font-bold text-xl text-brand-ink mb-4">Ce qu&apos;AMAYNO change</h3>
              <ul className="space-y-3 text-brand-muted">
                <li className="flex items-start"><span className="text-brand-forest mr-2">✓</span>3 ingrédients nobles — amandes, argan, miel. Point.</li>
                <li className="flex items-start"><span className="text-brand-forest mr-2">✓</span>Fabriqué au Souss par coopératives féminines certifiées</li>
                <li className="flex items-start"><span className="text-brand-forest mr-2">✓</span>Énergie durable — pas de crash sucre</li>
                <li className="flex items-start"><span className="text-brand-forest mr-2">✓</span>12 saveurs — du classique au premium pistache</li>
                <li className="flex items-start"><span className="text-brand-forest mr-2">✓</span>Livré chez toi — paiement à la livraison, zéro risque</li>
              </ul>
              <Link href="/collections/classiques" className="mt-6 inline-flex items-center text-brand-amber font-semibold hover:text-brand-amber-dark transition-colors">
                Découvrir nos saveurs <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">Nos Collections</h2>
            <p className="text-brand-muted text-lg">Du classique berbère au premium pistache — une saveur pour chaque moment.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {collections.map(collection => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group relative aspect-square product-jar rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-border hover:border-brand-amber"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform">{collection.emoji}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-sm md:text-base">{collection.name}</h3>
                  <p className="text-xs text-white/70 mt-1">{collection.productCount} produits</p>
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
            <span className="inline-block bg-brand-amber/10 text-brand-amber px-4 py-1.5 rounded-full text-sm font-medium mb-4">🔥 Bestsellers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">Les Plus Aimés au Maroc</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.slice(0, 8).map(product => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-brand-border"
              >
                <div className="aspect-square product-jar relative flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform">{product.emoji}</span>
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-brand-terracotta text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-brand-amber font-medium mb-1">{product.marketingName}</p>
                  <h3 className="font-semibold text-brand-ink text-sm line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'text-brand-honey' : 'text-brand-border'} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                    ))}
                    <span className="text-xs text-brand-muted ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-bold text-brand-ink">{product.price} MAD</span>
                    {product.originalPrice && (
                      <span className="text-sm text-brand-muted line-through">{product.originalPrice} MAD</span>
                    )}
                  </div>
                  <div className="mt-3 w-full bg-brand-brown text-white py-2 rounded-full text-sm font-semibold text-center group-hover:bg-brand-amber group-hover:text-brand-brown transition-colors">
                    Commander
                  </div>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-brand-muted">4.9/5 basé sur 2,847 avis vérifiés — de Casablanca à Agadir.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < t.rating ? 'text-brand-honey' : 'text-brand-border'} fill={i < t.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className="text-brand-ink text-sm leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-brand-ink text-sm">{t.name}</p>
                    <p className="text-xs text-brand-muted">{t.city} — {t.product}</p>
                  </div>
                  <span className="text-xs bg-brand-forest/10 text-brand-forest px-2 py-1 rounded-full font-medium">✓ Vérifié</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">Pourquoi AMAYNO ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-border">
              <Award size={32} className="text-brand-amber mx-auto mb-4" />
              <h3 className="font-bold text-lg text-brand-ink mb-2">Qualité Souss</h3>
              <p className="text-brand-muted text-sm">Amandes et argan des coopératives féminines de l&apos;Anti-Atlas. Traçabilité complète.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-border">
              <Truck size={32} className="text-brand-forest mx-auto mb-4" />
              <h3 className="font-bold text-lg text-brand-ink mb-2">Livraison Gratuite</h3>
              <p className="text-brand-muted text-sm">Partout au Maroc en 3-5 jours. Pas de montant minimum.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-border">
              <Shield size={32} className="text-brand-amber mx-auto mb-4" />
              <h3 className="font-bold text-lg text-brand-ink mb-2">Paiement à la Livraison</h3>
              <p className="text-brand-muted text-sm">Tu paies quand tu reçois. Zéro avance, zéro risque.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-brown">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Goûte la Différence</h2>
          <p className="text-white/80 text-lg mb-8">12 saveurs. 100% naturel. Livré chez toi. Commande maintenant — paiement à la livraison.</p>
          <Link href="/collections/classiques" className="inline-flex items-center bg-brand-amber text-brand-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-honey transition-colors">
            Commander Mon Amlou <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
