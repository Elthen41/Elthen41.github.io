import { type Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,md,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fb',
        foreground: '#111827',
        accent: '#0ea5e9',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography()],
} satisfies Config;