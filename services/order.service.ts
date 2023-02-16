import { OrderDto } from "./../models/orders/OrderDto";
import { ApiResponse } from "./../models/ApiResponse";
import { FetchApi } from "~~/utilities/CustomFechApi";

export const GetCurrentOrder = (): Promise<ApiResponse<OrderDto>> => {
  return FetchApi("/order/current");
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
