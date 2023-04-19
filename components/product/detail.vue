<template>
    <div class="row" data-spy="scroll" data-target="#tabs">
        <div class="col-xl-9 col-lg-8">
            <div class="ui-sticky ui-sticky-top mb-4">
                <div class="product-tabs" id="tabs">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="#scrollspyHeading1" data-scroll="scrollspyHeading1">نقد و
                                بررسی</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading3" data-scroll="scrollspyHeading3">مشخصات</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading4" data-scroll="scrollspyHeading4">دیدگاه
                                کاربران</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product-tab-content product-content-expert-summary tab-content border-bottom pb-2 mb-4"
                id="scrollspyHeading1">
                <div class="product-tab-title">
                    <h2>نقد و بررسی اجمالی</h2>
                    <h3 class="subtitle">{{ productDto.title }}</h3>
                </div>
                <base-show-more>
                    <div v-html="productDto.description"></div>
                </base-show-more>
            </div>
            <div class="product-tab-content product-params tab-content border-bottom pb-2 mb-4" id="scrollspyHeading3">
                <div class="product-tab-title">
                    <h2>مشخصات کالا</h2>
                    <h4 class="subtitle">{{ productDto.title }}</h4>
                </div>
                <base-show-more :show-text="' نمایش همه مشخصات کالا '">
                    <div class="params-list">
                        <div class="params-list-title">مشخصات کلی</div>
                        <ul>
                            <li v-for="(item, index) in productDto.specifications" :key="index">
                                <span class="param-title">{{ item.key }}</span>
                                <span class="param-value">{{ item.value }}</span>
                            </li>
                        </ul>
                    </div>
                </base-show-more>
            </div>
            <div class="product-tab-content product-comments tab-content border-bottom pb-2 mb-4" id="scrollspyHeading4">
                <product-comments :single-product-dto="singleProductDto" />
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 d-lg-block d-none">
            <div class="ui-sticky ui-sticky-top">
                <div class="mini-buy-box ui-box bg-transparent p-4">
                    <div class="d-flex border-bottom pb-3 mb-3">
                        <div class="product-thumbnail">
                            <base-image :src="GetProductImage(productDto.imageName)" :alt="productDto.title" />
                        </div>
                        <div class="product-details">
                            <div class="product-title">
                                <h2 v-text="productDto.title"></h2>
                            </div>
                        </div>
                    </div>
                    <div class="product-features" v-if="inventories.length > 0">
                        <div class="d-flex align-items-center mb-2">
                            <i class="ri-store-3-line text-success me-2"></i>
                            <span>{{ selectedInventory.shopName }}</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="ri-shield-check-line text-info me-2"></i>
                            <span>گارانتی ۱۸ ماهه آوات</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="ri-checkbox-multiple-line text-primary me-2"></i>
                            <span>موجود در انبار فروشنده</span>
                        </div>
                    </div>
                    <div class="product-price" v-if="selectedInventory.discountPercentage > 0">
                        <del class="price-value text-danger">{{ splitNumber(selectedInventory.price) }}</del>
                        <span class="currency ms-1">تومان</span>
                    </div>
                    <div class="product-price">
                        <span class="price-value ">{{ splitNumber(selectedInventory.price - discount) }}</span>
                        <span class="currency ms-1">تومان</span>
                    </div>
                    <button @click="shopCartStore.AddItem({
                        count: 1,
                        creationDate: new Date(),
                        id: 1,
                        inventoryId: selectedInventory.id,
                        orderId: 0,
                        price: selectedInventory.price - discount,
                        productImageName: productDto.imageName,
                        productSlug: productDto.slug,
                        productTitle: productDto.title,
                        shopName: selectedInventory.shopName,
                        totalPrice: selectedInventory.price - discount
                    })" class="btn btn-block btn-primary fw-bold">افزودن به
                        سبد خرید</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import orderBy from "lodash/orderBy";
import { InventoryDto, ProductDto, SingleProductDto } from "~~/models/products/singleProductDto";
import { useShopCartStore } from "~~/stores/shopCartStore";
import { GetProductImage } from "~~/utilities/ImageUrls";
import { splitNumber } from "~~/utilities/numberUtils";


const props = defineProps<{
    singleProductDto: SingleProductDto,
}>();

const productDto: ProductDto = props.singleProductDto.productDto;
const inventories: InventoryDto[] = props.singleProductDto.inventories;

const selectedInventory = orderBy(inventories, "price", "asc")[0];
const discount = (selectedInventory.price * selectedInventory.discountPercentage) / 100;
const shopCartStore = useShopCartStore();

onMounted(() => {
    setTimeout(() => {
        spyScroll();
    }, 1000);
})
</script>

<style></style>