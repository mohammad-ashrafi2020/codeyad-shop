<template>
  <div class="auth-container">
    <Head>
      <Title>ثبت نام در سایت</Title>
    </Head>
    <div class="auth-title mb-3">ثبت نام در سایت</div>
    <div class="auth-box ui-box">
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        class="auth-form"
        v-slot="{ meta }"
      >
        <base-input
          name="phoneNumber"
          class="mb-3"
          label="شماره تلفن"
          v-model="registerData.phoneNumber"
          placeholder="شماره تلفن خود را وارد کنید"
        />
        <base-input
          name="password"
          type="password"
          label="کلمه عبور"
          class="mb-3"
          v-model="registerData.password"
          placeholder="کلمه عبور  را وارد کنید"
        />
        <base-input
          name="confirmPassword"
          type="password"
          label="تکرار کلمه عبور"
          class="mb-3"
          v-model="registerData.confirmPassword"
          placeholder="تکرار کلمه عبور  را وارد کنید"
        />
        <div class="form-element-row mb-3">
          <base-button
            type="submit"
            :disabled="meta.valid == false || loading"
            w-full
            :loading="loading"
          >
            ثبت نام درسایت
          </base-button>
        </div>
        <div class="form-element-row">
          <div>
            قبلا ثبت نام کرده اید ؟
            <nuxt-link to="/auth/login" class="link">ورود به سایت</nuxt-link>
          </div>
        </div>
        <div class="form-element-row">
          <hr />
          <div>
            با ورود و یا ثبت نام در سایت شما
            <a href="#" class="link">شرایط و قوانین</a> استفاده از تمام سرویس
            های سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را
            می‌پذیرید.
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { Form } from "vee-validate";
import { RegisterCommandDTo } from "~~/models/auth/registerDTo";
import { RegisterUser } from "~~/services/auth.service";
import * as Yup from "yup";
definePageMeta({
  layout: "auth",
});
const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required()
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "کلمه های عبور یکسان نیستند"
  ),
});
const registerData: RegisterCommandDTo = reactive({
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});
const loading = ref(false);
const router = useRouter();

const register = async () => {
  loading.value = true;
  var result = await RegisterUser(registerData);
  loading.value = false;
  if (result.isSuccess) {
    router.push("/auth/login");
    //Toast
  } else {
    // Toast
    alert(result.metaData.message);
  }
};
</script>
  
  <style>
</style>