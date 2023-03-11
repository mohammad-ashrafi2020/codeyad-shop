<template>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="ui-box bg-white mb-5">
                <div class="ui-box-content">
                    <div class="row">
                        <div class="col-md-8 order-md-1 order-2">
                            <div class="fs-5 fw-bold text-danger mb-3">
                                متاسفانه پرداخت شما ناموفق بود!
                            </div>
                            <div class="d-flex align-items-center flex-wrap mb-3">
                                <div class="text-secondary me-3">شماره سفارش:</div>
                                <div class="font-en">{{ $route.query.orderId }}</div>
                            </div>
                            <div class="text-danger mb-3">برای جلوگیری از حذف خودکار سفارش، لطفا مبلغ آن را تا ۵۹ دقیقه
                                آینده پرداخت نمایید.</div>
                            <div class="d-flex align-items-center flex-wrap">
                                <nuxt-link :to="`/checkout`" class="btn btn-primary me-4">پرداخت مجدد</nuxt-link>
                            </div>
                        </div>
                        <div class="col-md-4 order-md-2 order-1 mb-md-0 mb-4 text-center">
                            <img src="/images/theme/checkout-unsuccessful.png" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>