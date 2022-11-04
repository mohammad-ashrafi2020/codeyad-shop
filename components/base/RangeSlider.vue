<template>
    <div class="range__filter level-filter level-req">
        <div id="rangeSlider" class="range-slider">
            <div class="range-group">
                <input class="range-input" :min="min" :max="max" :step="step" v-model="modelValue[0]" type="range"
                    @mouseup="changePrice" @touchend="changePrice" />
                <input class="range-input" :min="min" :max="max" :step="step" v-model="modelValue[1]" type="range"
                    @mouseup="changePrice" @touchend="changePrice" />
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "#imports";
const {
    min = 0,
    max = 1000000,
    step = 1,
    modelValue,
} = defineProps<{
    min?: number;
    max?: number;
    step?: number;
    modelValue: string[] | number[];
}>();

const emit = defineEmits(["valueChanged"]);

const changePrice = () => {
    emit("valueChanged");
};
</script>
  
  
<style scoped>
.range-slider {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}

.range-slider label {
    color: #fff;
    font-size: 13px;
}

.range-slider .number-group {
    flex: 1 0 auto;
    text-align: right;
    height: 30px;
    font-weight: 300;
    font-size: 13px;
    color: #fff;
}

.range-slider .number-group .number-input {
    width: 36px;
    height: 30px;
    text-align: center;
    color: #2962ff;
    background-color: #3d3e3f;
    border: 0;
}

.range-slider .number-group .number-input:first-of-type {
    margin-right: 7px;
}

.range-slider .number-group .number-input:last-of-type {
    margin-left: 7px;
}

.range-slider .number-group .number-input::-webkit-outer-spin-button,
.range-slider .number-group .number-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.range-slider .number-group .number-input:invalid,
.range-slider .number-group .number-input:out-of-range {
    border: 2px solid red;
}

.range-slider .range-group {
    position: relative;
    flex: 0 0 100%;
    height: 47px;
}

.range-slider .range-group .range-input {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: 0;
    -webkit-appearance: none;
    width: 100%;
    border-bottom: 0;
}

.range-slider .range-group .range-input:focus {
    outline: 0;
}

.range-slider .range-group .range-input::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    -webkit-animation: 0.2s;
    animation: 0.2s;
    background: #2962ff;
    border-radius: 18px;
    border: 0;
}

.range-slider .range-group .range-input::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #2962ff;
    border: 6px solid white;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    -webkit-appearance: none;
    top: -8px;
}

.range-slider .range-group .range-input::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animation: 0.2s;
    background: #3faffa;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
}

.range-slider .range-group .range-input::-moz-range-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #3faffa;
    cursor: pointer;
}

.range-slider .range-group .range-input::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animation: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

.range-slider .range-group .range-input::-ms-fill-lower,
.range-slider .range-group .range-input::-ms-fill-upper {
    background: #3faffa;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
}

.range-slider .range-group .range-input::-ms-thumb {
    z-index: 2;
    position: relative;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #3faffa;
    cursor: pointer;
}

.range-slider,
.range__filter {
    margin: 0 auto 30px;
}
</style>