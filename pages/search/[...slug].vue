<template>
    <div class="row">
        <search-sidebar />
        <div class="col-xl-9 col-lg-8 col-md-7">
            <search-breadcrumb />
            <button class="btn btn-primary mb-3 d-md-none toggle-responsive-sidebar">فیلتر پیشرفته
                <i class="ri-equalizer-fill ms-1"></i></button>
            <div class="listing-products">
                <div class="listing-products-header mb-4">
                    <div class="listing-products-filter-container do-simplebar me-sm-4" data-simplebar="init">
                        <div class="simplebar-wrapper" style="margin: 0px;">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                                <div class="simplebar-offset" style="left: 0px; bottom: 0px;">
                                    <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                                        <div class="simplebar-content" style="padding: 0px;">
                                            <div class="listing-products-filter">
                                                <ul class="nav nav-pills nav-tabs align-items-center" id="sort-tab"
                                                    role="tablist">
                                                    <li
                                                        class="d-inline-flex align-items-center nav-item me-3 text-muted">
                                                        <i class="ri-equalizer-line me-2"></i>
                                                        مرتب سازی بر اساس:
                                                    </li>
                                                    <li class="nav-item">
                                                        <button class="nav-link active">
                                                            جدید ترین
                                                        </button>
                                                    </li>
                                                    <li class="nav-item">
                                                        <button class="nav-link">
                                                            ارزان ترین
                                                        </button>
                                                    </li>
                                                    <li class="nav-item">
                                                        <button class="nav-link">
                                                            گران ترین
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="simplebar-placeholder" style="width: auto; height: 55px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                            <div class="simplebar-scrollbar simplebar-visible"
                                style="width: 0px; display: none; transform: translate3d(173px, 0px, 0px);"></div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                            <div class="simplebar-scrollbar simplebar-visible" style="height: 0px; display: none;">
                            </div>
                        </div>
                    </div>
                    <div class="listing-products-view d-sm-flex d-none">
                        <button class="btn btn-outline-light btn-grid-view me-2"><i class="ri-grid-line"></i></button>
                        <button class="btn btn-outline-light btn-list-view"><i class="ri-list-check-2"></i></button>
                    </div>
                </div>
                <div class="listing-products-content">
                    <div class="tab-content" id="sort-tabContent">
                        <div class="tab-pane fade show active">
                            <div class="ui-box pt-3 pb-0 px-0 mb-4">
                                <div class="ui-box-content">
                                    <div class="row mx-0">
                                        <div class="product-card-container mb-4 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <!-- start of product-card -->
                                            <div class="product-card">
                                                <div class="product-thumbnail">
                                                    <a href="#">
                                                        <img src="./theme-assets/images/products/05.jpg"
                                                            alt="product title">
                                                    </a>
                                                </div>
                                                <div class="product-card-body">
                                                    <h2 class="product-title">
                                                        <a href="#">گوشی موبایل اپل مدل iPhone 12 Pro Max
                                                            A2412 دو
                                                            سیم‌
                                                            کارت
                                                            ظرفیت
                                                            256 گیگابایت</a>
                                                    </h2>
                                                    <div class="product-variant">
                                                        <span class="color" style="background-color: #d4d4d4;"></span>
                                                        <span class="color" style="background-color: #e86841;"></span>
                                                        <span class="color" style="background-color: #b82c32;"></span>
                                                        <span>+</span>
                                                    </div>
                                                    <div class="product-price fa-num">
                                                        <span class="price-now">36,300,000 <span
                                                                class="currency">تومان</span></span>
                                                    </div>
                                                </div>
                                                <div class="product-card-footer">
                                                    <div
                                                        class="d-flex align-items-center justify-content-between border-top mt-2 py-2">
                                                        <div class="product-actions">
                                                            <ul>
                                                                <li><a href="#" data-bs-toggle="tooltip"
                                                                        data-bs-placement="top" title=""
                                                                        data-bs-original-title="افزودن به سبد خرید"
                                                                        aria-label="افزودن به سبد خرید"><i
                                                                            class="ri-shopping-cart-line"></i></a>
                                                                </li>
                                                                <li><a href="#" data-bs-toggle="tooltip"
                                                                        data-bs-placement="top" title=""
                                                                        data-bs-original-title="مشاهده سریع"
                                                                        aria-label="مشاهده سریع"
                                                                        data-remodal-target="quick-view-modal"><i
                                                                            class="ri-search-line"></i></a>
                                                                </li>
                                                                <li><a href="#" data-bs-toggle="tooltip"
                                                                        data-bs-placement="top" title=""
                                                                        data-bs-original-title="افزودن به علاقمندی"
                                                                        aria-label="افزودن به علاقمندی"><i
                                                                            class="ri-heart-3-line"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-rating fa-num">
                                                            <i class="ri-star-fill star"></i>
                                                            <strong>۴.۴</strong>
                                                            <span>(۴۳۶)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end of product-card -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <search-pagination />
                </div>
            </div>
            <div class="responsive-sidebar-overlay"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSearch } from '~~/composables/useSearch';
const search = useSearch();

const { data } = useAsyncData("search", () => search.getProducts())

</script>

<style>

</style>