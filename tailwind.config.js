/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        room: 'rgb(var(--room) / <alpha-value>)',
        console: 'rgb(var(--console) / <alpha-value>)',
        well: 'rgb(var(--well) / <alpha-value>)',
        seam: {
          DEFAULT: 'rgb(var(--seam) / <alpha-value>)',
          strong: 'rgb(var(--seam-strong) / <alpha-value>)',
        },
        lamp: {
          DEFAULT: 'rgb(var(--lamp) / <alpha-value>)',
          soft: 'rgb(var(--lamp-soft) / <alpha-value>)',
          dim: 'rgb(var(--lamp-dim) / <alpha-value>)',
        },
        go: {
          DEFAULT: 'rgb(var(--go) / <alpha-value>)',
          ink: 'rgb(var(--go-ink) / <alpha-value>)',
        },
        legend: 'rgb(var(--legend) / <alpha-value>)',
        fault: 'rgb(var(--fault) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Barlow', 'system-ui', 'sans-serif'],
        mono: ['Martian Mono Variable', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '3px',
        lg: '6px',
      },
      maxWidth: {
        site: '1360px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
