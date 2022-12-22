<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#0d6efd" :height="5"/>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useUtilStore } from './stores/utilStore';

const utilStore = useUtilStore();
useAsyncData("categories", () => utilStore.setCategories());

</script>