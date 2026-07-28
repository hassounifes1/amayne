'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Truck, Shield, CreditCard, MapPin, User, Phone, Mail, Building } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const CITIES = [
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Tanger',
  'Fes',
  'Agadir',
  'Meknès',
  'Oujda',
  'Kenitra',
  'Tetouan',
  'Autre',
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: '',
    phone: '+212 ',
    email: '',
    city: '',
    address: '',
    landmark: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = 'Le nom complet est requis';
    if (!form.phone.trim() || form.phone.trim() === '+212') newErrors.phone = 'Le numéro de téléphone est requis';
    if (!form.city) newErrors.city = 'La ville est requise';
    if (!form.address.trim()) newErrors.address = "L'adresse est requise";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const orderId = `AMN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    clearCart();

    router.push(
      `/order-confirmation?order=${encodeURIComponent(orderId)}&name=${encodeURIComponent(form.name)}&city=${encodeURIComponent(form.city)}&total=${total}&items=${items.length}`
    );
  };

  if (items.length === 0) {
    return (
      <div className="bg-brand-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="font-display text-2xl font-bold text-brand-ink mb-4">Ton panier est vide</h1>
          <p className="text-brand-muted mb-6">Ajoute des produits avant de passer commande.</p>
          <Link
            href="/"
            className="bg-brand-rose text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-rose-dark transition-colors inline-block"
          >
            Découvrir la Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Paiement</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-8">Finaliser la commande</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <h2 className="font-semibold text-lg text-brand-ink mb-4 flex items-center">
                <User size={20} className="mr-2 text-brand-rose" />
                Informations de contact
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">
                    Nom complet <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Ex: Fatima Zahra"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-brand-coral' : 'border-brand-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent bg-brand-cream`}
                  />
                  {errors.name && <p className="text-brand-coral text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">
                    Téléphone <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+212 6XX XXX XXX"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-brand-coral' : 'border-brand-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent bg-brand-cream`}
                  />
                  {errors.phone && <p className="text-brand-coral text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">
                    Email <span className="text-brand-muted text-xs">(optionnel)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="ton@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent bg-brand-cream"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <h2 className="font-semibold text-lg text-brand-ink mb-4 flex items-center">
                <MapPin size={20} className="mr-2 text-brand-rose" />
                Adresse de livraison
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">
                    Ville <span className="text-brand-coral">*</span>
                  </label>
                  <select
                    value={form.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.city ? 'border-brand-coral' : 'border-brand-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent bg-brand-cream appearance-none`}
                  >
                    <option value="">Sélectionne ta ville</option>
                    {CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p className="text-brand-coral text-xs mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">
                    Adresse complète <span className="text-brand-coral">*</span>
                  </label>
                  <textarea
                    value={form.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="Rue, numéro, quartier..."
                    rows={3}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.address ? 'border-brand-coral' : 'border-brand-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent bg-brand-cream resize-none`}
                  />
                  {errors.address && <p className="text-brand-coral text-xs mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">
                    Repère / Point de repère <span className="text-brand-muted text-xs">(optionnel)</span>
                  </label>
                  <input
                    type="text"
                    value={form.landmark}
                    onChange={(e) => updateField('landmark', e.target.value)}
                    placeholder="À côté de, face à..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-rose focus:border-transparent bg-brand-cream"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-brand-border p-6">
              <h2 className="font-semibold text-lg text-brand-ink mb-4 flex items-center">
                <CreditCard size={20} className="mr-2 text-brand-rose" />
                Méthode de paiement
              </h2>

              <div className="bg-brand-blush rounded-xl p-4 flex items-center space-x-4 border-2 border-brand-rose">
                <div className="w-5 h-5 rounded-full border-2 border-brand-rose bg-brand-rose flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <p className="font-semibold text-brand-ink">Paiement à la livraison (COD)</p>
                  <p className="text-sm text-brand-muted">Tu paies quand tu reçois ton colis</p>
                </div>
              </div>

              <div className="mt-4 flex items-start space-x-3 bg-brand-cream rounded-xl p-4">
                <Shield size={18} className="text-brand-sage mt-0.5 flex-shrink-0" />
                <p className="text-sm text-brand-muted">
                  Tu ne paies rien en avance. Le paiement se fait uniquement à la réception de ta commande, directement au livreur.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 text-center border border-brand-border">
                <Truck size={24} className="text-brand-sage mx-auto mb-2" />
                <p className="text-xs font-medium text-brand-ink">Livraison Gratuite</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-brand-border">
                <Shield size={24} className="text-brand-sage mx-auto mb-2" />
                <p className="text-xs font-medium text-brand-ink">Retour 30 Jours</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-brand-border">
                <CreditCard size={24} className="text-brand-sage mx-auto mb-2" />
                <p className="text-xs font-medium text-brand-ink">COD Sécurisé</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand-rose text-white py-4 rounded-full font-bold text-lg hover:bg-brand-rose-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Confirmer la Commande — {total} MAD
            </button>
          </form>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-brand-border p-6 sticky top-24">
              <h2 className="font-semibold text-lg text-brand-ink mb-4">Résumé de la commande</h2>

              <div className="space-y-3 mb-6">
                {items.map(item => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex space-x-3">
                    <div className="w-14 h-16 bg-brand-blush rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">👗</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-brand-ink line-clamp-1">{item.product.marketingName}</p>
                      <p className="text-xs text-brand-muted">Taille {item.size} · {item.color}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-brand-muted">×{item.quantity}</span>
                        <span className="text-sm font-semibold text-brand-ink">{item.product.price * item.quantity} MAD</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-brand-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Sous-total</span>
                  <span className="text-brand-ink font-medium">{total} MAD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Livraison</span>
                  <span className="text-brand-sage font-medium">GRATUITE</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-brand-border">
                  <span className="text-brand-ink">Total</span>
                  <span className="text-brand-rose">{total} MAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
