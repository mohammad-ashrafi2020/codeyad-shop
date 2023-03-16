<template>
  <BaseCarousel class="main__slider" :items="data" :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation, SwiperPagination]"
    :navigation="{
      enabled: true,
    }" :pagination="{
  enabled: true,
  clickable: true,
  dynamicBullets: true
}" :autoplay="{
  delay: 3000,
}" :slides-per-view="1" :loop="true" :effect="'fade'">

    <template #item="{ item }">
      <a class="carousel__item" :href="item.link">
        <img :src="GetSliderImage(item.imageName)" :alt="item.title" />
      </a>
    </template>


  </BaseCarousel>
</template>

<script setup lang="ts">
import { SliderDto } from "~~/models/home/homeDataDto";
import { GetSliderImage } from "~~/utilities/ImageUrls";
defineProps<{
  data: SliderDto[];
}>();
</script>

<style >
@media screen and (max-width:990px) {
  .carousel__item img {
    height: auto !important;
  }
}

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

.main__slider .swiper-button-next::after,
.main__slider .swiper-button-prev:after {
  color: white !important;
  font-size: 24px !important;
  font-weight: bold !important;
}

.main__slider .swiper-button-prev,
.main__slider .swiper-button-next {
  width: 55px !important;
  height: 55px !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
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

.pag__item {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.712);
  border-radius: 50%;
  cursor: pointer;
  display: block;
}

.main__slider .swiper-pagination-bullet-active {
  background: white !important;
}
</style>