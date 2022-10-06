<template>
   <header class="page-header-responsive d-md-none">
      <div class="page-header-responsive-row mb-3">
        <div class="d-flex align-items-center">
          <div class="navigation-container">
            <button class="toggle-navigation"></button>
            <div class="navigation">
              <div class="navigation-header">
                <div class="logo-container logo-box">
                  <a href="#" class="logo">
                    <img
                      src="/images/logo.svg"
                      width="120"
                      alt=""
                    />
                    <span class="logo-text">بررسی،انتخاب و خرید آنلاین</span>
                  </a>
                </div>
              </div>
              <div class="navigation-body">
                <ul class="menu">
                  <li>
                    <a href="#" class="toggle-submenu">
                      <span>زنانه</span>
                    </a>
                    <ul class="submenu">
                      <li class="close-submenu">
                        <i class="ri-arrow-right-s-line"></i>
                        زنانه
                      </li>
                      <li>
                        <a href="#" class="toggle-submenu"> لباس </a>
                        <ul class="submenu">
                          <li class="close-submenu">
                            <i class="ri-arrow-right-s-line"></i>
                            لباس
                          </li>
                          <li>
                            <a href="#">تی شرت و پولوشرت</a>
                          </li>
                          <li>
                            <a href="#">لباس راحتی و خواب</a>
                          </li>
                          <li>
                            <a href="#">مانتو، پانچو و رویه</a>
                          </li>
                          <li>
                            <a href="#">شومیز و پیراهن</a>
                          </li>
                          <li>
                            <a href="#">بلوز</a>
                          </li>
                          <li>
                            <a href="#">پیراهن و لباس مجلسی</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="toggle-submenu">
                      <span>مردانه</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="toggle-submenu">
                      <span>بچگانه</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="toggle-submenu">
                      <span>زیبایی و سلامت</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">فروش ویژه</a>
                  </li>
                  <li>
                    <a href="#">برندها</a>
                  </li>
                  <li>
                    <a href="#">خانه طراحان ایرانی</a>
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
          <form action="#" class="search-form">
            <input
              type="text"
              class="form-control search-field"
              placeholder="جستجو کنید.."
            />
            <button class="btn btn-primary btn-search btn-action">
              <i class="ri-search-2-line"></i>
            </button>
            <button
              class="btn btn-primary btn-close-search-result btn-action d-none"
            >
              <i class="ri-close-line"></i>
            </button>
          </form>
          <div class="search-result-container">
            <div class="search-result-tags-container">
              <div class="search-result-tags-label">
                <i class="ri-fire-line"></i> بیشترین جستجوهای اخیر
              </div>
              <ul class="search-result-tags">
                <li><a href="#" class="search-result-tag">گوشی موبایل</a></li>
                <li>
                  <a href="#" class="search-result-tag">لوازم خانگی برقی</a>
                </li>
                <li><a href="#" class="search-result-tag">لپ تاپ</a></li>
                <li><a href="#" class="search-result-tag">کنسول بازی</a></li>
                <li><a href="#" class="search-result-tag">دوچرخه</a></li>
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
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>