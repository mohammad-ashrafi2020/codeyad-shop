export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-swiper", "@nuxt/image-edge"],
  // routeRules: {
  //   "/profile": { ssr: false },
  //   "/profile/**": { ssr: false },
  //   "/profile/**/**": { ssr: false },
  // },

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
  // vite: {
  //   server: {
  //     proxy: { "/api": "http://shop-api.codeyad-project.ir/" },
  //   },
  // },
});
