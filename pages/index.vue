<template>
  <div v-if="(pending || data == null)">Loading ...</div>
  <div v-else>
    <home-banner :banners="data.data.banners" :position="BannerPosition.بالای_اسلایدر" />
    <div class="row mb-5">
      <div class="col-lg-8 mb-lg-0 mb-4">
        <home-main-slider :data="data.data.sliders" />
      </div>
      <div class="col-lg-4">
        <home-banner :banners="data.data.banners" :position="BannerPosition.سمت_چپ_اسلایدر" />
      </div>
    </div>
    <div class="row">
      <home-banner :banners="data.data.banners" :position="BannerPosition.زیر_اسلایدر" />
    </div>
    <!-- start of box => specials-product-slider -->
    <home-amazing-products :products="data.data.amazingProducts" />
    <home-categories />
    <!-- end of box => categories-slider -->
    <div class="row mb-5">
      <home-banner :banners="data.data.banners" :position="BannerPosition.وسط_صفحه" />
    </div>
    <home-latest-products :products="data.data.latestProduct" />
  </div>
</template>

<script setup lang="ts">
import { BannerPosition, HomeDataDto } from "~~/models/home/homeDataDto";
import { FetchApi } from "~~/utilities/CustomFechApi";

const nuxtApp = useNuxtApp();
const { data, pending } = useAsyncData(
  "main-page",
  () => FetchApi<HomeDataDto>("/Utilities/MainPageData"), {
  getCachedData: key => nuxtApp.payload.data[key]
}
);
useHead({
  title: "خانه",
})

</script>

<style></style>