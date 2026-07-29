'use client';

import { useLanguage } from '@/context/LanguageProvider';
import type { Lang } from '@/lib/translations';

const langs: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'ع' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-full border border-brand-border bg-white/80 backdrop-blur-sm p-0.5 ${
        compact ? 'scale-90 origin-center' : ''
      }`}
      role="group"
      aria-label="Language"
    >
      {langs.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`min-w-[2.25rem] sm:min-w-[2.5rem] h-8 sm:h-9 px-2 rounded-full text-xs sm:text-sm font-bold transition-all touch-manipulation ${
            lang === code
              ? 'bg-brand-amber text-white shadow-sm'
              : 'text-brand-muted hover:text-brand-ink hover:bg-brand-sand/80'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
