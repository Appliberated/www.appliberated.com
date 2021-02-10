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
      width: {
        '68': '19rem',
      },
      maxWidth: {
        'container': '1140px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            code: {
              backgroundColor: theme('colors.gray.200'),
              borderRadius: '4px',
              paddingTop: '2px',
              paddingRight: '4px',
              paddingBottom: '2px',
              paddingLeft: '4px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      }),
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
