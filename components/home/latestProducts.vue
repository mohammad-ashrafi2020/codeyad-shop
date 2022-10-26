<template>
    <div>
        <div class="ui-box mb-5">
            <div class="ui-box-title">جدید ترین محصولات</div>
            <div class="ui-box-content">
                <base-carousel :breakpoints="breakpoints" :items="products" slideClass="swiper-slide main-swiper-slide">
                    <template #item="{item}">
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
        itemsToShow: 5,
    },
    1090: {
        itemsToShow: 4,
    },
    768: {
        itemsToShow: 3,
    },
    576: {
        itemsToShow: 2,
    },
    480: {
        itemsToShow: 1,
    },
};
</script>


<style scoped>

</style>