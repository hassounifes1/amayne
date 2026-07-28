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
          amber: '#C8860A',
          'amber-dark': '#A06E08',
          'amber-light': '#E8B84A',
          brown: '#3D2314',
          'brown-light': '#5C3D2E',
          cream: '#FBF6EF',
          sand: '#F0E6D6',
          ink: '#2C1810',
          muted: '#7A6B5D',
          forest: '#4A6741',
          honey: '#E8B84A',
          terracotta: '#B85C38',
          border: '#E5D9C8',
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
