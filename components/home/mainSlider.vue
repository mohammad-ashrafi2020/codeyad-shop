<template>
  <BaseCarousel class="main__slider" effect="fade" :loop="true"
    :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation, SwiperPagination]" :items="data" 
    :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true
    }" :navigation="{
  enabled: true
}" :pagination="{
  enabled: true,
  clickable: true,
  dynamicBullets: true,
}" :itemsToShow="1">
    <template #item="{ item }">
      <a class="carousel__item" :href="item.link">
        <base-image :src="GetSliderImage(item.imageName)" :alt="item.title" />
      </a>
    </template>
  </BaseCarousel>
</template>

<script setup lang="ts">
import { SliderDto } from "~~/models/home/homeDataDto";
import { GetSliderImage } from "~~/utilities/ImageUrls";
const props = defineProps<{
  data: SliderDto[];
}>();
</script>

<style>
@media screen and (max-width:990px) {
  .main__slider .carousel__item img {
    height: auto !important;
  }
}

.main__slider .carousel__item {
  border-radius: 15px;
  width: 100%;
}

.main__slider .carousel__item img {
  height: 455px;
  border-radius: 15px;
  width: 100%;
}

.main__slider .carousel__slide {
  padding: 0;
  border-radius: 15px !important;
}

.main__slider .swiper-button-prev::after,
.main__slider .swiper-button-next:after {
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

.slider__pagination label {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.712);
  border-radius: 50%;
  cursor: pointer;
}

.main__slider .swiper-pagination-bullet-active-main {
  background: white !important;
}

.pag__active {}
</style>