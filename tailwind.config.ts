import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        memeYellow: '#ffd21f',
        memeGold: '#f6b800',
        ink: '#050505'
      },
      boxShadow: {
        glow: '0 0 28px rgba(255, 210, 31, 0.45)'
      }
    }
  },
  plugins: []
};
export default config;
