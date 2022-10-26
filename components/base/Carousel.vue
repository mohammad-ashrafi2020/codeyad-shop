<template>
    <Carousel dir="rtl"  :itemsToShow="itemsToShow" :breakpoints="breakpoints" v-model="currentSlide">
        <Slide :class="slideClass" v-for="(item,index) in items" :key="index">
            <slot name="item" :item="item" :index="index" />
        </Slide>
        <template #addons="{ slidesCount }">
            <div class="slider__navigation" v-if="slidesCount>itemToShoow">
                <div v-if="currentSlide==slidesCount|| (currentSlide>=slidesCount-(itemToShoow-3))" 
                    class="swiper-button-next disabled">
                </div>

                <div v-else class="swiper-button-next" @click="nextSlide">
                </div>

                <div v-if="currentSlide<= 0" class="swiper-button-prev disabled"></div>
                <div v-else class="swiper-button-prev" @click="prevSlide"></div>

            </div>
            <div class="slider__pagination" v-if="slides > 1">
                <label v-for="item in slides" :class="{ active: item ==  activeSlide}" :key="item"
                    @click="changeSlide(item)"></label>
            </div>
        </template>
    </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

const { items, breakpoints={}, itemsToShow = 1, slideClass="", baseClass="" } = defineProps<{
    items: any[],
    breakpoints?: Object,
    itemsToShow?: number,
    slideClass?: string,
    baseClass?: string
}>();

const itemToShoow = ref(itemsToShow);
const currentSlide = ref(1);
const isShow = ref(false);
const slides = computed(() => Math.ceil(Number((items.length / itemToShoow.value))));
const activeSlide = ref(1);

onMounted(() => {
    setTimeout(() => {
        isShow.value = true;
    }, 500);
    onResize();
    if (window.innerWidth <= 500) {
        currentSlide.value = 0;
    }
    window.addEventListener('resize', onResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', onResize);
});
const nextSlide = () => {
    currentSlide.value += 1;
}
const prevSlide = () => {
    currentSlide.value -= 1
}
const changeSlide = (slide: number) => {
    if (slide == 1) {
        currentSlide.value = 1;
        return;
    }
    var res = slide * itemToShoow.value;
    if (res > items.length)
        res = items.length - 1;

    currentSlide.value = res;
}

watch(currentSlide, (val) => {
    if (val == 1) {
        activeSlide.value = 1;
        return;
    }
    activeSlide.value = Math.ceil(val / itemToShoow.value);
});

const onResize = () => {
    getItemShow();
}

function getItemShow(): void {
    const breakpointsArray: number[] = Object.keys(breakpoints)
        .map((key: string): number => Number(key))
        .sort((a: number, b: number) => +b - +a)
    let itmeToShop = {}

    breakpointsArray.some((breakpoint): boolean => {
        const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches
        if (isMatched) {
            itmeToShop = {
                ...breakpoints[breakpoint],
            }
            return true
        }
        return false
    })
    itemToShoow.value = itmeToShop['itemsToShow'];
}

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