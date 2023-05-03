<template>
    <div v-if="(result?.data)">
        <BaseSeoData :seo-data="result.data.productDto.seoData" />
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
            :inventories="result.data.inventories" :is-show-side-bar="true" />
        <product-sellers :product-dto="result.data.productDto" :inventories="result.data.inventories" />
        <product-detail :single-product-dto="result.data" />
    </div>
</template>

<script setup lang="ts">
import { GetProductBySlug } from "~~/services/product.service";

const route = useRoute();
const { data: result } = await useAsyncData("single_product", () => GetProductBySlug(route.params.slug.toString()));
if (result.value?.data == null) {
    throw createError({ statusCode: 404, message: 'not found' })
}

onMounted(() => {
    setTimeout(() => {
        initZoom();
    }, 500);
})
</script>

<style></style>