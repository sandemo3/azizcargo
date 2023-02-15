export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aziz-cargo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/azizcargo.png' },
      {rel: 'preconnect' , href:'https://fonts.googleapis.com'},
      {rel: 'preconnect' , href:'https://fonts.gstatic.com'},
      {rel: 'stylesheet' , href:'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap'},
      {rel: 'stylesheet' , href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'},
      {rel: 'stylesheet' , href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'},
      {rel: 'stylesheet' , href:'assets/lib/owlcarousel/assets/owl.carousel.min.css'},
      {rel: 'stylesheet' , href:'assets/lib/lightbox/css/lightbox.min.css'},
      {rel: 'stylesheet' , href:'assets/lib/animate/animate.min.css'},
      {rel: 'stylesheet' , href:'assets/css/bootstrap.min.css'},
      {rel: 'stylesheet' , href:'assets/css/style.css'},
    ],

    script: [
      { src: 'https://code.jquery.com/jquery-3.6.1.min.js',integrity: 'sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=', crossorigin: 'anonymous' , body: true },
      // { src: 'https://code.jquery.com/jquery-3.4.1.min.js', crossorigin: 'anonymous' , body: true },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js' , body: true },
      { src: 'assets/lib/wow/wow.min.js' , body: true },
      { src: 'assets/lib/easing/easing.min.js' , body: true },
      { src: 'assets/lib/waypoints/waypoints.min.js' , body: true },
      { src: 'assets/lib/lightbox/js/lightbox.min.js' , body: true },
      { src: 'assets/lib/isotope/isotope.pkgd.min.js' , body: true },
      // { src: 'assets/lib/owlcarousel/owl.carousel.min.js'},
      // { src: 'assets/lib/counterup/counterup.min.js' , body: true },
      { src: 'assets/js/main.js', body: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/main.js'},
    { src: '~/plugins/vue-tour'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'vue-ssr-carousel/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
}
