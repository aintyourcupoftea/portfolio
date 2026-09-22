/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hall: {
          DEFAULT: 'rgb(var(--hall) / <alpha-value>)',
          deep: 'rgb(var(--hall-deep) / <alpha-value>)',
        },
        plate: 'rgb(var(--plate) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
        lit: {
          DEFAULT: 'rgb(var(--lit) / <alpha-value>)',
          soft: 'rgb(var(--lit-soft) / <alpha-value>)',
          faint: 'rgb(var(--lit-faint) / <alpha-value>)',
        },
        lamp: {
          DEFAULT: 'rgb(var(--lamp) / <alpha-value>)',
          glow: 'rgb(var(--glow) / <alpha-value>)',
        },
        signal: {
          DEFAULT: 'rgb(var(--signal) / <alpha-value>)',
          ink: 'rgb(var(--signal-ink) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Archivo Variable', 'system-ui', 'sans-serif'],
        mono: ['Sometype Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
      },
      maxWidth: {
        site: '1440px',
      },
      transitionTimingFunction: {
        throw: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
