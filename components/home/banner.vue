<template v-if="filterdBanners.length>0">
    <div class="row mb-3 d-sm-block d-none" v-if="position == BannerPosition.بالای_اسلایدر">
        <div class="col-12">
            <div class="banner-img">
                <a :href="filterdBanners[0].link">
                    <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner"
                        style="max-height: 80px;width: 100%;" :show-default-place-holder="true" />
                </a>
            </div>
        </div>
    </div>
    <div v-else-if="position == BannerPosition.سمت_چپ_اسلایدر" class="row">
        <div class="col-lg-12 col-6 mb-lg-3" v-for="(item, index) in filterdBanners.slice(0, 2)" :key="index">
            <div class="banner-img banner-side-main-slider bg-position-right">
                <a :href="item.link"
                    :style="{ height: '220px', 'background-image': `url(https://shop-api.codeyad-project.ir/images/banners/${filterdBanners[0].imageName})` }">
                    <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner" />
                </a>
            </div>
        </div>
    </div>
    <template v-else-if="position == BannerPosition.زیر_اسلایدر">
        <div class="col-md-6 mb-lg-0 mb-3" v-for="(item, index) in filterdBanners.slice(0, 2)" :key="index">
            <div class="banner-img">
                <a :href="item.link">
                    <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner" />
                </a>
            </div>
        </div>
    </template>
    <template v-if="position == BannerPosition.وسط_صفحه">
        <div class="col-md-3 col-6 mb-lg-0 mb-3" v-for="(item, index) in filterdBanners.slice(0, 4)" :key="index">
            <div class="banner-img">
                <a :href="item.link">
                    <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner" />
                </a>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import { BannerDto, BannerPosition } from '~~/models/home/homeDataDto';
import { GetBannerImage } from '~~/utilities/ImageUrls';


const props = defineProps<{
    banners: BannerDto[],
    position: BannerPosition
}>();
const filterdBanners = props.banners.filter(f => f.position == props.position);
</script>