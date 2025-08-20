module.exports = {
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        surfaceAlt: 'var(--color-surface-alt)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        accentAlt: 'var(--color-accent-alt)'
      },
      boxShadow: {
        soft: '0 4px 16px -4px rgba(0,0,0,0.15)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
