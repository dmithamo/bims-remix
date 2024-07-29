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
        accent: '#FF7F11',
        primary: '#000000',
        secondary: '#fdfdfc',
        background: '#ececd5',
        'background-input': '#cfcfcf',
        error: '#c00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config;
