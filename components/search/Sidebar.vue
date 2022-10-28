<template>
    <div class="col-xl-3 col-lg-4 col-md-5 responsive-sidebar">
        <div class="ui-sticky ui-sticky-top">
            <div class="ui-box sidebar-widgets">
                <div class="widget p-0 mb-3">
                    <div class="widget-content widget--free-shipping">
                        <div class="free-shipping--detail">
                            <div class="title">ارسال رایگان سفارش</div>
                            <div class="subtitle">سفارش‌های بالای ۳۰۰ هزار تومان</div>
                        </div>
                        <div class="free-shipping--banner">
                            <img src="/images/theme/free-shipping--banner.png" alt="ارسال رایگان سفارش">
                        </div>
                    </div>
                </div>
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
                <div class="widget mb-3">
                    <div class="widget-title">جستجو در نتایج:</div>
                    <div class="widget-content widget--search">
                        <div class="form-element-row">
                            <input v-model="searchValue" type="text" @keypress.enter="search" class="form-control"
                                placeholder="نام محصول یا…">
                            <i @keypress.enter="search" class="ri-search-line icon"></i>
                        </div>
                    </div>
                </div>
                <div class="widget widget-collapse mb-3">
                    <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                        data-bs-target="#collapseBrandFilter" aria-expanded="false" aria-controls="collapseBrandFilter"
                        role="button">برند</div>
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
                                                                <span class="text-muted en_text fs-7">Motorola</span>
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
                                                                <span class="text-muted en_text fs-7">Microsoft</span>
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
                                                                <span class="text-muted en_text fs-7">BlackBerry</span>
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
                <div class="widget py-1 mb-3">
                    <div class="widget-content widget--filter-switcher">
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" id="has_jet_delivery">
                            <label class="form-check-label" for="has_jet_delivery">فقط ارسال
                                فوری</label>
                        </div>
                    </div>
                </div>
                <div class="widget py-1 mb-3">
                    <div class="widget-content widget--filter-switcher">
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" id="has_selling_stock">
                            <label class="form-check-label" for="has_selling_stock">فقط کالاهای
                                موجود</label>
                        </div>
                    </div>
                </div>
                <div class="widget widget-collapse mb-3">
                    <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                        data-bs-target="#collapseColorFilter" aria-expanded="false" aria-controls="collapseColorFilter"
                        role="button">رنگ ها</div>
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
                <div class="widget widget-collapse">
                    <div class="widget-title widget-title--collapse-btn" data-bs-toggle="collapse"
                        data-bs-target="#collapsePriceFilter" aria-expanded="false" aria-controls="collapsePriceFilter"
                        role="button">محدوده قیمت</div>
                    <div class="widget-content widget--search fa-num collapse" id="collapsePriceFilter">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSearch } from "~~/composables/useSearch";


const router = useRouter();
const searchUtil = useSearch();

const searchValue = ref("");
const search = () => {
    var currentPath = router.currentRoute.value.path;
    var queryParams = router.currentRoute.value.query;
    router.push({
        path: currentPath,
        query: { ...queryParams, q: searchValue.value }
    });

}

onMounted(() => {
    searchValue.value = searchUtil.getFilterParams().search
})
</script>

<style>

</style>