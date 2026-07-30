'use client';

import { useId } from 'react';

type LogoMarkProps = {
  tagline: string;
  taglineSmall?: boolean;
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
};

/** Brand lockup — 12×10 viewBox, wreath + AMAYNO + tagline. */
export default function LogoMark({ tagline, taglineSmall, variant = 'dark', className = '' }: LogoMarkProps) {
  const rawId = useId().replace(/:/g, '');
  const blue = `amayno-blue-${rawId}`;
  const gold = `gold-shine-${rawId}`;
  const green = `green-shine-${rawId}`;
  const softShadow = `soft-shadow-${rawId}`;
  const textShadow = `text-shadow-${rawId}`;

  const tagSize = taglineSmall ? 4.8 : 5.5;
  const tagY = taglineSmall ? 93 : 92.2;
  const tagFill = variant === 'gold' || variant === 'light' ? '#F7E7A9' : '#2C1810';
  const nameFill = variant === 'gold' || variant === 'light' ? '#FFFFFF' : `url(#${blue})`;

  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block overflow-visible ${className}`}
      role="img"
      aria-label={`AMAYNO — ${tagline || 'Natural Honey & Amlou'}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={blue} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1B2A4A" />
          <stop offset="55%" stopColor="#243B6B" />
          <stop offset="100%" stopColor="#2E5090" />
        </linearGradient>
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E7A9" />
          <stop offset="45%" stopColor="#E8B84A" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={green} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40916C" />
          <stop offset="50%" stopColor="#2D6A4F" />
          <stop offset="100%" stopColor="#1B4332" />
        </linearGradient>
        <filter id={softShadow} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#000" floodOpacity="0.22" />
        </filter>
        <filter id={textShadow} x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter={`url(#${softShadow})`}>
        <path
          d="M8 52 C8 28 34 10 60 10 C86 10 112 28 112 52"
          stroke={`url(#${gold})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M46 14 C52 8 58 8 64 12" stroke={`url(#${gold})`} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M52 11 C58 6 66 8 68 14 C64 16 56 15 52 11Z" fill={`url(#${gold})`} />
        <path d="M64 18 C64 22 62 24 61 27 C60 24 60 21 64 18Z" fill="#E8B84A" />
        <ellipse cx="72" cy="20" rx="3.2" ry="5" transform="rotate(25 72 20)" fill="#C4A574" />
        <ellipse cx="76" cy="24" rx="2.6" ry="4.2" transform="rotate(35 76 24)" fill="#B8956A" />
        <circle cx="98" cy="36" r="3.2" fill={`url(#${gold})`} />
        <rect x="96.8" y="36" width="2.4" height="9" rx="1" fill={`url(#${gold})`} />
      </g>

      <g filter={`url(#${softShadow})`}>
        <path
          d="M8 48 C8 72 34 90 60 90 C86 90 112 72 112 48"
          stroke={`url(#${green})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M34 78 C28 74 26 68 30 64 C36 66 38 72 34 78Z" fill={`url(#${green})`} />
        <path d="M86 78 C92 74 94 68 90 64 C84 66 82 72 86 78Z" fill={`url(#${green})`} />
        <ellipse cx="42" cy="80" rx="2.8" ry="4.5" transform="rotate(-20 42 80)" fill="#C4A574" />
        <ellipse cx="47" cy="83" rx="2.4" ry="3.8" transform="rotate(-10 47 83)" fill="#B8956A" />
        <ellipse cx="73" cy="83" rx="2.6" ry="4" transform="rotate(15 73 83)" fill="#C4A574" />
        <circle cx="22" cy="64" r="3.2" fill={`url(#${green})`} />
        <rect x="20.8" y="55" width="2.4" height="9" rx="1" fill={`url(#${green})`} />
      </g>

      <text
        x="60"
        y="58"
        textAnchor="middle"
        fill={nameFill}
        fontFamily="'DM Sans', Arial, sans-serif"
        fontSize="23.5"
        fontWeight="800"
        letterSpacing="2.5"
        filter={`url(#${textShadow})`}
      >
        AMAYNO
      </text>

      <ellipse cx="38" cy="62.5" rx="1.4" ry="2.2" fill="#E8B84A" />
      <ellipse cx="52" cy="63" rx="1.2" ry="2" fill="#E8B84A" />
      <ellipse cx="78" cy="62.5" rx="1.5" ry="2.4" fill="#E8B84A" />
      <ellipse cx="84" cy="63.2" rx="1.3" ry="2.1" fill="#D4A017" />

      {tagline ? (
        <text
          x="60"
          y={tagY}
          textAnchor="middle"
          fill={tagFill}
          fontFamily="'DM Sans', 'Noto Sans Arabic', Arial, sans-serif"
          fontSize={tagSize}
          fontWeight="600"
          letterSpacing={taglineSmall ? 0.3 : 0.7}
        >
          {tagline.length > 26 ? `${tagline.slice(0, 26)}…` : tagline}
        </text>
      ) : null}
    </svg>
  );
}
