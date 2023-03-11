import { OrderDto, OrderFilterResult } from "./../models/orders/OrderDto";
import { ApiResponse } from "./../models/ApiResponse";
import { FetchApi } from "~~/utilities/CustomFechApi";
import { ShippingMethodDto } from "~~/models/ShippingMethodDto";

export const GetCurrentOrder = (): Promise<ApiResponse<OrderDto>> => {
  return FetchApi("/order/current");
};
export const CheckoutOrder = (
  command: any
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/order/Checkout", {
    method: "POST",
    body: command,
  });
};
export const PayOrder = (
  orderId: number,
  errorCallback: string,
  successCallback: string
): Promise<ApiResponse<string>> => {
  return FetchApi("/Transaction", {
    method: "POST",
    body: {
      orderId,
      successCallBackUrl: successCallback,
      errorCallBackUrl: errorCallback,
    },
  });
};
export const AddItemToCurrentOrder = (inventoryId: number, count: number) => {
  return FetchApi("/order", {
    method: "post",
    body: {
      inventoryId,
      count,
    },
  });
};

export const DeCreaseOrderItemCount = (itemId: number, count: number) => {
  return FetchApi("/order/orderItem/DecreaseCount", {
    method: "PUT",
    body: {
      itemId,
      count,
    },
  });
};

export const InCreaseOrderItemCount = (itemId: number, count: number) => {
  return FetchApi("/order/orderItem/IncreaseCount", {
    method: "PUT",
    body: {
      itemId,
      count,
    },
  });
};

export const DeleteOrderItem = (itemId: number) => {
  return FetchApi("/order/orderItem/" + itemId, {
    method: "Delete",
  });
};

export const GetShippingMethods = (): Promise<
  ApiResponse<ShippingMethodDto[]>
> => {
  return FetchApi("/ShippingMethod");
};
export const GetOrderById = (id: number): Promise<ApiResponse<OrderDto>> => {
  return FetchApi("/order/" + id, {
    method: "Get",
  });
};
export const GetOrders = (): Promise<ApiResponse<OrderFilterResult>> => {
  return FetchApi("/order/current/filter", {
    method: "Get",
    query: {
      take: 50,
    },
  });
};
