'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Truck, Clock, Share2, MessageCircle, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { products, getCrossSellProducts } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { useEffect, useState } from 'react';

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') || `AMN-${Date.now().toString(36).toUpperCase()}`;
  const customerName = searchParams.get('name') || '';
  const city = searchParams.get('city') || '';
  const total = Number(searchParams.get('total')) || 0;
  const itemCount = Number(searchParams.get('items')) || 0;
  const { addItem } = useCart();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const crossSellProducts = products.slice(0, 3);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-sage/10 mb-6 transition-all duration-700 ${
              visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <CheckCircle
              size={48}
              className={`text-brand-sage transition-all duration-700 delay-300 ${
                visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            />
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-3">
            Commande Confirmée !
          </h1>
          <p className="text-brand-muted text-lg">
            Merci{customerName ? ` ${customerName}` : ''} ! Ta commande est en cours de traitement.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Numéro de commande</p>
              <p className="font-bold text-brand-ink">{orderNumber}</p>
            </div>
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Articles</p>
              <p className="font-bold text-brand-ink">{itemCount} article{itemCount !== 1 ? 's' : ''}</p>
            </div>
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Total à payer</p>
              <p className="font-bold text-brand-rose text-xl">{total} MAD</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-blush rounded-full flex items-center justify-center">
                <Truck size={20} className="text-brand-rose" />
              </div>
              <div>
                <p className="font-semibold text-brand-ink">Livraison estimée</p>
                <p className="text-sm text-brand-muted">3 à 5 jours ouvrés{city ? ` à ${city}` : ''}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-brand-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-blush rounded-full flex items-center justify-center">
                <Clock size={20} className="text-brand-rose" />
              </div>
              <div>
                <p className="font-semibold text-brand-ink">Paiement</p>
                <p className="text-sm text-brand-muted">À la livraison — tu paies quand tu reçois</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-8">
          <h2 className="font-semibold text-lg text-brand-ink mb-4">Et maintenant ?</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-brand-rose/10 text-brand-rose flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-brand-ink">Confirmation par SMS</p>
                <p className="text-sm text-brand-muted">Tu recevras un SMS de confirmation dans les prochaines minutes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-brand-rose/10 text-brand-rose flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-brand-ink">Préparation</p>
                <p className="text-sm text-brand-muted">Notre équipe prépare ta commande avec soin.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-brand-rose/10 text-brand-rose flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-brand-ink">Livraison</p>
                <p className="text-sm text-brand-muted">Le livreur te contacte avant d&apos;arriver. Tu paies à la réception.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-8 text-center">
          <h2 className="font-semibold text-lg text-brand-ink mb-2">Partage ton experience</h2>
          <p className="text-sm text-brand-muted mb-4">
            Dis à tes amies qu&apos;AMAYNE existe —elles te remercieront !
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://instagram.com/amayne.official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Share2 size={16} />
              <span>Instagram</span>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Je viens de commander chez AMAYNE ! Livraison gratuite au Maroc. Regarde leur collection: https://amayne.ma`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="bg-brand-plum rounded-2xl p-6 mb-8 text-center text-white">
          <p className="font-semibold mb-2">Une question sur ta commande ?</p>
          <p className="text-white/70 text-sm mb-4">Notre équipe est disponible 7j/7 par WhatsApp.</p>
          <a
            href="https://wa.me/212600000000?text=Bonjour, j'ai une question sur ma commande"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-brand-plum px-8 py-3 rounded-full font-bold hover:bg-brand-cream transition-colors"
          >
            <MessageCircle size={18} className="mr-2" />
            Contacter par WhatsApp
          </a>
        </div>

        {/* Cross-Sell */}
        <div className="mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-brand-ink mb-2 text-center">
            Pendant que tu attends...
          </h2>
          <p className="text-brand-muted text-center mb-6">
            Découvre d&apos;autres pièces qui te plairont.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {crossSellProducts.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-lg transition-all"
              >
                <div className="aspect-[3/4] bg-brand-blush relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl opacity-30">👗</span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-brand-coral text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-brand-rose font-medium mb-1">{product.marketingName}</p>
                  <h3 className="font-semibold text-sm text-brand-ink line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className={i < Math.floor(product.rating) ? 'text-brand-gold' : 'text-brand-border'}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="text-xs text-brand-muted ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-bold text-brand-ink text-sm">{product.price} MAD</span>
                    {product.originalPrice && (
                      <span className="text-xs text-brand-muted line-through">{product.originalPrice} MAD</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.sizes[2] || product.sizes[0], product.colors[0]?.name || 'Noir');
                    }}
                    className="mt-3 w-full bg-brand-plum text-white py-2 rounded-full text-xs font-semibold hover:bg-brand-rose transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag size={12} className="mr-1" />
                    Ajouter au Panier
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center bg-brand-rose text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-rose-dark transition-colors"
          >
            Retour à l&apos;accueil
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
