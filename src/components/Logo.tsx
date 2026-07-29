'use client';

import { useLanguage } from '@/context/LanguageProvider';

type LogoVariant = 'light' | 'dark' | 'gold';

interface LogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

/** Typographic wordmark — white & gold on dark, brown & gold on light. */
export default function Logo({ variant = 'dark', size = 'md', showTagline = true, className = '' }: LogoProps) {
  const { t, lang } = useLanguage();

  const sizes = {
    sm: {
      name: 'text-[1.05rem] sm:text-xl',
      tag: 'text-[0.5rem] sm:text-[0.5625rem]',
      gap: 'gap-0.5',
    },
    md: {
      name: 'text-xl sm:text-2xl md:text-[1.75rem]',
      tag: 'text-[0.5625rem] sm:text-[0.625rem]',
      gap: 'gap-1',
    },
    lg: {
      name: 'text-3xl sm:text-4xl md:text-[2.75rem] leading-none',
      tag: 'text-[0.625rem] sm:text-[0.6875rem] md:text-xs',
      gap: 'gap-1.5',
    },
  };

  const palette = {
    light: { name: 'text-white', tag: 'text-brand-honey' },
    gold: { name: 'text-white', tag: 'text-brand-honey' },
    dark: { name: 'text-brand-brown', tag: 'text-brand-honey' },
  };

  const nameStyle =
    lang === 'ar'
      ? 'tracking-normal normal-case font-semibold'
      : 'tracking-[0.14em] sm:tracking-[0.16em] uppercase font-semibold';

  const tagStyle =
    lang === 'ar'
      ? 'font-normal normal-case tracking-normal leading-snug'
      : 'font-medium uppercase tracking-[0.2em] sm:tracking-[0.24em] leading-none';

  const s = sizes[size];
  const c = palette[variant];

  return (
    <div className={`inline-flex flex-col justify-center min-w-0 ${s.gap} ${className}`}>
      <span className={`font-display ${nameStyle} leading-none ${s.name} ${c.name}`}>
        AMAYNO
      </span>
      {showTagline && (
        <span className={`${s.tag} ${tagStyle} ${c.tag} break-words max-w-full`}>
          {t('logo_tagline')}
        </span>
      )}
    </div>
  );
}
