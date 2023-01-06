<template>
    <div class="ui-box bg-white mb-5">
        <div class="ui-box-title">آدرس ها</div>
        <div class="ui-box-content">
            <div class="user-address-items">
                <div class="user-address-item">
                    <div class="custom-radio-box">
                        <label for="userAddress01" class="custom-radio-box-label"
                            data-placeholder="انتخاب به عنوان آدرس پیش فرض"
                            data-placeholder-checked="آدرس پیش فرض من است">
                            <span class="d-block user-address-recipient mb-2">خراسان شمالی،بجنورد
                            </span>
                            <span class="d-block user-contact-items fa-num mb-3">
                                <span class="user-contact-item">
                                    <i class="ri-mail-line icon"></i>
                                    <span class="value">9999999999</span>
                                </span>
                                <span class="user-contact-item">
                                    <i class="ri-phone-line icon"></i>
                                    <span class="value">09xxxxxxxxx</span>
                                </span>
                                <span class="user-contact-item">
                                    <i class="ri-user-line icon"></i>
                                    <span class="value">جلال بهرامی راد</span>
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
                    <button class="user-add-address-btn" data-remodal-target="add-address-modal-fields-with-map">
                        <i class="ri-add-line icon"></i>
                        <span>آدرس جدید</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:"profile"
})
</script>