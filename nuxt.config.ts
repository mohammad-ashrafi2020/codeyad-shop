// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["@/assets/css/custom.css", "@/assets/css/theme.css"],
  build: {
    transpile: ["vue-agile"],
  },
});
