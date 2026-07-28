'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, MessageCircle } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqs[0]?.category || '');

  const toggle = (key: string) => {
    setOpenIndex(prev => (prev === key ? null : key));
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-ink">Accueil</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand-ink">Questions Fréquentes</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-ink mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-brand-muted text-lg">
            Trouve rapidement les réponses à tes questions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {faqs.map(cat => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.category
                  ? 'bg-brand-rose text-white shadow-md'
                  : 'bg-white text-brand-muted border border-brand-border hover:border-brand-rose hover:text-brand-ink'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs
            .find(c => c.category === activeCategory)
            ?.questions.map((item, i) => {
              const key = `${activeCategory}-${i}`;
              const isOpen = openIndex === key;

              return (
                <div
                  key={key}
                  className="bg-white rounded-xl border border-brand-border overflow-hidden"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-brand-blush/50 transition-colors"
                  >
                    <span className="font-semibold text-brand-ink text-sm pr-4">{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-brand-muted transition-transform flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-sm text-brand-muted leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <div className="bg-brand-plum rounded-2xl p-8 text-white">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-3">
              Tu n&apos;as pas trouvé ta réponse ?
            </h2>
            <p className="text-white/70 mb-6">
              Notre équipe est disponible 7j/7 par WhatsApp pour répondre à toutes tes questions.
            </p>
            <a
              href="https://wa.me/212600000000?text=Bonjour, j'ai une question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-brand-plum px-8 py-3 rounded-full font-bold hover:bg-brand-cream transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Poser une question sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
