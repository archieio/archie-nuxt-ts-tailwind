const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
    container: false
  },

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },

  purge: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],

  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        primary: '#48d1ea'
      },
      maxWidth: {
        '8xl': '1248px'
      },
      height: {
        28: '7rem'
      },
      backgroundImage: _theme => ({
        hero: "url('~assets/shridhar-gupta-d-zx-qn-4-v-ev-2-m-unsplash@2x.png')"
      })
    },
    fontFamily: {
      sans: ['sans-serif'],
      zeroplus: ['Montserrat', 'sans-serif']
    }
  },

  variants: {},

  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    })
  ]
}
