<template>
    <div class="product-card">
        <div class="product-thumbnail">
            <nuxt-link :to="url">
                <base-image :src="GetProductImage(product.imageName)" :alt="product.title" />
            </nuxt-link>
        </div>
        <div class="product-card-body">
            <h2 class="product-title">
                <nuxt-link :to="url">{{ product.title }}</nuxt-link>
            </h2>
            <div class="product-price fa-num">
                <div class="d-flex align-items-center" v-if="product.discountPercentage >= 1">
                    <del class="price-old">{{ splitNumber(product.price) }}</del>
                    <span class="discount ms-2">%{{ product.discountPercentage }}</span>
                </div>
                <span class="price-now">{{ splitNumber(product.totalPrice) }}
                    <span class="currency">تومان</span></span>
            </div>
        </div>
        <div class="product-card-footer">
            <div class="d-flex  align-items-center  justify-content-between     border-top  mt-2 py-2">
                <div class="product-actions">
                    <ul>
                        <li>
                            <a href="#" @click="shopCartStore.AddItem({
                                count: 1,
                                creationDate: new Date(),
                                id: 1,
                                inventoryId: product.inventoryId,
                                orderId: 0,
                                price: product.totalPrice,
                                productImageName: product.imageName,
                                productSlug: product.slug,
                                productTitle: product.title,
                                shopName: product.shopName,
                                totalPrice: product.totalPrice * 1
                            })"><i class="ri-shopping-cart-line"></i></a>
                        </li>
                        <li>
                            <a href="#" @click="utilStore.openProductModal(product.slug)" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="مشاهده سریع">
                                <i class="ri-search-line"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="product-rating fa-num">
                    <i class="ri-star-fill star"></i>
                    <strong>{{ product.rate }}</strong>
                    <span>({{ product.commentCount }})</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ProductCardDto } from '~~/models/ProductCard';
import { useShopCartStore } from '~~/stores/shopCartStore';
import { useUtilStore } from '~~/stores/utilStore';
import { GetProductImage } from '~~/utilities/ImageUrls';
import { splitNumber } from '~~/utilities/numberUtils';

const props = defineProps<{
    product: ProductCardDto,
}>();
const utilStore = useUtilStore();
const shopCartStore = useShopCartStore();

const url = `/product/${props.product.slug}`;

</script>