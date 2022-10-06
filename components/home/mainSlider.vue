<template>
  <Carousel dir="rtl" v-model="currentSlide" :itemsToShow="1">
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/01.jpg)"
      >
        <img src="/images/slider/main/01.jpg" alt="" />
      </a>
    </Slide>
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/02.jpg)"
      >
        <img src="/images/slider/main/02.jpg" alt="" />
      </a>
    </Slide>
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/03.jpg)"
      >
        <img src="/images/slider/main/03.jpg" alt="" />
      </a>
    </Slide>
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/04.jpg)"
      >
        <img src="/images/slider/main/04.jpg" alt="" />
      </a>
    </Slide>
    <template #addons="{ slidesCount }">
      <div class="slider__navigation">
        <div
          class="swiper-button-prev"
          v-if="slidesCount > currentSlide + 1"
          @click="currentSlide += 1"
        ></div>
        <div
          v-if="currentSlide > 0"
          class="swiper-button-next"
          @click="currentSlide -= 1"
        ></div>
      </div>
      <div class="slider__pagination">
        <label
          :class="{ active: item == currentSlide + 1 }"
          v-for="item in slidesCount"
          :key="item"
          @click="currentSlide = item - 1"
        ></label>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(0);
</script>

<style scoped>
.carousel__item {
  border-radius: 15px;
  width: 100%;
}
.carousel__item img {
  height: 455px;
  border-radius: 15px;
  width: 100%;
}
.carousel__slide {
  padding: 0;
  border-radius: 15px !important;
}
.swiper-button-prev::after,
.swiper-button-next:after {
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.swiper-button-prev,
.swiper-button-next {
  width: 55px;
  height: 55px;
  background: transparent;
}
.slider__pagination {
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  width: 100%;
  right: 0;
  justify-content: center;
}
.slider__pagination label {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.712);
  border-radius: 50%;
  cursor: pointer;
}
.slider__pagination label.active {
  background: white !important;
  width: 8px !important;
  height: 8px !important;
}
</style>