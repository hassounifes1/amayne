'use client';

import { getShippingContent } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

export default function ShippingReturnsPage() {
  const { lang } = useLanguage();
  const c = getShippingContent(lang);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-8 break-words">{c.title}</h1>
        <div className="space-y-8 text-brand-muted">
          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="font-bold text-lg text-brand-ink mb-4 break-words">{c.shippingTitle}</h2>
            <ul className="space-y-3 text-sm">
              {c.shippingItems.map((item, i) => (
                <li key={i} className="break-words leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="font-bold text-lg text-brand-ink mb-4 break-words">{c.returnsTitle}</h2>
            <ul className="space-y-3 text-sm">
              {c.returnsItems.map((item, i) => (
                <li key={i} className="break-words leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
