<template>
    <nuxt-img placeholder v-if="showDefaultPlaceHolder" loading="lazy" />
    <nuxt-img :placeholder="placeHolderImage" v-else />
</template>

<script setup >
import placeHolderImage from "~/assets/images/default.jpg";

defineProps({
    // src: {
    //     required: true,
    //     type: String
    // },
    showDefaultPlaceHolder: {
        default: false,
        type: Boolean
    }
})
</script>