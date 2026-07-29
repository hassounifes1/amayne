'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Truck, Clock, MessageCircle, ArrowRight, Star, Gift, Zap } from 'lucide-react';
import { products, getProductBySlug } from '@/lib/data';
import { useEffect, useState, Suspense } from 'react';
import { useLanguage } from '@/context/LanguageProvider';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const orderNumber = searchParams.get('order') || `AMY-${Date.now().toString(36).toUpperCase()}`;
  const customerName = searchParams.get('name') || '';
  const city = searchParams.get('city') || '';
  const productSlug = searchParams.get('product') || '';
  const productName = searchParams.get('productName') || '';
  const weight = searchParams.get('weight') || '';
  const quantity = searchParams.get('quantity') || '1';
  const total = Number(searchParams.get('total')) || 0;
  const crossSellParam = searchParams.get('crossSell') || '';

  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(15 * 60);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const crossSellSlugs = crossSellParam ? crossSellParam.split(',').filter(Boolean) : [];
  const crossSellProducts = crossSellSlugs
    .map(s => getProductBySlug(s))
    .filter(Boolean)
    .concat(products.filter(p => p.isBestseller && p.slug !== productSlug).slice(0, 3))
    .slice(0, 4);

  const aovBundle = products.find(p => p.slug === 'leduo-gourmand-pack-2-pots');
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Success */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-forest/10 mb-6 transition-all duration-700 ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <CheckCircle size={48} className="text-brand-forest" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-3">
            {t('confirm_title')} 🫙
          </h1>
          <p className="text-brand-muted text-lg">
            {t('confirm_thanks')}
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">{t('confirm_order')}</p>
              <p className="font-bold text-brand-ink text-lg">{orderNumber}</p>
            </div>
            <div>
              <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">{t('confirm_total')}</p>
              <p className="font-bold text-brand-amber text-2xl">{total} MAD</p>
            </div>
          </div>

          {productName && (
            <div className="mt-4 pt-4 border-t border-brand-border">
              <p className="text-sm text-brand-muted">{t('confirm_product')}</p>
              <p className="font-semibold text-brand-ink">{productName} — {weight}g × {quantity}</p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-brand-border space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center">
                <Truck size={20} className="text-brand-amber" />
              </div>
              <div>
                <p className="font-semibold text-brand-ink">{t('confirm_delivery')}</p>
                <p className="text-sm text-brand-muted">{t('confirm_delivery_sub')}{city ? ` — ${city}` : ''}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center">
                <Clock size={20} className="text-brand-amber" />
              </div>
              <div>
                <p className="font-semibold text-brand-ink">{t('confirm_payment')}</p>
                <p className="text-sm text-brand-muted">{t('confirm_payment_sub')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-6">
          <h2 className="font-semibold text-lg text-brand-ink mb-4">{t('confirm_next')}</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: t('confirm_step1_t'), desc: t('confirm_step1_d') },
              { step: '2', title: t('confirm_step2_t'), desc: t('confirm_step2_d') },
              { step: '3', title: t('confirm_step3_t'), desc: t('confirm_step3_d') },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-amber/10 text-brand-amber flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <p className="font-medium text-brand-ink">{item.title}</p>
                  <p className="text-sm text-brand-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AOV Bundle Offer — Flash */}
        {aovBundle && countdown > 0 && (
          <div className="bg-gradient-to-br from-brand-brown to-brand-brown-light rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Gift size={24} className="text-brand-honey" />
                <span className="bg-brand-terracotta text-white px-3 py-1 rounded-full text-xs font-bold urgency-pulse">
                  {t('confirm_flash')} — {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold mb-2">
                {t('confirm_bundle_t')}
              </h2>
              <p className="text-white/80 text-sm mb-4">
                {t('confirm_bundle_sub')}
              </p>
              <Link
                href={`/products/${aovBundle.slug}?ref=confirmation&bundle=1`}
                className="inline-flex items-center bg-brand-amber text-brand-brown px-6 py-3 rounded-full font-bold hover:bg-brand-honey transition-colors"
              >
                <Zap size={18} className="mr-2" />
                {t('confirm_bundle_btn')} — {aovBundle.price} MAD
              </Link>
            </div>
          </div>
        )}

        {/* Cross-Sell Grid */}
        <div className="mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-brand-ink mb-2 text-center">
            {t('confirm_wait')}
          </h2>
          <p className="text-brand-muted text-center mb-6 text-sm">
            {t('confirm_wait_sub')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {crossSellProducts.map(product => product && (
              <Link
                key={product.id}
                href={`/products/${product.slug}?ref=confirmation`}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-lg hover:border-brand-amber transition-all"
              >
                <div className="aspect-square product-jar flex items-center justify-center">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{product.emoji}</span>
                </div>
                <div className="p-3">
                  <p className="text-xs text-brand-amber font-medium">{product.marketingName}</p>
                  <h3 className="font-semibold text-xs text-brand-ink line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-brand-honey' : 'text-brand-border'} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <p className="font-bold text-brand-ink text-sm mt-2">{product.price} MAD</p>
                  <div className="mt-2 w-full bg-brand-brown text-white py-1.5 rounded-full text-xs font-semibold text-center group-hover:bg-brand-amber group-hover:text-brand-brown transition-colors">
                    {t('order_btn')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-brand-brown rounded-2xl p-6 mb-8 text-center text-white">
          <p className="font-semibold mb-2">{t('confirm_whatsapp_t')}</p>
          <a
            href={`https://wa.me/212600000000?text=${encodeURIComponent(`Salam, j'ai passé la commande ${orderNumber}. Question:`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-brand-brown px-8 py-3 rounded-full font-bold hover:bg-brand-cream transition-colors"
          >
            <MessageCircle size={18} className="mr-2" />
            {t('confirm_whatsapp_btn')}
          </a>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center bg-brand-amber text-brand-brown px-8 py-3 rounded-full font-semibold hover:bg-brand-honey transition-colors">
            {t('confirm_home')} <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ConfirmLoading() {
  const { t } = useLanguage();
  return <div className="min-h-screen flex items-center justify-center">{t('loading')}</div>;
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<ConfirmLoading />}>
      <ConfirmationContent />
    </Suspense>
  );
}
