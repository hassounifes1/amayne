'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, Truck, Shield, RefreshCw, ShoppingBag, ChevronRight, Minus, Plus, Heart } from 'lucide-react';
import { getProductBySlug, getCrossSellProducts, products } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link href="/" className="text-brand-rose hover:underline">Retour à l&apos;accueil</Link>
        </div>
      </div>
    );
  }

  const crossSell = getCrossSellProducts(product);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, product.colors[selectedColor]?.name || 'Noir');
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href={`/collections/${product.category}`} className="hover:text-brand-ink capitalize">
              {product.collection}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-white rounded-2xl border border-brand-border overflow-hidden mb-4">
              <div className="w-full h-full flex items-center justify-center bg-brand-blush">
                <span className="text-8xl opacity-30">👗</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-brand-blush rounded-lg border-2 transition-colors ${
                    activeImage === i ? 'border-brand-rose' : 'border-brand-border hover:border-brand-muted'
                  }`}
                >
                  <span className="text-2xl opacity-30">📷</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Marketing Name Badge */}
            <span className="inline-block bg-brand-rose/10 text-brand-rose px-3 py-1 rounded-full text-sm font-medium mb-3">
              {product.marketingName}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-brand-gold' : 'text-brand-border'}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm text-brand-muted ml-2">
                {product.rating}/5 — {product.reviewCount} avis vérifiés
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-brand-ink">{product.price} MAD</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-brand-muted line-through">{product.originalPrice} MAD</span>
                  <span className="bg-brand-coral text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* BNPL */}
            <p className="text-sm text-brand-muted mb-6">
              ou 3x <strong className="text-brand-ink">{Math.round(product.price / 3)} MAD</strong> sans frais avec le paiement à la livraison
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-brand-ink mb-3">
                Couleur : <span className="font-normal text-brand-muted">{product.colors[selectedColor]?.name}</span>
              </label>
              <div className="flex space-x-3">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === i
                        ? 'border-brand-rose scale-110 shadow-md'
                        : 'border-brand-border hover:border-brand-muted'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-brand-ink">
                  Taille : {selectedSize ? `${selectedSize}` : 'Choisis ta taille'}
                </label>
                <Link href="/size-guide" className="text-sm text-brand-rose hover:underline">
                  Guide des tailles
                </Link>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                      selectedSize === size
                        ? 'border-brand-rose bg-brand-rose text-white'
                        : 'border-brand-border bg-white text-brand-ink hover:border-brand-muted'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-brand-ink mb-3">Quantité</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-brand-blush rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-brand-border rounded-full transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-brand-border rounded-full transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                {quantity > 1 && (
                  <span className="text-sm text-brand-muted">
                    Total: <strong className="text-brand-ink">{product.price * quantity} MAD</strong>
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all ${
                selectedSize
                  ? 'bg-brand-rose text-white hover:bg-brand-rose-dark hover:shadow-lg'
                  : 'bg-brand-border text-brand-muted cursor-not-allowed'
              }`}
            >
              <ShoppingBag size={20} className="mr-2" />
              {selectedSize ? `Ajouter au Panier — ${product.price * quantity} MAD` : 'Choisis ta taille'}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center text-center">
                <Truck size={20} className="text-brand-sage mb-1" />
                <span className="text-xs font-medium text-brand-muted">Livraison Gratuite</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw size={20} className="text-brand-sage mb-1" />
                <span className="text-xs font-medium text-brand-muted">Retour 30 Jours</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield size={20} className="text-brand-sage mb-1" />
                <span className="text-xs font-medium text-brand-muted">Paiement à la Livraison</span>
              </div>
            </div>

            {/* Product Description */}
            <div className="mt-8 border-t border-brand-border pt-8">
              <h2 className="font-bold text-lg text-brand-ink mb-4">À propos de ce produit</h2>
              <p className="text-brand-muted leading-relaxed mb-4">{product.description}</p>
              
              <h3 className="font-semibold text-brand-ink mb-2">Avantages :</h3>
              <ul className="space-y-2 mb-6">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm text-brand-muted">
                    <span className="text-brand-sage mr-2 mt-0.5">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-brand-ink">Matière :</span>
                  <p className="text-brand-muted">{product.material}</p>
                </div>
                <div>
                  <span className="font-semibold text-brand-ink">Entretien :</span>
                  <p className="text-brand-muted">{product.care}</p>
                </div>
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="mt-8 border-t border-brand-border pt-8">
              <h2 className="font-bold text-lg text-brand-ink mb-4">Avis Clients</h2>
              <div className="bg-brand-blush rounded-xl p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-brand-gold" fill="currentColor" />
                  ))}
                  <span className="ml-2 font-bold text-brand-ink">{product.rating}/5</span>
                </div>
                <p className="text-sm text-brand-muted">{product.reviewCount} avis vérifiés de clientes AMAYNE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Sell Section */}
        {crossSell.length > 0 && (
          <div className="mt-16 border-t border-brand-border pt-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-2 text-center">
              Complète Ton Look
            </h2>
            <p className="text-brand-muted text-center mb-8">
              Les clients qui ont acheté ce produit ont aussi adoré ces pièces.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {crossSell.map(item => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:shadow-lg transition-all"
                >
                  <div className="aspect-[3/4] bg-brand-blush relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl opacity-30">👗</span>
                    </div>
                    {item.originalPrice && (
                      <div className="absolute top-2 left-2 bg-brand-coral text-white px-2 py-0.5 rounded-full text-xs font-bold">
                        -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-brand-rose font-medium">{item.marketingName}</p>
                    <h3 className="font-semibold text-sm text-brand-ink line-clamp-1">{item.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-bold text-brand-ink text-sm">{item.price} MAD</span>
                      {item.originalPrice && (
                        <span className="text-xs text-brand-muted line-through">{item.originalPrice} MAD</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
