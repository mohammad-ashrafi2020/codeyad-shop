<template>
    <Form @submit="editUser" :validation-schema="validationSchema" v-slot="{meta}">
        <div class="row">
            <div class="col-md-6 mt-2">
                <BaseInput v-model="userData.name" name="name" label="نام" />
            </div>
            <div class="col-md-6 mt-2">
                <BaseInput v-model="userData.family" name="family" label="نام خانوادگی" />
            </div>
            <div class="col-md-6 mt-2">
                <BaseInput v-model="userData.phoneNumber" name="phoneNumber" label="شماره تلفن" />
            </div>
            <div class="col-md-6 mt-2">
                <BaseInput v-model="userData.email" name="email" label="ایمیل" />
            </div>
            <div class="col-md-6 mt-2 form-element-row">
                <label class="label fs-7">جنسیت</label>
                <select v-model="userData.gender" class="form-control">
                    <option :value="Gender.نامشخص">نا مشخص</option>
                    <option :value="Gender.آقا">آقا</option>
                    <option :value="Gender.خانم">خانم</option>
                </select>
            </div>
            <div class="col-md-6 mt-2 form-element-row">
                <label class="label fs-7">آواتار</label>
                <input type="file" placeholder="انتخاب تصویر" name="avatar" :class="'form-control'" />
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
import { EditUser } from "~~/services/user.service";
import { useAuthStore } from "~~/stores/authStore";
import * as Yup from "yup";
import { useToast } from "vue-toastification";

definePageMeta({
    layout: "profile"
});
const authStore = useAuthStore();
const loading = ref(false);
const userData = reactive({
    name: "",
    family: "",
    email: "",
    phoneNumber: "",
    gender: Gender.نامشخص,
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('نام'),
    family: Yup.string().required().label('نام خانوادگی'),
    email: Yup.string().email().required().label('ایمیل'),
    //@ts-ignore
    phoneNumber: Yup.string().phoneNumber(),
});

const router = useRouter();
const toastr = useToast();


const editUser = async (data: any, e: any) => {
    var formData = new FormData();
    formData.append("Name", userData.name);
    formData.append("Family", userData.family);
    formData.append("PhoneNumber", userData.phoneNumber);
    formData.append("Email", userData.email);
    formData.append("Gender", userData.gender.toString());
    if (e.evt.target.avatar.files[0] != undefined) {
        formData.append("Avatar", e.evt.target.avatar.files[0]);
    }
    loading.value = true;
    var result = await EditUser(formData);
    loading.value = false;
    if (result.isSuccess) {
        authStore.SetCurrentUserValue();
        toastr.success('عملیات با موفقیت انجام شد')
        router.push('/profile');
    }
}

onMounted(() => {
    const user = authStore.currentUser;
    userData.email = user?.email ?? "";
    userData.phoneNumber = user?.phoneNumber ?? "";
    userData.name = user?.name ?? "";
    userData.family = user?.family ?? "";
    userData.gender = user?.gender ?? 0;
});
watch(() => authStore.currentUser, (user) => {
    userData.email = user?.email ?? "";
    userData.phoneNumber = user?.phoneNumber ?? "";
    userData.name = user?.name ?? "";
    userData.family = user?.family ?? "";
    userData.gender = user?.gender ?? 0;
});
</script>