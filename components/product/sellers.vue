<template>
    <div class="ui-box bg-white mb-5" v-if="inventories.length > 1">
        <div class="ui-box-title">لیست فروشندگان این کالا</div>
        <div class="ui-box-content" id="sellers">
            <div class="suppliers-items">
                <div class="suppliers-item" v-for="item in inventories" :key="item.id">
                    <div class="suppliers-item-col suppliers-item-col--info">
                        <div class="suppliers-seller-icon">
                            <img src="/images/seller-logo-small.svg" :alt="item.shopName">
                        </div>
                        <div class="suppliers-seller-info">
                            <div class="suppliers-seller-name fw-bold">{{ item.shopName }}</div>
                        </div>
                    </div>
                    <div class="suppliers-item-col suppliers-item-col--conditions">
                        <div class="suppliers-item-sender">
                            <i class="ri-truck-line"></i>
                            <span class="text-dark">ارسال کدیاد شاپ</span>
                        </div>
                    </div>
                    <div class="suppliers-item-col suppliers-item-col--guarantee">
                        <i class="ri-shield-check-line"></i>
                        <span class="text-dark fa-num">گارانتی 18 ماهه</span>
                    </div>
                    <div class="suppliers-item-col suppliers-item-col--price">
                        <template v-if="item.discountPercentage > 0">
                            <span class="price-now fa-num">{{ splitNumber(item.price - ((item.price *
                                item.discountPercentage) / 100))
                            }}</span>
                            <del class="price-now fa-num text-danger"> {{ splitNumber(item.price) }}</del>
                        </template>
                        <span v-else class="price-now fa-num">{{ splitNumber(item.price) }}</span>

                        <span class="currency"> تومان </span>
                    </div>
                    <div class="suppliers-item-col suppliers-item-col--action">
                        <a href="#" @click="shopCartStore.AddItem({
                            count: 1,
                            creationDate: new Date(),
                            id: 1,
                            inventoryId: item.id,
                            orderId: 0,
                            price: calculatePrice(item),
                            productImageName: productDto.imageName,
                            productSlug: productDto.slug,
                            productTitle: productDto.title,
                            shopName: item.shopName,
                            totalPrice: calculatePrice(item)
                        })" class="btn btn-sm btn-outline-primary fw-bold px-4">افزودن به سبد</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { InventoryDto, ProductDto } from "~~/models/products/singleProductDto";
import { useShopCartStore } from "~~/stores/shopCartStore";
import { splitNumber } from "~~/utilities/numberUtils";

defineProps<{
    inventories: InventoryDto[],
    productDto: ProductDto
}>();


const shopCartStore = useShopCartStore();
const calculatePrice = (inventory: InventoryDto): number => {
    const discount = (inventory.price * inventory.discountPercentage) / 100;

    return inventory.price - discount;
}
</script>

<style></style>