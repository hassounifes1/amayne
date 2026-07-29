'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  isValidLang,
  pageTitles,
  translations,
  type Lang,
  type TranslationKey,
} from '@/lib/translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  dir: 'ltr' | 'rtl';
  /** Avoid Arabic text cut-off in tight UI slots */
  cls: {
    oneLine: string;
    twoLine: string;
    title: string;
  };
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');
  const [mounted, setMounted] = useState(false);

  const setLang = useCallback((next: Lang) => {
    if (!translations[next]) return;
    setLangState(next);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? translations.fr[key] ?? key,
    [lang],
  );

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('amayno_lang');
      if (saved && isValidLang(saved)) setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang === 'ar' ? 'ar' : lang === 'en' ? 'en' : 'fr';
    document.documentElement.dir = dir;
    document.title = pageTitles[lang];
    try {
      localStorage.setItem('amayno_lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir, mounted]);

  const cls = useMemo(
    () => ({
      oneLine: lang === 'ar' ? 'line-clamp-2 break-words leading-snug' : 'line-clamp-1',
      twoLine: lang === 'ar' ? 'line-clamp-3 break-words leading-snug min-h-[2.75rem]' : 'line-clamp-2 min-h-[2rem]',
      title: lang === 'ar' ? 'break-words whitespace-normal leading-snug' : 'truncate',
    }),
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t, dir, cls }), [lang, setLang, t, dir, cls]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
