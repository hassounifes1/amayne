'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, ShoppingBag, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { products, collections, getCollection } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

const ALL_SIZES = [46, 48, 50, 52, 54, 56];

type SortKey = 'bestselling' | 'newest' | 'price-asc' | 'price-desc' | 'rating';

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = getCollection(slug);
  const { addItem } = useCart();

  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('bestselling');
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let items = products.filter(p => p.category === slug);

    if (selectedSizes.length > 0) {
      items = items.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    switch (sortBy) {
      case 'bestselling':
        items = [...items].sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case 'newest':
        items = [...items].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-asc':
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
    }

    return items;
  }, [slug, selectedSizes, sortBy]);

  const toggleSize = (size: number) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const collectionName = collection?.name || slug;
  const collectionDesc = collection?.description || '';

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink capitalize">{collectionName}</span>
          </nav>
        </div>
      </div>

      {/* Collection Header */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-3">
            {collectionName}
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            {collectionDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Controls Bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-brand-muted">
            {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          <div className="flex items-center space-x-3">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="bg-white border border-brand-border rounded-full px-4 py-2 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-rose"
            >
              <option value="bestselling">Bestsellers</option>
              <option value="newest">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Meilleures notes</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center space-x-2 bg-white border border-brand-border rounded-full px-4 py-2 text-sm text-brand-ink hover:border-brand-muted transition-colors"
            >
              <SlidersHorizontal size={16} />
              <span>Filtres</span>
              {selectedSizes.length > 0 && (
                <span className="bg-brand-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {selectedSizes.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Size Filters */}
        {selectedSizes.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-brand-muted">Tailles :</span>
            {selectedSizes.map(size => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className="flex items-center space-x-1 bg-brand-rose text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                <span>46-{size}</span>
                <X size={14} />
              </button>
            ))}
            <button
              onClick={() => setSelectedSizes([])}
              className="text-sm text-brand-rose hover:underline ml-2"
            >
              Tout effacer
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-semibold text-lg text-brand-ink mb-2">Aucun produit trouvé</h3>
            <p className="text-brand-muted text-sm mb-4">
              Essaie de modifier tes filtres pour trouver ce que tu cherches.
            </p>
            <button
              onClick={() => setSelectedSizes([])}
              className="bg-brand-rose text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-rose-dark transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-brand-border"
              >
                <div className="aspect-[3/4] bg-brand-blush relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-30">👗</span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-brand-coral text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-3 right-3 bg-brand-plum text-white px-2 py-1 rounded-full text-xs font-bold">
                      Nouveau
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-brand-rose font-medium mb-1">{product.marketingName}</p>
                  <h3 className="font-semibold text-brand-ink text-sm line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(product.rating) ? 'text-brand-gold' : 'text-brand-border'}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="text-xs text-brand-muted ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-bold text-brand-ink">{product.price} MAD</span>
                    {product.originalPrice && (
                      <span className="text-sm text-brand-muted line-through">{product.originalPrice} MAD</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.sizes[2] || product.sizes[0], product.colors[0]?.name || 'Noir');
                    }}
                    className="mt-3 w-full bg-brand-plum text-white py-2 rounded-full text-sm font-semibold hover:bg-brand-rose transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag size={14} className="mr-1" />
                    Ajouter au Panier
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Filter Panel Overlay */}
      {filterOpen && (
        <div className="fixed inset-0 z-[80]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-brand-cream shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
              <h2 className="font-semibold text-lg text-brand-ink">Filtres</h2>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-2 hover:bg-brand-blush rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="mb-8">
                <h3 className="font-semibold text-brand-ink mb-4">Taille</h3>
                <div className="grid grid-cols-3 gap-2">
                  {ALL_SIZES.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedSizes.includes(size)
                          ? 'border-brand-rose bg-brand-rose text-white'
                          : 'border-brand-border bg-white text-brand-ink hover:border-brand-muted'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-brand-border px-6 py-4 space-y-3">
              <button
                onClick={() => setFilterOpen(false)}
                className="w-full bg-brand-rose text-white py-3 rounded-full font-bold hover:bg-brand-rose-dark transition-colors"
              >
                Voir {filteredProducts.length} résultat{filteredProducts.length !== 1 ? 's' : ''}
              </button>
              <button
                onClick={() => {
                  setSelectedSizes([]);
                }}
                className="w-full text-brand-muted py-2 text-sm hover:text-brand-ink transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
