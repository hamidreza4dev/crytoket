module.exports = {
  darkMode: 'class',
  content: ['./dist/**/*.html', './src/**/*.html'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '479px' },
    },
    extend: {
      colors: {
        'primary-violet': '#DA18A3',
        'primary-green': '#00B247',
        'primary-dark': '#24252D',
        gray: {
          DEFAULT: '#888888',
          lighten: '#E3E1E3',
          darken: '#4F4F4F',
        },
        black: {
          DEFAULT: '#1B1A21',
          lighten: '#2D2E36',
          darken: '#24252D',
          sea: '#2A2D3A',
        },
      },
      backgroundImage: {
        'primary-linear': 'linear-gradient(101.12deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%);',
      },
      boxShadow: {
        violent: '0px 8px 50px rgba(235, 20, 132, 0.4)',
      },

      fontSize: {
        // heading
        'heading-1': ['28px', { lineHeight: '42px' }],
        'heading-2': ['24px', { lineHeight: '36px' }],
        'heading-3': ['20px', { lineHeight: '30px' }],
        // paragraph
        'paragraph-1': ['16px', { lineHeight: '26px' }],
        'paragraph-2': ['14px', { lineHeight: '21px' }],
        'paragraph-3': ['12px', { lineHeight: '18px' }],
        'paragraph-4': ['10px', { lineHeight: '15px' }],
      },
    },
  },
  corePlugin: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animatecss')({
      classes: [],
      settings: {},
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
    require('./plugins/tailwind-animation-delay'),
    require('./plugins/tailwind-table-padding'),
  ],
};
