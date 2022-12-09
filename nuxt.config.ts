export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["@/assets/css/custom.css", "@/assets/css/theme.css"],
  build: {
    transpile: ["vue-agile"],
  },
  app:{
    pageTransition:{
      name:"page",
      mode:"out-in"
    },
    layoutTransition:{
      name:"layout",
      mode:"out-in"
    }
  }
  // vite: {
  //   server: {
  //     proxy: { "/api": "http://shop-api.codeyad-project.ir/" },
  //   },
  // },
});
