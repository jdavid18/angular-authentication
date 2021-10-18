module.exports = {
  prefix: 'aa--',
  important: true,
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#5b0fff',
        secondary: '#e8e1f7',
        accent: '#0dbfa9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
