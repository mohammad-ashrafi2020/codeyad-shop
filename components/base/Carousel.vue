<template>
    <Swiper dir="rtl" :wrapperClass="baseClass" :pagination="pagination" :navigation="navigation" :loop="loop" :effect="effect"
        :slidesPerView="itemsToShow" :spaceBetween="spaceBetween" :modules="modules" :breakpoints="breakpoints">
        <SwiperSlide :class="slideClass" v-for="(item, index) in items" :key="index">
            <slot name="item" :item="item" :index="index" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { NavigationOptions, PaginationOptions, SwiperModule, } from 'swiper/types';
withDefaults(defineProps<{
    items: any[],
    breakpoints?: any,
    itemsToShow?: number,
    slideClass?: string,
    baseClass?: string,
    modules: SwiperModule[],
    loop?: boolean,
    navigation?: NavigationOptions,
    pagination?: PaginationOptions,
    spaceBetween?: number
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
}>(), {
    effect: "slide",
    itemsToShow: 1,
    loop: false,
    spaceBetween: 0
});
// defineProps({
//     items: {
//         type: Array,
//         required: true
//     },
//     breakpoints: {
//         type: Object,
//         required: false
//     },
//     itemsToShow: {
//         type: Number,
//         default: 1
//     },
//     slideClass: {
//         type: String,
//         default: null,
//         required: false
//     },
//     baseClass: {
//         type: String,
//         default: null,
//         required: false
//     },
// });
</script>

<style scoped>
.swiper-button-prev::after,
.swiper-button-next:after {
    color: black;
    font-size: 24px;
    font-weight: bold;
}

.swiper-button-prev.disabled,
.swiper-button-next.disabled {
    opacity: .5;
}

.swiper-button-prev,
.swiper-button-next {
    width: 55px;
    height: 55px;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 30px rgb(0 0 0 / 8%);
    box-shadow: 0 0 30px rgb(0 0 0 / 8%);
}

.swiper-button-next {
    left: 1.5rem !important;
    right: unset;
    transform: rotate(180deg);
}

.swiper-button-prev {
    left: unset;
    right: 1.5rem !important;
    transform: rotate(180deg);
}

.slider__pagination {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    bottom: -1rem;
    width: 100%;
    right: 0;
    justify-content: center;
}

.slider__pagination label {
    width: 6px;
    height: 6px;
    background: rgba(0, 0, 0, 0.712);
    border-radius: 50%;
    cursor: pointer;
}

.slider__pagination label.active {
    background: white !important;
    width: 8px !important;
    height: 8px !important;
}
</style>