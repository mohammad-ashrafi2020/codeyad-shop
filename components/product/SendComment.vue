<template>
    <div class="row mt-5">
        <form @submit.prevent="sendComment" :validation-schema="validationSchema" class="col-md-5 mb-md-0 mb-4">
            <div class="row comments-product-attributes">
                <div class="col-md-12 text-center">
                    <div class="comments-product-attributes-title">امتیاز شما به محصول</div>
                    <input id="rateSlider" type="text" />
                </div>
            </div>
            <div class="add-comment-product">
                <div class="form-element-row mb-3">
                    <label class="label">نقاط قوت</label>
                    <div class="add-point-container" id="advantages">
                        <div class="add-point-field">
                            <input ref="advantage" type="text" class="form-control" @keypress.enter="AddAdvantage"
                                autocomplete="off">
                            <base-button @click="AddAdvantage" class="btn-add-point js-icon-form-add">
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
                                <input type="hidden">
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
                            <base-button @click="AddDisAdvantage" class="btn-add-point js-icon-form-add">
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
                                <input type="hidden" name="comment[advantages][]" value="dasdasd">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-element-row mb-3">
                    <label class="label">متن نظر شما (اجباری)</label>
                    <textarea name="text" v-model="formData.text" rows="5" class="form-control"
                        placeholder="متن نظر خود را بنویسید.."></textarea>
                </div>
                <div class="text-end mb-3">
                    <button class="btn btn-primary">ثبت نظر <i class="ri-send-plane-fill ms-2"></i></button>
                </div>
            </div>
        </Form>
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

const advantage = ref(null);
const disAdvantage = ref(null);
const authStore = useAuthStore();
const formData = reactive({
    text: "",
    advantage: [],
    disadvantage: [],
    rate: 0,
});
const validationSchema = Yup.object().shape({
    name: Yup.string().required()
})
const sendComment = async () => {
    const command = {
        rate: getRateSliderValue(),
        text: formData.text,
        userId: authStore.currentUser.id,
        productId: props.productId,
        userRecommendedStatus: UserRecommendedStatus.مطمئن_نیستم,
        advantages: " ",
        disadvantages: ""
    } as SendCommentDto;



    var res = await AddComment(command);
    if (res.isSuccess) {
        emits("closeModal");
        //Toast
    } else {
        //Toast
    }
}
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

<style>

</style>