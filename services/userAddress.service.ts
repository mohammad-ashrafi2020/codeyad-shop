import { FetchApi } from "~~/utilities/CustomFechApi";
import {
  AddressDto,
  CreateAddressDto,
  EditAddressDto,
} from "./../models/users/addressDto";
import { ApiResponse } from "~~/models/ApiResponse";

export const GetAddressList = (): Promise<ApiResponse<AddressDto[]>> => {
  return FetchApi("/userAddress");
};
export const CreateAddress = (
  command: CreateAddressDto
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/userAddress", {
    method: "POST",
    body: command,
  });
};
export const EditAddress = (
  command: EditAddressDto
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/userAddress", {
    method: "PUT",
    body: command,
  });
};
export const DeleteAddress = (id: number): Promise<ApiResponse<undefined>> => {
  return FetchApi("/userAddress/" + id, {
    method: "DELETE",
  });
};
export const SetActiveAddress = (
  id: number
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/userAddress/SetActiveAddress/" + id, {
    method: "PUT",
  });
};
export const GetAddressById = (
  id: number
): Promise<ApiResponse<AddressDto>> => {
  return FetchApi("/userAddress/" + id);
};
