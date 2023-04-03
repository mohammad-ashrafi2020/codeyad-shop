<template>
    <div class="page-wrapper">
        <the-main-header />
        <the-mobile-header />
        <main class="page-content">
            <div class="container">
                <div class="text-center" v-if="error?.statusCode == 404">
                    <div class="fs-5 fw-bold mb-3">چنین صفحه‌ای پیدا نشد</div>
                    <div class="fs-6 fw-bold text-muted mb-4">با عرض پوزش از شما، چنین صفحه‌ای در سایت وجود ندارد یا این
                        صفحه از
                        سایت پاک
                        شده است.</div>
                    <div class="mb-5">
                        <nuxt-link to="/" class="btn btn-primary">برو به صفحه اصلی <i
                                class="ri-arrow-go-forward-line ms-2"></i></nuxt-link>
                    </div>
                    <img src="/images/theme/404.png" class="img-fluid" alt="">
                </div>
                <div class="text-center" v-else>
                    <div class="fs-5 fw-bold mb-3">چنین صفحه‌ای پیدا نشد</div>
                    <div class="fs-6 fw-bold text-muted mb-4">با عرض پوزش از شما، چنین صفحه‌ای در سایت وجود ندارد یا این
                        صفحه از
                        سایت پاک
                        شده است.</div>
                    <div class="mb-5">
                        <nuxt-link to="/" class="btn btn-primary">برو به صفحه اصلی <i
                                class="ri-arrow-go-forward-line ms-2"></i></nuxt-link>
                    </div>
                    <h1>Server Error</h1>
                </div>
            </div>
        </main>
        <the-footer />
    </div>
</template>
<script setup lang="ts">
import { useUtilStore } from './stores/utilStore';
import { useShopCartStore } from './stores/shopCartStore';

const utilStore = useUtilStore();
const shopCartStore = useShopCartStore();

shopCartStore.Init();
useAsyncData("categories", () => utilStore.setCategories());
const props = defineProps({
    error: Object,
});
useHead({
    link: [
        { rel: "stylesheet", href: "/css/dependencies.css" },
        {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
    ],
});
</script>