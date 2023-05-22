/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      width: {
        '370': '370px',
      },
      height: {
        '668': '668px',
      },
      fontFamily: {
        dela: ['Dela Gothic One'],
        blokletters: ['Blokletters Balpen']
      },
      textColor: {
        'title': '#6633CC',
        'paragraph': '#5E435E',
        'primary': '#DE1E98',
        'third': '#F4F4F4'
      }
    },

    screens: {
      '3xs' : '320px',
      '2xs' : '280px',
      '1xs' : '350px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '15in': '1350px',
      '17in': '1700px'
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'my-theme': {
          primary: '#DE1E98',
          secondary: '#352456',
          third: '#F4F4F4'
        },
        screens: {
          '15in': '1350px'
        },
      },
    ],
  }
}

