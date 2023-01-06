<template>
  <button
    :disabled="loading"
    :class="[
      'btn',
      { 'btn-sm': size == 'sm' },
      { 'btn-lg': size == 'lg' },
      { 'w-100': wFull == true },
      outline ? `btn-outline-${color}` : `btn-${color}`,
    ]"
  >
    <div class="spinner-border" role="status" v-if="loading">
      <span class="sr-only"></span>
    </div>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  size: {
    default: "normal",
    type: String,
  },
  wFull: {
    default: false,
    type: Boolean,
  },
  outline: {
    default: false,
    type: Boolean,
  },
  color: {
    default: "primary",
    type: String,
  },
  loading: {
    default: false,
    type: Boolean,
  },
});
</script>

<style scoped>
.spinner-border {
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
button{
  display: flex;
  align-items: center;
}
</style>