// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: false},
  ssr: true,

  app: {
    head: {
      title: 'OU Tennis Club',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: ''},
        {name: 'format-detection', content: 'telephone=no'},
        {name: 'theme-color', content: '#882214'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: "preconnect", href: 'https://fonts.googleapis.com'},
        {rel: "preconnect", href: 'https://fonts.gstatic.com', crossorigin: ""},
      ],
    }
  },
  components: [{path: '~/components', pathPrefix: false}],

  css: ['@/assets/css/main.css'],

  plugins: [
  ],

  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],

  fonts: {
    defaults: {
      //weights: [300,400,500,700],
      styles: ['normal', 'italic'],
    },
    offline: true, // 禁用在线字体加载
    families: [
      {name: 'Poppins', provider: 'google', weights: [100, 200, 300, 400, 500, 600, 700, 800]},          
      {name: 'Sorts Mill Goudy', provider: 'google', weights: [400]},
      {name: 'Cormorant', provider: 'google', weights: [300, 400, 500, 600, 700]},
    ]
  },

  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  devServer: {
    host: '0.0.0.0'
  },

  nitro: {
    minify: false
  },

  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },

})
