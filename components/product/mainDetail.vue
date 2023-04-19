<template>
    <div class="product-detail-container mb-5">
        <div class="row">
            <div class="col-lg-4 col-md-5 mb-md-0 mb-4">
                <div class="ui-sticky ui-sticky-top">
                    <div class="product-gallery">
                        <div class="product-options">
                            <ul>
                                <li>
                                    <a href="#" data-remodal-target="share-modal"><i class="ri-share-forward-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="gallery-img-container">
                            <div class="gallery-img">
                                <base-image :src="GetProductImage(productDto.imageName)" class="zoom-img"
                                    :alt="productDto.title" />
                            </div>
                            <div class="gallery-thumbs" v-if="productDto.images.length ?? 0 > 0">
                                <ul>
                                    <li v-for="(item, index) in productDto.images" :key="index" data-fancybox="gallery-a"
                                        :data-src="GetProductGalleryImageFromDomain(item.imageName)">
                                        <base-image :src="GetProductGalleryImage(item.imageName)" :alt="productDto.title" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="isShowSideBar ? 'col-xl-5 col-lg-4 col-md-7 mb-lg-0 mb-4' : 'col-xl-8 col-lg-8 col-md-7 mb-lg-0 mb-4'">
                <h1 class="product-title">{{ productDto.title }}</h1>
                <div class="product-en mb-3">
                    <span>{{ productDto.slug }}</span>
                </div>
                <div class="product-user-suggestion mb-2">
                    <i class="ri-thumb-up-fill text-success me-1"></i>
                    <span class="fs-7 me-2">{{ singleProductDto.likePercentage }}٪
                        ({{ splitNumber(singleProductDto.likeCount) }} نفر) از خریداران، این کالا را پیشنهاد کرده
                        اند.</span>
                    <span data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند."><i
                            class="ri-information-line"></i></span>
                </div>
                <div class="product-user-meta fa-num mb-4">
                    <span class="product-users-rating">
                        <i class="ri-star-fill icon me-1"></i>
                        <span class="fw-bold me-1">{{ singleProductDto.rate }}</span>
                        <span class="text-muted fs-7">({{ splitNumber(singleProductDto.commentsCount) }})</span>
                    </span>
                </div>
                <base-show-more showText="بیشتر بخوانید" close-text="بستن" v-if="productDto.specifications.length ?? 0 > 0">
                    <div class="product-params">
                        <ul>
                            <li v-for="(item, index) in productDto.specifications.slice(0, 5)" :key="index">
                                <span class="label">{{ item.key }} : </span>
                                <span class="title"> {{ item.value }}</span>
                            </li>

                        </ul>
                    </div>
                </base-show-more>

                <div class="widget p-0">
                    <div class="widget-content widget--free-shipping">
                        <div class="free-shipping--detail">
                            <div class="title d-flex align-items-center"><i class="ri-truck-fill me-1"></i>
                                ارسال رایگان سفارش
                            </div>
                            <div class="subtitle">سفارش‌های بالای ۳۰۰ هزار تومان</div>
                        </div>
                        <div class="free-shipping--banner">
                            <img src="/images/theme/free-shipping--banner.png" alt="ارسال رایگان سفارش">
                        </div>
                    </div>
                </div>
                <!-- end of product-detail -->
            </div>
            <div class="col-xl-3 col-lg-4" v-if="isShowSideBar">
                <div class="product-seller-info ui-box" v-if="inventories.length >= 1">
                    <div class="seller-info-changeable">
                        <div class="product-seller-counter" v-if="inventories.length > 1">
                            <span class="label">فروشنده</span>
                            <a href="#sellers" class="anchor-link link border-bottom-0 fs-7 fa-num">{{ inventories.length - 1
                            }}
                                فروشنده
                                دیگر</a>
                        </div>
                        <div class="product-seller-row">
                            <div class="product-seller-row-icon">
                                <img src="/images/seller-logo-small.svg" alt="">
                            </div>
                            <div class="product-seller-row-detail">
                                <div class="product-seller-name mb-1">{{ selectedInventory.shopName }}</div>

                                <a href="#" class="seller-info-link"></a>
                            </div>
                        </div>
                        <div class="product-seller-row">
                            <div class="product-seller-row-icon">
                                <i class="ri-shield-check-fill"></i>
                            </div>
                            <div class="product-seller-row-detail">
                                <div class="product-seller-row-detail-title">گارانتی ۱۸ ماهه</div>
                            </div>
                        </div>
                        <div class="product-seller-row product-seller-row--clickable">
                            <div class="product-seller-row-icon">
                                <i class="ri-checkbox-multiple-fill"></i>
                            </div>
                            <div class="product-seller-row-detail">
                                <div class="product-seller-row-detail-title">موجود در انبار</div>
                                <div class="product-seller-row-detail-subtitle"><i></i> آماده ارسال</div>
                            </div>
                        </div>
                        <div class="product-seller-row product-seller-row--price">
                            <div class="product-seller-row--price-now fa-num">
                                <span class="price" v-if="discount == 0">{{ splitNumber(selectedInventory.price)
                                }}</span>
                                <del class="price text-danger" v-else>{{ splitNumber(selectedInventory.price) }}</del>
                                <span class="currency">تومان</span>
                            </div>
                        </div>
                        <div class="product-seller-row product-seller-row--price"
                            v-if="selectedInventory.discountPercentage > 0">
                            <div class="product-seller-row--price-now fa-num">
                                <span class="price">{{ splitNumber(selectedInventory.price - discount) }}</span>
                                <span class="currency">تومان</span>
                            </div>
                        </div>
                        <div class="product-seller-row product-remaining-in-stock" v-if="selectedInventory.count <= 3">
                            <span>تنها <span class="mx-2">
                                    {{ selectedInventory.count }}</span> عدد در انبار باقیست - پیش
                                از
                                اتمام بخرید</span>
                        </div>
                    </div>
                    <div class="product-seller--add-to-cart">
                        <base-button w-full @click="shopCartStore.AddItem({
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
                        })">
                            افزودن به سبد خرید
                        </base-button>
                    </div>
                </div>
                <div class="product-seller-info ui-box" v-else>
                    <div class="seller-info-changeable">
                        <div class="product-seller-row justify-content-center border-bottom mb-4">
                            <div class="fw-bold fs-6">
                                ناموجود
                            </div>
                        </div>
                        <div class="product-seller-row product-remaining-in-stock text-center">
                            متاسفانه این کالا در حال حاضر موجود نیست. می‌توانید از طریق لیست بالای صفحه، از
                            محصولات مشابه این کالا دیدن نمایید
                        </div>
                    </div>
                    <div class="product-seller--add-to-cart">
                        <a href="#" class="btn btn-primary w-100" data-toast="" data-toast-type="success"
                            data-toast-color="green" data-toast-position="topRight" data-toast-icon="ri-check-fill"
                            data-toast-title="موفق!" data-toast-message="با موفقیت انجام شد!">
                            موجود شد به من اطلاع بده
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { InventoryDto, ProductDto, SingleProductDto } from "~~/models/products/singleProductDto";
import { GetProductGalleryImage, GetProductGalleryImageFromDomain, GetProductImage } from "~~/utilities/ImageUrls";
import orderBy from "lodash/orderBy";
import { splitNumber } from "~~/utilities/numberUtils";
import { useShopCartStore } from "~~/stores/shopCartStore";

const props = defineProps<{
    singleProductDto: SingleProductDto,
    productDto: ProductDto,
    inventories: InventoryDto[],
    isShowSideBar: boolean
}>();

const selectedInventory = orderBy(props.inventories, "price", "asc")[0];
const discount = (selectedInventory.price * selectedInventory.discountPercentage) / 100;
const shopCartStore = useShopCartStore();
</script>

<style></style>