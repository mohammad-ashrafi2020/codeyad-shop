<template>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-5 responsive-sidebar">
            <div class="ui-sticky ui-sticky-top">
                <div class="ui-box sidebar-widgets">
                    <!-- start of widget -->
                    <div class="widget p-0 mb-3">
                        <div class="widget-content widget--free-shipping">
                            <div class="free-shipping--detail">
                                <div class="title">ارسال رایگان سفارش</div>
                                <div class="subtitle">سفارش‌های بالای ۳۰۰ هزار تومان</div>
                            </div>
                            <div class="free-shipping--banner">
                                <img src="/images/theme/free-shipping--banner.png"
                                    alt="ارسال رایگان سفارش">
                            </div>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget mb-3">
                        <div class="widget-title">دسته‌بندی نتایج</div>
                        <div class="widget-content widget--category-results">
                            <ul>
                                <li class="category--arrow-left">
                                    <a href="#">کالای دیجیتال</a>
                                    <ul>
                                        <li class="category--arrow-down">
                                            <a href="#">موبایل</a>
                                            <ul>
                                                <li class="current">گوشی موبایل</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget mb-3">
                        <div class="widget-title">جستجو در نتایج:</div>
                        <div class="widget-content widget--search">
                            <form action="#">
                                <div class="form-element-row">
                                    <input type="text" name="s" class="form-control" placeholder="نام محصول یا…">
                                    <i class="ri-search-line icon"></i>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget widget-collapse mb-3">
                        <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                            data-bs-target="#collapseBrandFilter" aria-expanded="false"
                            aria-controls="collapseBrandFilter" role="button">برند</div>
                        <div class="widget-content widget--search collapse" id="collapseBrandFilter">
                            <form action="#" class="pt-2">
                                <div class="form-element-row">
                                    <input type="text" name="s" class="form-control" placeholder="جستجوی نام برند...">
                                    <i class="ri-search-line icon"></i>
                                </div>
                                <div class="filter-options do-simplebar border-top pt-2 mt-2" data-simplebar="init">
                                    <div class="simplebar-wrapper" style="margin: -8px 0px 0px -10px;">
                                        <div class="simplebar-height-auto-observer-wrapper">
                                            <div class="simplebar-height-auto-observer"></div>
                                        </div>
                                        <div class="simplebar-mask">
                                            <div class="simplebar-offset" style="left: 0px; bottom: 0px;">
                                                <div class="simplebar-content-wrapper"
                                                    style="height: auto; overflow: hidden;">
                                                    <div class="simplebar-content" style="padding: 8px 0px 0px 10px;">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption1">
                                                            <label class="form-check-label d-block" for="brandOption1">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>شیائومی</span>
                                                                    <span class="text-muted en_text fs-7">Xiaomi</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption2">
                                                            <label class="form-check-label d-block" for="brandOption2">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>سامسونگ</span>
                                                                    <span class="text-muted en_text fs-7">Samsung</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption3">
                                                            <label class="form-check-label d-block" for="brandOption3">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>اپل</span>
                                                                    <span class="text-muted en_text fs-7">Apple</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption4">
                                                            <label class="form-check-label d-block" for="brandOption4">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>نوکیا</span>
                                                                    <span class="text-muted en_text fs-7">Nokia</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption5">
                                                            <label class="form-check-label d-block" for="brandOption5">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>هوآوی</span>
                                                                    <span class="text-muted en_text fs-7">Huawei</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption6">
                                                            <label class="form-check-label d-block" for="brandOption6">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>موتورولا</span>
                                                                    <span
                                                                        class="text-muted en_text fs-7">Motorola</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption7">
                                                            <label class="form-check-label d-block" for="brandOption7">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>آنر</span>
                                                                    <span class="text-muted en_text fs-7">Honor</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption8">
                                                            <label class="form-check-label d-block" for="brandOption8">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>ال جی</span>
                                                                    <span class="text-muted en_text fs-7">LG</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption9">
                                                            <label class="form-check-label d-block" for="brandOption9">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>جی پلاس</span>
                                                                    <span class="text-muted en_text fs-7">G Plus</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption10">
                                                            <label class="form-check-label d-block" for="brandOption10">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>مایکروسافت</span>
                                                                    <span
                                                                        class="text-muted en_text fs-7">Microsoft</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="brandOption11">
                                                            <label class="form-check-label d-block" for="brandOption11">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>بلک بری</span>
                                                                    <span
                                                                        class="text-muted en_text fs-7">BlackBerry</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                        <div class="simplebar-scrollbar simplebar-visible"
                                            style="width: 0px; display: none;"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                        <div class="simplebar-scrollbar simplebar-visible"
                                            style="height: 0px; display: none;"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget py-1 mb-3">
                        <div class="widget-content widget--filter-switcher">
                            <div class="d-flex border-bottom pb-1 mb-2">
                                <i class="ri-user-2-fill text-primary me-2"></i>
                                <span class="fs-7">با خرید از کالاهایی با امکان ارسال توسط فروشنده سفارش خود
                                    را
                                    زودتر تحویل بگیرید </span>
                            </div>
                            <div class="form-check form-switch mb-0">
                                <input class="form-check-input" type="checkbox" id="has_ship_by_seller">
                                <label class="form-check-label" for="has_ship_by_seller">امکان ارسال توسط
                                    فروشنده</label>
                            </div>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget py-1 mb-3">
                        <div class="widget-content widget--filter-switcher">
                            <div class="form-check form-switch mb-0">
                                <input class="form-check-input" type="checkbox" id="has_jet_delivery">
                                <label class="form-check-label" for="has_jet_delivery">فقط ارسال
                                    فوری</label>
                            </div>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget py-1 mb-3">
                        <div class="widget-content widget--filter-switcher">
                            <div class="form-check form-switch mb-0">
                                <input class="form-check-input" type="checkbox" id="has_selling_stock">
                                <label class="form-check-label" for="has_selling_stock">فقط کالاهای
                                    موجود</label>
                            </div>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget widget-collapse mb-3">
                        <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                            data-bs-target="#collapseColorFilter" aria-expanded="false"
                            aria-controls="collapseColorFilter" role="button">رنگ ها</div>
                        <div class="widget-content widget--search collapse" id="collapseColorFilter">
                            <form action="#" class="pt-2">
                                <div class="form-element-row">
                                    <input type="text" name="s" class="form-control" placeholder="جستجوی نام برند...">
                                    <i class="ri-search-line icon"></i>
                                </div>
                                <div class="filter-options do-simplebar border-top pt-2 mt-2" data-simplebar="init">
                                    <div class="simplebar-wrapper" style="margin: -8px 0px 0px -10px;">
                                        <div class="simplebar-height-auto-observer-wrapper">
                                            <div class="simplebar-height-auto-observer"></div>
                                        </div>
                                        <div class="simplebar-mask">
                                            <div class="simplebar-offset" style="left: 0px; bottom: 0px;">
                                                <div class="simplebar-content-wrapper"
                                                    style="height: auto; overflow: hidden;">
                                                    <div class="simplebar-content" style="padding: 8px 0px 0px 10px;">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption1">
                                                            <label class="form-check-label d-block" for="colorOption1">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>مشکی</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(43,43,43);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption2">
                                                            <label class="form-check-label d-block" for="colorOption2">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>آبی</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(0,0,255);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption3">
                                                            <label class="form-check-label d-block" for="colorOption3">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>سفید</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(255,255,255);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption4">
                                                            <label class="form-check-label d-block" for="colorOption4">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>خاکستری</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(128,128,128);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption5">
                                                            <label class="form-check-label d-block" for="colorOption5">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>سبز</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(0,128,0);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption6">
                                                            <label class="form-check-label d-block" for="colorOption6">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>بنفش</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(128,0,128);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption7">
                                                            <label class="form-check-label d-block" for="colorOption7">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>نقره ای</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(222,222,222);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption8">
                                                            <label class="form-check-label d-block" for="colorOption8">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>طلایی</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(201,146,18);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption9">
                                                            <label class="form-check-label d-block" for="colorOption9">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>آبی تیره</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(76,94,116);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption10">
                                                            <label class="form-check-label d-block" for="colorOption10">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>آبی روشن</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(64,170,255);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="colorOption11">
                                                            <label class="form-check-label d-block" for="colorOption11">
                                                                <span
                                                                    class="d-flex align-items-center justify-content-between">
                                                                    <span>زرد</span>
                                                                    <span class="color-preview"
                                                                        style="background-color: rgb(255,255,0);"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                        <div class="simplebar-scrollbar simplebar-visible"
                                            style="width: 0px; display: none;"></div>
                                    </div>
                                    <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                        <div class="simplebar-scrollbar simplebar-visible"
                                            style="height: 0px; display: none;"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- end of widget -->
                    <!-- start of widget -->
                    <div class="widget widget-collapse">
                        <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                            data-bs-target="#collapsePriceFilter" aria-expanded="false"
                            aria-controls="collapsePriceFilter" role="button">محدوده قیمت</div>
                        <div class="widget-content widget--search fa-num collapse" id="collapsePriceFilter">
                            <form action="#" class="pt-2">
                                <div class="filter-price">
                                    <div class="filter-slider">
                                        <div id="slider-non-linear-step"
                                            class="price-slider noUi-target noUi-rtl noUi-horizontal">
                                            <div class="noUi-base">
                                                <div class="noUi-connects">
                                                    <div class="noUi-connect"
                                                        style="transform: translate(0%, 0px) scale(1, 1);"></div>
                                                </div>
                                                <div class="noUi-origin"
                                                    style="transform: translate(0%, 0px); z-index: 5;">
                                                    <div class="noUi-handle noUi-handle-lower" data-handle="0"
                                                        tabindex="0" role="slider" aria-orientation="horizontal"
                                                        aria-valuemin="0.0" aria-valuemax="17700000.0"
                                                        aria-valuenow="0.0" aria-valuetext="0">
                                                        <div class="noUi-touch-area"></div>
                                                    </div>
                                                </div>
                                                <div class="noUi-origin"
                                                    style="transform: translate(-1000%, 0px); z-index: 4;">
                                                    <div class="noUi-handle noUi-handle-upper" data-handle="1"
                                                        tabindex="0" role="slider" aria-orientation="horizontal"
                                                        aria-valuemin="0.0" aria-valuemax="17700000.0"
                                                        aria-valuenow="17700000.0" aria-valuetext="17,700,000">
                                                        <div class="noUi-touch-area"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="filter-range mb-4">
                                        <li>
                                            <input type="text" data-value="0" value="0" name="price[min]" data-range="0"
                                                class="js-slider-range-from" id="skip-value-lower" disabled="">
                                            <span>تومان</span>
                                        </li>
                                        <li class="label fw-bold">تا</li>
                                        <li>
                                            <input type="text" data-value="17700000" value="17700000" name="price[max]"
                                                data-range="17700000" class="js-slider-range-to" id="skip-value-upper"
                                                disabled="">
                                            <span>تومان</span>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- end of widget -->
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-lg-8 col-md-7">
            <!-- start of breadcrumb -->
            <nav class="mb-2" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">خانه</a></li>
                    <li class="breadcrumb-item"><a href="#">کالای دیجیتال</a></li>
                    <li class="breadcrumb-item"><a href="#">موبایل</a></li>
                    <li class="breadcrumb-item"><a href="#">گوشی موبایل</a></li>
                </ol>
            </nav>
            <!-- end of breadcrumb -->
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
                                                <!-- start of nav-tabs -->
                                                <ul class="nav nav-pills nav-tabs align-items-center" id="sort-tab"
                                                    role="tablist">
                                                    <li
                                                        class="d-inline-flex align-items-center nav-item me-3 text-muted">
                                                        <i class="ri-equalizer-line me-2"></i>
                                                        مرتب سازی بر اساس:
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id="most-visited-tab"
                                                            data-bs-toggle="tab" data-bs-target="#most-visited"
                                                            type="button" role="tab" aria-controls="most-visited"
                                                            aria-selected="true">پربازدید ترین</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="best-selling-tab"
                                                            data-bs-toggle="tab" data-bs-target="#best-selling"
                                                            type="button" role="tab" aria-controls="best-selling"
                                                            aria-selected="false">پرفروش
                                                            ترین</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="most-popular-tab"
                                                            data-bs-toggle="tab" data-bs-target="#most-popular"
                                                            type="button" role="tab" aria-controls="most-popular"
                                                            aria-selected="false">محبوب
                                                            ترین</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="newest-tab" data-bs-toggle="tab"
                                                            data-bs-target="#newest" type="button" role="tab"
                                                            aria-controls="newest" aria-selected="false">جدید
                                                            ترین</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="cheapest-tab" data-bs-toggle="tab"
                                                            data-bs-target="#cheapest" type="button" role="tab"
                                                            aria-controls="cheapest" aria-selected="false">ارزان
                                                            ترین</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="most-expensive-tab"
                                                            data-bs-toggle="tab" data-bs-target="#most-expensive"
                                                            type="button" role="tab" aria-controls="most-expensive"
                                                            aria-selected="false">گران
                                                            ترین</button>
                                                    </li>
                                                </ul>
                                                <!-- end of nav-tabs -->
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
                    <!-- start of listing-products-view -->
                    <div class="listing-products-view d-sm-flex d-none">
                        <button class="btn btn-outline-light btn-grid-view me-2"><i class="ri-grid-line"></i></button>
                        <button class="btn btn-outline-light btn-list-view"><i class="ri-list-check-2"></i></button>
                    </div>
                </div>
                <div class="listing-products-content">
                    <div class="tab-content" id="sort-tabContent">
                        <div class="tab-pane fade show active"  >
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
                    <div class="row">
                        <div class="col-12">
                            <nav class="border-top py-4">
                                <!-- start of pagination -->
                                <ul class="pagination justify-content-center fa-num">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <i class="ri-arrow-right-s-line"></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <i class="ri-arrow-left-s-line"></i>
                                        </a>
                                    </li>
                                </ul>
                                <!-- end of pagination -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="responsive-sidebar-overlay"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>