import { ApiResponse } from "~~/models/ApiResponse";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";
import { RegisterCommandDTo } from "~~/models/auth/registerDTo";
import { FetchApi } from "~~/utilities/CustomFechApi";

export function RegisterUser(
  command: RegisterCommandDTo
): Promise<ApiResponse<null>> {
  return FetchApi("/auth/register", {
    method: "Post",
    body: command,
  });
}

export function Login(
  phoneNumber: string,
  password: string
): Promise<ApiResponse<LoginResultDto>> {
  return FetchApi("/auth/login", {
    method: "Post",
    body: {
      phoneNumber: phoneNumber,
      password: password,
    },
  });
}

export function Logout(): Promise<ApiResponse<undefined>> {
  return FetchApi("/auth/logout", {
    method: "DELETE",
  });
}
