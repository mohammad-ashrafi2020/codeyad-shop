<template>
    <div>
        <div class="product-tab-title mb-0">
            <h2>امتیاز و دیدگاه کاربران</h2>
            <h3 class="subtitle">{{ props.singleProductDto.productDto.title }}</h3>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-5 mb-3">
                <div class="ui-sticky ui-sticky-top pt-5 z-index-0">
                    <!-- start of comments-sidebar -->
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
                        <button class="btn btn-block btn-outline-primary">افزودن
                            دیدگاه</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-7 pt-5">
                <div class="filter-comments mb-4">
                    <div class="filter-comments-title me-2">
                        <i class="ri-list-settings-fill me-1"></i>
                        <span>مرتب سازی دیدگاه ها بر اساس:</span>
                    </div>
                    <div class="filter-comments-options">
                        <button class="filter-comments-option active">جدیدترین دیدگاه ها</button>
                        <button class="filter-comments-option">مفیدترین دیدگاه ها</button>
                        <button class="filter-comments-option">دیدگاه خریداران</button>
                    </div>
                </div>
                <div class="comments">
                    <div class="comment" v-for="item in commentResult" :key="item.id">
                        <div class="comment-header">
                            <span>{{ item.userFullName }}</span>
                            <span> | {{ getPersianDate(new Date(item.creationDate),"y/M/dd") }}</span>
                        </div>
                        <div class="comment-body">
                            <p v-text="item.text"></p>
                            <ul>
                                <li class="comment-evaluation positive" v-for="(passive, index) in item.advantages"
                                    :key="index">
                                    {{ passive }}
                                </li>
                                <li class="comment-evaluation negative" v-for="(negative, index) in item.disadvantages"
                                    :key="index">{{ negative }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

onMounted(async () => {
    var res = await GetProductComments(props.singleProductDto.productDto.id);
    commentResult.value = res.data.data ?? [];
})

</script>

<style>

</style>