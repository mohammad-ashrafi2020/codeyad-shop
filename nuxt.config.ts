export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["@/assets/css/custom.css", "@/assets/css/theme.css"],
  build: {
    transpile: ["vue-agile"],
  },
  vite: {
    server: {
      proxy: { "/api": "http://shop-api.codeyad-project.ir/" },
    },
  },
});
