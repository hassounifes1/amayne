/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#C4616A',
          'rose-dark': '#A84E56',
          'rose-light': '#E8A0A5',
          plum: '#4A2040',
          'plum-light': '#6B3A5E',
          cream: '#FAF7F2',
          blush: '#F5EDE8',
          ink: '#2D2A26',
          muted: '#6B6560',
          gold: '#C9A96E',
          sage: '#7B9E7B',
          coral: '#E8634A',
          border: '#E8E5DF',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'Noto Sans Arabic', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
