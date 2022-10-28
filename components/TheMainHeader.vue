<template>
  <header class="page-header d-md-block d-none">
    <!-- start banner -->
    <div class="alert banner-container alert-dismissible fade show" role="alert">
      <nuxt-link to="/" class="banner-placement rounded-0" style="
          background-image: url(/images/banner/017.jpg);
          height: 60px;
        "></nuxt-link>
      <nuxt-link to="/auth/login" class="banner-placement rounded-0" style="
          background-image: url(/images/banner/017.jpg);
          height: 60px;
        "></nuxt-link>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <!-- end banner -->
    <!-- start of page-header-top -->
    <div class="page-header--top">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="page-header--top-right">
            <div class="notification-container notification-light">
              <div class="swiper notification-swiper-slider mb-5">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <div class="swiper-slide">
                    <div class="notification-item">
                      <div class="notification-item--text">خوش آمدید 👋</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="notification-item">
                      <div class="notification-item--text">
                        زمستان امسال با تخفیفات ويژه 😍
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="notification-item">
                      <div class="notification-item--text">
                        به باشگاه مشتریان ما بپیوندید 😎
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-header--top-left">
            <ul class="nav nav-light justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">وبلاگ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">پرسش های متداول</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">تماس با ما</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">درباره ما</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end of page-header-top -->
    <!-- start of page-header-middle -->
    <div class="page-header--middle">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center flex-grow-1 pe-3">
            <div class="logo-container logo-box me-3">
              <nuxt-link to="/search" class="logo">
                <img src="/images/logo.svg" width="120" alt="" />
                <span class="logo-text">بررسی،انتخاب و خرید آنلاین</span>
              </nuxt-link>
            </div>
            <div class="search-container">
              <form action="#" class="search-form">
                <input type="text" class="form-control search-field" placeholder="جستجو کنید.." />
                <button class="btn btn-primary btn-search btn-action">
                  <i class="ri-search-2-line"></i>
                </button>
                <button class="
                    btn btn-primary btn-close-search-result btn-action
                    d-none
                  ">
                  <i class="ri-close-line"></i>
                </button>
              </form>
              <div class="search-result-container">
                <div class="search-result-tags-container">
                  <div class="search-result-tags-label">
                    <i class="ri-fire-line"></i> بیشترین جستجوهای اخیر
                  </div>
                  <ul class="search-result-tags">
                    <li>
                      <a href="#" class="search-result-tag">گوشی موبایل</a>
                    </li>
                    <li>
                      <a href="#" class="search-result-tag">لوازم خانگی برقی</a>
                    </li>
                    <li>
                      <a href="#" class="search-result-tag">لپ تاپ</a>
                    </li>
                    <li>
                      <a href="#" class="search-result-tag">کنسول بازی</a>
                    </li>
                    <li>
                      <a href="#" class="search-result-tag">دوچرخه</a>
                    </li>
                  </ul>
                </div>
                <div class="border-bottom my-3"></div>
                <ul class="search-result-items">
                  <li><a href="#">گوشی موبایل</a></li>
                  <li><a href="#">گوشی موبایل شیائومی</a></li>
                  <li><a href="#">گوشی موبایل سامسونگ</a></li>
                  <li><a href="#">قاب گوشی موبایل</a></li>
                  <li><a href="#">گوشی موبایل اپل</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="user-options">
            <div class="user-option user-option--account">
              <a href="profile.html" class="user-option-btn user-option-btn--account">
                <i class="ri-user-fill icon"></i>
                <i class="ri-arrow-down-s-fill icon fs-7 text-muted"></i>
              </a>
              <div class="user-option--dropdown user-option--dropdown-right">
                <div class="profile-user-info ui-box">
                  <div class="profile-detail">
                    <div class="d-flex align-items-center">
                      <div class="profile-avatar me-3">
                        <img src="/images/avatar/default.png" alt="avatar" />
                      </div>
                      <div class="profile-info">
                        <a href="#" class="text-decoration-none text-dark fw-bold mb-2">جلال بهرامی راد</a>
                        <div class="text-muted fs-7 fw-bold">۰۹xxxxxxxxx</div>
                      </div>
                    </div>
                    <div class="user-options">
                      <ul>
                        <li>
                          <span class="label">کیف پول</span>
                          <span class="detail">
                            <span class="d-block">۰
                              <span class="currency fs-7 fw-bold">تومان</span></span>
                            <a href="#" class="
                                link
                                border-bottom-0
                                text-info
                                fs-7
                                fw-bold
                              ">افزایش موجودی <i class="ri-arrow-left-s-line"></i></a>
                          </span>
                        </li>
                        <li>
                          <span class="label">باشگاه مشتریان</span>
                          <span class="detail">
                            <span class="d-block">۰
                              <span class="score text-muted fs-7">امتیاز</span></span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul class="nav nav-items-with-icon flex-column">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="nav-link-icon ri-file-list-3-line"></i> سفارش
                        های من</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="nav-link-icon ri-copper-coin-fill"></i>
                        باشگاه مشتریان</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="nav-link-icon ri-logout-box-r-line"></i>
                        خروج</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="user-option">
              <a href="#" class="user-option-btn user-option-btn--account">
                <i class="ri-heart-3-fill icon"></i>
                <span class="counter">۲</span>
              </a>
            </div>
            <div class="user-option user-option--cart">
              <a href="cart.html" class="user-option-btn user-option-btn--cart">
                <i class="ri-shopping-bag-2-fill icon"></i>
                <span class="user-item-text">
                  <span class="title">سبد خرید شما</span>
                  <span class="value fa-num">83,678,000 <span class="currency">تومان</span></span>
                </span>
                <span class="counter">۴</span>
              </a>
              <div class="mini-cart">
                <div class="mini-cart-header">
                  <span class="mini-cart-products-count fa-num">4 کالا</span>
                  <a href="cart.html" class="btn btn-link px-0">مشاهده سبد خرید <i class="ri-arrow-left-s-fill"></i></a>
                </div>
                <div class="mini-cart-products do-simplebar">
                  <div class="mini-cart-product">
                    <div class="mini-cart-product-thumbnail">
                      <a href="#"><img src="/images/products/01.jpg" alt="" /></a>
                    </div>
                    <div class="mini-cart-product-detail">
                      <div class="mini-cart-product-brand">
                        <a href="#">apple</a>
                      </div>
                      <div class="mini-cart-product-title">
                        <a href="product-v1.html">گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت
                          ظرفیت 128 گیگابایت و رم 4 گیگابایت</a>
                      </div>
                      <div class="mini-cart-purchase-info">
                        <div class="mini-cart-product-meta">
                          <span class="fa-num">1 عدد</span>
                          <span class="color" style="background-color: #d4d4d4"></span>
                        </div>
                        <div class="mini-cart-product-price fa-num">
                          26,249,000 <span class="currency">تومان</span>
                        </div>
                      </div>
                      <button class="mini-cart-product-remove"></button>
                    </div>
                  </div>
                  <div class="mini-cart-product">
                    <div class="mini-cart-product-thumbnail">
                      <a href="#"><img src="/images/products/02.jpg" alt="" /></a>
                    </div>
                    <div class="mini-cart-product-detail">
                      <div class="mini-cart-product-brand">
                        <a href="#">xiaomi</a>
                      </div>
                      <div class="mini-cart-product-title">
                        <a href="product-v1.html">گوشی موبایل شیائومی مدل 11 lite 5G NE 2109119DG دو
                          سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</a>
                      </div>
                      <div class="mini-cart-purchase-info">
                        <div class="mini-cart-product-meta">
                          <span class="fa-num">1 عدد</span>
                          <span class="color" style="background-color: #d4d4d4"></span>
                        </div>
                        <div class="mini-cart-product-price fa-num">
                          8,239,000 <span class="currency">تومان</span>
                        </div>
                      </div>
                      <button class="mini-cart-product-remove"></button>
                    </div>
                  </div>
                  <div class="mini-cart-product">
                    <div class="mini-cart-product-thumbnail">
                      <a href="#"><img src="/images/products/05.jpg" alt="" /></a>
                    </div>
                    <div class="mini-cart-product-detail">
                      <div class="mini-cart-product-brand">
                        <a href="#">apple</a>
                      </div>
                      <div class="mini-cart-product-title">
                        <a href="product-v1.html">گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌
                          کارت ظرفیت 256 گیگابایت</a>
                      </div>
                      <div class="mini-cart-purchase-info">
                        <div class="mini-cart-product-meta">
                          <span class="fa-num">1 عدد</span>
                          <span class="color" style="background-color: #d4d4d4"></span>
                        </div>
                        <div class="mini-cart-product-price fa-num">
                          36,300,000 <span class="currency">تومان</span>
                        </div>
                      </div>
                      <button class="mini-cart-product-remove"></button>
                    </div>
                  </div>
                  <div class="mini-cart-product">
                    <div class="mini-cart-product-thumbnail">
                      <a href="#"><img src="/images/products/07.jpg" alt="" /></a>
                    </div>
                    <div class="mini-cart-product-detail">
                      <div class="mini-cart-product-brand">
                        <a href="#">samsung</a>
                      </div>
                      <div class="mini-cart-product-title">
                        <a href="product-v1.html">گوشی موبایل سامسونگ مدل Galaxy S9 Plus دو سیم کارت
                          ظرفیت 64 گیگابایت</a>
                      </div>
                      <div class="mini-cart-purchase-info">
                        <div class="mini-cart-product-meta">
                          <span class="fa-num">1 عدد</span>
                          <span class="color" style="background-color: #d4d4d4"></span>
                        </div>
                        <div class="mini-cart-product-price fa-num">
                          12,890,000 <span class="currency">تومان</span>
                        </div>
                      </div>
                      <button class="mini-cart-product-remove"></button>
                    </div>
                  </div>
                </div>
                <div class="mini-cart-footer">
                  <div class="mini-cart-total">
                    <span class="mini-cart-total-label">مبلغ قابل پرداخت:</span>
                    <span class="mini-cart-total-value fa-num">83,678,000 <span class="currency">تومان</span></span>
                  </div>
                  <a href="#" class="btn btn-primary">ورود و ثبت سفارش</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of page-header-middle -->
    <!-- start of page-header-bottom -->
    <div class="page-header--bottom">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="vertical-menu">
            <a href="#" class="vertical-menu-btn">دسته بندی کالاها <i class="ri-apps-fill icon"></i></a>
            <div class="vertical-menu-items">
              <ul>
                <li class="mega-menu-category show">
                  <a href="#">کالای دیجیتال</a>
                  <ul class="mega-menu">
                    <li class="parent"><a href="#">لوازم جانبی گوشی</a></li>
                    <li><a href="#">کیف و کاور گوشی</a></li>
                    <li><a href="#">پاور بانک (شارژر همراه)</a></li>
                    <li><a href="#">پایه نگهدارنده گوشی</a></li>
                    <li class="parent"><a href="#">گوشی موبایل</a></li>
                    <li><a href="#">سامسونگ</a></li>
                    <li><a href="#">هوآوی</a></li>
                    <li><a href="#">اپل</a></li>
                    <li><a href="#">شیائومی</a></li>
                    <li><a href="#">آنر</a></li>
                    <li><a href="#">نوکیا</a></li>
                    <li class="parent"><a href="#">واقعیت مجازی</a></li>
                    <li class="parent">
                      <a href="#">مچ بند و ساعت هوشمند</a>
                    </li>
                    <li class="parent"><a href="#">لوازم جانبی گوشی</a></li>
                    <li><a href="#">کیف و کاور گوشی</a></li>
                    <li><a href="#">پاور بانک (شارژر همراه)</a></li>
                    <li><a href="#">پایه نگهدارنده گوشی</a></li>
                    <li class="parent"><a href="#">گوشی موبایل</a></li>
                    <li><a href="#">سامسونگ</a></li>
                    <li><a href="#">هوآوی</a></li>
                    <li><a href="#">اپل</a></li>
                    <li><a href="#">شیائومی</a></li>
                    <li><a href="#">آنر</a></li>
                    <li><a href="#">نوکیا</a></li>
                    <li class="parent"><a href="#">واقعیت مجازی</a></li>
                    <li class="parent">
                      <a href="#">مچ بند و ساعت هوشمند</a>
                    </li>
                  </ul>
                </li>
                <li class="mega-menu-category">
                  <a href="#">مد و پوشاک</a>
                  <ul class="mega-menu">
                    <li class="parent"><a href="#">لوازم جانبی گوشی</a></li>
                    <li><a href="#">کیف و کاور گوشی</a></li>
                    <li><a href="#">پاور بانک (شارژر همراه)</a></li>
                    <li><a href="#">پایه نگهدارنده گوشی</a></li>
                    <li class="parent"><a href="#">گوشی موبایل</a></li>
                    <li><a href="#">سامسونگ</a></li>
                    <li><a href="#">هوآوی</a></li>
                    <li><a href="#">اپل</a></li>
                    <li><a href="#">شیائومی</a></li>
                    <li><a href="#">آنر</a></li>
                    <li><a href="#">نوکیا</a></li>
                    <li class="parent"><a href="#">لوازم جانبی گوشی</a></li>
                    <li><a href="#">کیف و کاور گوشی</a></li>
                    <li><a href="#">پاور بانک (شارژر همراه)</a></li>
                    <li><a href="#">پایه نگهدارنده گوشی</a></li>
                    <li class="parent"><a href="#">گوشی موبایل</a></li>
                    <li><a href="#">سامسونگ</a></li>
                    <li><a href="#">هوآوی</a></li>
                    <li><a href="#">اپل</a></li>
                    <li><a href="#">شیائومی</a></li>
                    <li><a href="#">آنر</a></li>
                    <li><a href="#">نوکیا</a></li>
                  </ul>
                </li>
                <li><a href="#">اسباب بازی</a></li>
                <li><a href="#">زیبایی و سلامت</a></li>
                <li><a href="#">خانه و آشپزخانه</a></li>
                <li><a href="#">لوازم تحریر</a></li>
                <li><a href="#">ورزش و سفر</a></li>
                <li><a href="#">سوپرمارکت</a></li>
              </ul>
            </div>
          </div>
          <ul class="nav">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">خانه</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">وبلاگ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">پرسش های متداول</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">تماس با ما</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">درباره ما</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>

</style>