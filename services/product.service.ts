import { ApiResponse } from "~~/models/ApiResponse";
import { baseFilterResult } from "~~/models/base/baseFilterResult";
import { ProductCardDto } from "~~/models/ProductCard";
import {
  ProductFilterParams,
  ProductFilterResult,
} from "~~/models/search/ProductSearchResultDto";
import { FetchApi } from "~~/utilities/CustomFechApi";

export const getProductByFilter = (
  filterParams: ProductFilterParams
): Promise<ApiResponse<ProductFilterResult>> => {
  return FetchApi("/product/shop", {
    body: filterParams,
    method: "Get",
  });
};
