<template>
    <div class="row">
        <BaseSeoData v-if="filterResult?.data.categoryDto" :seo-data="filterResult.data.categoryDto.seoData">

        </BaseSeoData>
        <template v-else>

            <Head>
                <Title v-if="searchUtil.getFilterParams().search">{{ searchUtil.getFilterParams().search }}</Title>
                <Title v-else>جستوجوی محصولات</Title>
            </Head>
        </template>
        <search-sidebar />
        <div class="col-xl-9 col-lg-8 col-md-7">
            <search-breadcrumb :category="filterResult!.data.categoryDto" />
            <button class="btn btn-primary mb-3 d-md-none toggle-responsive-sidebar">فیلتر پیشرفته
                <i class="ri-equalizer-fill ms-1"></i></button>
            <div class="listing-products">
                <div class="listing-products-header mb-4">
                    <div class="listing-products-filter-container do-simplebar me-sm-4" data-simplebar="init">
                        <div class="simplebar-wrapper" style="margin: 0px;">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <search-order-by-tab />
                            <div class="simplebar-placeholder" style="width: auto; height: 55px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                            <div class="simplebar-scrollbar simplebar-visible"
                                style="width: 0px; display: none; transform: translate3d(173px, 0px, 0px);"></div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                            <div class="simplebar-scrollbar simplebar-visible" style="height: 0px; display: none;">
                            </div>
                        </div>
                    </div>
                    <div class="listing-products-view d-sm-flex d-none">
                        <button @click="productShowType = 0" class="btn btn-outline-light btn-grid-view me-2">
                            <i class="ri-grid-line"></i></button>
                        <button @click="productShowType = 1" class="btn btn-outline-light btn-list-view">
                            <i class="ri-list-check-2"></i></button>
                    </div>
                </div>
                <div class="listing-products-content">
                    <div class="tab-content" id="sort-tabContent">
                        <div class="tab-pane fade show active">
                            <div class="ui-box pt-3 pb-0 px-0 mb-4">
                                <div class="ui-box-content">
                                    <div class="row mx-0">
                                        <div v-for="item in filterResult!.data.data" :key="item.id" :class="['product-card-container mb-4',
                                                { 'col-xl-3 col-lg-4 col-md-6 col-sm-6': productShowType == 0 },
                                                { 'col-lg-6 col-md-12 col-sm-6': productShowType == 1 }]">
                                            <product-card :class="{ 'product-card-horizontal': productShowType == 1 }"
                                                :product="item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <search-pagination :pagination-data="filterResult!.data" />
                </div>
            </div>
            <div class="responsive-sidebar-overlay"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import SeoData from '~~/components/base/SeoData.vue';
import { useSearch } from '~~/composables/useSearch';
import { ProductSearchOrderBy } from '~~/models/search/ProductSearchResultDto';
const search = useSearch();

var route = useRoute();
const productShowType = ref(0);
const searchUtil = useSearch();
const { data: filterResult, refresh, pending } = await useAsyncData("search", () => search.getProducts())

watch(() => route.query, () => {
    refresh();
})

</script>

<style></style>