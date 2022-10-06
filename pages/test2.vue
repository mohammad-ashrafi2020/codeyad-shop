<template>
  <div>
    <div>
      <button>Click</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchApi } from "~~/utilities/CustomFechApi";

onMounted(async () => {
  var res = await FetchApi("/banner");
});
</script>

<style>
</style>