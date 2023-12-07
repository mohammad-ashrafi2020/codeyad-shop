export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-swiper","@nuxt/image",'nuxt-schema-org'],
  // routeRules: {
  //   "/profile": { ssr: false },
  //   "/profile/**": { ssr: false },
  //   "/profile/**/**": { ssr: false },
  // },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }
  },
  css: ["@/assets/css/custom.css", "@/assets/css/theme.css"],
  build: {
    transpile: ["vue-toastification"],
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  image: {
    domains: ["https://shop-api.codeyad-project.ir", "http://localhost:3000"],
    alias: {
      codeyad: "https://shop-api.codeyad-project.ir",
    },
  },
  site: {
    url: 'http://localhost:3000/',
    name: 'کدیاد شاپ',
    defaultLocale:'fa'
  }
});
