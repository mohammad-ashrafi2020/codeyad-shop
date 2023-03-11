<template>
    <div class="row">
        <div class="col-xl-9 col-lg-8">
            <div class="tab-pane py-4 fade active show">
                <div class="ui-box bg-white p-2">
                    <div class="ui-box-title">
                        آدرس تحویل سفارش را انتخاب نمایید:
                    </div>
                    <div class="ui-box-content">
                        <ProfileAddresses @selected-address="(add) => selectedAddress = add" />
                    </div>
                </div>
            </div>

            <div class="tab-pane py-4 fade active show">
                <div class="ui-box bg-white p-2">
                    <div class="ui-box-title">
                        شیوه ارسال
                    </div>
                    <div class="ui-box-content">
                        <div v-for="item in shippingMethos" class="d-flex align-items-center gap-2" :key="item.id">
                            <input v-model="selectedShipping" :id="item.id.toString()" name="shipping" :value="item.id"
                                type="radio" />
                            <label :for="item.id.toString()">{{ item.title }} <small>({{ splitNumber(item.cost) }}
                                    تومان)</small></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4">
            <div class="ui-sticky ui-sticky-top">
                <div class="checkout-bill ui-box bg-white mb-5">
                    <div class="checkout-bill-row">
                        <div class="checkout-bill-row-label">قیمت کالاها ({{ shopCartStore.getTotalItem() }})</div>
                        <div class="checkout-bill-row-value"><span class="fs-6">{{
                            splitNumber(shopCartStore.getTotalPrice())
                        }}</span> <span class="currency">تومان</span>
                        </div>
                    </div>
                    <div class="checkout-bill-row">
                        <div class="checkout-bill-row-label">هزینه ارسال</div>
                        <div class="checkout-bill-row-value"><span class="fs-6">{{
                            splitNumber(shippingMethos.find(f => f.id == selectedShipping)?.cost ?? 0)
                        }}</span> <span class="currency">تومان</span>
                        </div>
                    </div>
                    <div class="checkout-bill-row">
                        <div class="checkout-bill-row-label">قابل پرداخت</div>
                        <div class="checkout-bill-row-value"><span class="fs-6">{{
                            splitNumber((shippingMethos.find(f => f.id ==
                                selectedShipping)?.cost ?? 0) + shopCartStore.getTotalPrice())
                        }}</span> <span class="currency">تومان</span>
                        </div>
                    </div>

                    <div class="checkout-bill-row checkout-bill-action">
                        <a href="#" @click="finallyOrder" class="btn btn-block btn-primary">پرداخت سفارش</a>
                    </div>
                </div>
                <div class="widget p-0">
                    <div class="widget-content widget--free-shipping">
                        <div class="free-shipping--detail">
                            <div class="title">ارسال رایگان سفارش</div>
                            <div class="subtitle">سفارش‌های بالای ۳۰۰ هزار تومان</div>
                        </div>
                        <div class="free-shipping--banner">
                            <img src="/images/theme/free-shipping--banner.png" alt="ارسال رایگان سفارش">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="g__loading" v-if="gatwayLoading">
            <div class="content">
                <p>درحال انتقال به درگاه پرداخت ...</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ShippingMethodDto } from '~~/models/ShippingMethodDto';
import { CheckoutOrder, PayOrder, GetShippingMethods } from '~~/services/order.service';
import { useShopCartStore } from '~~/stores/shopCartStore';
import { splitNumber } from '~~/utilities/numberUtils';
import { Ref } from 'vue';
import { AddressDto } from '~~/models/users/addressDto';
import { useToast } from 'vue-toastification';

const shippingMethos: Ref<ShippingMethodDto[]> = ref([]);
const selectedShipping = ref(0);
const selectedAddress: Ref<AddressDto | null> = ref(null);
const toast = useToast();
const gatwayLoading = ref(false);

const shopCartStore = useShopCartStore();
onMounted(async () => {
    var result = await GetShippingMethods();
    shippingMethos.value = result.data;
});

const finallyOrder = async () => {
    if (selectedAddress.value == null) {
        toast.error("آدرس سفارش را انتخاب کنید")
        return;
    }
    if (selectedShipping.value == 0) {
        toast.error("نحوه ارسال سفارش را انتخاب کنید")
        return;
    }
    gatwayLoading.value = true;
    var result = await CheckoutOrder({
        userId: 0,
        shire: selectedAddress.value?.shire,
        city: selectedAddress.value?.city,
        postalCode: selectedAddress.value?.postalCode,
        postalAddress: selectedAddress.value?.postalAddress,
        phoneNumber: selectedAddress.value?.phoneNumber,
        name: selectedAddress.value?.name,
        family: selectedAddress.value?.family,
        nationalCode: selectedAddress.value?.nationalCode,
        shippingMethodId: selectedShipping.value
    });
    if (result.isSuccess) {
        var res = await PayOrder(shopCartStore.currentOrder!.id,
            "http://localhost:3000/checkout/error?orderId=" + shopCartStore.currentOrder!.id,
            "http://localhost:3000/checkout/success?orderId=" + shopCartStore.currentOrder!.id);
        if (res.isSuccess) {
            window.location.replace(res.data)
        } else {
            gatwayLoading.value = false;
            toast.error(res.metaData.message)
        }
    } else {
        toast.error(result.metaData.message)
        gatwayLoading.value = false;
    }
}
</script>

<style scoped >
@media screen and (max-width:768px) {
    .g__loading .content {
        width: 90% !important;
    }
}

.g__loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.418);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
}

.g__loading .content {
    width: 30%;
    background: white;
    box-shadow: 0 0 5px 0 gray;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    font-size: 16px;
}
</style>