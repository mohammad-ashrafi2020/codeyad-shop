<template>
    <div class="row">
        <div class="col-12">
            <div class="ui-box bg-white mb-5">
                <div class="ui-box-title">لیست آخرین سفارشها</div>
                <div class="ui-box-content">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>شماره سفارش</th>
                                    <th>تاریخ ثبت سفارش</th>
                                    <th>مبلغ کل</th>
                                    <th>عملیات پرداخت</th>
                                    <th>جزییات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in orders" :key="item.id">
                                    <td class="fa-num">{{ item.id }}</td>
                                    <td class="fa-num text-muted">{{ getPersianDate(item.creationDate, "M/dd/D") }}</td>

                                    <td class="fa-num fs-6 fw-bold">{{ splitNumber(item.totalPrice) }}<span
                                            class="currency">تومان</span></td>
                                    <td>
                                        <span v-if="item.status == OrderStatus.Finally"
                                            class="badge bg-primary rounded-pill fs-7">پرداخت شده</span>
                                        <span v-else-if="item.status == OrderStatus.Pending"
                                            class="badge bg-info rounded-pill fs-7">در انتظار پرداخت</span>
                                        <span v-else-if="item.status == OrderStatus.Rejected"
                                            class="badge bg-danger rounded-pill fs-7">لغو شده</span>
                                        <span v-else-if="item.status == OrderStatus.Shipping"
                                            class="badge bg-success rounded-pill fs-7">تحویل داده شده</span>
                                    </td>
                                    <td>
                                        <nuxt-link :to="`/profile/orders/${item.id}`" class="btn btn-sm btn-outline-light">جزئیات <i
                                                class="ri-arrow-left-s-fill"></i></nuxt-link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { OrderFilterData, OrderFilterResult, OrderStatus } from '~~/models/orders/OrderDto';
import { GetOrders } from '~~/services/order.service';
import { Ref } from 'vue';
import { getPersianDate } from '~~/utilities/dateUtils';
import { splitNumber } from '~~/utilities/numberUtils';


definePageMeta({
    layout: "profile"
});
const loading = ref(false);
const orders: Ref<OrderFilterData[]> = ref([]);
onMounted(async () => {
    loading.value = true;
    var result = await GetOrders();
    if (result.isSuccess) {
        orders.value = result.data.data;
    }
    loading.value = false;
});
</script>