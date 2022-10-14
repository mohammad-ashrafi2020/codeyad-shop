<template>
    <div class="ui-box mb-5">
        <div class="ui-box-title">دسته بندی محصولات</div>
        <div class="ui-box-content">
            <div class="categories-container">
                <!-- Slider main container -->
                <Carousel class="category-swiper-slider" dir="rtl" v-model="currentSlide" :itemsToShow="7"
                    pauseAutoplayOnHover v-if="isShow">
                    <Slide class="swiper-slide" v-for="item in utilStore.categories">
                        <div class="category-item">
                            <nuxt-link to="/">
                                <base-image :src="GetCategoryImage(item.imageName)" class="category-img"
                                    :alt="item.title" />
                                <span class="category-title">{{item.title}}</span>
                            </nuxt-link>
                        </div>
                    </Slide>
                    <template #addons="{ slidesCount }" v-if="slidesCount>7">
                        <div class="slider__navigation">
                            <div v-if="currentSlide>=slidesCount-2" class="swiper-button-next disabled">
                            </div>
                            <div v-else class="swiper-button-next" @click="currentSlide += 1">
                            </div>
                            <div v-if="currentSlide<= 1" class="swiper-button-prev disabled"></div>
                            <div v-else :class="['swiper-button-prev',
                            {'disabled': currentSlide<= 1 }]" @click="currentSlide -= 1"></div>

                        </div>
                        <div class="slider__pagination" v-if="slides > 1">
                            <label v-for="item in slides" :class="{ active: item ==  activeSlide}" :key="item"
                                @click="changeSlide(item)"></label>
                        </div>
                    </template>
                </Carousel>

            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { CategoryDto } from '~~/models/categories/categoryDto';
import { useUtilStore } from '~~/stores/utilStore';
import { Carousel, Slide } from "vue3-carousel";
import { GetCategoryImage } from '~~/utilities/ImageUrls';


const utilStore = useUtilStore();



const currentSlide = ref(1);
const isShow = ref(false);
const slides = Number((utilStore.categories.length / 7).toFixed());
const activeSlide = ref(1);

onMounted(() => {
    setTimeout(() => {
        isShow.value = true;
    }, 500);
});
const changeSlide = (slide: number) => {
    if (slide == 1) {
        currentSlide.value = 1;
        return;
    }
    currentSlide.value = slide * 4;
}
watch(currentSlide, (val) => {
    if (val == 1) {
        activeSlide.value = 1;
        return;
    }
    activeSlide.value = Math.ceil(val / 4);
})

</script>


<style scoped>
.category-item {
    width: 100%;
}

.carousel__slide {
    padding: 0;
    padding-left: 10px;
}

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