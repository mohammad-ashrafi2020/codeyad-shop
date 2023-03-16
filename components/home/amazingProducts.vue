<template>
    <div>
        <div class="ui-box ui-box-specials pb-3 mb-5" style="background-color: #f03426">
            <div class="container">
                <div class="ui-box-title text-white fw-bolder d-sm-none">
                    قبل از اتمام جشنواره خرید کن!
                </div>
                <div class="ui-box-content">
                    <div class="row">
                        <div class="col-lg-3 d-lg-block d-none">
                            <div class="specials-container">
                                <img src="/images/theme/specials.png" class="img-fluid" alt="" />
                                <nuxt-link to="/" class="btn btn-sm btn-outline-light">
                                    مشاهده همه
                                    <i class="ri-arrow-left-fill ms-2"></i>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <base-carousel style="height: 100%;" :spaceBetween="5"
                                :modules="[SwiperPagination, SwiperNavigation]" 
                                :pagination="{
                                    enabled: true,
                                    clickable: true,
                                    dynamicBullets: true,
                                    paginationDisabledClass: '123',
                                    totalClass: 'top-10'
                                }" :navigation="{
    enabled: true,
    navigationDisabledClass: '123'

}" :breakpoints="breakpoints" :items="products" slideClass="swiper-slide main-swiper-slide">
                                <template #item="{ item }">
                                    <ProductCard :product="item" />
                                </template>
                            </base-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProductCardDto } from '~~/models/ProductCard';

const props = defineProps<{
    products: ProductCardDto[]
}>();

const breakpoints = {
    1200: {
        slidesPerView: 4,
    },
    992: {
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

<style >
.ui-box-specials .swiper-button-prev,
.ui-box-specials .swiper-button-next {
    top: 40% !important;
}

.ui-box-specials .swiper-pagination-horizontal {
    top: 90% !important;
    height: fit-content;
    position: absolute;
}
.ui-box-specials .swiper-pagination-bullet-active {
  background: white !important;
}
</style>