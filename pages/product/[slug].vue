<template>
    <div>
        <nav class="mb-5" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <nuxt-link to="/">خانه</nuxt-link>
                </li>
                <li class="breadcrumb-item">
                    <nuxt-link :to="`/search/category-${result.data.productDto.category.slug}`">{{
                            result.data.productDto.category.title
                    }}</nuxt-link>
                </li>
                <li class="breadcrumb-item" v-if="result.data.productDto.secondarySubCategory">
                    <nuxt-link :to="`/search/category-${result.data.productDto.subCategory.slug}`">{{
                            result.data.productDto.subCategory.title
                    }}</nuxt-link>
                </li>
                <li class="breadcrumb-item" v-else>
                    <p>{{
                            result.data.productDto.subCategory.title
                    }}</p>
                </li>
                <li class="breadcrumb-item" v-if="result.data.productDto.secondarySubCategory">
                    <p>{{
                            result.data.productDto.secondarySubCategory.title
                    }}</p>
                </li>
            </ol>
        </nav>
        <product-main-detail :product-dto="result.data.productDto" :single-product-dto="result.data"
            :inventories="result.data.inventories" />
        <product-sellers :inventories="result.data.inventories" />
        <product-detail :single-product-dto="result.data" />
    </div>
</template>

<script setup lang="ts">
import { GetProductBySlug } from "~~/services/product.service";

const route = useRoute();
const { data: result } = await useAsyncData("single_product", () => GetProductBySlug(route.params.slug.toString()), {
    initialCache: false
});




onMounted(() => {
    setTimeout(() => {
        initZoom();
    }, 500);
})
</script>

<style>

</style>