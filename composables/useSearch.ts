import { ApiResponse } from "~~/models/ApiResponse";
import {
  ProductFilterParams,
  ProductFilterResult,
  ProductSearchOrderBy,
} from "~~/models/search/ProductSearchResultDto";
import { getProductByFilter } from "~~/services/product.service";

export const useSearch = () => {
  const route = useRoute();
  const router = useRouter();

  const getFilterParams = (): ProductFilterParams => {
    const params = route.path.split("/");

    var res = {
      categorySlug: params[2]?.replace("category-", ""),
      pageId: Number(route.query.pageId?.toString() ?? "1"),
      search: route.query.q?.toString(),
      take: 8,
      justHasDiscount: getBoolean(route.query.justHasDiscount?.toString()),
      onlyAvailableProducts: getBoolean(
        route.query.onlyAvailableProducts?.toString()
      ),
      searchOrderBy:
        //@ts-ignore
        (route.query.searchOrderBy as ProductSearchOrderBy) ?? null,
      startPrice: (route.query.startPrice?.toString() ?? "0"),
      endPrice: (route.query.endPrice?.toString() ?? "0"),
    } as ProductFilterParams;

    return res;
  };
  const changePageId = async (pageId: number) => {
    var currentPath = route.path;
    var queryParams = route.query;
    await router.push({
      path: currentPath,
      query: { ...queryParams, pageId },
    });
  };

  const getProducts = (): Promise<ApiResponse<ProductFilterResult>> => {
    var params = getFilterParams();
    return getProductByFilter(params);
  };

  return { getFilterParams, getProducts, changePageId };
};

function getBoolean(value): boolean {
  switch (value) {
    case true:
    case "true":
    case 1:
    case "1":
      return true;
    default:
      return false;
  }
}
