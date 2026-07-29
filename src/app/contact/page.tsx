'use client';

import { getContactContent } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

export default function ContactPage() {
  const { lang } = useLanguage();
  const c = getContactContent(lang);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <span className="text-6xl block mb-6">💬</span>
        <h1 className="font-display text-4xl font-bold text-brand-ink mb-4 break-words">{c.title}</h1>
        <p className="text-brand-muted mb-8 break-words">{c.sub}</p>
        <a
          href="https://wa.me/212600000000?text=Salam%2C%20j%27ai%20une%20question%20sur%20AMAYNO"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
        >
          {c.btn}
        </a>
        <p className="text-brand-muted text-sm mt-8">{c.email}</p>
      </div>
    </div>
  );
}
