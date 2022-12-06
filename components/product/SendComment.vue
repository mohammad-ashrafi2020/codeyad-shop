<template>
    <div class="row mt-5">
        <div class="col-md-5 mb-md-0 mb-4">
            <div class="row comments-product-attributes mb-5">
                <div class="col-md-12 text-center">
                    <div class="comments-product-attributes-title">امتیاز شما به محصول</div>
                    <input id="rateSlider" type="text" />
                </div>
            </div>
            <div class="user__recommended">
                <div @click="formData.userRecommendedStatus = UserRecommendedStatus.پیشنهاد_میکنم"
                    :class="['recomended__item', { active: formData.userRecommendedStatus == UserRecommendedStatus.پیشنهاد_میکنم }]">
                    <icons-like
                        :color="formData.userRecommendedStatus == UserRecommendedStatus.پیشنهاد_میکنم ? '#19bfd3' : '#a1a3a8'" />
                    <p>پیشنهاد میکنم</p>
                </div>
                <div @click="formData.userRecommendedStatus = UserRecommendedStatus.مطمئن_نیستم"
                    :class="['recomended__item', { active: formData.userRecommendedStatus == UserRecommendedStatus.مطمئن_نیستم }]">
                    <icons-question :color="formData.userRecommendedStatus == UserRecommendedStatus.
                    مطمئن_نیستم ? '#19bfd3' : '#a1a3a8'" />
                    <p>مطمئن نیستم</p>
                </div>
                <div @click="formData.userRecommendedStatus = UserRecommendedStatus.پیشنهاد_نمی_کنم"
                    :class="['recomended__item', { active: formData.userRecommendedStatus == UserRecommendedStatus.پیشنهاد_نمی_کنم }]">
                    <icons-dis-like
                        :color="formData.userRecommendedStatus == UserRecommendedStatus.پیشنهاد_نمی_کنم ? '#19bfd3' : '#a1a3a8'" />
                    <p>پیشنهاد نمی‌کنم</p>
                </div>
            </div>
            <div class="add-comment-product">
                <div class="form-element-row mb-3">
                    <label class="label">نقاط قوت</label>
                    <div class="add-point-container" id="advantages">
                        <div class="add-point-field">
                            <input ref="advantage" type="text" class="form-control" @keypress.enter="AddAdvantage"
                                autocomplete="off">
                            <base-button type="button" @click="AddAdvantage" class="btn-add-point js-icon-form-add">
                                <i class="ri-add-line"></i>
                            </base-button>
                        </div>
                        <div class="comment-dynamic-labels js-advantages-list">
                            <div class="ui-dynamic-label ui-dynamic-label--positive js-advantage-item"
                                v-for="(item, index) in formData.advantage" :key="index">
                                {{ item }}
                                <button type="button" class="ui-dynamic-label-remove js-icon-form-remove"
                                    @click="removeAdvantage(index)">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-element-row mb-3">
                    <label class="label">نقاط ضعف</label>
                    <div class="add-point-container" id="disadvantages">
                        <div class="add-point-field">
                            <input type="text" class="form-control" @keypress.enter="AddDisAdvantage" ref="disAdvantage"
                                autocomplete="off">
                            <base-button type="button" @click="AddDisAdvantage" class="btn-add-point js-icon-form-add">
                                <i class="ri-add-line"></i>
                            </base-button>

                        </div>
                        <div class="comment-dynamic-labels js-disadvantages-list">
                            <div class="ui-dynamic-label ui-dynamic-label--negative js-disadvantage-item"
                                v-for="(item, index) in formData.disadvantage" :key="index">
                                {{ item }}
                                <button type="button" @click="removeDisAdvantage(index)"
                                    class="ui-dynamic-label-remove js-icon-form-remove">
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                <base-text-area label="متن نظر شما (اجباری)" v-model="formData.text" name="text" />
                <span class="text-danger" v-if="showerrorMessage">متن نظر را وارد کنید</span>
            </div>
            <div class="text-end mb-3 mt-3">
                <base-button @click="sendComment" type="submit" :loading="loading">
                    ثبت نظر <i class="ri-send-plane-fill ms-2"></i>
                </base-button>

            </div>
        </div>
        <div class="col-md-7">
            <div class="fs-5 fw-bold text-dark mb-3">
                دیگران را با نوشتن نظرات خود، برای انتخاب این محصول راهنمایی کنید.
            </div>
            <div class="fs-7 fw-bold text-info mb-3">
                لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
            </div>
            <ul class="ps-4 text-secondary">
                <li class="mb-3">لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با بیانی رسمی و
                    عاری از لحن
                    تند، تمسخرو توهین باشد.</li>
                <li class="mb-3">از ارسال لینک‌های سایت‌های دیگر و ارایه‌ی اطلاعات شخصی خودتان مثل
                    شماره تماس،
                    ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.</li>
                <li class="mb-3">در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی
                    اطلاعات مشخص و
                    دقیق برای راهنمایی سایر کاربران در فرآیند خرید یک محصول توسط ایشان است.</li>
                <li class="mb-3">با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست راهنمایی در
                    این بخش
                    خودداری کرده و سوالات خود را در بخش «پرسش و پاسخ» مطرح کنید.</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { Ref } from "vue";
import * as Yup from "yup"
import { number } from "yup/lib/locale";
import { SendCommentDto, UserRecommendedStatus } from "~~/models/comments/commentDto";
import { AddComment } from "~~/services/comment.service";
import { useAuthStore } from "~~/stores/authStore";

const props = defineProps({
    productId: {
        type: Number,
        required: true
    }
});
const emits = defineEmits(['closeModal']);

const loading = ref(false);
const advantage = ref(null);
const disAdvantage = ref(null);
const authStore = useAuthStore();
const showerrorMessage = ref(false);

const formData = reactive({
    text: "",
    advantage: [],
    disadvantage: [],
    rate: 0,
    userRecommendedStatus: UserRecommendedStatus.پیشنهاد_میکنم
});

const sendComment = async () => {
    if (!formData.text || formData.text == " ") {
        showerrorMessage.value = true;
        return;
    }
    const command = {
        rate: getRateSliderValue(),
        text: formData.text,
        userId: authStore.currentUser.id,
        productId: props.productId,
        userRecommendedStatus: formData.userRecommendedStatus,
        advantages: formData.advantage.toString().replaceAll(',', '-'),
        disadvantages: formData.disadvantage.toString().replaceAll(',', '-')
    } as SendCommentDto;

    loading.value = true;
    var res = await AddComment(command);
    loading.value = false;

    if (res.isSuccess) {
        emits("closeModal");
        //Toast
    } else {
        //Toast
    }
}
watch(() => formData.text, (val) => {
    if (val) {
        showerrorMessage.value = false;
    }
})
const AddAdvantage = () => {
    var text = advantage.value.value;
    if (text) {
        formData.advantage.push(text);
        advantage.value.value = "";
    }
}
const AddDisAdvantage = () => {
    var text = disAdvantage.value.value;
    if (text) {
        formData.disadvantage.push(text);
        disAdvantage.value.value = "";
    }
}
const removeAdvantage = (index) => {
    formData.advantage.splice(index, 1);
}
const removeDisAdvantage = (index) => {
    formData.disadvantage.splice(index, 1);
}

onMounted(() => {
    setTimeout(() => {
        InitRateSlider();
    }, 300
    );
})
</script>

<style scoped>
.user__recommended {
    display: flex;
    gap: .5rem;
    flex-direction: row;
    margin-bottom: 1rem;
    justify-content: center;
}

.recomended__item.active {
    border-color: #19bfd3;
    color: #19bfd3;

}

.recomended__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
    color: #a1a3a8;
    border: 1px solid #f0f0f1;
    padding: 1rem .5rem;
    font-size: 12px;
    border-radius: .5rem;
    cursor: pointer;
}

.recomended__item p {
    margin: 0;
}
</style>