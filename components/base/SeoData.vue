<template>
    <Head>
        <Title>{{ seoData.metaTitle }}</Title>
        <Meta name="og:title" :content="seoData.metaTitle" />
        <Meta name="twitter:title" :content="seoData.metaTitle" />

        <Meta name="description" :content="seoData.metaDescription" />
        <Meta name="og:description" :content="seoData.metaDescription" />
        <Meta name="twitter:description" :content="seoData.metaDescription" />

        <Meta name="keywords" :content="seoData.metaKeyWords" />

        <Meta rel="canonical" :href="seoData.canonical" v-if="seoData.canonical" />
        <meta content="index , follow" name="robots" v-if="seoData.indexPage" />
        <meta content="noindex , nofollow" name="robots" v-else />
        <slot />
    </Head>
</template>

<script  setup lang="ts">
import { SeoData } from '~~/models/SeoData';


defineProps<{
    seoData: SeoData
}>()
</script>
