<template>
    <div v-if="type == 'box'" :class="parentClass">
        <Skeletor width="100%" height="100px" :style="`border-radius: ${radius};`" v-bind="$attrs" />
    </div>
    <div v-if="type == 'three-line'" :class="parentClass">
        <Skeletor width="90%" height="10" class="mt-0_5" />
        <Skeletor width="80%" class="mt-0_5" height="10" />
        <Skeletor width="70%" class="mt-0_5" height="10" />
    </div>
    <div v-if="type == 'text-box'" v-bind="$attrs">
        <Skeletor width="100%" height="100px" v-bind="$attrs" :style="`border-radius: ${radius};`" />
        <Skeletor width="90%" height="10" class="mt-0_5" />
        <Skeletor width="80%" class="mt-0_5" height="10" />
        <Skeletor width="70%" class="mt-0_5" height="10" />
    </div>
    <div v-if="type == 'avatar'" v-bind="$attrs" style="display: flex;flex-direction: row;gap: .5rem;">
        <div>
            <Skeletor circle size="48" />
        </div>
        <div class="w-full">
            <Skeletor width="90%" height="10" class="mt-0_5" />
            <Skeletor width="80%" class="mt-0_5" height="10" />
            <Skeletor width="70%" class="mt-0_5" height="10" />
        </div>
    </div>
</template>
  
<script >
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
export default {
    name: "App",
    components: {
        Skeletor,
    },
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: "box",
        },
        radius: {
            type: String,
            default: "5px",
        },
        parentClass: {
            type: String,
            default: "",
        },
    },
};
</script>
  
<style scoped>

.mt-0_5{
    margin-top: .5rem;
}
.w-full{
    width: 100%;
}
</style>