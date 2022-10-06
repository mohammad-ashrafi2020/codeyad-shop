<template>
  <div>
    <div class="buttons">
      <h4>Button And Modal</h4>
      <div class="d-flex gap-2">
        <base-button outline size="lg" @click="isOpenModal = true">
          ثبت نام کاربر
        </base-button>
        <base-button outline size="sm" @click="isOpenModal = true">
          ثبت نام کاربر
        </base-button>
        <base-button @click="isOpenModal = true"> ثبت نام کاربر </base-button>
        <base-button outline color="danger" @click="isOpenModal = true">
          ثبت نام کاربر
        </base-button>
        <base-button color="success" @click="isOpenModal = true">
          ثبت نام کاربر
        </base-button>
      </div>
      <base-modal v-model="isOpenModal">
        <h1>salam</h1>
        <template #footer>
          <base-button>ثبت نام</base-button>
        </template>
      </base-modal>
    </div>
    <hr />
    <h4>Show More</h4>
    <base-show-more>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
      حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
      شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
      پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
      دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
      نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
      موجود طراحی اساسا مورد استفاده قرار گیرد.
    </base-show-more>
    <hr />
    <h4>Input</h4>

    <Form :validation-schema="formSchema">
      <base-input name="email" v-model="email" label="ایمیل" />
      {{ email }}
    </Form>
  </div>
</template>

<script setup lang="ts">
import * as Yup from "yup";
import { Form } from "vee-validate";
const isOpenModal = ref(false);
const email = ref("");
const formSchema = Yup.object().shape({
  email: Yup.string().required().email(),
});
</script>

<style>
</style>