/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2997FF',
        gray: {
          DEFAULT: '#86868B',
          100: '#94928D',
          200: '#ZFAFAF',
          300: '#42424570'
        },
        zinc: '@101010'
      }
    },
  },
  plugins: [],
};
