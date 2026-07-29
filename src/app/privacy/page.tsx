'use client';

import { getPrivacyContent } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const c = getPrivacyContent(lang);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-8 break-words">{c.title}</h1>
        <div className="prose text-brand-muted space-y-4 text-sm leading-relaxed">
          {c.body.map((p, i) => (
            <p key={i} className="break-words">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
