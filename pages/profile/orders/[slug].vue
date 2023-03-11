<template>
    <div class="ui-box bg-white">
        <template v-if="loading"></template>
        <template v-else-if="order != null">
            <div class="ui-box-title flex-wrap">
                <nuxt-link to="/profile/orders" class="link border-bottom-0 fs-3 me-2"><i class="ri-arrow-right-fill"></i></nuxt-link>
                <span class="me-3">جزئیات سفارش</span>
                <span class="fs-7 fa-num">{{ getPersianDate(order.creationDate, "M/dd/D") }}</span>
                <i class="ri-record-circle-fill fs-7 text-muted mx-2"></i>
                <span class="font-en">{{ order.id }}</span>
            </div>
            <div class="ui-box-content">
                <div class="user-order-items">
                    <div class="user-order-item">
                        <div class="user-order-item-header">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-4 col-md-auto col-sm-6">
                                        <span class="user-order-meta fa-num"><span class="text-muted me-1">گیرنده:</span>
                                            {{ order.address.name }} {{ order.address.family }}</span>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-auto col-sm-6">
                                        <span class="user-order-meta fa-num">{{ getPersianDate(order.lastUpdate, "M/dd/D")
                                        }}</span>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-auto col-sm-6">
                                        <span v-if="order.status == OrderStatus.Finally"
                                            class="user-order-meta text-primary">پرداخت شده</span>
                                        <span v-else-if="order.status == OrderStatus.Pending"
                                            class="user-order-meta text-info">در انتظار پرداخت</span>
                                        <span v-else-if="order.status == OrderStatus.Rejected"
                                            class="user-order-meta  text-danger">لغو شده</span>
                                        <span v-else-if="order.status == OrderStatus.Shipping"
                                            class="user-order-meta  text-success">تحویل داده شده</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span class="text-muted fw-bold">مبلغ کل:</span>
                                <span class="fw-bold fa-num">{{ splitNumber(order.totalPrice) }}
                                    <span>تومان</span></span>
                            </div>
                        </div>
                        <div class="user-order-item-content">
                            <div class="my-3">
                                <span class="text-dark fa-num">مرسوله 1 از 1</span>
                            </div>
                            <div class="cart-items">
                                <div class="cart-item" v-for="item in order.items" :key="item.id">
                                    <div class="cart-item--thumbnail">
                                        <nuxt-link :to="`/product/${item.productSlug}`">
                                            <base-image :src="GetProductImage(item.productImageName)" alt="" />
                                        </nuxt-link>
                                    </div>
                                    <div class="cart-item--detail">
                                        <h2 class="cart-item--title mb-2">
                                            <nuxt-link :to="`/product/${item.productSlug}`">
                                                {{ item.productTitle }}
                                            </nuxt-link>
                                        </h2>

                                        <div class="cart-item--data mb-4">
                                            <ul>
                                                <li>
                                                    <i class="ri-shield-check-fill text-secondary"></i><span>گارانتی
                                                        اصالت و
                                                        سلامت فیزیکی
                                                        کالا</span>
                                                </li>
                                                <li><i class="ri-store-3-fill text-secondary"></i><span>{{ item.shopName }}
                                                    </span>
                                                </li>
                                                <li>
                                                    <i class="ri-checkbox-multiple-fill text-primary"></i><span>{{
                                                        item.count }}</span>
                                                    <span class="text-secondary mx-2">|</span>
                                                    <i class="ri-truck-fill text-danger"></i><span>ارسال
                                                        ({{ order.shippingMethod.shippingType }})</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cart-item--price--actions justify-content-end">
                                            <div class="cart-item--price fa-num d-flex align-items-center flex-wrap">
                                                <div class="cart-item--price-now me-3">
                                                    <span>{{ splitNumber(item.totalPrice) }}</span>
                                                    <span class="currency">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>


<script setup lang="ts">
import { OrderDto, OrderFilterData, OrderFilterResult, OrderStatus } from '~~/models/orders/OrderDto';
import { GetOrderById, GetOrders } from '~~/services/order.service';
import { Ref } from 'vue';
import { getPersianDate } from '~~/utilities/dateUtils';
import { splitNumber } from '~~/utilities/numberUtils';
import { GetProductImage } from '~~/utilities/ImageUrls';

const loading = ref(false);
const order: Ref<OrderDto | null> = ref(null);
const router = useRouter();
definePageMeta({
    layout: "profile"
});

onMounted(async () => {
    var orderId = Number(router.currentRoute.value.params.slug.toString());
    loading.value = true;
    var result = await GetOrderById(orderId);
    if (result.data) {
        order.value = result.data;
    } else {
        router.push('/profile/orders')
    }
    loading.value = false;
})
</script>