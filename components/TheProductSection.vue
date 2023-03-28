<template>
    <div class="product-detail-container">
        <template v-if="utilStore.productLoading">
            <div class="row">
                <div class="col-md-5 mb-md-0 mb-4">
                    <div class="product-gallery">
                        <BaseSkeletonLoading width="100%" height="400"/>
                    </div>
                </div>
                <div class="col-md-7 mb-md-0 mb-4">
                    <BaseSkeletonLoading width="150px" height="10"/>
                    <BaseSkeletonLoading width="100%" height="15" class="mt-2"/>
                    <BaseSkeletonLoading width="100%" height="50px" class="mt-4"/>
                    <BaseSkeletonLoading width="100%" height="200px" class="mt-4"/>
                </div>
            </div>
        </template>
        <div class="row" v-else>
            <product-main-detail :product-dto="utilStore.product!.productDto" :single-product-dto="utilStore.product!"
            :inventories="utilStore.product!.inventories" :is-show-side-bar="false" />
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUtilStore } from '~~/stores/utilStore';


const utilStore = useUtilStore();
</script>