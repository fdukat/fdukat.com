/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f1117',
        primary: '#ffffff',
        secondary: '#b0b9c2',
        brand: '#be88ff',
      },
      backgroundPosition: {
        beforeHoverPosition: '0 100%',
      },
      backgroundSize: {
        beforeHoverSize: '100% 1px',
        afterHoverSize: '100% 100%',
      },
    },
  },
  plugins: [],
};
