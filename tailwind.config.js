module.exports = {
  purge: [
    '_site/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-footer': '#151515',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
