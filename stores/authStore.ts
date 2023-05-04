import { useToast } from "vue-toastification";
import { defineStore } from "pinia";
import { Ref } from "vue";
import { AppStatusCode } from "~~/models/ApiResponse";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";
import { UserDto } from "~~/models/users/userDto";
import { Logout } from "~~/services/auth.service";
import { GetCurrentUser } from "~~/services/user.service";

export const useAuthStore = defineStore("auth", () => {
  const loginResult: Ref<LoginResultDto | null> = ref(null);
  const currentUser: Ref<UserDto | null> = ref(null);
  const loading = ref(false);
  const isLogin = computed(() => loginResult.value != null);
  const router = useRouter();
  const toast = useToast();

  const LogoutUser = async () => {
    loading.value = true;
    var result = await Logout();
    if (result.isSuccess) {
      loginResult.value = null;
      currentUser.value = null;
      localStorage.removeItem("auth-data");
      router.push("/");
      toast.success("خروج با موفقیت انجام شد");
    }
    loading.value = false;
  };
  const SetCurrentUserValue = async () => {
    const localStoregData = localStorage.getItem("auth-data");
    if (!localStoregData) {
      return;
    }
    const loginData = JSON.parse(localStoregData);
    loginResult.value = loginData;
    loading.value = true;
    var result = await GetCurrentUser();
    if (result.isSuccess) {
      currentUser.value = result.data;
    } else if (result.metaData.appStatusCode == AppStatusCode.UnAuthorize) {
      loginResult.value = null;
      localStorage.removeItem("auth-data");
    }
    loading.value = false;
  };

  return {
    loading,
    loginResult,
    currentUser,
    SetCurrentUserValue,
    LogoutUser,
    isLogin,
  };
});
