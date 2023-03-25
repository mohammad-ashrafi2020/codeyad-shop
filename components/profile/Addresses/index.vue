<template>
    <div class="user-address-items">
        <template v-if="initLoading">
            <div class="user-address-item" v-for="item in [1, 2, 3]">
                <base-skeleton-loading height="200px" />
            </div>
        </template>
        <template v-else>
            <div :class="['user-address-item', { 'active': item.activeAddress },
                { 'disabled': loading }]" v-for="item in addresses" :key="item.id">
                <div class="custom-radio-box">
                    <label for="userAddress01" class="custom-radio-box-label" @click.self="setActiveAddress(item.id)"
                        :data-placeholder="item.activeAddress ? 'آدرس پیش فرض من است' : 'انتخاب به عنوان آدرس پیش فرض'">

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
                                data-remodal-target="remove-from-addresses-modal" @click="openDeleteModal(item.id)">حذف</a>
                            <span class="text-secondary mx-2">|</span>
                            <a href="#" @click="editAddress(item)" class="link border-bottom-0 fs-7 fw-bold">ویرایش</a>
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
        </template>


        <base-modal v-model="isOpenCreateModal" title="افزودن آدرس جدید">
            <profile-addresses-add @close-modal="refreshData" />
        </base-modal>
        <base-modal v-model="isOpenEditModal" title="ویرایش آدرس">
            <profile-addresses-edit @close-modal="refreshData" :address="selectedAddres!" />
        </base-modal>
        <base-dialog @confirmed="deleteAddress" v-model="isOpenDeleteModal" :loading="loading">
            <p>
                آیا مطمئنید که این آدرس حذف شود؟
            </p>
        </base-dialog>
    </div>
</template>

<script setup lang="ts">
import { add } from "lodash";
import { Ref } from "vue";
import { useToast } from "vue-toastification";
import { AddressDto } from "~~/models/users/addressDto";
import { GetAddressList, SetActiveAddress, DeleteAddress } from '~~/services/userAddress.service';

const isOpenCreateModal = ref(false);
const isOpenEditModal = ref(false);
const isOpenDeleteModal = ref(false);

const emits = defineEmits(['selectedAddress']);
const initLoading = ref(false);

const selectedAddressId = ref(0);
const addresses: Ref<AddressDto[]> = ref([]);
const selectedAddres: Ref<AddressDto | null> = ref(null);
const loading = ref(false);
const toast = useToast();

const refreshData = async () => {
    isOpenCreateModal.value = false;
    isOpenEditModal.value = false;
    await getAddresses();
}
onMounted(async () => {
    await getAddresses();
})


const editAddress = (address: AddressDto) => {
    selectedAddres.value = address;
    isOpenEditModal.value = true;
}
const getAddresses = async () => {
    initLoading.value = true;

    var result = await GetAddressList();
    initLoading.value = false;
    addresses.value = result.data;
    emits('selectedAddress', addresses.value.find(f => f.activeAddress))

}
const deleteAddress = async () => {
    if (selectedAddressId.value == 0)
        return;

    loading.value = true;
    var result = await DeleteAddress(selectedAddressId.value);
    loading.value = false;

    if (result.isSuccess) {
        toast.success("حذف با موفقیت انجام شد");
        isOpenDeleteModal.value = false;
        addresses.value = addresses.value.filter(f => f.id != selectedAddressId.value);
        selectedAddressId.value = 0;
    } else {
        toast.success(result.metaData.message);
    }
}
const openDeleteModal = (id: number) => {
    isOpenDeleteModal.value = true;
    selectedAddressId.value = id;
}
const setActiveAddress = async (id: number) => {
    loading.value = true;
    var res = await SetActiveAddress(id);
    loading.value = false;
    if (res.isSuccess) {
        toast.success("عملیات با موفقیت انجام شد");
        addresses.value.map(f => {
            f.activeAddress = false
        });
        addresses.value.find(f => f.id == id)!.activeAddress = true;
        emits('selectedAddress', addresses.value.find(f => f.id == id))
    } else {
        toast.success(res.metaData.message)
    }
}
</script>


<style scoped>
.user-address-item.disabled {
    filter: blur(10px);
    position: relative;
    cursor: no-drop;
    z-index: 1;

}

.user-address-item.disabled::after {
    content: "";
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    right: 0;
    top: 0;
}

.custom-radio-box-label {
    cursor: pointer;
}

.user-address-item.active .custom-radio-box-label {
    border-color: #2962ff !important;
}

.user-address-item.active .custom-radio-box-label::after {
    color: #2962ff !important;
}
</style>