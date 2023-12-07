<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#0d6efd" :height="5" />
      <NuxtPage />
    </NuxtLayout>
    <Transition mode="out-in" name="page">
      <div class="auth__loading" v-if="authStore.loading">
        <div class="content">Loading...</div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { useUtilStore } from './stores/utilStore';
import { useShopCartStore } from './stores/shopCartStore';
import { useAuthStore } from './stores/authStore';

const utilStore = useUtilStore();
const authStore = useAuthStore();
const shopCartStore = useShopCartStore();

shopCartStore.Init();
useAsyncData("categories", () => utilStore.setCategories());

useHead({
  link: [
    { rel: "stylesheet", href: "/css/dependencies.css" },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
});
useSchemaOrg([
  defineWebSite({
    name: "کدیاد شاپ",
    description: "یشسیشسن نشسی نشسی شسنن شسی",
    potentialAction: [
      defineSearchAction({
        target: '/search/?q={search_term_string}'
      })
    ]
  }),
  defineOrganization({
    name: "کدیاد شاپ",
    logo: '/images/logo.svg',
  }),
  defineWebPage()
])
</script>
<style scoped>
.auth__loading {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.459);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

}

.auth__loading .content {
  width: 40%;
  min-height: 100px;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 12px;
  text-align: center;
}
</style>