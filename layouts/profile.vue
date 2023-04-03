<template>
    <div class="page-wrapper">
      <the-main-header />
      <the-mobile-header />
      <main class="page-content">
        <div class="container">
            <div class="row mb-5">
                <profile-the-side-bar />
                <div class="col-xl-9 col-lg-8 col-md-7">
                    <slot />
                </div>
            </div>
        </div>
      </main>
      <the-footer />
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    script: [
      { src: "/js/dependencies/jquery-3.6.0.min.js", body: true },
      { src: "/js/dependencies/bootstrap.bundle.min.js", body: true },
      { src: "/js/dependencies/bootstrap-slider.min.js", body: true },
      { src: "/js/dependencies/jquery.countdown.min.js", body: true },
      { src: "/js/dependencies/jquery.simple.timer.min.js", body: true },
      { src: "/js/dependencies/iziToast.min.js", body: true },
      { src: "/js/dependencies/fancybox.umd.js", body: true },
      { src: "/js/dependencies/nouislider.min.js", body: true },
      { src: "/js/dependencies/wNumb.js", body: true },
      { src: "/js/dependencies/select2.min.js", body: true },
      { src: "/js/dependencies/simplebar.min.js", body: true },
      { src: "/js/dependencies/swiper-bundle.min.js", body: true },
      { src: "/js/dependencies/zoomsl.min.js", body: true },
      { src: "/js/theme.js", body: true },
      { src: "/js/custom.js", body: true },
    ],
  });
  </script>
  
  <style>
  </style>