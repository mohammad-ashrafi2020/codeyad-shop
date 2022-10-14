import { ApiResponse } from "~~/models/ApiResponse";
import { CategoryDto } from "~~/models/categories/categoryDto";
import { FetchApi } from "~~/utilities/CustomFechApi";

export const GetAllCategory = (): Promise<ApiResponse<CategoryDto[]>> => {
  return FetchApi("/category");
};
