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
                                                        <th>#</th>
                                                        <th>شماره سفارش</th>
                                                        <th>تاریخ ثبت سفارش</th>
                                                        <th>مبلغ قابل پرداخت</th>
                                                        <th>مبلغ کل</th>
                                                        <th>عملیات پرداخت</th>
                                                        <th>جزییات</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="fa-num">1</td>
                                                        <td class="font-en fw-bold">DKC-244424454</td>
                                                        <td class="fa-num text-muted">۲۵ دی ۱۴۰۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۴۱,۵۴۰,۰۰۰ <span class="currency">تومان</span></td>
                                                        <td><span class="badge bg-success rounded-pill fs-7">پرداخت
                                                                شده</span>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="btn btn-sm btn-outline-light">جزئیات <i class="ri-arrow-left-s-fill"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fa-num">2</td>
                                                        <td class="font-en fw-bold">DKC-244424454</td>
                                                        <td class="fa-num text-muted">۲۵ دی ۱۴۰۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۴۱,۵۴۰,۰۰۰ <span class="currency">تومان</span></td>
                                                        <td><span class="badge bg-danger rounded-pill fs-7">لغو
                                                                شده</span>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="btn btn-sm btn-outline-light">جزئیات <i class="ri-arrow-left-s-fill"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fa-num">3</td>
                                                        <td class="font-en fw-bold">DKC-244424454</td>
                                                        <td class="fa-num text-muted">۲۵ دی ۱۴۰۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۴۱,۵۴۰,۰۰۰ <span class="currency">تومان</span></td>
                                                        <td><span class="badge bg-danger rounded-pill fs-7">لغو
                                                                شده</span>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="btn btn-sm btn-outline-light">جزئیات <i class="ri-arrow-left-s-fill"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fa-num">4</td>
                                                        <td class="font-en fw-bold">DKC-244424454</td>
                                                        <td class="fa-num text-muted">۲۵ دی ۱۴۰۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۴۱,۵۴۰,۰۰۰ <span class="currency">تومان</span></td>
                                                        <td><span class="badge bg-info rounded-pill fs-7">در انتظار
                                                                پرداخت</span>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="btn btn-sm btn-outline-light">جزئیات <i class="ri-arrow-left-s-fill"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fa-num">5</td>
                                                        <td class="font-en fw-bold">DKC-244424454</td>
                                                        <td class="fa-num text-muted">۲۵ دی ۱۴۰۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۴۱,۵۴۰,۰۰۰ <span class="currency">تومان</span></td>
                                                        <td><span class="badge bg-danger rounded-pill fs-7">لغو
                                                                شده</span>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="btn btn-sm btn-outline-light">جزئیات <i class="ri-arrow-left-s-fill"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fa-num">6</td>
                                                        <td class="font-en fw-bold">DKC-244424454</td>
                                                        <td class="fa-num text-muted">۲۵ دی ۱۴۰۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۰</td>
                                                        <td class="fa-num fs-6 fw-bold">۴۱,۵۴۰,۰۰۰ <span class="currency">تومان</span></td>
                                                        <td><span class="badge bg-danger rounded-pill fs-7">لغو
                                                                شده</span>
                                                        </td>
                                                        <td>
                                                            <a href="#" class="btn btn-sm btn-outline-light">جزئیات <i class="ri-arrow-left-s-fill"></i></a>
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
definePageMeta({
    layout: "profile"
})
</script>