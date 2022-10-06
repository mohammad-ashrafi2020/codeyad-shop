import { ApiResponse } from "~~/models/ApiResponse";
import { UserDto } from "~~/models/users/userDto";
import { FetchApi } from "~~/utilities/CustomFechApi";

export const GetCurrentUser = (): Promise<ApiResponse<UserDto>> => {
  return FetchApi("/users/current");
};
