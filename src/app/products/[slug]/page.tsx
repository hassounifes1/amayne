'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Star, Truck, Shield, Leaf, ChevronRight, Minus, Plus, ArrowUp, ArrowDown, Sparkles } from 'lucide-react';
import {
  getProductBySlug,
  getCrossSellProducts,
  getUpsellProduct,
  getDownsellProduct,
  getPriceForWeight,
  CITIES,
} from '@/lib/data';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '+212 ', city: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link href="/" className="text-brand-amber hover:underline">Retour à l&apos;accueil</Link>
        </div>
      </div>
    );
  }

  const crossSell = getCrossSellProducts(product);
  const upsell = getUpsellProduct(product);
  const downsell = getDownsellProduct(product);
  const weight = selectedWeight ?? product.weights[0].grams;
  const unitPrice = getPriceForWeight(product, weight);
  const totalPrice = unitPrice * quantity;
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Le nom est requis';
    if (!form.phone.trim() || form.phone.trim() === '+212') e.phone = 'Le téléphone est requis';
    if (!form.city) e.city = 'La ville est requise';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const orderId = `AMY-${Date.now().toString(36).toUpperCase()}`;
    const crossSellSlugs = crossSell.slice(0, 3).map(p => p.slug).join(',');

    router.push(
      `/order-confirmation?order=${encodeURIComponent(orderId)}` +
      `&name=${encodeURIComponent(form.name)}` +
      `&phone=${encodeURIComponent(form.phone)}` +
      `&city=${encodeURIComponent(form.city)}` +
      `&product=${encodeURIComponent(product.slug)}` +
      `&productName=${encodeURIComponent(product.marketingName)}` +
      `&weight=${weight}` +
      `&quantity=${quantity}` +
      `&total=${totalPrice}` +
      `&crossSell=${encodeURIComponent(crossSellSlugs)}`
    );
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href={`/collections/${product.category}`} className="hover:text-brand-ink">{product.collection}</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">{product.marketingName}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-square product-jar rounded-2xl border border-brand-border overflow-hidden flex items-center justify-center">
              <span className="text-[120px]">{product.emoji}</span>
            </div>
            <p className="text-center text-sm text-brand-muted mt-3">Photo produit à venir — qualité identique</p>
          </div>

          {/* Product + Order Form */}
          <div>
            <span className="inline-block bg-brand-amber/10 text-brand-amber px-3 py-1 rounded-full text-sm font-medium mb-3">
              {product.marketingName}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-2">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.floor(product.rating) ? 'text-brand-honey' : 'text-brand-border'} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="text-sm text-brand-muted ml-2">{product.rating}/5 — {product.reviewCount} avis</span>
            </div>

            {/* Pain Point Hook */}
            <div className="bg-brand-sand/60 border-l-4 border-brand-amber rounded-r-xl p-4 mb-6">
              <p className="text-brand-ink text-sm font-medium">{product.painPoint}</p>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-brand-ink">{unitPrice} MAD</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-brand-muted line-through">{Math.round(product.originalPrice * (unitPrice / product.price))} MAD</span>
                  <span className="bg-brand-terracotta text-white px-3 py-1 rounded-full text-sm font-bold">-{discount}%</span>
                </>
              )}
            </div>

            {/* Weight Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-brand-ink mb-3">Format</label>
              <div className="flex flex-wrap gap-2">
                {product.weights.map(w => (
                  <button
                    key={w.grams}
                    onClick={() => setSelectedWeight(w.grams)}
                    className={`px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                      weight === w.grams ? 'border-brand-amber bg-brand-amber text-brand-brown' : 'border-brand-border bg-white text-brand-ink hover:border-brand-muted'
                    }`}
                  >
                    {w.label} — {w.price} MAD
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-brand-ink mb-3">Quantité</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-brand-sand rounded-full">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-brand-border rounded-full"><Minus size={16} /></button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-brand-border rounded-full"><Plus size={16} /></button>
                </div>
                {quantity >= 2 && (
                  <span className="text-sm bg-brand-forest/10 text-brand-forest px-3 py-1 rounded-full font-medium">
                    🎁 -10% dès 2 pots — appliqué à la livraison
                  </span>
                )}
              </div>
            </div>

            {/* COD Order Form */}
            <form onSubmit={handleOrder} className="bg-white rounded-2xl border-2 border-brand-amber/30 p-6 mb-6">
              <h2 className="font-bold text-lg text-brand-ink mb-1 flex items-center gap-2">
                <Sparkles size={20} className="text-brand-amber" />
                Commander — Paiement à la Livraison
              </h2>
              <p className="text-sm text-brand-muted mb-4">Remplis le formulaire — on livre, tu paies à la réception.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1">Nom complet *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: '' }); }}
                    placeholder="Ex: Fatima Zahra"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream`}
                  />
                  {errors.name && <p className="text-brand-terracotta text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => { setForm({ ...form, phone: e.target.value }); if (errors.phone) setErrors({ ...errors, phone: '' }); }}
                    placeholder="+212 6XX XXX XXX"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream`}
                  />
                  {errors.phone && <p className="text-brand-terracotta text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1">Ville *</label>
                  <select
                    value={form.city}
                    onChange={e => { setForm({ ...form, city: e.target.value }); if (errors.city) setErrors({ ...errors, city: '' }); }}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream appearance-none`}
                  >
                    <option value="">Sélectionne ta ville</option>
                    {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.city && <p className="text-brand-terracotta text-xs mt-1">{errors.city}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-6 bg-brand-amber text-brand-brown py-4 rounded-full font-bold text-lg hover:bg-brand-honey transition-colors shadow-lg disabled:opacity-70"
              >
                {submitting ? 'Confirmation...' : `Commander — ${totalPrice} MAD`}
              </button>
              <p className="text-center text-xs text-brand-muted mt-3">💳 Paiement à la livraison · 🚚 Livraison gratuite</p>
            </form>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="flex flex-col items-center text-center">
                <Truck size={20} className="text-brand-forest mb-1" />
                <span className="text-xs font-medium text-brand-muted">Livraison Gratuite</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf size={20} className="text-brand-forest mb-1" />
                <span className="text-xs font-medium text-brand-muted">100% Naturel</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield size={20} className="text-brand-forest mb-1" />
                <span className="text-xs font-medium text-brand-muted">Paiement à la Livraison</span>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-brand-border pt-8">
              <p className="text-brand-muted leading-relaxed mb-4">{product.description}</p>
              <h3 className="font-semibold text-brand-ink mb-2">Bénéfices</h3>
              <ul className="space-y-2 mb-6">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start text-sm text-brand-muted">
                    <span className="text-brand-forest mr-2">✓</span>{b}
                  </li>
                ))}
              </ul>
              <p className="text-sm"><span className="font-semibold text-brand-ink">Ingrédients :</span> <span className="text-brand-muted">{product.ingredients}</span></p>
            </div>
          </div>
        </div>

        {/* Upsell */}
        {upsell && (
          <div className="mt-12 bg-gradient-to-r from-brand-amber/10 to-brand-honey/10 rounded-2xl p-6 border border-brand-amber/30">
            <div className="flex items-center gap-2 mb-4">
              <ArrowUp size={20} className="text-brand-amber" />
              <h2 className="font-bold text-lg text-brand-ink">Upgrade Premium — Meilleure Qualité</h2>
            </div>
            <Link href={`/products/${upsell.slug}`} className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-brand-border">
              <span className="text-4xl">{upsell.emoji}</span>
              <div className="flex-1">
                <p className="text-xs text-brand-amber font-medium">{upsell.marketingName}</p>
                <p className="font-semibold text-brand-ink">{upsell.name}</p>
                <p className="text-sm text-brand-muted line-clamp-1">{upsell.painPoint}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-brand-ink">{upsell.price} MAD</p>
                <span className="text-xs text-brand-amber font-medium">Voir →</span>
              </div>
            </Link>
          </div>
        )}

        {/* Downsell */}
        {downsell && (
          <div className="mt-6 bg-brand-sand/50 rounded-2xl p-6 border border-brand-border">
            <div className="flex items-center gap-2 mb-4">
              <ArrowDown size={20} className="text-brand-muted" />
              <h2 className="font-bold text-lg text-brand-ink">Budget Serré ? Essaie Celui-Ci</h2>
            </div>
            <Link href={`/products/${downsell.slug}`} className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-brand-border">
              <span className="text-4xl">{downsell.emoji}</span>
              <div className="flex-1">
                <p className="text-xs text-brand-muted font-medium">{downsell.marketingName}</p>
                <p className="font-semibold text-brand-ink">{downsell.name}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-brand-ink">{downsell.price} MAD</p>
                <span className="text-xs text-brand-muted">Voir →</span>
              </div>
            </Link>
          </div>
        )}

        {/* Cross-Sell */}
        {crossSell.length > 0 && (
          <div className="mt-12 border-t border-brand-border pt-12">
            <h2 className="font-display text-2xl font-bold text-brand-ink mb-2 text-center">Complète Ta Commande</h2>
            <p className="text-brand-muted text-center mb-8">Les clients qui ont commandé {product.marketingName} ont aussi pris...</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {crossSell.map(item => (
                <Link key={item.id} href={`/products/${item.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-lg transition-all">
                  <div className="aspect-square product-jar flex items-center justify-center">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brand-amber font-medium">{item.marketingName}</p>
                    <h3 className="font-semibold text-sm text-brand-ink line-clamp-1">{item.name}</h3>
                    <p className="font-bold text-brand-ink mt-2">{item.price} MAD</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
