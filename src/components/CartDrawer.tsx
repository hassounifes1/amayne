'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const FREE_SHIPPING_THRESHOLD = 399;

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, setIsOpen } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const shippingProgress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - total;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-cream shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={20} className="text-brand-plum" />
            <h2 className="font-semibold text-lg text-brand-ink">Panier ({itemCount})</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-brand-blush rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-6 py-3 bg-brand-blush/50">
          {amountToFreeShipping > 0 ? (
            <div>
              <div className="flex items-center text-sm text-brand-muted mb-2">
                <Truck size={16} className="mr-2" />
                <span>Ajoute <strong className="text-brand-rose">{amountToFreeShipping} MAD</strong> pour la livraison gratuite !</span>
              </div>
              <div className="w-full bg-brand-border rounded-full h-2">
                <div
                  className="bg-brand-rose h-2 rounded-full progress-fill"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center text-sm text-brand-sage font-medium">
              <Truck size={16} className="mr-2" />
              ✅ Livraison gratuite débloquée !
            </div>
          )}
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-brand-border mb-4" />
              <h3 className="font-semibold text-lg text-brand-ink mb-2">Ton panier est vide</h3>
              <p className="text-brand-muted text-sm mb-4">Découvre notre collection et trouve tes pièces favorites.</p>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="bg-brand-rose text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-rose-dark transition-colors"
              >
                Découvrir la Collection
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex space-x-4 bg-white p-4 rounded-xl">
                  {/* Image Placeholder */}
                  <div className="w-20 h-24 bg-brand-blush rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👗</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-brand-ink text-sm">{item.product.marketingName}</p>
                        <p className="text-xs text-brand-muted">{item.product.name}</p>
                        <p className="text-xs text-brand-muted mt-1">
                          Taille: {item.size} | Couleur: {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="text-brand-muted hover:text-brand-coral transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2 bg-brand-blush rounded-full">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                          className="p-1.5 hover:bg-brand-border rounded-full transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="p-1.5 hover:bg-brand-border rounded-full transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-bold text-brand-ink">{item.product.price * item.quantity} MAD</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-border px-6 py-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-brand-muted">Sous-total</span>
              <span className="font-bold text-xl text-brand-ink">{total} MAD</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-brand-muted">Livraison</span>
              <span className="text-brand-sage font-medium">GRATUITE</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-brand-rose text-white text-center py-4 rounded-full font-bold text-lg hover:bg-brand-rose-dark transition-colors"
            >
              Commander — {total} MAD
            </Link>
            <p className="text-center text-xs text-brand-muted">
              💳 Paiement à la livraison uniquement
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
