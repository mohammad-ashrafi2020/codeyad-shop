<template>
    <div class="simplebar-mask">
        <div class="simplebar-offset" style="left: 0px; bottom: 0px;">
            <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                <div class="simplebar-content" style="padding: 0px;">
                    <div class="listing-products-filter">
                        <ul class="nav nav-pills nav-tabs align-items-center" id="sort-tab" role="tablist">
                            <li class="d-inline-flex align-items-center nav-item me-3 text-muted">
                                <i class="ri-equalizer-line me-2"></i>
                                مرتب سازی بر اساس:
                            </li>
                            <li class="nav-item">
                                <button @click="changeTab(ProductSearchOrderBy.Latest)"
                                    :class="['nav-link', { active: selectedTab == ProductSearchOrderBy.Latest }]">
                                    جدید ترین
                                </button>
                            </li>
                            <li class="nav-item">
                                <button @click="changeTab(ProductSearchOrderBy.Cheapest)"
                                    :class="['nav-link', { active: selectedTab == ProductSearchOrderBy.Cheapest }]">
                                    ارزان ترین
                                </button>
                            </li>
                            <li class="nav-item">
                                <button @click="changeTab(ProductSearchOrderBy.Expensive)"
                                    :class="['nav-link', { active: selectedTab == ProductSearchOrderBy.Expensive }]">
                                    گران ترین
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { ProductSearchOrderBy } from "~~/models/search/ProductSearchResultDto";

const router = useRouter();
const selectedTab: Ref<ProductSearchOrderBy> = ref(ProductSearchOrderBy.Latest);


const changeTab = (orderBy: ProductSearchOrderBy) => {
    selectedTab.value = orderBy;

    var currentPath = router.currentRoute.value.path;
    var queryParams = router.currentRoute.value.query;
    router.push({
        path: currentPath,
        query: { ...queryParams, searchOrderBy: orderBy }
    });
}
</script>

<style>

</style>