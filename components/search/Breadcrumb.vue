<template>
    <nav class="mb-2" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <nuxt-link to="/">خانه</nuxt-link>
            </li>
            <li class="breadcrumb-item">
                <nuxt-link to="/search" v-if="(selectedFilter.search != '') || category != null">
                    جستوجوی
                    محصولات
                </nuxt-link>
                <p v-else>جستوجوی محصولات</p>
            </li>
            <li class="breadcrumb-item" v-if="selectedFilter.search != ''">
                <p>{{ selectedFilter.search }}</p>
            </li>
            <template v-else-if="category">

                <li class="breadcrumb-item">
                    <p>{{ category.title }}</p>
                </li>

            </template>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { useSearch } from "~~/composables/useSearch";
import { CategoryDto } from "~~/models/categories/categoryDto";

const search = useSearch();
const selectedFilter = ref(search.getFilterParams());
const route = useRoute();

if (selectedFilter.value.search == undefined) {
    selectedFilter.value.search = ""
}

defineProps<{
    category: CategoryDto | null
}>()

watch(() => route.query, () => {
    selectedFilter.value = search.getFilterParams();
    if (selectedFilter.value.search == undefined) {
        selectedFilter.value.search = ""
    }
})

</script>

<style>

</style>