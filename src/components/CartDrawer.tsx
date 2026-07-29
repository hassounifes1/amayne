'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useLanguage } from '@/context/LanguageProvider';
import { getPriceForWeight } from '@/lib/data';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, setIsOpen } = useCart();
  const { t, dir } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div
        className={`absolute top-0 h-full w-full max-w-md bg-brand-cream shadow-xl flex flex-col safe-top pb-safe ${
          dir === 'rtl' ? 'left-0' : 'right-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-brand-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-brand-brown" />
            <h2 className="font-semibold text-base sm:text-lg text-brand-ink">{t('cart_title')} ({itemCount})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-brand-sand rounded-full touch-target" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="px-4 sm:px-6 py-3 bg-brand-sand/50">
          <div className="flex items-center text-xs sm:text-sm text-brand-forest font-medium gap-2">
            <Truck size={16} className="flex-shrink-0" />
            {t('cart_free_ship')}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <span className="text-5xl sm:text-6xl mb-4">🫙</span>
              <h3 className="font-semibold text-lg mb-2">{t('cart_empty')}</h3>
              <Link href="/" onClick={() => setIsOpen(false)} className="bg-brand-amber text-brand-brown px-6 py-3 rounded-full font-semibold touch-target">
                {t('cart_empty_cta')}
              </Link>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map(item => {
                const unitPrice = getPriceForWeight(item.product, item.weight);
                return (
                  <div key={`${item.product.id}-${item.weight}`} className="flex gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl border border-brand-border">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 product-jar rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl">{item.product.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <p className="font-semibold text-brand-ink text-sm truncate">{item.product.marketingName}</p>
                          <p className="text-xs text-brand-muted">{item.weight}g</p>
                        </div>
                        <button onClick={() => removeItem(item.product.id, item.weight)} className="text-brand-muted hover:text-brand-terracotta p-1 touch-target">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2 sm:mt-3">
                        <div className="flex items-center bg-brand-sand rounded-full">
                          <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity - 1)} className="p-2 touch-target"><Minus size={14} /></button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity + 1)} className="p-2 touch-target"><Plus size={14} /></button>
                        </div>
                        <p className="font-bold text-brand-ink text-sm sm:text-base">{unitPrice * item.quantity} MAD</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-border px-4 sm:px-6 py-4 space-y-3 safe-bottom">
            <div className="flex justify-between items-center">
              <span className="font-medium text-brand-muted">{t('cart_total')}</span>
              <span className="font-bold text-lg sm:text-xl text-brand-ink">{total} MAD</span>
            </div>
            <Link href="/checkout" onClick={() => setIsOpen(false)} className="block w-full bg-brand-amber text-brand-brown text-center py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brand-honey transition-colors touch-target">
              {t('cart_checkout')} — {total} MAD
            </Link>
            <p className="text-center text-[10px] sm:text-xs text-brand-muted">💳 {t('cart_cod_note')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
