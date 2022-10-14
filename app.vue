<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useUtilStore } from './stores/utilStore';

const utilStore = useUtilStore();
useAsyncData("categories", () => utilStore.setCategories());

</script>