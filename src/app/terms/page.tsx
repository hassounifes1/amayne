'use client';

import { getTermsContent } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

export default function TermsPage() {
  const { lang } = useLanguage();
  const c = getTermsContent(lang);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-8 break-words">{c.title}</h1>
        <div className="prose text-brand-muted space-y-4 text-sm leading-relaxed">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-bold text-brand-ink text-base mb-2 break-words">{s.h}</h2>
              <p className="break-words">{s.p}</p>
            </section>
          ))}
          <p className="break-words">{c.updated}</p>
        </div>
      </div>
    </div>
  );
}
