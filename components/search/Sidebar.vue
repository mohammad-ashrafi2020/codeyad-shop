<template>
    <div class="col-xl-3 col-lg-4 col-md-5 responsive-sidebar">
        <div class="ui-sticky ui-sticky-top">
            <div class="ui-box sidebar-widgets">
                <div class="widget p-0 mb-3">
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
                <div class="widget mb-3 pl-0">
                    <div class="widget-title">دسته‌بندی نتایج</div>
                    <div class="widget-content widget--category-results">
                        <ul>
                            <li class="category--arrow-left" v-for="item in utilStore.categories" :key="item.id">
                                <nuxt-link :class="{ current: item.slug == selectedFilter.categorySlug }"
                                    :to="`/search/category-${item.slug}`">{{ item.title }}</nuxt-link>
                                <ul v-if="item.childs.length > 0">
                                    <li :class="[{ 'category--arrow-down': child.childs.length > 0 }]"
                                        v-for="child in item.childs" :key="child.id">
                                        <nuxt-link
                                            :class="[{ 'no__child': child.childs.length == 0 }, { current: child.slug == selectedFilter.categorySlug }]"
                                            :to="`/search/category-${child.slug}`">{{ child.title }}</nuxt-link>
                                        <ul v-if="child.childs.length">
                                            <li v-for="subItem in child.childs" :key="subItem.id">
                                                <span :class="{ current: subItem.slug == selectedFilter.categorySlug }"
                                                    v-if="subItem.slug == selectedFilter.categorySlug ?? ''">
                                                    {{
                                                            subItem.title
                                                    }}
                                                </span>
                                                <NuxtLink
                                                    :class="['no__child', { current: subItem.slug == selectedFilter.categorySlug }]"
                                                    v-else :to="`/search/category-${subItem.slug}`">
                                                    {{ subItem.title }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="widget mb-3">
                    <div class="widget-title">جستجو در نتایج:</div>
                    <div class="widget-content widget--search">
                        <div class="form-element-row">
                            <input v-model="searchValue" type="text" @keypress.enter="search" class="form-control"
                                placeholder="نام محصول یا…">
                            <i @keypress.enter="search" class="ri-search-line icon"></i>
                        </div>
                    </div>
                </div>
                <div class="widget py-1 mb-3">
                    <div class="widget-content widget--filter-switcher">
                        <div class="form-check form-switch mb-0">
                            <input v-model="justHasDiscount" value="true" class="form-check-input" type="checkbox"
                                id="has_jet_delivery">
                            <label class="form-check-label" for="has_jet_delivery">فقط محصولات تخفیف دار</label>
                        </div>
                    </div>
                </div>
                <div class="widget py-1 mb-3">
                    <div class="widget-content widget--filter-switcher">
                        <div class="form-check form-switch mb-0">
                            <input v-model="onlyAvailableProducts" value="true" class="form-check-input" type="checkbox"
                                id="has_selling_stock">
                            <label class="form-check-label" for="has_selling_stock">فقط کالاهای
                                موجود</label>
                        </div>
                    </div>
                </div>

                <div class="widget widget-collapse">
                    <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                        data-bs-target="#collapsePriceFilter" aria-expanded="false" aria-controls="collapsePriceFilter"
                        role="button">محدوده قیمت</div>
                    <div class="widget-content widget--search fa-num collapse" id="collapsePriceFilter">
                        <base-range-slider :max="17700000" v-model="filterPrice" @value-changed="priceChanged" />
                        <ul class="filter-range mb-4">
                            <li>
                                <input type="text" :value="splitNumber(filterPrice[0])" class="js-slider-range-from"
                                    disabled>
                                <span>تومان</span>
                            </li>
                            <li class="label fw-bold">تا</li>
                            <li>
                                <input type="text" :value="splitNumber(filterPrice[1])" class="js-slider-range-to"
                                    id="skip-value-upper" disabled>
                                <span>تومان</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSearch } from "~~/composables/useSearch";
import { useUtilStore } from "~~/stores/utilStore";
import { splitNumber } from "~~/utilities/numberUtils";


const router = useRouter();
const searchUtil = useSearch();
const utilStore = useUtilStore();
const selectedFilter = searchUtil.getFilterParams();
const onlyAvailableProducts = ref(false);
const justHasDiscount = ref(false);
const filterPrice = ref(['0', '17700000']);

const searchValue = ref("");
const search = () => {
    var currentPath = router.currentRoute.value.path;
    var queryParams = router.currentRoute.value.query;
    router.push({
        path: currentPath,
        query: { ...queryParams, q: searchValue.value }
    });
}

onMounted(() => {
    searchValue.value = selectedFilter.search
    onlyAvailableProducts.value = selectedFilter.onlyAvailableProducts;
    justHasDiscount.value = selectedFilter.justHasDiscount;
    filterPrice.value = [selectedFilter.startPrice, selectedFilter.endPrice]

});
watch(justHasDiscount, (val) => {
    var currentPath = router.currentRoute.value.path;
    var queryParams = router.currentRoute.value.query;
    router.push({
        path: currentPath,
        query: { ...queryParams, justHasDiscount: val.toString() }
    });
});

watch(onlyAvailableProducts, (val) => {
    var currentPath = router.currentRoute.value.path;
    var queryParams = router.currentRoute.value.query;
    router.push({
        path: currentPath,
        query: { ...queryParams, onlyAvailableProducts: val.toString() }
    });
})

const priceChanged = () => {
    var currentPath = router.currentRoute.value.path;
    var queryParams = router.currentRoute.value.query;
    router.push({
        path: currentPath,
        query: { ...queryParams, startPrice: filterPrice.value[0], endPrice: filterPrice.value[1] }
    });
}
</script>

<style scoded>
.no__child::before {
    content: none !important;
}

.current {
    font-weight: bolder !important;
    color: #2962ff !important;
}

.widget--category-results {
    max-height: 200px;
    overflow-y: auto;
}


/* width */
.widget--category-results::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.widget--category-results::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.widget--category-results::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
.widget--category-results::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>