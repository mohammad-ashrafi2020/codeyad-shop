<template>
    <div class="row">
        <div class="col-xl-9 col-lg-8">
            <div class="ui-sticky ui-sticky-top mb-4">
                <div class="product-tabs">
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
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading5" data-scroll="scrollspyHeading5">پرسش و
                                پاسخ</a>
                        </li>
                    </ul>
                </div>
                <!-- end of product-tabs -->
            </div>
            <!-- start of product-content-expert-summary -->
            <div class="product-tab-content product-content-expert-summary tab-content border-bottom pb-2 mb-4"
                id="scrollspyHeading1">
                <div class="product-tab-title">
                    <h2>نقد و بررسی اجمالی</h2>
                    <h3 class="subtitle">{{ productDto.title }}</h3>
                </div>
                <base-show-more>
                    <p v-html="productDto.description"></p>
                </base-show-more>
            </div>
            <!-- end of product-content-expert-articles -->
            <!-- start of product-params -->
            <div class="product-tab-content product-params tab-content border-bottom pb-2 mb-4" id="scrollspyHeading3">
                <div class="product-tab-title">
                    <h2>مشخصات کالا</h2>
                    <h3 class="subtitle">Apple iPhone 13 A2634 Dual SIM 128GB And 4GB RAM Mobile Phone</h3>
                </div>
                <div class="expandable-text pt-1" style="height: 540px;">
                    <div class="expandable-text_text fa-num">
                        <!-- start of params-list -->
                        <div class="params-list">
                            <div class="params-list-title">مشخصات کلی</div>
                            <ul>
                                <li>
                                    <span class="param-title">ابعاد</span>
                                    <span class="param-value">159.2x75.1x8.9 میلی‌متر</span>
                                </li>
                                <li>
                                    <span class="param-title">توضیحات سیم کارت</span>
                                    <span class="param-value">سایز نانو (8.8 × 12.3 میلی‌متر)</span>
                                </li>
                                <li>
                                    <span class="param-title">وزن</span>
                                    <span class="param-value">191 گرم</span>
                                </li>
                                <li>
                                    <span class="param-title">ساختار بدنه</span>
                                    <span class="param-value">
                                        <span>قاب جلو ساخته شده از شیشه با پوشش محافظ Gorilla Glass 3</span>
                                        <span>قاب پشتی و فریم ساخته شده از پلاستیک</span>
                                    </span>
                                </li>
                                <li>
                                    <span class="param-title">ویژگی‌های خاص</span>
                                    <span class="param-value">مجهز به حس‌گر اثرانگشت , فبلت , مناسب عکاسی ,
                                        مجهز به حس‌گر تشخیص چهره</span>
                                </li>
                                <li>
                                    <span class="param-title">تعداد سیم کارت</span>
                                    <span class="param-value">دو سیم کارت</span>
                                </li>
                                <li>
                                    <span class="param-title">زمان معرفی</span>
                                    <span class="param-value">25 فوریه 2020</span>
                                </li>
                                <li>
                                    <span class="param-title">شیار مجزا برای کارت حافظه</span>
                                    <span class="param-value">دارد</span>
                                </li>
                                <li>
                                    <span class="param-title">شناسه کالا</span>
                                    <span class="param-value">2800000350215</span>
                                </li>
                            </ul>
                            <div class="params-list-title">پردازنده</div>
                            <ul>
                                <li>
                                    <span class="param-title">تراشه</span>
                                    <span class="param-value">Exynos 9611 (10nm) Chipset</span>
                                </li>
                                <li>
                                    <span class="param-title">پردازنده‌ی مرکزی</span>
                                    <span class="param-value">Quad-core Cortex-A73 + Quad-core Cortex-A53
                                        CPU</span>
                                </li>
                                <li>
                                    <span class="param-title">نوع پردازنده</span>
                                    <span class="param-value">64 بیت</span>
                                </li>
                                <li>
                                    <span class="param-title">فرکانس پردازنده‌ی مرکزی</span>
                                    <span class="param-value">2.3 و 1.7 گیگاهرتز</span>
                                </li>
                                <li>
                                    <span class="param-title">پردازنده‌ی گرافیکی</span>
                                    <span class="param-value">Mali-G72 MP3 GPU</span>
                                </li>
                            </ul>
                        </div>
                        <!-- end of params-list -->
                    </div>
                    <div class="expandable-text-expand-btn justify-content-start text-sm">
                        <span class="show-more active">
                            نمایش همه مشخصات کالا <i class="ri-arrow-down-s-line ms-2"></i>
                        </span>
                        <span class="show-less d-none">
                            فقط نمایش مشخصات کلی کالا <i class="ri-arrow-up-s-line ms-2"></i>
                        </span>
                    </div>
                </div>
            </div>
            <!-- end of product-params -->
            <!-- start of product-comments -->
            <div class="product-tab-content product-comments tab-content border-bottom pb-2 mb-4"
                id="scrollspyHeading4">
                <div class="product-tab-title mb-0">
                    <h2>امتیاز و دیدگاه کاربران</h2>
                    <h3 class="subtitle">Samsung Galaxy M31 SM-M315F/DSN Dual SIM 128GB Mobile Phone</h3>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-5 mb-3">
                        <div class="ui-sticky ui-sticky-top pt-5 z-index-0">
                            <!-- start of comments-sidebar -->
                            <div class="comments-sidebar">
                                <div class="comments-sidebar-rating">
                                    <div class="comments-sidebar-rating-main me-2">۴.۱</div>
                                    <div class="comments-sidebar-rating-desc">از ۵</div>
                                </div>
                                <div class="comments-sidebar-rating-bottom">
                                    <div class="stars-container justify-content-end">
                                        <div class="stars-text ms-2">از مجموع ۹۴۰ امتیاز</div>
                                        <div class="stars">
                                            <div class="stars-val" style="width: 70%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-expert-rating mt-4">
                                    <div class="mb-3">
                                        <div class="content-expert-rating-title">کیفیت ساخت</div>
                                        <div class="content-expert-rating-value-wrapper">
                                            <div class="content-expert-rating-value" style="width: 90%;">
                                            </div>
                                            <div class="content-expert-rating-value-label">۴.۱</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="content-expert-rating-title">ارزش خرید به نسبت قیمت
                                        </div>
                                        <div class="content-expert-rating-value-wrapper">
                                            <div class="content-expert-rating-value" style="width: 90%;">
                                            </div>
                                            <div class="content-expert-rating-value-label">۴.۱</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="content-expert-rating-title">نوآوری</div>
                                        <div class="content-expert-rating-value-wrapper">
                                            <div class="content-expert-rating-value" style="width: 90%;">
                                            </div>
                                            <div class="content-expert-rating-value-label">۴.۱</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="content-expert-rating-title">امکانات و قابلیت ها</div>
                                        <div class="content-expert-rating-value-wrapper">
                                            <div class="content-expert-rating-value" style="width: 90%;">
                                            </div>
                                            <div class="content-expert-rating-value-label">۴.۱</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="content-expert-rating-title">سهولت استفاده</div>
                                        <div class="content-expert-rating-value-wrapper">
                                            <div class="content-expert-rating-value" style="width: 90%;">
                                            </div>
                                            <div class="content-expert-rating-value-label">۴.۱</div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="content-expert-rating-title">طراحی و ظاهر</div>
                                        <div class="content-expert-rating-value-wrapper">
                                            <div class="content-expert-rating-value" style="width: 90%;">
                                            </div>
                                            <div class="content-expert-rating-value-label">۴.۱</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-2">دیدگاه خود را درباره این کالا بیان کنید</div>
                                <button class="btn btn-block btn-outline-primary">افزودن
                                    دیدگاه</button>
                            </div>
                            <!-- end of comments-sidebar -->
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-7 pt-5">
                        <!-- start of filter-comments -->
                        <div class="filter-comments mb-4">
                            <div class="filter-comments-title me-2">
                                <i class="ri-list-settings-fill me-1"></i>
                                <span>مرتب سازی دیدگاه ها بر اساس:</span>
                            </div>
                            <div class="filter-comments-options">
                                <button class="filter-comments-option active">جدیدترین دیدگاه ها</button>
                                <button class="filter-comments-option">مفیدترین دیدگاه ها</button>
                                <button class="filter-comments-option">دیدگاه خریداران</button>
                            </div>
                        </div>
                        <!-- end of filter-comments -->
                        <!-- start of comments -->
                        <div class="comments">
                            <!-- start of comment -->
                            <div class="comment">
                                <div class="comment-header">
                                    <span>۱۵ تیر ۱۴۰۰</span>
                                    <span>امیر محمد اکبرپور</span>
                                </div>
                                <div class="comment-body">
                                    <p>گوشی مناسبی هست نسبت به قیمتش من خودم با ایفون X مقایسه کردم که در
                                        بعضی از برنامه ها عقب میموند بسیار گوشی خوبی هست در کل</p>
                                    <ul>
                                        <li class="comment-evaluation positive">دوربین قوی</li>
                                        <li class="comment-evaluation positive">باتری 6000</li>
                                        <li class="comment-evaluation positive">خوش دست</li>
                                        <li class="comment-evaluation positive">مناسب برای کار های حدودا
                                            سنگین و بالاتر</li>
                                        <li class="comment-evaluation negative">حسگر اثر انگشت کمی ضعیفه
                                        </li>
                                    </ul>
                                </div>
                                <div class="comment-footer">
                                    <span class="me-2">آیا این دیدگاه برایتان مفید بود؟</span>
                                    <button class="comment-like">۷</button>
                                    <button class="comment-dislike">۲</button>
                                </div>
                            </div>
                            <!-- end of comment -->
                            <!-- start of comment -->
                            <div class="comment">
                                <div class="comment-header">
                                    <span>۱۵ تیر ۱۴۰۰</span>
                                    <span>امیر محمد اکبرپور</span>
                                </div>
                                <div class="comment-body">
                                    <p>گوشی مناسبی هست نسبت به قیمتش من خودم با ایفون X مقایسه کردم که در
                                        بعضی از برنامه ها عقب میموند بسیار گوشی خوبی هست در کل</p>
                                    <ul>
                                        <li class="comment-evaluation positive">دوربین قوی</li>
                                        <li class="comment-evaluation positive">باتری 6000</li>
                                        <li class="comment-evaluation positive">خوش دست</li>
                                        <li class="comment-evaluation positive">مناسب برای کار های حدودا
                                            سنگین و بالاتر</li>
                                        <li class="comment-evaluation negative">حسگر اثر انگشت کمی ضعیفه
                                        </li>
                                    </ul>
                                </div>
                                <div class="comment-footer">
                                    <span class="me-2">آیا این دیدگاه برایتان مفید بود؟</span>
                                    <button class="comment-like">۷</button>
                                    <button class="comment-dislike">۲</button>
                                </div>
                            </div>
                            <!-- end of comment -->
                            <!-- start of comment -->
                            <div class="comment">
                                <div class="comment-header">
                                    <span>۱۵ تیر ۱۴۰۰</span>
                                    <span>امیر محمد اکبرپور</span>
                                </div>
                                <div class="comment-body">
                                    <p>گوشی مناسبی هست نسبت به قیمتش من خودم با ایفون X مقایسه کردم که در
                                        بعضی از برنامه ها عقب میموند بسیار گوشی خوبی هست در کل</p>
                                    <ul>
                                        <li class="comment-evaluation positive">دوربین قوی</li>
                                        <li class="comment-evaluation positive">باتری 6000</li>
                                        <li class="comment-evaluation positive">خوش دست</li>
                                        <li class="comment-evaluation positive">مناسب برای کار های حدودا
                                            سنگین و بالاتر</li>
                                        <li class="comment-evaluation negative">حسگر اثر انگشت کمی ضعیفه
                                        </li>
                                    </ul>
                                </div>
                                <div class="comment-footer">
                                    <span class="me-2">آیا این دیدگاه برایتان مفید بود؟</span>
                                    <button class="comment-like">۷</button>
                                    <button class="comment-dislike">۲</button>
                                </div>
                            </div>
                            <!-- end of comment -->
                            <!-- start of comment -->
                            <div class="comment">
                                <div class="comment-header">
                                    <span>۱۵ تیر ۱۴۰۰</span>
                                    <span>امیر محمد اکبرپور</span>
                                </div>
                                <div class="comment-body">
                                    <p>گوشی مناسبی هست نسبت به قیمتش من خودم با ایفون X مقایسه کردم که در
                                        بعضی از برنامه ها عقب میموند بسیار گوشی خوبی هست در کل</p>
                                    <ul>
                                        <li class="comment-evaluation positive">دوربین قوی</li>
                                        <li class="comment-evaluation positive">باتری 6000</li>
                                        <li class="comment-evaluation positive">خوش دست</li>
                                        <li class="comment-evaluation positive">مناسب برای کار های حدودا
                                            سنگین و بالاتر</li>
                                        <li class="comment-evaluation negative">حسگر اثر انگشت کمی ضعیفه
                                        </li>
                                    </ul>
                                </div>
                                <div class="comment-footer">
                                    <span class="me-2">آیا این دیدگاه برایتان مفید بود؟</span>
                                    <button class="comment-like">۷</button>
                                    <button class="comment-dislike">۲</button>
                                </div>
                            </div>
                            <!-- end of comment -->
                            <!-- start of comment -->
                            <div class="comment">
                                <div class="comment-header">
                                    <span>۱۵ تیر ۱۴۰۰</span>
                                    <span>امیر محمد اکبرپور</span>
                                </div>
                                <div class="comment-body">
                                    <p>گوشی مناسبی هست نسبت به قیمتش من خودم با ایفون X مقایسه کردم که در
                                        بعضی از برنامه ها عقب میموند بسیار گوشی خوبی هست در کل</p>
                                    <ul>
                                        <li class="comment-evaluation positive">دوربین قوی</li>
                                        <li class="comment-evaluation positive">باتری 6000</li>
                                        <li class="comment-evaluation positive">خوش دست</li>
                                        <li class="comment-evaluation positive">مناسب برای کار های حدودا
                                            سنگین و بالاتر</li>
                                        <li class="comment-evaluation negative">حسگر اثر انگشت کمی ضعیفه
                                        </li>
                                    </ul>
                                </div>
                                <div class="comment-footer">
                                    <span class="me-2">آیا این دیدگاه برایتان مفید بود؟</span>
                                    <button class="comment-like">۷</button>
                                    <button class="comment-dislike">۲</button>
                                </div>
                            </div>
                            <!-- end of comment -->
                            <!-- start of comment -->
                            <div class="comment">
                                <div class="comment-header">
                                    <span>۱۵ تیر ۱۴۰۰</span>
                                    <span>امیر محمد اکبرپور</span>
                                </div>
                                <div class="comment-body">
                                    <p>گوشی مناسبی هست نسبت به قیمتش من خودم با ایفون X مقایسه کردم که در
                                        بعضی از برنامه ها عقب میموند بسیار گوشی خوبی هست در کل</p>
                                    <ul>
                                        <li class="comment-evaluation positive">دوربین قوی</li>
                                        <li class="comment-evaluation positive">باتری 6000</li>
                                        <li class="comment-evaluation positive">خوش دست</li>
                                        <li class="comment-evaluation positive">مناسب برای کار های حدودا
                                            سنگین و بالاتر</li>
                                        <li class="comment-evaluation negative">حسگر اثر انگشت کمی ضعیفه
                                        </li>
                                    </ul>
                                </div>
                                <div class="comment-footer">
                                    <span class="me-2">آیا این دیدگاه برایتان مفید بود؟</span>
                                    <button class="comment-like">۷</button>
                                    <button class="comment-dislike">۲</button>
                                </div>
                            </div>
                            <!-- end of comment -->
                        </div>
                        <!-- end of comments -->
                    </div>
                </div>
            </div>
            <!-- end of product-comments -->
            <!-- start of product-questions -->
            <div class="product-tab-content product-questions tab-content border-bottom pb-2 mb-4"
                id="scrollspyHeading5">
                <div class="product-tab-title mb-0">
                    <h2>پرسش و پاسخ</h2>
                    <h3 class="subtitle">Samsung Galaxy M31 SM-M315F/DSN Dual SIM 128GB Mobile Phone</h3>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-5 mb-3">
                        <div class="ui-sticky ui-sticky-top pt-5 z-index-0">
                            <!-- start of questions-sidebar -->
                            <div class="comments-sidebar">
                                <div class="border rounded p-2">
                                    <div class="border-bottom pb-2 mb-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault1">
                                            <label class="form-check-label" for="flexCheckDefault1">
                                                پرسش های پاسخ داده شده
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault2">
                                            <label class="form-check-label" for="flexCheckDefault2">
                                                پرسش های بی پاسخ
                                            </label>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span>پرسش های من</span>
                                        <div class="form-check form-switch mb-0">
                                            <input class="form-check-input ms-0" type="checkbox"
                                                id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <div class="mb-2">پرسش خود را درباره این کالا بیان کنید</div>
                                    <button class="btn btn-block btn-outline-primary"
                                        data-remodal-target="add-question-modal">ثبت
                                        پرسش</button>
                                </div>
                            </div>
                            <!-- end of questions-sidebar -->
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-7 pt-5">
                        <!-- start of filter-questions -->
                        <div class="filter-comments mb-4">
                            <div class="filter-comments-title me-2">
                                <i class="ri-list-settings-fill me-1"></i>
                                <span>مرتب‌سازی پرسش‌ها بر اساس:</span>
                            </div>
                            <div class="filter-comments-options">
                                <button class="filter-comments-option active">جدیدترین پرسش ها</button>
                                <button class="filter-comments-option">مفیدترین پاسخ ها</button>
                            </div>
                        </div>
                        <!-- end of filter-questions -->
                        <!-- start of questions -->
                        <div class="comments">
                            <!-- start of question -->
                            <div class="comment question">
                                <div class="comment-body border-bottom-0">
                                    <div class="question-title fw-bold">سلام لطفا کسایی که خریدن جواب بدن
                                        این گوشی 4g+میشه؟مشکل آنتن دهی نداره؟</div>
                                </div>
                                <div class="comment-footer flex-column align-items-start">
                                    <div class="expandable-text pt-1 w-100" style="height: 160px;">
                                        <div class="expandable-text_text">
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <a class="link border-bottom-0" data-bs-toggle="collapse"
                                                    href="#collapseAnswer01" role="button" aria-expanded="false"
                                                    aria-controls="collapseAnswer01">ثبت پاسخ جدید <i
                                                        class="ri-arrow-left-s-line"></i></a>
                                            </div>
                                            <div class="collapse" id="collapseAnswer01">
                                                <div class="rounded bg-light p-3">
                                                    <form action="#">
                                                        <div class="form-element-row mb-3">
                                                            <label class="label">به این پرسش پاسخ
                                                                دهید*</label>
                                                            <textarea rows="3" class="form-control"
                                                                placeholder="متن پاسخ"></textarea>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between flex-wrap">
                                                            <div class="mb-2">
                                                                ثبت پرسش به معنی موافقت با <a href="#"
                                                                    class="link border-bottom-0">قوانین
                                                                    انتشار در سایت</a> است.
                                                            </div>
                                                            <div class="mb-2">
                                                                <button class="btn btn-sm btn-outline-danger me-2"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseAnswer01"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseAnswer01">بستن</button>
                                                                <button class="btn btn-sm btn-primary">ثبت
                                                                    پاسخ</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="expandable-text-expand-btn justify-content-start text-sm">
                                            <span class="show-more active">
                                                مشاهده پاسخ های دیگر <i class="ri-arrow-down-s-line ms-2"></i>
                                            </span>
                                            <span class="show-less d-none">
                                                مشاهده کمتر <i class="ri-arrow-up-s-line ms-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end of question -->
                            <!-- start of question -->
                            <div class="comment question">
                                <div class="comment-body border-bottom-0">
                                    <div class="question-title fw-bold">سلام خسته نباشید m31 بهتره یا a71 ??
                                    </div>
                                </div>
                                <div class="comment-footer flex-column align-items-start">
                                    <div class="expandable-text pt-1 w-100" style="height: 160px;">
                                        <div class="expandable-text_text">
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">اگه به امتیازات رجوع کنید میبین که a71
                                                        در دوربین خیلی ضعیفه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">ناشناس</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۹</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom pb-2 mb-4">
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="text-sm me-4">پاسخ</span>
                                                    <p class="mb-0">دوستان من ۱۰ روزه خریدم ساخت ویتنام هست
                                                        و فقط 4G میشه</p>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center flex-grow-1 justify-content-between w-100">
                                                    <div>
                                                        <span class="text-sm me-2">حسین کشاورزی</span>
                                                        <span class="badge badge-sm bg-info rounded-pill">خریدار</span>
                                                    </div>
                                                    <div>
                                                        <span class="me-2">آیا این پاسخ برای شما مفید
                                                            بود؟</span>
                                                        <button class="comment-like">۶</button>
                                                        <button class="comment-dislike"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <a class="link border-bottom-0" data-bs-toggle="collapse"
                                                    href="#collapseAnswer02" role="button" aria-expanded="false"
                                                    aria-controls="collapseAnswer02">ثبت پاسخ جدید <i
                                                        class="ri-arrow-left-s-line"></i></a>
                                            </div>
                                            <div class="collapse" id="collapseAnswer02">
                                                <div class="rounded bg-light p-3">
                                                    <form action="#">
                                                        <div class="form-element-row mb-3">
                                                            <label class="label">به این پرسش پاسخ
                                                                دهید*</label>
                                                            <textarea rows="3" class="form-control"
                                                                placeholder="متن پاسخ"></textarea>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between flex-wrap">
                                                            <div class="mb-2">
                                                                ثبت پرسش به معنی موافقت با <a href="#"
                                                                    class="link border-bottom-0">قوانین
                                                                    انتشار</a> است.
                                                            </div>
                                                            <div class="mb-2">
                                                                <button class="btn btn-sm btn-outline-danger me-2"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseAnswer02"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseAnswer02">بستن</button>
                                                                <button class="btn btn-sm btn-primary">ثبت
                                                                    پاسخ</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="expandable-text-expand-btn justify-content-start text-sm">
                                            <span class="show-more active">
                                                مشاهده پاسخ های دیگر <i class="ri-arrow-down-s-line ms-2"></i>
                                            </span>
                                            <span class="show-less d-none">
                                                ثبت پاسخ جدید <i class="ri-arrow-drop-left-line ms-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end of question -->
                        </div>
                        <!-- end of questions -->
                    </div>
                </div>
            </div>
            <!-- end of product-questions -->
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
                    <a href="#" class="btn btn-block btn-primary fw-bold">افزودن به
                        سبد خرید</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import orderBy from "lodash/orderBy";
import { InventoryDto, ProductDto } from "~~/models/products/singleProductDto";
import { GetProductImage } from "~~/utilities/ImageUrls";
import { splitNumber } from "~~/utilities/numberUtils";


const props = defineProps<{
    productDto: ProductDto,
    inventories: InventoryDto[]
}>();

const selectedInventory = orderBy(props.inventories, "price", "asc")[0];
const discount = (selectedInventory.price * selectedInventory.discountPercentage) / 100;

</script>

<style>

</style>