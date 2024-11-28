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
        'color-butoon': '#883aed5b',
        'text-color': '#341065',
        'color-white': '#ffff',
        'second-color': '#893AED',
        'color-head': '#e0d6fecc',
        'color-sections': '#e0d6fe40',
        'color-cards': '#e0d6fe',
      },
      screens: {
        '850px': '850px',
        '850pxutil': { max: '850px' },
      },
    },
  },
  plugins: [],
};
