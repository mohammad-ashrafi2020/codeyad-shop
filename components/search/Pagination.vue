<template>
    <div class="row" v-if="paginationData.pageCount>1">
        <div class="col-12">
            <nav class="border-top py-4">
                <ul class="pagination justify-content-center fa-num">
                    <li class="page-item" v-if="paginationData.currentPage > 1">
                        <a @click="changePage(paginationData.currentPage - 1)" class="page-link pointer" href="#"
                            aria-label="Previous">
                            <i class="ri-arrow-right-s-line"></i>
                        </a>
                    </li>
                    <li v-for="item in RangeNumber(paginationData.startPage, paginationData.endPage)" :key="item"
                        :class="['page-item', { active: item == paginationData.currentPage }]">
                        <a @click="changePage(item)" class="page-link">{{ item }}</a>
                    </li>
                    <li class="page-item" v-if="paginationData.currentPage < paginationData.pageCount">
                        <a @click="changePage(paginationData.currentPage + 1)" class="page-link" href="#"
                            aria-label="Next">
                            <i class="ri-arrow-left-s-line"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSearch } from "~~/composables/useSearch";
import { baseFilterResult } from "~~/models/base/baseFilterResult";
import { RangeNumber } from "~~/utilities/objectutils";

const search = useSearch();

defineProps<{
    paginationData: baseFilterResult<any>
}>();

const changePage = async (pageId: number) => {
    await search.changePageId(pageId);
}
</script>

<style>

</style>