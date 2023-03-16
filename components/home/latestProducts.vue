<template>
    <div>
        <div class="ui-box mb-5">
            <div class="ui-box-title">جدید ترین محصولات</div>
            <div class="ui-box-content">
                <base-carousel :itemsToShow="1.5" :modules="[SwiperNavigation, SwiperPagination]" :breakpoints="breakpoints"
                    :items="products" :pagination="{
                        enabled: true,
                        clickable: true,
                        dynamicBullets: true,
                        paginationDisabledClass: '123',
                        totalClass: 'top-10'
                    }" :navigation="{
    enabled: true,
    navigationDisabledClass: '123'

}" :spaceBetween="10">
                    <template #item="{ item }">
                        <ProductCard :product="item" />
                    </template>
                </base-carousel>
            </div>
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
    },
    576: {
        slidesPerView: 2,
    },
    480: {
        slidesPerView: 1,
    },
};
</script>


<style scoped></style>