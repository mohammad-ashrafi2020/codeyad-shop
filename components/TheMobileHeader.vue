<template>
  <header class="page-header-responsive d-md-none">
    <div class="page-header-responsive-row mb-3">
      <div class="d-flex align-items-center">
        <div class="navigation-container">
          <button class="toggle-navigation" @click="isOpenMenu = true"></button>
          <div :class="['navigation', { 'toggle': isOpenMenu }]">
            <div class="navigation-header">
              <div class="logo-container logo-box">
                <a @click="changeRoute('/')" class="logo">
                  <img src="/images/logo.svg" width="120" alt="" />
                  <span class="logo-text">بررسی،انتخاب و خرید آنلاین</span>
                </a>
              </div>
            </div>
            <div class="navigation-body">
              <ul class="menu">
                <li v-for="item in utilStore.categories">
                  <a @click="changeRoute(`/search/category-${item.slug}`)" v-if="item.childs.length == 0">
                    <span>{{ item.title }}</span>
                  </a>
                  <a v-else class="toggle-submenu">
                    <span>{{ item.title }}</span>
                  </a>
                  <ul class="submenu" v-if="item.childs.length > 0">
                    <li class="close-submenu">
                      <i class="ri-arrow-right-s-line"></i>
                      {{ item.title }}
                    </li>

                    <li v-for="child in item.childs">
                      <a @click="changeRoute(`/search/category-${child.slug}`)" v-if="child.childs.length == 0">
                        {{ child.title
                        }}</a>
                      <a v-else class="toggle-submenu">{{ child.title
                      }}</a>
                      <ul class="submenu" v-if="child.childs.length > 0">
                        <li class="close-submenu">
                          <i class="ri-arrow-right-s-line"></i>
                          {{ child.title }}
                        </li>

                        <li v-for="subChild in child.childs">
                          <a @click="changeRoute(`/search/category-${subChild.slug}`)">{{ subChild.title }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="navigation-overlay" @click="closeMenu" :style="{ 'display': isOpenMenu ? 'block' : 'none' }">
          </div>
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
        <div class="user-option user-option--cart">
          <nuxt-link to="/cart" class="user-option-btn user-option-btn--cart">
            <i class="ri-shopping-bag-2-fill icon"></i>
            <span class="counter">{{ cartStore.getTotalItem() }}</span>
          </nuxt-link>
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
import { useShopCartStore } from '~~/stores/shopCartStore';
import { useUtilStore } from '~~/stores/utilStore';

const utilStore = useUtilStore();
const search = ref("");
const router = useRouter();
const cartStore=useShopCartStore();

const isOpenMenu = ref(false);

const changeRoute = (url: string) => {
  closeMenu();
  router.push(url);
}
const closeMenu = () => {
  CloseSubMenu();
  isOpenMenu.value = false;
}
const searchProduct = () => {
  router.push('/search?q=' + search.value);
}
</script>

<style></style>