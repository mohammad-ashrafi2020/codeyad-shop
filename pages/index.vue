<template>
  <div>
    <nuxt-link class="btn btn-primary" to="/test">Test</nuxt-link>
    <div class="row mb-3 d-sm-block d-none">
      <div class="col-12">
        <div class="banner-img">
          <a href="#"
            ><img src="/images/banner/025.gif" alt="banner"
          /></a>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-lg-8 mb-lg-0 mb-4">
        <!-- start of main-slider -->
        <div class="swiper main-swiper-slider">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <div class="swiper-slide main-swiper-slide">
              <a
                href="#"
                style="
                  background-image: url(/images/slider/main/01.jpg);
                "
              >
                <img src="/images/slider/main/01.jpg" alt="" />
              </a>
            </div>
            <div class="swiper-slide main-swiper-slide">
              <a
                href="#"
                style="
                  background-image: url(/images/slider/main/02.jpg);
                "
              >
                <img src="/images/slider/main/02.jpg" alt="" />
              </a>
            </div>
            <div class="swiper-slide main-swiper-slide">
              <a
                href="#"
                style="
                  background-image: url(/images/slider/main/03.jpg);
                "
              >
                <img src="/images/slider/main/03.jpg" alt="" />
              </a>
            </div>
            <div class="swiper-slide main-swiper-slide">
              <a
                href="#"
                style="
                  background-image: url(/images/slider/main/04.jpg);
                "
              >
                <img src="/images/slider/main/04.jpg" alt="" />
              </a>
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- end of main-slider -->
      </div>
      <div class="col-lg-4">
        <div class="row">
          <div class="col-lg-12 col-6 mb-lg-3">
            <!-- start of banner -->
            <div class="banner-img banner-side-main-slider bg-position-right">
              <a
                href="#"
                style="
                  background-image: url(/images/banner/026.jpg);
                  height: 220px;
                "
              >
                <img src="/images/banner/026.jpg" alt="" />
              </a>
            </div>
            <!-- end of banner -->
          </div>
          <div class="col-lg-12 col-6">
            <!-- start of banner -->
            <div class="banner-img banner-side-main-slider bg-position-right">
              <a
                href="#"
                style="
                  background-image: url(/images/banner/027.jpg);
                  height: 220px;
                "
              >
                <img src="/images/banner/027.jpg" alt="" />
              </a>
            </div>
            <!-- end of banner -->
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/018.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
      <div class="col-md-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/019.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
    </div>
    <!-- start of box => specials-product-slider -->
    <div
      class="ui-box ui-box-specials pb-3 mb-5"
      style="background-color: #f03426"
    >
      <div class="container">
        <div class="ui-box-title text-white fw-bolder d-sm-none">
          قبل از اتمام جشنواره خرید کن!
        </div>
        <div class="ui-box-content">
          <div class="row">
            <div class="col-lg-3 d-lg-block d-none">
              <div class="specials-container">
                <img
                  src="/images/theme/specials.png"
                  class="img-fluid"
                  alt=""
                />
                <a href="#" class="btn btn-sm btn-outline-light"
                  >مشاهده همه <i class="ri-arrow-left-fill ms-2"></i
                ></a>
              </div>
            </div>
            <div class="col-lg-9">
              <!-- Slider main container -->
              <div class="swiper product-specials-swiper-slider mb-3 pb-5">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <div class="swiper-slide d-lg-none d-sm-block d-none">
                    <div class="specials-container">
                      <img
                        src="/images/theme/specials.png"
                        class="img-fluid mb-0"
                        alt=""
                      />
                      <a href="#" class="btn btn-sm btn-outline-light"
                        >مشاهده همه <i class="ri-arrow-left-fill ms-2"></i
                      ></a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/01.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت
                            ظرفیت 128 گیگابایت و رم 4 گیگابایت</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #d4d4d4"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #e86841"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #b82c32"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <div class="d-flex align-items-center">
                            <del class="price-old">26,900,000</del>
                            <span class="discount ms-2">%2</span>
                          </div>
                          <span class="price-now"
                            >26,249,000
                            <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/02.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل شیائومی مدل 11 lite 5G NE 2109119DG دو
                            سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #4d5b63"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #57415f"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #984638"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <span class="price-now"
                            >8,239,000 <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/03.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل شیائومی مدل Redmi Note 10 pro M2101K6G
                            دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #24476e"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #12505b"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #e4a793"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <span class="price-now"
                            >7,599,000 <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/04.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل سامسونگ مدل Galaxy Z Flip3 5G ظرفیت 256
                            گیگابایت و رم 8 گیگابایت</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #24476e"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #12505b"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #e4a793"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <span class="price-now"
                            >22,499,000
                            <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/05.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌
                            کارت ظرفیت 256 گیگابایت</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #d4d4d4"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #e86841"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #b82c32"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <span class="price-now"
                            >36,300,000
                            <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/06.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل شیائومی مدل Mi 11i 5G M2012K11G دو سیم‌
                            کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #4d5b63"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #57415f"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #984638"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <span class="price-now"
                            >16,199,000
                            <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/07.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل سامسونگ مدل Galaxy S9 Plus دو سیم کارت
                            ظرفیت 64 گیگابایت</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #24476e"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #12505b"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #e4a793"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <span class="price-now"
                            >12,890,000
                            <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-thumbnail">
                        <a href="#">
                          <img
                            src="/images/products/08.jpg"
                            alt="product title"
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <h2 class="product-title">
                          <a href="#"
                            >گوشی موبایل سامسونگ مدل Galaxy Note 20 5G
                            SM-N981B/DS دو سیم کارت ظرفیت 256 گیگابایت و رم 8</a
                          >
                        </h2>
                        <div class="product-variant">
                          <span
                            class="color"
                            style="background-color: #24476e"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #12505b"
                          ></span>
                          <span
                            class="color"
                            style="background-color: #e4a793"
                          ></span>
                          <span>+</span>
                        </div>
                        <div class="product-price fa-num">
                          <div class="d-flex align-items-center">
                            <del class="price-old">23,570,000</del>
                            <span class="discount ms-2">%3</span>
                          </div>
                          <span class="price-now"
                            >22,799,000
                            <span class="currency">تومان</span></span
                          >
                        </div>
                      </div>
                      <div class="product-card-footer">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            border-top
                            mt-2
                            py-2
                          "
                        >
                          <div class="product-actions">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به سبد خرید"
                                  aria-label="افزودن به سبد خرید"
                                  ><i class="ri-shopping-cart-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="مشاهده سریع"
                                  aria-label="مشاهده سریع"
                                  data-remodal-target="quick-view-modal"
                                  ><i class="ri-search-line"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="افزودن به علاقمندی"
                                  aria-label="افزودن به علاقمندی"
                                  ><i class="ri-heart-3-line"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                          <div class="product-rating fa-num">
                            <i class="ri-star-fill star"></i>
                            <strong>۴.۴</strong>
                            <span>(۴۳۶)</span>
                          </div>
                        </div>
                        <div
                          class="countdown-timer fa-num"
                          data-countdown="2023/01/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of box => specials-product-slider -->
    <!-- start of box => categories-slider -->
    <div class="ui-box mb-5">
      <div class="ui-box-title">دسته بندی محصولات</div>
      <div class="ui-box-content">
        <div class="categories-container">
          <!-- Slider main container -->
          <div class="swiper category-swiper-slider pb-5">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/01.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">گوشی موبایل</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/02.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">لوازم جانبی گوشی موبایل</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/03.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">کامپیوترهای All-in-One</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/04.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">کنسول بازی</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/05.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">پخش کننده خانگی</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/06.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">لوازم شست و شو و نظافت</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/07.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">لباس مردانه</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/08.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">لباس زنانه</span>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-item">
                  <a href="#">
                    <img
                      src="/images/categories/03.jpg"
                      class="category-img"
                      alt=""
                    />
                    <span class="category-title">کامپیوترهای All-in-One</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of box => categories-slider -->
    <div class="row mb-5">
      <div class="col-md-3 col-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/020.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
      <div class="col-md-3 col-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/021.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
      <div class="col-md-3 col-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/022.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
      <div class="col-md-3 col-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/023.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
    </div>
    <!-- start of box -->
    <div class="ui-box mb-5">
      <div class="ui-box-title">منتخب محصولات تخفیف و حراج</div>
      <div class="ui-box-content">
        <!-- Slider main container -->
        <div class="swiper product-swiper-slider">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/01.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت
                      128 گیگابایت و رم 4 گیگابایت</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #d4d4d4"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #e86841"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #b82c32"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <div class="d-flex align-items-center">
                      <del class="price-old">26,900,000</del>
                      <span class="discount ms-2">%2</span>
                    </div>
                    <span class="price-now"
                      >26,249,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/02.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل شیائومی مدل 11 lite 5G NE 2109119DG دو سیم‌
                      کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #4d5b63"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #57415f"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #984638"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <span class="price-now"
                      >8,239,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/03.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل شیائومی مدل Redmi Note 10 pro M2101K6G دو
                      سیم‌ کارت ظرفیت 128 گیگابایت و رم 6</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #24476e"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #12505b"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #e4a793"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <span class="price-now"
                      >7,599,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/04.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل سامسونگ مدل Galaxy Z Flip3 5G ظرفیت 256
                      گیگابایت و رم 8 گیگابایت</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #24476e"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #12505b"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #e4a793"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <span class="price-now"
                      >22,499,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/05.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت
                      ظرفیت 256 گیگابایت</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #d4d4d4"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #e86841"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #b82c32"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <span class="price-now"
                      >36,300,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/06.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل شیائومی مدل Mi 11i 5G M2012K11G دو سیم‌ کارت
                      ظرفیت 256 گیگابایت و 8 گیگابایت رم</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #4d5b63"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #57415f"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #984638"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <span class="price-now"
                      >16,199,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/07.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل سامسونگ مدل Galaxy S9 Plus دو سیم کارت ظرفیت
                      64 گیگابایت</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #24476e"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #12505b"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #e4a793"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <span class="price-now"
                      >12,890,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
            <div class="swiper-slide">
              <!-- start of product-card -->
              <div class="product-card">
                <div class="product-thumbnail">
                  <a href="#">
                    <img
                      src="/images/products/08.jpg"
                      alt="product title"
                    />
                  </a>
                </div>
                <div class="product-card-body">
                  <h2 class="product-title">
                    <a href="#"
                      >گوشی موبایل سامسونگ مدل Galaxy Note 20 5G SM-N981B/DS دو
                      سیم کارت ظرفیت 256 گیگابایت و رم 8</a
                    >
                  </h2>
                  <div class="product-variant">
                    <span
                      class="color"
                      style="background-color: #24476e"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #12505b"
                    ></span>
                    <span
                      class="color"
                      style="background-color: #e4a793"
                    ></span>
                    <span>+</span>
                  </div>
                  <div class="product-price fa-num">
                    <div class="d-flex align-items-center">
                      <del class="price-old">23,570,000</del>
                      <span class="discount ms-2">%3</span>
                    </div>
                    <span class="price-now"
                      >22,799,000 <span class="currency">تومان</span></span
                    >
                  </div>
                </div>
                <div class="product-card-footer">
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      border-top
                      mt-2
                      py-2
                    "
                  >
                    <div class="product-actions">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به سبد خرید"
                            aria-label="افزودن به سبد خرید"
                            ><i class="ri-shopping-cart-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="مشاهده سریع"
                            aria-label="مشاهده سریع"
                            data-remodal-target="quick-view-modal"
                            ><i class="ri-search-line"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="افزودن به علاقمندی"
                            aria-label="افزودن به علاقمندی"
                            ><i class="ri-heart-3-line"></i
                          ></a>
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
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <!-- end of box -->
    <div class="row mb-5">
      <div class="col-md-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/018.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
      <div class="col-md-6 mb-lg-0 mb-3">
        <!-- start of banner -->
        <div class="banner-img">
          <a href="#">
            <img src="/images/banner/019.jpg" alt="" />
          </a>
        </div>
        <!-- end of banner -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>