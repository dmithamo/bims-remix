import { type Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
        hand: ['Allison', 'cursive'],
        ops: ['Black Ops One', 'system-ui'],
      },
      fontSize: {
        base: '12px',
      },
      colors: {
        primary: '#33302e',
        background: '#fff1e5',
        'background-dark': '#eed5c5',
        'background-input': '#f3f3f3',
        'background-input-dark': '#a1a1a1',
        accent: '#0d7680',
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
