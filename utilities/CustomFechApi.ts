import { FetchError, FetchOptions } from "ohmyfetch";
import { ApiResponse, AppStatusCode } from "~~/models/ApiResponse";
import { useAuthStore } from "~~/stores/authStore";
import { BASE_URL } from "./ApiConfig";

export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
  config = {
    baseURL: BASE_URL,
    ...config,
  };
  const authStore = useAuthStore();

  if (!config.headers) {
    config.headers = {};
  }
  if (authStore && authStore.isLogin) {
    var loginData = authStore.loginResult;
    if (loginData) {
      //@ts-ignore
      config.headers["Authorization"] = `Bearer ${loginData.token}`;
    }
  }

  //@ts-ignore
  return $fetch<ApiResponse<T>>(url, config)
    .then((res) => {
      return res;
    })
    .catch((e: FetchError) => {
      if (e.response?.status == 401) {
        return {
          data: null,
          isSuccess: false,
          metaData: {
            appStatusCode: AppStatusCode.UnAuthorize,
            message:
              e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده",
          },
        };
      } else {
        return {
          data: null,
          isSuccess: false,
          metaData: {
            appStatusCode:
              e.response?._data?.MetaData?.MetaData ??
              AppStatusCode.ServerError,
            message:
              e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده",
          },
        };
      }
    });
}
