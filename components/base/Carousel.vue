<template>
    <Swiper :space-between="spaceBetween" :navigation="navigation" :pagination="pagination" :wrapperClass="baseClass"
        :loop="loop" :autoplay="autoplay" dir="rtl" :effect="effect" :modules="modules" :slides-per-view="itemsToShow"
        :breakpoints="breakpoints">
        <SwiperSlide :class="slideClass" v-for="(item, index) in items" :key="index">
            <slot name="item" :item="item" :index="index" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from "swiper/types";

const props = withDefaults(defineProps<{
    items: any[],
    modules: SwiperModule[]
    breakpoints?: any,
    itemsToShow?: number,
    slideClass?: string,
    baseClass?: string,
    loop?: boolean,
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards',
    autoplay?: AutoplayOptions,
    navigation?: NavigationOptions,
    pagination?: PaginationOptions,
    spaceBetween?: number,
}>(), {
    baseClass: "",
    effect: "slide",
    slideClass: "",
    loop: false,
    itemsToShow: 1,
    spaceBetween: 0
});

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