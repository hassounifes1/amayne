'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { getPriceForWeight } from '@/lib/data';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, setIsOpen } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-cream shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={20} className="text-brand-brown" />
            <h2 className="font-semibold text-lg text-brand-ink">Panier ({itemCount})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-brand-sand rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-3 bg-brand-sand/50">
          <div className="flex items-center text-sm text-brand-forest font-medium">
            <Truck size={16} className="mr-2" />
            Livraison gratuite sur toutes les commandes
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-6xl mb-4">🫙</span>
              <h3 className="font-semibold text-lg text-brand-ink mb-2">Ton panier est vide</h3>
              <Link href="/" onClick={() => setIsOpen(false)} className="bg-brand-amber text-brand-brown px-6 py-3 rounded-full font-semibold hover:bg-brand-honey transition-colors">
                Découvrir nos saveurs
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => {
                const unitPrice = getPriceForWeight(item.product, item.weight);
                return (
                  <div key={`${item.product.id}-${item.weight}`} className="flex space-x-4 bg-white p-4 rounded-xl border border-brand-border">
                    <div className="w-16 h-16 product-jar rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.product.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-brand-ink text-sm">{item.product.marketingName}</p>
                          <p className="text-xs text-brand-muted">{item.weight}g</p>
                        </div>
                        <button onClick={() => removeItem(item.product.id, item.weight)} className="text-brand-muted hover:text-brand-terracotta">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2 bg-brand-sand rounded-full">
                          <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity - 1)} className="p-1.5 hover:bg-brand-border rounded-full"><Minus size={14} /></button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity + 1)} className="p-1.5 hover:bg-brand-border rounded-full"><Plus size={14} /></button>
                        </div>
                        <p className="font-bold text-brand-ink">{unitPrice * item.quantity} MAD</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-border px-6 py-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-brand-muted">Total</span>
              <span className="font-bold text-xl text-brand-ink">{total} MAD</span>
            </div>
            <Link href="/checkout" onClick={() => setIsOpen(false)} className="block w-full bg-brand-amber text-brand-brown text-center py-4 rounded-full font-bold text-lg hover:bg-brand-honey transition-colors">
              Commander — {total} MAD
            </Link>
            <p className="text-center text-xs text-brand-muted">💳 Paiement à la livraison</p>
          </div>
        )}
      </div>
    </div>
  );
}
