<template>
    <Form @submit="AddAddress" class="row" :validation-schema="schema" v-slot="{ meta }">
        <div class="col-md-6">
            <base-input label="نام" v-model="model.name" name="name" />
        </div>
        <div class="col-md-6">
            <base-input label="نام خانوادگی" v-model="model.family" name="family" />
        </div>
        <div class="col-md-6">
            <base-input label="شهر" v-model="model.city" name="city" />
        </div>
        <div class="col-md-6">
            <base-input label="استان" v-model="model.shire" name="shire" />
        </div>
        <div class="col-md-6">
            <base-input label="کد پستی" v-model="model.postalCode" name="postalCode" />
        </div>
        <div class="col-md-6">
            <base-input label="شماره تلفن" v-model="model.phoneNumber" name="phoneNumber" />
        </div>
        <div class="col-md-6">
            <base-input label="کد ملی" v-model="model.nationalCode" name="nationalCode" />
        </div>
        <div class="col-md-6">
            <base-text-area label="آدرس پستی" v-model="model.postalAddress" name="postalAddress" />
        </div>

        <div class="col-12 d-flex justify-content-end">
            <base-button :loading="loading" type="submit" :disabled="meta.valid == false || loading">افزودن
                آدرس</base-button>
        </div>
    </Form>
</template>
<script setup lang="ts">
import { Form } from 'vee-validate';
import { CreateAddressDto } from '~~/models/users/addressDto';
import { CreateAddress } from '~~/services/userAddress.service';
import * as Yup from "yup";
import { useToast } from 'vue-toastification';

const loading = ref(false);
const emit = defineEmits(['closeModal']);
const model = reactive<CreateAddressDto>({
    city: "",
    shire: "",
    family: "",
    name: "",
    nationalCode: "",
    phoneNumber: "",
    postalAddress: "",
    postalCode: "",
});
const schema = Yup.object().shape({
    city: Yup.string().required().label('شهر'),
    shire: Yup.string().required().label('استان'),
    family: Yup.string().required().label('نام خانوادگی'),
    name: Yup.string().required().label('نام'),
    nationalCode: Yup.string()
        .min(10).max(10).required().label('کد ملی'),
    //@ts-ignore
    phoneNumber: Yup.string().phoneNumber().required().label('شماره تلفن'),
    postalAddress: Yup.string().required().label('آدرس پستی'),
    postalCode: Yup.string().required().label('کد پستی'),
});
const toast = useToast();

const AddAddress = async () => {
    loading.value = true;
    var result = await CreateAddress(model);
    loading.value = false;

    if (result.isSuccess) {
        toast.success("عملیات با موفقیت انجام شد")
        emit('closeModal')
    } else {
        toast.error(result.metaData.message)
    }
}
</script>
