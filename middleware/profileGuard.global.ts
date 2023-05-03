import { ProductComments } from "~~/.nuxt/components";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.toLocaleLowerCase().startsWith("/profile")) {
    //@ts-ignore
    if (process.client) {
      var token = localStorage.getItem("auth-data");
      if (!token) {
        return navigateTo("/auth/login?returnTo=" + to.path);
      }
    }
  }
});
