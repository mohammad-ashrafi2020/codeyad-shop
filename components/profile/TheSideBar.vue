<template>
    <div class="col-xl-3 col-lg-4 col-md-5 mb-md-0 mb-4">
        <div class="ui-sticky ui-sticky-top" v-if="authStore.currentUser">
            <div class="profile-user-info py-3 ui-box bg-white">
                <div class="profile-detail">
                    <nuxt-link to="/profile" class="d-flex align-items-center" style="text-decoration: none;">
                        <div class="profile-avatar me-3">
                            <base-image :src="GetUserAvatar(authStore.currentUser.avatarName)" alt="avatar" />
                        </div>
                        <div class="profile-info">
                            <a class="text-decoration-none text-dark fw-bold mb-2">
                                {{ authStore.currentUser.name }}
                                {{ authStore.currentUser.family }}
                            </a>
                            <div class="text-muted fs-7 fw-bold">{{ authStore.currentUser?.phoneNumber }}</div>
                        </div>
                    </nuxt-link>
                    <div class="user-options">

                    </div>
                </div>
                <ul class="nav nav-items-with-icon flex-column">
                    <li class="nav-item">
                        <nuxt-link to="/profile/edit" class="nav-link">
                            <i class="nav-link-icon ri-edit-2-line"></i>
                            ویرایش اطلاعات حساب
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-file-list-3-line"></i>
                            سفارش
                            های من</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-heart-3-line"></i> لیست
                            ها</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-chat-1-line"></i>
                            نظرات</a>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/profile/address"><i class="nav-link-icon ri-map-pin-line"></i> نشانی
                            ها</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-gift-line"></i> کارت های
                            هدیه</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-notification-line"></i>
                            پیغام ها</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-time-line"></i> بازدید
                            های
                            اخیر</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-user-line"></i> اطلاعات
                            حساب</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="nav-link-icon ri-logout-box-r-line"></i>
                            خروج</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/stores/authStore';
import { GetUserAvatar } from "~~/utilities/ImageUrls"

const authStore = useAuthStore();

</script>