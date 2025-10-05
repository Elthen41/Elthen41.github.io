import { type Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const withOpacity = (variable) => ({ opacityValue }) => {
  if (opacityValue === undefined) {
    return `rgb(var(${variable}) / 1)`;
  }
  return `rgb(var(${variable}) / ${opacityValue})`;
};

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,md,mdx}'],
  theme: {
    extend: {
      colors: {
        background: withOpacity('--color-background'),
        foreground: withOpacity('--color-foreground'),
        muted: withOpacity('--color-muted'),
        card: withOpacity('--color-card'),
        accent: '#0ea5e9',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 32px rgba(15, 23, 42, 0.08)',
        'card-dark': '0 20px 40px rgba(2, 6, 23, 0.55)',
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
