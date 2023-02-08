<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#0d6efd" :height="5" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useUtilStore } from './stores/utilStore';
import { useShopCartStore } from './stores/shopCartStore';

const utilStore = useUtilStore();
const shopCartStore = useShopCartStore();

shopCartStore.Init();
useAsyncData("categories", () => utilStore.setCategories());

</script>