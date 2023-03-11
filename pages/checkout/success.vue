<template>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="ui-box bg-white mb-5">
                <div class="ui-box-content">
                    <div class="row">
                        <div class="col-md-8 order-md-1 order-2">
                            <div class="fs-5 fw-bold text-success mb-3">
                                با موفقیت پرداخت و ثبت گردید.
                            </div>
                            <div class="d-flex align-items-center flex-wrap mb-3">
                                <div class="text-secondary me-3">شماره سفارش:</div>
                                <div class="font-en">{{ $route.query.orderId }}</div>
                            </div>
                            <div class="text-success mb-3">پرداخت با موفقیت انجام شد. سفارش شما با موفقیت
                                ثبت
                                شد و در زمان تعیین‌شده برای شما ارسال خواهد شد. از اینکه ما را برای
                                خرید انتخاب کردید از شما سپاسگزاریم.</div>
                            <div class="d-flex align-items-center flex-wrap">
                                <nuxt-link :to="`/profile/orders/${$route.query.orderId}`"
                                    class="btn btn-primary me-4">پیگیری سفارش</nuxt-link>
                            </div>
                        </div>
                        <div class="col-md-4 order-md-2 order-1 mb-md-0 mb-4 text-center">
                            <img src="/images/theme/checkout-successful.png" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>