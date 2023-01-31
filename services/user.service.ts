import { ChangePasswordDto } from "./../models/users/chanePasswordDto";
import { ApiResponse } from "~~/models/ApiResponse";
import { UserDto } from "~~/models/users/userDto";
import { FetchApi } from "~~/utilities/CustomFechApi";

export const GetCurrentUser = (): Promise<ApiResponse<UserDto>> => {
  return FetchApi("/users/current");
};

export const EditUser = (
  editModel: FormData
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/users/current", {
    method: "PUT",
    body: editModel,
  });
};

export const ChangePassword = (
  command: ChangePasswordDto
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/users/ChangePassword", {
    method: "PUT",
    body: command,
  });
};
