module.exports = {
  important: '#site',
  purge: [
    '_site/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-footer': '#151515',
        'apl-purple': { DEFAULT: '#6030B2', "b71": "#6739B5" },
        'apl-orange': { DEFAULT: '#ff8200', },
      },
      opacity: {
        '7': '0.07',
      },      
      padding: {
        '18': '4.5rem',
        '38': '9.5rem',
      },
      letterSpacing: {
        semiwide: '0.01rem',
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
