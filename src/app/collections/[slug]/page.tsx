'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { products, getCollection } from '@/lib/data';

type SortKey = 'bestselling' | 'newest' | 'price-asc' | 'price-desc' | 'rating';

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = getCollection(slug);
  const [sortBy, setSortBy] = useState<SortKey>('bestselling');
  const [filterOpen, setFilterOpen] = useState(false);

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

  const collectionName = collection?.name || slug;
  const collectionDesc = collection?.description || '';
  const collectionEmoji = collection?.emoji || '🫙';

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">{collectionName}</span>
          </nav>
        </div>
      </div>

      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-center">
          <span className="text-5xl mb-4 block">{collectionEmoji}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-3">{collectionName}</h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">{collectionDesc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-brand-muted">{filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''}</p>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortKey)}
            className="bg-white border border-brand-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber"
          >
            <option value="bestselling">Bestsellers</option>
            <option value="newest">Nouveautés</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="rating">Meilleures notes</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🫙</span>
            <h3 className="font-semibold text-lg mb-2">Aucun produit dans cette collection</h3>
            <Link href="/" className="text-brand-amber hover:underline">Voir toutes les saveurs</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(product => (
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
                  {product.isNew && (
                    <div className="absolute top-3 right-3 bg-brand-brown text-white px-2 py-1 rounded-full text-xs font-bold">Nouveau</div>
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
                    {product.originalPrice && <span className="text-sm text-brand-muted line-through">{product.originalPrice} MAD</span>}
                  </div>
                  <div className="mt-3 w-full bg-brand-brown text-white py-2 rounded-full text-sm font-semibold text-center group-hover:bg-brand-amber group-hover:text-brand-brown transition-colors">
                    Commander
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
