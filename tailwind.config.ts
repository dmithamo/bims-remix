import { type Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
      },
      fontSize: {
        base: '12px',
      },
      colors: {
        primary: '#424141',
        background: '#fff1e5',
        'background-dark': '#eed5c5',
        'background-input': '#f3f3f3',
        'background-input-dark': '#a1a1a1',
        accent: '#f3730c',
        error: '#c00',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: ['light'],
  },
} satisfies Config;
