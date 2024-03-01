// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    app: {
        head :{
            script: [
                { src: 'https://accounts.google.com/gsi/client' }
                /*{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js' },
                { src: '/js/turn.js'}*/
            ]
        }
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        }
    },
    css: [
        '~/assets/css/main.css',
        'animate.css/animate.min.css'
    ],
    modules: [
        'nuxt-icon',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
        //'nuxt-vue3-google-signin'
    ],
    plugins: [
        { src: '~/plugins/axios'}
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    }
    /*googleSignIn: {
        clientId: '762020545207-jec88b818l9tnivtj38su8ekjg2q1svs.apps.googleusercontent.com',
        scope: ['https://www.googleapis.com/auth/drive', 'openid', 'profile', 'email']
    }*/
})
