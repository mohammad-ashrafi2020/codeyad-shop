<script setup lang="ts">
const slides = ref(Array.from({ length: 10 }, () => {
    return { bg: `rgb(${100}, ${150}, ${160})`, color: 'black' }
}))


const breakpoints = {
    1200: {
        slidesPerView: 5,
    },
    1090: {
        slidesPerView: 4,
    },
    768: {
        slidesPerView: 3,
    },
    576: {
        slidesPerView: 2,
    },
    480: {
        slidesPerView: 1,
    },
};
</script>

<template>
    <BaseCarousel :items="slides" :modules="[]"  style="width: 500px;height: 200px;">
        <template #item="{ item, index }">
            <p :style="`background-color: ${item.bg}; color: ${item.color};height:200px`">
                slide__{{ index }}
            </p>
        </template>
    </BaseCarousel>
</template>

<style>
.test {
    min-width: 100vh;
    width: 100vh;
}
</style>