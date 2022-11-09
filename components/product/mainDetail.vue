<template>
    <div class="product-detail-container mb-5">
        <div class="row">
            <div class="col-lg-4 col-md-5 mb-md-0 mb-4">
                <div class="ui-sticky ui-sticky-top">
                    <!-- start of product-gallery -->
                    <div class="product-gallery">
                        <div class="product-options">
                            <ul>
                                <li><a href="#"><i class="ri-heart-3-fill"></i></a></li>
                                <li><a href="#" data-remodal-target="share-modal"><i
                                            class="ri-share-forward-fill"></i></a></li>
                                <li><a href="#" data-remodal-target="notification-modal"><i
                                            class="ri-notification-fill"></i></a></li>
                                <li><a href="#"><i class="ri-line-chart-fill"></i></a></li>
                                <li><a href="#"><i class="ri-scales-3-fill"></i></a></li>
                                <li><a href="#"><i class="ri-play-list-add-fill"></i></a></li>
                            </ul>
                        </div>
                        <div class="gallery-img-container">
                            <div class="gallery-img">
                                <base-image :src="GetProductImage(productDto.imageName)" class="zoom-img"
                                    :alt="productDto.title" />
                            </div>
                            <div class="gallery-thumbs" v-if="productDto.images.length ?? 0 > 0">
                                <ul>
                                    <li v-for="(item, index) in productDto.images" :key="index"
                                        data-fancybox="gallery-a" :data-src="GetProductGalleryImage(item.imageName)">
                                        <base-image :src="GetProductGalleryImage(item.imageName)" 
                                            :alt="productDto.title" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-4 col-md-7 mb-lg-0 mb-4">
                <h1 class="product-title">{{ productDto.title }}</h1>
                <div class="product-en mb-3">
                    <span>{{ productDto.slug }}</span>
                </div>
                <div class="product-user-suggestion mb-2">
                    <i class="ri-thumb-up-fill text-success me-1"></i>
                    <span class="fs-7 me-2">۷۹٪ (۱۷۰ نفر) از خریداران، این کالا را پیشنهاد کرده
                        اند.</span>
                    <span data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند."><i
                            class="ri-information-line"></i></span>
                </div>
                <div class="product-user-meta fa-num mb-4">
                    <span class="product-users-rating">
                        <i class="ri-star-fill icon me-1"></i>
                        <span class="fw-bold me-1">4.4</span>
                        <span class="text-muted fs-7">(742)</span>
                    </span>
                    <span class="divider"></span>
                    <a href="#" class="link border-bottom-0 fs-7">۶۳۷ دیدگاه کاربران</a>
                    <span class="divider"></span>
                    <a href="#" class="link border-bottom-0 fs-7">۴۰۵ پرسش و پاسخ</a>
                </div>
                <base-show-more showText="بیشتر بخوانید" close-text="بستن"
                    v-if="productDto.specifications.length ?? 0 > 0">
                    <div class="product-params">
                        <ul>
                            <li v-for="(item, index) in productDto.specifications.slice(0, 5)" :key="index">
                                <span class="label">{{ item.key }} : </span>
                                <span class="title"> {{ item.value }}</span>
                            </li>

                        </ul>
                    </div>
                </base-show-more>
                <div class="product-additional-info-container mb-3">
                    <span class="icon">
                        <i class="ri-information-line"></i>
                    </span>
                    <div class="product-additional-info">
                        <p>هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را
                            گرفته
                            و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود
                            فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06</p>
                        <p>امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در
                            صورتی
                            مورد قبول است که پلمپ کالا باز نشده باشد.</p>
                    </div>
                </div>
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
            <div class="col-xl-3 col-lg-4">
                <!-- start of product-seller-info -->
                <div class="product-seller-info ui-box">
                    <div class="seller-info-changeable">
                        <div class="product-seller-counter">
                            <span class="label">فروشنده</span>
                            <a href="#" class="anchor-link link border-bottom-0 fs-7 fa-num">4
                                فروشنده
                                دیگر</a>
                        </div>
                        <div class="product-seller-row">
                            <div class="product-seller-row-icon">
                                <!-- <i class="ri-store-3-fill"></i> -->
                                <img src="./theme-assets/images/seller-logo-small.svg" alt="">
                            </div>
                            <div class="product-seller-row-detail">
                                <div class="product-seller-name mb-1">یکتاکالا</div>
                                <div class="seller-final-score-container">
                                    <div class="seller-rate-container">
                                        <span class="seller-rate fa-num">۸۸.۴٪</span>
                                        <span class="label">رضایت خریداران</span>
                                        <span class="divider"></span>
                                        <span class="label">عملکرد</span>
                                        <span class="seller-final-score">عالی</span>
                                    </div>
                                </div>
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
                        <div class="product-seller-row">
                            <div class="product-seller-row-icon">
                                <i class="ri-copper-coin-fill text-warning"></i>
                            </div>
                            <div class="product-seller-row-detail">
                                <div class="product-seller-row-detail-title">۱۵۰ امتیاز
                                    در باشگاه مشتریان
                                </div>
                            </div>
                        </div>
                        <div class="product-seller-row product-seller-row--price">
                            <div class="product-seller-row--price-now fa-num">
                                <span class="price">28,250,000</span>
                                <span class="currency">تومان</span>
                            </div>
                        </div>
                        <div class="product-seller-row product-remaining-in-stock">
                            <span>تنها <span class="mx-2">۱</span> عدد در انبار باقیست - پیش از
                                اتمام بخرید</span>
                        </div>
                    </div>
                    <div class="product-seller--add-to-cart">
                        <a href="#" class="btn btn-primary w-100" data-toast data-toast-type="success"
                            data-toast-color="green" data-toast-position="topRight" data-toast-icon="ri-check-fill"
                            data-toast-title="موفق!" data-toast-message="به سبد اضافه شد!">
                            افزودن به سبد خرید
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProductDto } from "~~/models/products/singleProductDto";
import { GetProductGalleryImage, GetProductImage } from "~~/utilities/ImageUrls";

const props = defineProps<{
    productDto: ProductDto
}>();
</script>

<style>

</style>