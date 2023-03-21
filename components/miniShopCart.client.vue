<template>
    <div class="user-option user-option--cart">
        <nuxt-link to="/cart" class="user-option-btn user-option-btn--cart">
            <i class="ri-shopping-bag-2-fill icon"></i>
            <span class="user-item-text">
                <span class="title">سبد خرید شما</span>
                <span class="value fa-num">{{ splitNumber(shopCartStore.getTotalPrice()) }} <span
                        class="currency">تومان</span></span>
            </span>
            <span class="counter">{{ shopCartStore.getTotalItem() }}</span>
        </nuxt-link>
        <div class="mini-cart">
            <div class="mini-cart-header">
                <span class="mini-cart-products-count fa-num">{{ shopCartStore.getTotalItem() }} کالا</span>
                <nuxt-link to="/cart" class="btn btn-link px-0">مشاهده سبد خرید <i
                        class="ri-arrow-left-s-fill"></i></nuxt-link>
            </div>
            <div class="mini-cart-products do-simplebar">
                <div class="mini-cart-product" v-for="item in shopCartStore.items" :key="item.id">
                    <div class="mini-cart-product-thumbnail">
                        <nuxt-link :to="`/product/${item.productSlug}`">
                            <base-image :src="GetProductImage(item.productImageName)" />
                        </nuxt-link>
                    </div>
                    <div class="mini-cart-product-detail">
                        <div class="mini-cart-product-brand">
                            <a href="#">{{ item.shopName }}</a>
                        </div>
                        <div class="mini-cart-product-title">
                            <nuxt-link :to="`/product/${item.productSlug}`">{{ item.productTitle }}</nuxt-link>
                        </div>
                        <div class="mini-cart-purchase-info">
                            <div class="mini-cart-product-meta">
                                <span class="fa-num">{{ item.count }} عدد</span>
                            </div>
                            <div class="mini-cart-product-price fa-num">
                                {{ splitNumber(item.totalPrice) }} <span class="currency">تومان</span>
                            </div>
                        </div>
                        <button class="mini-cart-product-remove" @click="shopCartStore.DeleteItem(item.id)"></button>
                    </div>
                </div>
            </div>
            <div class="mini-cart-footer">
                <div class="mini-cart-total">
                    <span class="mini-cart-total-label">مبلغ قابل پرداخت:</span>
                    <span class="mini-cart-total-value fa-num">{{ splitNumber(shopCartStore.getTotalPrice()) }} <span
                            class="currency">تومان</span></span>
                </div>
                <a href="#" class="btn btn-primary">ورود و ثبت سفارش</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useShopCartStore } from '~~/stores/shopCartStore';
import { GetProductImage } from '~~/utilities/ImageUrls';
import { splitNumber } from '~~/utilities/numberUtils';

const shopCartStore = useShopCartStore();


</script>