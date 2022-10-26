<template>
    <div class="ui-box mb-5">
        <div class="ui-box-title">دسته بندی محصولات</div>
        <div class="ui-box-content">
            <div class="categories-container">
                <base-carousel :slideClass="'swiper-slide'" :breakpoints="breakpoints" :items="utilStore.categories" >
                    <template #item="{item}">
                        <div class="category-item">
                            <nuxt-link to="/">
                                <base-image :src="GetCategoryImage(item.imageName)" class="category-img"
                                    :alt="item.title" />
                                <span class="category-title">{{item.title}}</span>
                            </nuxt-link>
                        </div>
                    </template>
                </base-carousel>
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
const breakpoints = ref({
    1200: {
        itemsToShow: 7,
    },
    1090: {
        itemsToShow: 6,
    },
    768: {
        itemsToShow: 5,
    },
    576: {
        itemsToShow: 4,
    },
    480: {
        itemsToShow: 3,
    },
    0: {
        itemsToShow: 2,
    },
});


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

</style>