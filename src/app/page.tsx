'use client';

import Link from 'next/link';
import { Star, Truck, Shield, Leaf, ArrowRight, Award, Heart } from 'lucide-react';
import { collections, getBestsellers } from '@/lib/data';
import { getLocalizedTestimonials, localizeCollection, localizeProduct } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';
import Logo from '@/components/Logo';

export default function HomePage() {
  const { t, dir, lang, cls } = useLanguage();
  const bestsellers = getBestsellers();
  const localizedTestimonials = getLocalizedTestimonials(lang);
  const arrowClass = dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2';

  const stats = [
    { number: '12,400+', label: t('stat_pots'), icon: Heart },
    { number: '4.9/5', label: t('stat_rating'), icon: Star },
    { number: '100%', label: t('stat_natural'), icon: Leaf },
    { number: '✓', label: t('stat_shipping'), icon: Truck },
  ];

  const problems = [t('problem_1'), t('problem_2'), t('problem_3'), t('problem_4'), t('problem_5')];
  const solutions = [t('solution_1'), t('solution_2'), t('solution_3'), t('solution_4'), t('solution_5')];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-brown via-brand-brown to-brand-amber overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E8B84A 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-10 sm:py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-start">
              <span className="inline-block bg-brand-amber/20 text-brand-honey px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-brand-honey/30">
                🫙 {t('hero_badge')}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                {t('hero_title_1')}<br />
                <span className="text-brand-honey">{t('hero_title_2')}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/85 mb-3 sm:mb-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t('hero_sub')}
              </p>
              <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                {t('hero_sub2')}
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/collections/classiques"
                  className="bg-brand-amber text-brand-brown px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brand-honey transition-colors inline-flex items-center justify-center touch-target"
                >
                  {t('hero_cta_shop')}
                  <ArrowRight size={20} className={arrowClass} />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center touch-target"
                >
                  {t('hero_cta_about')}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 text-xs sm:text-sm text-white/80 justify-center lg:justify-start">
                <span className="flex items-center gap-1"><Truck size={16} /> {t('hero_trust_ship')}</span>
                <span className="flex items-center gap-1"><Shield size={16} /> {t('hero_trust_cod')}</span>
                <span className="flex items-center gap-1"><Leaf size={16} /> {t('hero_trust_natural')}</span>
              </div>
            </div>

            {/* Hero visual — visible on tablet+ */}
            <div className="relative max-w-sm mx-auto lg:max-w-none w-full">
              <div className="aspect-square max-h-[280px] sm:max-h-[360px] lg:max-h-none product-jar rounded-2xl sm:rounded-3xl border border-brand-honey/30 flex flex-col items-center justify-center overflow-hidden shadow-2xl mx-auto">
                <Logo variant="gold" size="lg" showTagline className="mx-auto" />
                <p className="text-white/70 text-xs sm:text-sm mt-4 px-4 text-center">{t('hero_jar_sub')}</p>
              </div>
              <div className="absolute -top-2 end-0 sm:-top-4 sm:-end-4 bg-brand-honey text-brand-brown px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                {t('hero_launch')}
              </div>
              <div className="absolute -bottom-2 start-0 sm:-bottom-4 sm:-start-4 bg-white text-brand-brown px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center gap-1">
                <Star size={14} className="text-brand-amber" fill="currentColor" />
                {t('hero_rating')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-2 sm:gap-3 px-1">
                <stat.icon size={20} className="text-brand-amber flex-shrink-0 sm:w-6 sm:h-6" />
                <div className="min-w-0">
                  <p className="font-bold text-brand-ink text-sm sm:text-lg">{stat.number}</p>
                  <p className="text-[10px] sm:text-xs text-brand-muted leading-tight">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-10 sm:py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink mb-3 sm:mb-4 px-2">
              {t('problem_title')}
            </h2>
            <p className="text-brand-muted text-sm sm:text-lg max-w-2xl mx-auto px-2">{t('problem_sub')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-brand-border">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">😤</div>
              <h3 className="font-bold text-lg sm:text-xl text-brand-ink mb-3 sm:mb-4">{t('problem_today')}</h3>
              <ul className="space-y-2 sm:space-y-3 text-brand-muted text-sm sm:text-base">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-terracotta flex-shrink-0">✗</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border-2 border-brand-amber/40">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🫙</div>
              <h3 className="font-bold text-lg sm:text-xl text-brand-ink mb-3 sm:mb-4">{t('solution_title')}</h3>
              <ul className="space-y-2 sm:space-y-3 text-brand-muted text-sm sm:text-base">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-forest flex-shrink-0">✓</span>{s}
                  </li>
                ))}
              </ul>
              <Link href="/collections/classiques" className="mt-4 sm:mt-6 inline-flex items-center text-brand-amber font-semibold text-sm sm:text-base">
                {t('solution_cta')} <ArrowRight size={16} className={arrowClass} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink mb-3">{t('collections_title')}</h2>
            <p className="text-brand-muted text-sm sm:text-lg px-2">{t('collections_sub')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {collections.map(collection => {
              const lc = localizeCollection(collection.id, lang);
              return (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group relative aspect-square product-jar rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-brand-border hover:border-brand-amber touch-manipulation"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl sm:text-5xl group-hover:scale-110 transition-transform">{collection.emoji}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white">
                  <h3 className="font-bold text-xs sm:text-base leading-tight break-words">{lc.name}</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 mt-0.5">{collection.productCount} {t('collections_products')}</p>
                </div>
              </Link>
            );})}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-10 sm:py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-brand-amber/10 text-brand-amber px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              🔥 {t('bestsellers_badge')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink">{t('bestsellers_title')}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {bestsellers.slice(0, 8).map(product => {
              const lp = localizeProduct(product, lang);
              return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-brand-border"
              >
                <div className="aspect-square product-jar relative flex items-center justify-center">
                  <span className="text-3xl sm:text-5xl group-hover:scale-110 transition-transform">{product.emoji}</span>
                  {product.originalPrice && (
                    <div className="absolute top-2 start-2 bg-brand-terracotta text-white px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4">
                  <p className={`text-[10px] sm:text-xs text-brand-amber font-medium mb-0.5 ${cls.title}`}>{lp.marketingName}</p>
                  <h3 className={`font-semibold text-brand-ink text-xs sm:text-sm ${cls.twoLine}`}>{lp.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={`sm:w-3 sm:h-3 ${i < Math.floor(product.rating) ? 'text-brand-honey' : 'text-brand-border'}`} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="font-bold text-brand-ink text-sm">{product.price} MAD</span>
                    {product.originalPrice && <span className="text-xs text-brand-muted line-through">{product.originalPrice}</span>}
                  </div>
                  <div className="mt-2 sm:mt-3 w-full bg-brand-brown text-white py-2 rounded-full text-xs sm:text-sm font-semibold text-center group-hover:bg-brand-amber group-hover:text-brand-brown transition-colors">
                    {t('order_btn')}
                  </div>
                </div>
              </Link>
            );})}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink mb-2">{t('testimonials_title')}</h2>
            <p className="text-brand-muted text-sm sm:text-base">{t('testimonials_sub')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {localizedTestimonials.map(item => (
              <div key={item.id} className="bg-brand-cream rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-brand-border">
                <div className="flex items-center mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < item.rating ? 'text-brand-honey' : 'text-brand-border'} fill={i < item.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className="text-brand-ink text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 break-words">&quot;{item.text}&quot;</p>
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className={`font-semibold text-brand-ink text-xs sm:text-sm ${cls.title}`}>{item.name}</p>
                    <p className={`text-[10px] sm:text-xs text-brand-muted ${cls.title}`}>{item.city}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-brand-forest/10 text-brand-forest px-2 py-1 rounded-full font-medium flex-shrink-0">✓ {t('verified')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-10 sm:py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink mb-8 sm:mb-12 text-center">{t('why_title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: Award, title: t('why_quality_title'), desc: t('why_quality_desc') },
              { icon: Truck, title: t('why_ship_title'), desc: t('why_ship_desc') },
              { icon: Shield, title: t('why_cod_title'), desc: t('why_cod_desc') },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-brand-border">
                <item.icon size={28} className="text-brand-amber mx-auto mb-3 sm:mb-4 sm:w-8 sm:h-8" />
                <h3 className="font-bold text-base sm:text-lg text-brand-ink mb-2">{item.title}</h3>
                <p className="text-brand-muted text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-brown">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 text-center">
          <Logo variant="gold" size="md" className="justify-center mb-6" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">{t('cta_title')}</h2>
          <p className="text-white/80 text-sm sm:text-lg mb-6 sm:mb-8">{t('cta_sub')}</p>
          <Link href="/collections/classiques" className="inline-flex items-center bg-brand-amber text-brand-brown px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brand-honey transition-colors touch-target">
            {t('cta_btn')} <ArrowRight size={20} className={arrowClass} />
          </Link>
        </div>
      </section>
    </div>
  );
}
