<template>
  <Transition enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div v-if="modelValue" :class="['remodal-wrapper', { 'remodal-is-opened': modelValue }]"
      :style="{ display: modelValue ? 'block' : '' }" @click.self="emit('update:modelValue', false)">
      <div :class="[
        'remodal remodal-lg remodal-is-initialized',
        { 'remodal-is-opened': modelValue },
      ]" tabindex="-1">
        <div class="remodal-header">
          <h5>{{ title }}</h5>
          <button class="remodal-close" @click="emit('update:modelValue', false)"></button>
        </div>
        <div class="remodal-content">
          <slot />
        </div>
        <div class="remodal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: ""
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.remodal-wrapper {
  background: #00000066;
}
</style>