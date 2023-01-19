<template>
    <div class="user-address-items">
        <div class="user-address-item" v-for="item in addresses" :key="item.id">
            <div class="custom-radio-box">
                <label for="userAddress01" class="custom-radio-box-label"
                    data-placeholder="انتخاب به عنوان آدرس پیش فرض" data-placeholder-checked="آدرس پیش فرض من است">
                    <span class="d-block user-address-recipient mb-2">{{ item.shire }}، {{ item.city }}
                    </span>
                    <span class="d-block user-contact-items fa-num mb-3">
                        <span class="user-contact-item">
                            <i class="ri-mail-line icon"></i>
                            <span class="value">{{ item.nationalCode }}</span>
                        </span>
                        <span class="user-contact-item">
                            <i class="ri-phone-line icon"></i>
                            <span class="value">{{ item.phoneNumber }}</span>
                        </span>
                        <span class="user-contact-item">
                            <i class="ri-user-line icon"></i>
                            <span class="value">{{ item.name }} {{ item.family }}</span>
                        </span>
                    </span>
                    <span class="d-flex align-items-center justify-content-end">
                        <a href="#" class="link border-bottom-0 fs-7 fw-bold"
                            data-remodal-target="remove-from-addresses-modal">حذف</a>
                        <span class="text-secondary mx-2">|</span>
                        <a href="#" class="link border-bottom-0 fs-7 fw-bold"
                            data-remodal-target="edit-address-modal">ویرایش</a>
                    </span>
                </label>
            </div>
        </div>

        <div class="user-address-item user-add-address-btn-container">
            <button class="user-add-address-btn" @click="isOpenCreateModal = true">
                <i class="ri-add-line icon"></i>
                <span>آدرس جدید</span>
            </button>
        </div>
        <base-modal v-model="isOpenCreateModal" title="افزودن آدرس جدید">
            <profile-addresses-add @close-modal="refreshData" />
        </base-modal>
    </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { AddressDto } from "~~/models/users/addressDto";
import { GetAddressList } from '~~/services/userAddress.service';

const isOpenCreateModal = ref(false);

const addresses: Ref<AddressDto[]> = ref([]);


const refreshData = async () => {
    isOpenCreateModal.value = false;
    await getAddresses();
}
onMounted(async () => {
    await getAddresses();
})

const getAddresses = async () => {
    var result = await GetAddressList();
    addresses.value = result.data;
}
</script>