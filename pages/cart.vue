<template>
    <div class="row">
        <div class="col-xl-9 col-lg-8">
            <div class="tab-pane py-4 fade active show">
                <div class="ui-box bg-white p-2">
                    <div class="ui-box-content">
                        <CartProductItem v-for="item in shopCartStore.items" :data="item" :key="item.id" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4">
            <div class="ui-sticky ui-sticky-top">
                <div class="checkout-bill ui-box bg-white mb-5">
                    <div class="checkout-bill-row">
                        <div class="checkout-bill-row-label">قیمت کالاها ({{ shopCartStore.getTotalItem() }})</div>
                        <div class="checkout-bill-row-value"><span class="fs-6">{{
                            splitNumber(shopCartStore.getTotalPrice())
                        }}</span> <span class="currency">تومان</span>
                        </div>
                    </div>

                    <div class="checkout-bill-row checkout-bill-note">
                        هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به
                        این مبلغ اضافه خواهد شد
                    </div>
                    <div class="checkout-bill-row checkout-bill-action">
                        <nuxt-link to="/checkout" class="btn btn-block btn-primary">ادامه فرایند خرید</nuxt-link>
                    </div>
                </div>
                <div class="widget p-0">
                    <div class="widget-content widget--free-shipping">
                        <div class="free-shipping--detail">
                            <div class="title">ارسال رایگان سفارش</div>
                            <div class="subtitle">سفارش‌های بالای ۳۰۰ هزار تومان</div>
                        </div>
                        <div class="free-shipping--banner">
                            <img src="/images/theme/free-shipping--banner.png" alt="ارسال رایگان سفارش">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useShopCartStore } from '~~/stores/shopCartStore';
import { splitNumber } from '~~/utilities/numberUtils';



const shopCartStore = useShopCartStore();

</script>