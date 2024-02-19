/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        weddingIvory: '#FFFFF0',
        weddingTan: '#E0C2A9',
        weddingMaroon: '#570034',
        weddingGreen: '#638a45',
        weddingGold: '#D4AF37'
      }
      // animation: {
      //   scroll: 'scroll 40s linear infinite',
      // },
      // keyframes: {
      //   scroll: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(calc(-250px * 14))' },
      //   },
      // },
    },
  },
  plugins: [],
}
