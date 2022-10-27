import { baseFilterParams } from "../base/baseFilterParams";
import { baseFilterResult } from "../base/baseFilterResult";
import { ProductCardDto } from "../ProductCard";

export interface ProductFilterResult extends baseFilterResult<ProductCardDto> {}

export interface ProductFilterParams extends baseFilterParams {
  categorySlug: string | undefined;
  search: string | undefined;
  onlyAvailableProducts: boolean;
  justHasDiscount: boolean;
  searchOrderBy: ProductSearchOrderBy | null;
}

export enum ProductSearchOrderBy {
  Latest = 0,
  Expensive = 1,
  Cheapest = 2,
}
