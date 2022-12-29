<template>
    <Form @submit="editUser">
        <div class="row">
            <div class="col-md-6 mt-2">
                <BaseInput v-model="userData.name" name="userName" label="نام" />
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
        <base-button type="submit" :loading="loading" class="mt-4 float-end">ویرایش اطلاعات</base-button>
    </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { Gender } from "~~/models/users/userDto";
import { EditUser } from "~~/services/user.service";
import { useAuthStore } from "~~/stores/authStore";
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
const router = useRouter();


const editUser = async () => {
    var formData = new FormData();
    formData.append("Name", userData.name);
    formData.append("Family", userData.family);
    formData.append("PhoneNumber", userData.phoneNumber);
    formData.append("Email", userData.email);
    formData.append("Gender", userData.gender.toString());

    loading.value = true;
    var result = await EditUser(formData);
    loading.value = false;
    if (result.isSuccess) {
        authStore.SetCurrentUserValue();
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