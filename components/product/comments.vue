<template>
    <div>
        <div class="product-tab-title mb-0">
            <h2>امتیاز و دیدگاه کاربران</h2>
            <h3 class="subtitle">{{ props.singleProductDto.productDto.title }}</h3>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-5 mb-3">
                <div class="ui-sticky ui-sticky-top pt-5 z-index-0">
                    <div class="comments-sidebar">
                        <div class="comments-sidebar-rating">
                            <div class="comments-sidebar-rating-main me-2">{{
                                    Number(props.singleProductDto.rate).toFixed(1)
                            }}</div>
                            <div class="comments-sidebar-rating-desc">از ۵</div>
                        </div>
                        <div class="comments-sidebar-rating-bottom">
                            <div class="stars-container justify-content-end">
                                <div class="stars-text ms-2">از مجموع
                                    {{ splitNumber(props.singleProductDto.commentsCount) }} امتیاز</div>
                                <div class="stars">
                                    <div class="stars-val" :style="{ width: `${rateIn100}%` }"></div>
                                </div>
                            </div>
                        </div>
                        <div class="content-expert-rating mt-4">
                            <div class="mb-3">
                                <div class="content-expert-rating-title">کیفیت ساخت</div>
                                <div class="content-expert-rating-value-wrapper">
                                    <div class="content-expert-rating-value" :style="{ width: `${rateIn100}%` }">
                                    </div>
                                    <div class="content-expert-rating-value-label">{{ rate }}</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="content-expert-rating-title">ارزش خرید به نسبت قیمت
                                </div>
                                <div class="content-expert-rating-value-wrapper">
                                    <div class="content-expert-rating-value" :style="{ width: `${rateIn100}%` }">
                                    </div>
                                    <div class="content-expert-rating-value-label">{{ rate }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="content-expert-rating-title">نوآوری</div>
                                <div class="content-expert-rating-value-wrapper">
                                    <div class="content-expert-rating-value" :style="{ width: `${rateIn100}%` }">
                                    </div>
                                    <div class="content-expert-rating-value-label">{{ rate }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="content-expert-rating-title">امکانات و قابلیت ها</div>
                                <div class="content-expert-rating-value-wrapper">
                                    <div class="content-expert-rating-value" :style="{ width: `${rateIn100}%` }">
                                    </div>
                                    <div class="content-expert-rating-value-label">{{ rate }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="content-expert-rating-title">سهولت استفاده</div>
                                <div class="content-expert-rating-value-wrapper">
                                    <div class="content-expert-rating-value " :style="{ width: `${rateIn100}%` }">
                                    </div>
                                    <div class="content-expert-rating-value-label">{{ rate }}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="content-expert-rating-title">طراحی و ظاهر</div>
                                <div class="content-expert-rating-value-wrapper">
                                    <div class="content-expert-rating-value" :style="{ width: `${rateIn100}%` }">
                                    </div>
                                    <div class="content-expert-rating-value-label">{{ rate }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">دیدگاه خود را درباره این کالا بیان کنید</div>
                        <button @click="isOpenModal = true" class="btn btn-block btn-outline-primary">افزودن
                            دیدگاه</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-7 pt-5">
                <div class="comments">
                    <div class="comment" v-for="item in commentResult" :key="item.id">
                        <div class="comment-header">
                            <span>{{ item.userFullName }}</span>
                            <span> | {{ getPersianDate(new Date(item.creationDate), "y/M/dd") }}</span>
                        </div>
                        <div class="comment-body">
                            <p v-text="item.text"></p>
                            <ul>
                                <template v-for="(ad, index) in item.advantages" :key="index">
                                    <li v-if="ad" class="comment-evaluation positive">
                                        {{ ad }}
                                    </li>
                                </template>
                                <template v-for="(disAd, index) in item.disadvantages" :key="index">
                                    <li v-if="disAd" class="comment-evaluation negative">{{ disAd }}</li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <base-modal title="افزودن دیدگاه" v-model="isOpenModal">
            <product-send-comment :product-id="singleProductDto.productDto.id" @close-modal="refreshComments" />
        </base-modal>
    </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { CommentDto } from "~~/models/comments/commentDto";
import { SingleProductDto } from "~~/models/products/singleProductDto";
import { GetProductComments } from "~~/services/comment.service";
import { splitNumber } from "~~/utilities/numberUtils";
import { getPersianDate } from "~~/utilities/dateUtils";

const props = defineProps<{
    singleProductDto: SingleProductDto
}>();

const commentResult: Ref<CommentDto[]> = ref([]);
const rate = Number(props.singleProductDto.rate).toFixed(1);
const rateIn100 = (parseFloat(rate) / 5) * 100;
const isOpenModal = ref(false);
onMounted(async () => {
    await getComments();
})
const refreshComments = async () => {
    isOpenModal.value = false;
    await getComments();
}

const getComments = async () => {
    var res = await GetProductComments(props.singleProductDto.productDto.id);
    commentResult.value = res.data.data ?? [];
}
</script>

<style>

</style>