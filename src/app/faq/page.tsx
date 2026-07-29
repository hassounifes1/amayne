'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getLocalizedFaqs } from '@/lib/localized-content';
import { useLanguage } from '@/context/LanguageProvider';

export default function FAQPage() {
  const { t, lang } = useLanguage();
  const faqs = getLocalizedFaqs(lang);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink text-center mb-4">{t('faq_title')}</h1>
        <p className="text-brand-muted text-center mb-12 break-words">{t('faq_sub')}</p>
        <div className="space-y-8">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="font-bold text-lg text-brand-ink mb-4 break-words">{section.category}</h2>
              <div className="space-y-3">
                {section.questions.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} className="bg-white rounded-xl border border-brand-border overflow-hidden">
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-4 text-start font-medium text-brand-ink hover:bg-brand-sand/50 transition-colors gap-3"
                      >
                        <span className="break-words flex-1">{item.q}</span>
                        <ChevronDown size={20} className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-brand-muted text-sm leading-relaxed break-words">{item.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
