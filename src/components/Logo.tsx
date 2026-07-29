'use client';

import { useLanguage } from '@/context/LanguageProvider';

type LogoVariant = 'light' | 'dark' | 'gold';

interface LogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ variant = 'dark', size = 'md', showTagline = true, className = '' }: LogoProps) {
  const { t } = useLanguage();

  const sizes = {
    sm: { name: 'text-lg sm:text-xl', tag: 'text-[8px] sm:text-[9px]', icon: 'w-7 h-7 sm:w-8 sm:h-8' },
    md: { name: 'text-xl sm:text-2xl md:text-3xl', tag: 'text-[9px] sm:text-[10px]', icon: 'w-9 h-9 sm:w-10 sm:h-10' },
    lg: { name: 'text-3xl sm:text-4xl md:text-5xl', tag: 'text-[10px] sm:text-xs', icon: 'w-12 h-12 sm:w-14 sm:h-14' },
  };

  const colors = {
    light: { name: 'text-white', tag: 'text-brand-honey', sub: 'text-white/70' },
    dark: { name: 'text-brand-brown', tag: 'text-brand-amber', sub: 'text-brand-muted' },
    gold: { name: 'text-brand-honey', tag: 'text-white/90', sub: 'text-white/60' },
  };

  const s = sizes[size];
  const c = colors[variant];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div
        className={`${s.icon} rounded-full flex-shrink-0 flex items-center justify-center border-2 ${
          variant === 'light' || variant === 'gold'
            ? 'border-brand-honey/80 bg-white/10'
            : 'border-brand-honey bg-gradient-to-br from-brand-honey/20 to-brand-amber/30'
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="w-[55%] h-[55%]" fill="none">
          <ellipse cx="16" cy="18" rx="10" ry="11" fill={variant === 'dark' ? '#E8B84A' : '#FFFFFF'} opacity="0.95" />
          <ellipse cx="16" cy="14" rx="8" ry="3" fill={variant === 'dark' ? '#C8860A' : '#E8B84A'} />
          <rect x="14" y="6" width="4" height="5" rx="1" fill={variant === 'dark' ? '#3D2314' : '#FFFFFF'} />
        </svg>
      </div>
      <div className="flex flex-col leading-none min-w-0">
        <span
          className={`font-display font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase ${s.name} ${c.name}`}
        >
          AMAYNO
        </span>
        {showTagline && (
          <span className={`${s.tag} tracking-[0.28em] sm:tracking-[0.35em] uppercase mt-0.5 sm:mt-1 font-medium ${c.tag}`}>
            {t('logo_tagline')}
          </span>
        )}
      </div>
    </div>
  );
}
