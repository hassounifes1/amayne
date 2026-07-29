'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, ChevronRight } from 'lucide-react';
import { products, getCollection } from '@/lib/data';
import { localizeCollection, localizeProduct } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

type SortKey = 'bestselling' | 'newest' | 'price-asc' | 'price-desc' | 'rating';

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = getCollection(slug);
  const { t, lang, cls } = useLanguage();
  const [sortBy, setSortBy] = useState<SortKey>('bestselling');

  const filteredProducts = useMemo(() => {
    let items = products.filter(p => p.category === slug);
    switch (sortBy) {
      case 'bestselling': items = [...items].sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)); break;
      case 'newest': items = [...items].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case 'price-asc': items = [...items].sort((a, b) => a.price - b.price); break;
      case 'price-desc': items = [...items].sort((a, b) => b.price - a.price); break;
      case 'rating': items = [...items].sort((a, b) => b.rating - a.rating); break;
    }
    return items;
  }, [slug, sortBy]);

  const lc = localizeCollection(slug, lang);
  const collectionEmoji = collection?.emoji || '🫙';
  const countLabel = filteredProducts.length === 1 ? t('collection_product_one') : t('collection_product_many');

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted flex-wrap gap-1">
            <Link href="/" className="hover:text-brand-ink">{t('home')}</Link>
            <ChevronRight size={14} className="mx-1 flex-shrink-0" />
            <span className="text-brand-ink break-words">{lc.name}</span>
          </nav>
        </div>
      </div>

      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-center">
          <span className="text-5xl mb-4 block">{collectionEmoji}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-3 break-words">{lc.name}</h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto break-words">{lc.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
          <p className="text-sm text-brand-muted">{filteredProducts.length} {countLabel}</p>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortKey)}
            className="bg-white border border-brand-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber max-w-full"
          >
            <option value="bestselling">{t('sort_bestselling')}</option>
            <option value="newest">{t('sort_newest')}</option>
            <option value="price-asc">{t('sort_price_asc')}</option>
            <option value="price-desc">{t('sort_price_desc')}</option>
            <option value="rating">{t('sort_rating')}</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🫙</span>
            <h3 className="font-semibold text-lg mb-2">{t('collection_empty_title')}</h3>
            <Link href="/" className="text-brand-amber hover:underline">{t('collection_empty_cta')}</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(product => {
              const lp = localizeProduct(product, lang);
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-brand-border"
                >
                  <div className="aspect-square product-jar relative flex items-center justify-center">
                    <span className="text-5xl group-hover:scale-110 transition-transform">{product.emoji}</span>
                    {product.originalPrice && (
                      <div className="absolute top-3 start-3 bg-brand-terracotta text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                    {product.isNew && (
                      <div className="absolute top-3 end-3 bg-brand-brown text-white px-2 py-1 rounded-full text-xs font-bold">{t('badge_new')}</div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brand-amber font-medium mb-1 break-words">{lp.marketingName}</p>
                    <h3 className={`font-semibold text-brand-ink text-sm ${cls.oneLine}`}>{lp.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'text-brand-honey' : 'text-brand-border'} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-brand-ink">{product.price} MAD</span>
                      {product.originalPrice && <span className="text-sm text-brand-muted line-through">{product.originalPrice} MAD</span>}
                    </div>
                    <div className="mt-3 w-full bg-brand-brown text-white py-2 rounded-full text-sm font-semibold text-center group-hover:bg-brand-amber group-hover:text-brand-brown transition-colors">
                      {t('order_btn')}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
