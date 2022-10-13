<template>
    <div class="product-card">
        <div class="product-thumbnail">
            <nuxt-link to="/">
                <base-image :src="GetProductImage(product.imageName)" :alt="product.title" />
            </nuxt-link>
        </div>
        <div class="product-card-body">
            <h2 class="product-title">
                <nuxt-link to="/">{{product.title}}</nuxt-link>
            </h2>
            <div class="product-price fa-num">
                <div class="d-flex align-items-center" v-if="product.discountPercentage>=1">
                    <del class="price-old">{{product.price}}</del>
                    <span class="discount ms-2">%{{product.discountPercentage}}</span>
                </div>
                <span class="price-now">{{product.totalPrice}}
                    <span class="currency">تومان</span></span>
            </div>
        </div>
        <div class="product-card-footer">
            <div class="d-flex  align-items-center  justify-content-between     border-top  mt-2 py-2">
                <div class="product-actions">
                    <ul>
                        <li>
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                data-bs-original-title="افزودن به سبد خرید" aria-label="افزودن به سبد خرید"><i
                                    class="ri-shopping-cart-line"></i></a>
                        </li>
                        <li>
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                data-bs-original-title="مشاهده سریع" aria-label="مشاهده سریع"
                                data-remodal-target="quick-view-modal"><i class="ri-search-line"></i></a>
                        </li>
                        <li>
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                data-bs-original-title="افزودن به علاقمندی" aria-label="افزودن به علاقمندی"><i
                                    class="ri-heart-3-line"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="product-rating fa-num">
                    <i class="ri-star-fill star"></i>
                    <strong>{{product.rate}}</strong>
                    <span>({{product.commentCount}})</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ProductCardDto } from '~~/models/ProductCard';
import { GetProductImage } from '~~/utilities/ImageUrls';

defineProps<{
    product: ProductCardDto
}>();
</script>