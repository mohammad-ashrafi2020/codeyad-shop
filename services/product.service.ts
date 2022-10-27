import { ApiResponse } from "~~/models/ApiResponse";
import { baseFilterResult } from "~~/models/base/baseFilterResult";
import { ProductCardDto } from "~~/models/ProductCard";
import {
  ProductFilterParams,
  ProductFilterResult,
} from "~~/models/search/ProductSearchResultDto";
import { FetchApi } from "~~/utilities/CustomFechApi";
import { RemoveEmptyProps } from "~~/utilities/objectutils";

export const getProductByFilter = (
  filterParams: ProductFilterParams
): Promise<ApiResponse<ProductFilterResult>> => {

  RemoveEmptyProps(filterParams);

  console.log(filterParams)
  return FetchApi(`/product/shop`, {
    method: "Get",
    params:filterParams
  });
};
