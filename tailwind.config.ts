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
        primary: '#000000',
        secondary: '#fdfdfc',
        background: '#f7f6f4',
        'background-input': '#f3f3f3',
        accent: '#fca311',
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
} satisfies Config;
