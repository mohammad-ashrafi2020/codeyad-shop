<template>
    <div class="ui-box mb-5">
        <div class="ui-box-title">جدید ترین محصولات</div>
        <div class="ui-box-content">
            <base-carousel class="product-swiper-slider" :spaceBetween="10" :modules="[SwiperNavigation, SwiperPagination]"
                :navigation="{
                    enabled: true,
                    navigationDisabledClass: '123'
                }" :pagination="{
    enabled: true,
    clickable: true,
    dynamicBullets: true,
    paginationDisabledClass: '123'
}" :breakpoints="breakpoints" :items="products" slideClass="swiper-slide main-swiper-slide">
                <template #item="{ item }">
                    <ProductCard :product="item" />
                </template>
            </base-carousel>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ProductCardDto } from '~~/models/ProductCard';

const props = defineProps<{
    products: ProductCardDto[]
}>();

const breakpoints = {
    1200: {
        slidesPerView: 5,
    },
    1090: {
        slidesPerView: 4,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    576: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    480: {
        slidesPerView: 1,
        spaceBetween: 8,
    },
};
</script>


<style scoped></style>