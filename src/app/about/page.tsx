'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAboutContent } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

export default function AboutPage() {
  const { lang, dir } = useLanguage();
  const content = getAboutContent(lang);
  const arrowClass = dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2';

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <span className="text-6xl block text-center mb-6">🫙</span>
        <h1 className="font-display text-4xl font-bold text-brand-ink text-center mb-6 break-words">{content.title}</h1>
        <div className="prose prose-lg max-w-none text-brand-muted space-y-6">
          <p className="text-xl text-brand-ink font-medium text-center leading-relaxed break-words">{content.paragraphs[0]}</p>
          {content.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="break-words leading-relaxed">{p}</p>
          ))}
          {content.missionTitle && content.missionItems && (
            <div className="bg-brand-sand rounded-2xl p-6 border border-brand-border">
              <h2 className="font-bold text-brand-ink text-lg mb-3">{content.missionTitle}</h2>
              <ul className="space-y-2">
                {content.missionItems.map((item, i) => (
                  <li key={i} className="break-words">✓ {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <Link href="/collections/classiques" className="inline-flex items-center bg-brand-amber text-brand-brown px-8 py-4 rounded-full font-bold hover:bg-brand-honey transition-colors">
            {content.cta} <ArrowRight size={20} className={arrowClass} />
          </Link>
        </div>
      </div>
    </div>
  );
}
