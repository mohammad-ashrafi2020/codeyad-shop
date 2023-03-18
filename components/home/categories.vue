<template>
    <div class="ui-box mb-5">
        <div class="ui-box-title">دسته بندی محصولات</div>
        <div class="ui-box-content">
            <div class="categories-container">
                <base-carousel class="pb-5" :modules="[SwiperNavigation, SwiperPagination]" :navigation="{
                    enabled: true,
                    navigationDisabledClass: '123'
                }" :pagination="{
    enabled: true,
    clickable: true,
    dynamicBullets: true,
    paginationDisabledClass: '123'
}" :slideClass="'category-slide'" :breakpoints="breakpoints"
                    :items="utilStore.categories">
                    <template #item="{ item }">
                        <div class="category-item">
                            <nuxt-link :to="`/search/category-${item.slug}`">
                                <base-image :src="GetCategoryImage(item.imageName)" class="category-img"
                                    :alt="item.title" />
                                <span class="category-title">{{ item.title }}</span>
                            </nuxt-link>
                        </div>
                    </template>
                </base-carousel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUtilStore } from '~~/stores/utilStore';
import { GetCategoryImage } from '~~/utilities/ImageUrls';


const utilStore = useUtilStore();
const breakpoints = ref({
    1200: {
        slidesPerView: 7,
    },
    1090: {
        slidesPerView: 6,
    },
    768: {
        slidesPerView: 5,
    },
    576: {
        slidesPerView: 4,
    },
    480: {
        slidesPerView: 3,
    },
    0: {
        slidesPerView: 2,
    },
});
</script>


<style scoped>
.category-item {
    width: 100%;
}
</style>