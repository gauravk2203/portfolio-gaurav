export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0A0A0A',
        surface:   '#111111',
        border:    '#1F1F1F',
        'border-mid': '#2E2E2E',
        primary:   '#F0EDE8',
        secondary: '#8A8680',
        tertiary:  '#4A4845',
        accent:    '#E8D5B0',
        'accent-dim': '#6B5F45',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        mono:  ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem',  { lineHeight: '1.05' }],
        'h1':      ['3rem',    { lineHeight: '1.1'  }],
        'h2':      ['1.75rem', { lineHeight: '1.2'  }],
        'h3':      ['1.125rem',{ lineHeight: '1.4'  }],
        'body':    ['0.9375rem',{ lineHeight: '1.75' }],
        'small':   ['0.75rem', { lineHeight: '1.6'  }],
      },
      maxWidth: {
        content: '64rem', // 1024px
      },
    },
  },
  plugins: [],
}
