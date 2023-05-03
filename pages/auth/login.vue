<template>
  <div class="auth-container">

    <Head>
      <Title>ورود به حساب</Title>
    </Head>
    <div class="auth-title mb-3">ورود به حساب</div>
    <div class="auth-box ui-box">
      <Form @submit="loginUser" :validation-schema="loginSchema" class="auth-form" v-slot="{ meta }">
        <base-input name="phoneNumber" class="mb-3" label="شماره تلفن" v-model="loginData.phoneNumber"
          placeholder="شماره تلفن خود را وارد کنید" />
        <base-input name="password" type="password" label="کلمه عبور" v-model="loginData.password" class="mb-3"
          placeholder="کلمه عبور  را وارد کنید" />
        <div class="form-element-row mb-3">
          <base-button w-full :disabled="meta.valid == false || loading" :loading="loading">ورود به حساب</base-button>
        </div>
        <div class="form-element-row">
          <div>
            حساب کاربری ندارید ؟
            <nuxt-link to="/auth/register" class="link">ثبت نام در سایت</nuxt-link>
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
import * as Yup from "yup";
import { Login } from "~~/services/auth.service";
import { useAuthStore } from "~~/stores/authStore";
import { useShopCartStore } from "~~/stores/shopCartStore";

definePageMeta({
  layout: "auth",
});

const authStore = useAuthStore();
const cartStore = useShopCartStore();

const loading = ref(false);
const loginData = reactive({
  phoneNumber: "",
  password: "",
});
const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required()
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required(),
});
const router = useRouter();

const loginUser = async (data: any, formEvent: any) => {
  loading.value = true;
  var result = await Login(loginData.phoneNumber, loginData.password);
  loading.value = false;

  if (result.isSuccess) {
    localStorage.setItem("auth-data", JSON.stringify(result.data));
    authStore.SetCurrentUserValue();
    cartStore.syncRemoteCart();
    var returnTo = router.currentRoute.value.query.returnTo?.toString();
    if (returnTo) {
      await router.push(returnTo);
    } else {
      await router.push("/");
    }
  } else {
    formEvent.setFieldError(
      "phoneNumber",
      "کاربری با مشخصات وارد شده یافت نشد"
    );
  }
};
</script>

<style></style>