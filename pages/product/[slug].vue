<template>
    <h1>{{ $route.params.slug }} - {{ data.data.productDto.title }} {{ data.data.productDto.category.title }}</h1>
</template>

<script setup lang="ts">
import { GetProductBySlug } from "~~/services/product.service";

const route = useRoute();
const { data } = useAsyncData("single_product", () => GetProductBySlug(route.params.slug.toString()));



</script>

<style>

</style>