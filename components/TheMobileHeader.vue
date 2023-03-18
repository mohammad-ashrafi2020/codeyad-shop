<template>
  <header class="page-header-responsive d-md-none">
    <div class="page-header-responsive-row mb-3">
      <div class="d-flex align-items-center">
        <div class="navigation-container">
          <button class="toggle-navigation"></button>
          <div class="navigation">
            <div class="navigation-header">
              <div class="logo-container logo-box">
                <nuxt-link to="/" class="logo">
                  <img src="/images/logo.svg" width="120" alt="" />
                  <span class="logo-text">بررسی،انتخاب و خرید آنلاین</span>
                </nuxt-link>
              </div>
            </div>
            <div class="navigation-body">
              <ul class="menu">
                <li v-for="item in utilStore.categories">
                  <nuxt-link v-if="item.childs.length == 0" :to="`/search/category-${item.slug}`">
                    <span>{{ item.title }}</span>
                  </nuxt-link>
                  <a v-else class="toggle-submenu">
                    <span>{{ item.title }}</span>
                  </a>
                  <ul class="submenu" v-if="item.childs.length > 0">
                    <li class="close-submenu">
                      <i class="ri-arrow-right-s-line"></i>
                      {{ item.title }}
                    </li>

                    <li v-for="child in item.childs">
                      <nuxt-link v-if="child.childs.length == 0" :to="`/search/category-${child.slug}`">
                        {{ child.title
                        }}</nuxt-link>
                      <a v-else class="toggle-submenu">{{ child.title
                      }}</a>
                      <ul class="submenu" v-if="child.childs.length > 0">
                        <li class="close-submenu">
                          <i class="ri-arrow-right-s-line"></i>
                          {{ child.title }}
                        </li>

                        <li v-for="subChild in child.childs">
                          <nuxt-link :to="`/search/category-${subChild.slug}`">{{ subChild.title }}</nuxt-link>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="navigation-overlay"></div>
        </div>
        <div class="logo">
          <a href="#">
            <img src="/images/logo-dark.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="user-options">
        <div class="user-option">
          <a href="#" class="user-option-btn user-option-btn--account">
            <i class="ri-user-fill icon"></i>
          </a>
        </div>
        <div class="user-option">
          <a href="#" class="user-option-btn user-option-btn--account">
            <i class="ri-heart-3-fill icon"></i>
            <span class="counter">۲</span>
          </a>
        </div>
        <div class="user-option user-option--cart">
          <a href="#" class="user-option-btn user-option-btn--cart">
            <i class="ri-shopping-bag-2-fill icon"></i>
            <span class="counter">۴</span>
          </a>
        </div>
      </div>
    </div>
    <div class="page-header-responsive-row">
      <div class="search-container">
        <form @submit.prevent="searchProduct" class="search-form">
          <input type="text" v-model="search" class="form-control search-field" placeholder="جستجو کنید.." />
          <button class="btn btn-primary btn-search btn-action">
            <i class="ri-search-2-line"></i>
          </button>
          <button class="btn btn-primary btn-close-search-result btn-action d-none">
            <i class="ri-close-line"></i>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUtilStore } from '~~/stores/utilStore';

const utilStore = useUtilStore();
const search = ref("");
const router = useRouter();

const searchProduct = () => {
  router.push('/search?q=' + search.value);
}
</script>

<style></style>