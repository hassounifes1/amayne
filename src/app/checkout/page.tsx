'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Truck, Shield, CreditCard, MapPin, User, Phone } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { CITIES, getPriceForWeight } from '@/lib/data';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '+212 ', city: '', address: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Le nom est requis';
    if (!form.phone.trim() || form.phone.trim() === '+212') e.phone = 'Le téléphone est requis';
    if (!form.city) e.city = 'La ville est requise';
    if (!form.address.trim()) e.address = "L'adresse est requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const orderId = `AMY-${Date.now().toString(36).toUpperCase()}`;
    clearCart();
    router.push(
      `/order-confirmation?order=${encodeURIComponent(orderId)}&name=${encodeURIComponent(form.name)}&city=${encodeURIComponent(form.city)}&total=${total}&items=${items.length}`
    );
  };

  if (items.length === 0) {
    return (
      <div className="bg-brand-cream min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <span className="text-6xl mb-4 block">🫙</span>
          <h1 className="font-display text-2xl font-bold mb-4">Panier vide</h1>
          <Link href="/" className="bg-brand-amber text-brand-brown px-8 py-3 rounded-full font-semibold">Découvrir nos saveurs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Commande</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">Finaliser la commande</h1>
        <div className="grid lg:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center"><User size={20} className="mr-2 text-brand-amber" />Informations</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nom complet *</label>
                  <input type="text" value={form.name} onChange={e => updateField('name', e.target.value)} placeholder="Ex: Fatima Zahra"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream`} />
                  {errors.name && <p className="text-brand-terracotta text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Téléphone *</label>
                  <input type="tel" value={form.phone} onChange={e => updateField('phone', e.target.value)} placeholder="+212 6XX XXX XXX"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream`} />
                  {errors.phone && <p className="text-brand-terracotta text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center"><MapPin size={20} className="mr-2 text-brand-amber" />Livraison</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Ville *</label>
                  <select value={form.city} onChange={e => updateField('city', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream appearance-none`}>
                    <option value="">Sélectionne ta ville</option>
                    {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.city && <p className="text-brand-terracotta text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Adresse *</label>
                  <textarea value={form.address} onChange={e => updateField('address', e.target.value)} placeholder="Rue, quartier, repère..." rows={3}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-brand-terracotta' : 'border-brand-border'} focus:outline-none focus:ring-2 focus:ring-brand-amber bg-brand-cream resize-none`} />
                  {errors.address && <p className="text-brand-terracotta text-xs mt-1">{errors.address}</p>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center"><CreditCard size={20} className="mr-2 text-brand-amber" />Paiement</h2>
              <div className="bg-brand-sand rounded-xl p-4 flex items-center gap-4 border-2 border-brand-amber">
                <div className="w-5 h-5 rounded-full border-2 border-brand-amber bg-brand-amber flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full" /></div>
                <div>
                  <p className="font-semibold">Paiement à la livraison</p>
                  <p className="text-sm text-brand-muted">Tu paies quand tu reçois</p>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-brand-amber text-brand-brown py-4 rounded-full font-bold text-lg hover:bg-brand-honey transition-colors">
              Confirmer — {total} MAD
            </button>
          </form>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-brand-border p-6 sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Résumé</h2>
              <div className="space-y-3 mb-6">
                {items.map(item => {
                  const price = getPriceForWeight(item.product, item.weight);
                  return (
                    <div key={`${item.product.id}-${item.weight}`} className="flex gap-3">
                      <div className="w-12 h-12 product-jar rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{item.product.emoji}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1">{item.product.marketingName}</p>
                        <p className="text-xs text-brand-muted">{item.weight}g × {item.quantity}</p>
                        <p className="text-sm font-semibold">{price * item.quantity} MAD</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-brand-border pt-4 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-brand-muted">Livraison</span><span className="text-brand-forest font-medium">GRATUITE</span></div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-brand-border">
                  <span>Total</span><span className="text-brand-amber">{total} MAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
