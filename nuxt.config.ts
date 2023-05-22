// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    runtimeConfig: {
        public: {
            //CDN_URL: process.env.CDN_URL
            API_URL: process.env.API_URL
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
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
})
