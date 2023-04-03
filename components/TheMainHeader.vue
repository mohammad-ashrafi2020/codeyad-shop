<template>
  <header class="page-header d-md-block d-none">
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
              <nuxt-link to="/profile" class="user-option-btn user-option-btn--account">
                <i class="ri-user-fill icon"></i>
                <i class="ri-arrow-down-s-fill icon fs-7 text-muted"></i>
              </nuxt-link>
              <div class="user-option--dropdown user-option--dropdown-right">
                <client-only>
                  <div class="profile-user-info ui-box">
                    <template v-if="authStore.isLogin">
                      <div class="profile-detail">
                        <div class="d-flex align-items-center">
                          <div class="profile-avatar me-3">
                            <base-image :src="GetUserAvatar(authStore.currentUser?.avatarName ?? '')" alt="avatar" />
                          </div>
                          <div class="profile-info">
                            <nuxt-link to="/profile" class="text-decoration-none text-dark fw-bold mb-2">{{
                              authStore.currentUser?.name
                            }} {{ authStore.currentUser?.family }}</nuxt-link>
                            <div class="text-muted fs-7 fw-bold">{{ authStore.currentUser?.phoneNumber }}</div>
                          </div>
                        </div>
                        <div class="user-options">
                          <ul>

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
                    </template>
                    <template v-else>
                      <ul class="nav nav-items-with-icon flex-column">
                        <li class="nav-item">
                          <nuxt-link class="nav-link" to="/auth/login">
                            <i class="nav-link-icon ri-login-box-line"></i>
                            ورود به سایت</nuxt-link>
                        </li>
                        <li class="nav-item">
                          <nuxt-link class="nav-link" to="/auth/register">
                            <i class="nav-link-icon ri-user-add-line"></i>
                            ثبت نام</nuxt-link>
                        </li>
                      </ul>
                    </template>
                  </div>
                </client-only>
              </div>
            </div>
            <div class="user-option">
              <a href="#" class="user-option-btn user-option-btn--account">
                <i class="ri-heart-3-fill icon"></i>
                <span class="counter">۲</span>
              </a>
            </div>
            <mini-shop-cart />
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
                <li class="mega-menu-category" v-for="item in utilStore.categories">
                  <nuxt-link :to="`/search/category-${item.slug}`">{{ item.title }}</nuxt-link>
                  <ul class="mega-menu" v-if="item.childs.length > 0">

                    <template v-for="child in item.childs">
                      <li class="parent">
                        <nuxt-link :to="`/search/category-${child.slug}`">{{ child.title }}</nuxt-link>
                      </li>
                      <li v-for="subChild in child.childs">
                        <nuxt-link :to="`/search/category-${subChild.slug}`">{{ subChild.title }}</nuxt-link>
                      </li>
                    </template>

                  </ul>
                </li>
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
              <nuxt-link class="nav-link" to="/about-us">درباره ما</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/stores/authStore';
import { useUtilStore } from '~~/stores/utilStore';
import { GetUserAvatar } from '~~/utilities/ImageUrls';

const authStore = useAuthStore();
const utilStore = useUtilStore();

</script>

<style></style>