<template>
    <Transition enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster">
        <div v-if="modelValue" :class="['remodal-wrapper', { 'remodal-is-opened': modelValue }]"
            :style="{ display: modelValue ? 'block' : '' }" @click.self="closeModal">
            <div :class="[
                'remodal remodal-xs remodal-is-initialized',
                { 'remodal-is-opened': modelValue },
            ]" tabindex="-1">
                <div class="remodal-header">
                    <button class="remodal-close" @click="emit('update:modelValue', false)"></button>
                </div>
                <div class="remodal-content">
                    <slot />
                </div>
                <div class="remodal-footer">
                    <button data-remodal-action="cancel" @click="closeModal"
                        class="btn btn-sm btn-outline-light px-3 me-2">{{
                            cancelButtonText
                        }}</button>
                    <BaseButton :loading="loading" @click="emit('confirmed')" color="primary" size="sm" class="px-3">
                        {{ confirmButtonText }}
                    </BaseButton>
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
    confirmButtonText: {
        type: String,
        default: "بله"
    },
    cancelButtonText: {
        type: String,
        default: "خیر"
    },
    loading: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue", "confirmed", "cancled"]);

const closeModal = () => {
    emit('cancled');
    emit('update:modelValue', false)
}
</script>

<style scoped>
.remodal-wrapper {
    background: #00000066;
}
</style>