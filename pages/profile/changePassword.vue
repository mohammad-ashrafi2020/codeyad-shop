<template>
    <Form @submit="changePassword" :validation-schema="validationSchema" v-slot="{meta}">
        <div class="row">
            <div class="col-md-12 mt-2">
                <BaseInput type="password" v-model="userData.currentPassword" name="currentPassword" label="کلمه عبور فعلی" />
            </div>
            <div class="col-md-6 mt-2">
                <BaseInput type="password" v-model="userData.password" name="password" label="کلمه عبور جدید" />
            </div>
            <div class="col-md-6 mt-2">
                <BaseInput type="password" v-model="userData.confirmPassword" name="confirmPassword" label="تکرار کلمه عبور " />
            </div>
        </div>
        <base-button type="submit" :disabled="(meta.valid == false || loading)" :loading="loading"
            class="mt-4 float-end">ویرایش
            اطلاعات</base-button>
    </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { Gender } from "~~/models/users/userDto";
import { ChangePassword } from "~~/services/user.service";
import { useAuthStore } from "~~/stores/authStore";
import * as Yup from "yup";
import { useToast } from "vue-toastification";
import { ChangePasswordDto } from "~~/models/users/chanePasswordDto";

definePageMeta({
    layout: "profile"
});
const authStore = useAuthStore();
const loading = ref(false);
const userData = reactive<ChangePasswordDto>({
    currentPassword: "",
    password: "",
    confirmPassword: ""
});

const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required().label('کلمه عبور فعلی'),
    password: Yup.string().required().min(6).label('کلمه عبور جدید'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'کلمه های عبور یکسان نیستند')
        .required().label('تکرار کلمه عبور'),
});

const router = useRouter();
const toastr = useToast();


const changePassword = async () => {

    loading.value = true;
    var result = await ChangePassword(userData);
    loading.value = false;
    if (result.isSuccess) {
        authStore.SetCurrentUserValue();
        toastr.success('عملیات با موفقیت انجام شد')
        router.push('/profile');
    } else {
        toastr.error(result.metaData.message)
    }
}

onMounted(() => {
});

</script>