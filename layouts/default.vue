<template>
  <div class="page-wrapper">
    <the-main-header />
    <the-mobile-header />
    <main class="page-content">
      <div class="container">
        <slot />
      </div>
    </main>
    <the-footer />
    <base-modal v-model="utilStore.isOpenFastShowProductModal">
      <the-product-section />

      <template #footer>
        <button class="btn btn-sm btn-outline-light px-3 me-2" @click="utilStore.closeProductModal">بستن</button>
        <button @click="showProduct" class="btn btn-sm btn-primary px-3">دیدن محصول</button>
      </template>
    </base-modal>
  </div>
</template>

<script setup lang="ts">
import { useUtilStore } from '~~/stores/utilStore';


const router = useRouter();

const showProduct = async () => {
  await router.push('/product/' + utilStore.product?.productDto.slug)
  utilStore.closeProductModal();
}
const utilStore = useUtilStore();
useHead({
  script: [
    { src: "/js/dependencies/jquery-3.6.0.min.js", body: true },
    { src: "/js/dependencies/bootstrap.bundle.min.js", body: true },
    { src: "/js/dependencies/bootstrap-slider.min.js", body: true },
    { src: "/js/dependencies/jquery.countdown.min.js", body: true },
    { src: "/js/dependencies/jquery.simple.timer.min.js", body: true },
    { src: "/js/dependencies/iziToast.min.js", body: true },
    { src: "/js/dependencies/fancybox.umd.js", body: true },
    { src: "/js/dependencies/nouislider.min.js", body: true },
    { src: "/js/dependencies/wNumb.js", body: true },
    { src: "/js/dependencies/select2.min.js", body: true },
    { src: "/js/dependencies/simplebar.min.js", body: true },
    { src: "/js/dependencies/swiper-bundle.min.js", body: true },
    { src: "/js/dependencies/zoomsl.min.js", body: true },
    { src: "/js/theme.js", body: true },
    { src: "/js/custom.js", body: true },
  ],
});
</script>

<style></style>