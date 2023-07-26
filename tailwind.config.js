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
      keyframes: {
        'jitter': {
          '0%, 100%': {transform: 'translate(0px)'},
          '25%': {transform: 'translate(8px)'},
          '50%': {transform: 'translate(0px)'},
          '75%': {transform: 'translate(8px)'},
        }
      },
      animation: {
        'invalid-input': 'jitter 0.5s'
      }
    },
  },
  plugins: [],
}
