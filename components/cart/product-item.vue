<template>
    <div class="cart-items">
        <div class="cart-item">
            <div class="cart-item--thumbnail">
                <nuxt-link :to="`/product/${data.productSlug}`">
                    <base-image :src="GetProductImage(data.productImageName)" :alt="data.productTitle" />
                </nuxt-link>
            </div>
            <div class="cart-item--detail">
                <h2 class="cart-item--title mb-2">
                    <nuxt-link :to="`/product/${data.productSlug}`">{{ data.productTitle }}</nuxt-link>
                </h2>

                <div class="cart-item--data mb-4">
                    <ul>
                        <li><i class="ri-shield-check-fill text-secondary"></i><span>گارانتی
                                اصالت و
                                سلامت فیزیکی
                                کالا</span></li>
                        <li><i class="ri-store-3-fill text-secondary"></i><span>
                                {{ data.shopName }}</span>
                        </li>
                        <li>
                            <i class="ri-checkbox-multiple-fill text-primary"></i><span>موجود
                                در
                                انبار</span>
                        </li>
                    </ul>
                </div>
                <div class="cart-item--price--actions">
                    <div class="cart-item--actions">
                        <div class="num-block fa-num me-3">
                            <div class="num-in">
                                <span class="plus" @click="shopCartStore.IncreaseCount(data.id, 1)"></span>
                                <input type="text" class="in-num" :value="data.count" readonly>
                                <span :class="['minus', { 'dis': data.count == 1 }]"
                                    @click="shopCartStore.DecreaseCount(data.id, 1)"></span>
                            </div>
                        </div>
                        <button class="btn btn-link btn-sm text-secondary" @click="shopCartStore.DeleteItem(data.id)">
                            <i class="ri-delete-bin-5-line me-1"></i>
                            <span>حذف</span>
                        </button>

                    </div>
                    <div class="cart-item--price fa-num">
                        <div class="cart-item--price-now">
                            <span>{{ splitNumber(data.totalPrice ) }}</span>
                            <span class="currency">تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { OrderItemDto } from '~~/models/orders/OrderItemDto';
import { useShopCartStore } from '~~/stores/shopCartStore';
import { GetProductImage } from '~~/utilities/ImageUrls';
import { splitNumber } from '~~/utilities/numberUtils';

defineProps<{
    data: OrderItemDto
}>();


const shopCartStore = useShopCartStore();

</script>