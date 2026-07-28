'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-brand-ink text-center mb-4">Questions Fréquentes</h1>
        <p className="text-brand-muted text-center mb-12">Tout ce que tu dois savoir sur AMAYNO et l&apos;amlou.</p>
        <div className="space-y-8">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="font-bold text-lg text-brand-ink mb-4">{section.category}</h2>
              <div className="space-y-3">
                {section.questions.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} className="bg-white rounded-xl border border-brand-border overflow-hidden">
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-4 text-left font-medium text-brand-ink hover:bg-brand-sand/50 transition-colors"
                      >
                        {item.q}
                        <ChevronDown size={20} className={`flex-shrink-0 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-brand-muted text-sm leading-relaxed">{item.a}</div>
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
