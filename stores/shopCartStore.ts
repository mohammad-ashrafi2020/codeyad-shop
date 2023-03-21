import { OrderDto } from "./../models/orders/OrderDto";
import {
  AddItemToCurrentOrder,
  DeleteOrderItem,
  GetCurrentOrder,
  InCreaseOrderItemCount,
  DeCreaseOrderItemCount,
} from "./../services/order.service";
import { OrderItemDto } from "./../models/orders/OrderItemDto";
import { defineStore } from "pinia";
import { Ref } from "vue";
import { CategoryDto } from "~~/models/categories/categoryDto";
import { GetAllCategory } from "~~/services/category.service";
import { json } from "stream/consumers";
import { useToast } from "vue-toastification";

export const useShopCartStore = defineStore("shopCart", () => {
  const items: Ref<OrderItemDto[]> = ref([]);
  const currentOrder: Ref<OrderDto | null> = ref(null);

  const loading = ref(false);
  const toast = useToast();
  const AddItem = async (item: OrderItemDto) => {
    loading.value = true;

    if (isLogin()) {
      var result = await AddItemToCurrentOrder(item.inventoryId, item.count);
      if (result.isSuccess == false) {
        toast.error("مشکلی در عملیات رخ داده");
        loading.value = false;
        return;
      }
    }

    item.id = new Date().getTime();
    var currentItem = items.value.find(
      (f) => f.inventoryId == item.inventoryId
    );
    if (currentItem) {
      currentItem.count += item.count;
      currentItem.totalPrice = currentItem.price * currentItem.count;
    } else {
      items.value.push(item);
    }
    toast.success("محصول به سبد خرید اضافه شد");
    loading.value = false;
    syncLocalCart();
  };
  const DeleteItem = async (id: number) => {
    loading.value = true;
    if (isLogin()) {
      var result = await DeleteOrderItem(id);
      if (result.isSuccess == false) {
        toast.error("مشکلی در عملیات رخ داده");

        loading.value = false;
        return;
      }
    }
    items.value = items.value.filter((f) => f.id != id);
    toast.success("عملیات انجام شد");
    loading.value = true;
    syncLocalCart();
  };
  const IncreaseCount = async (id: number, count: number) => {
    loading.value = true;
    if (isLogin()) {
      var result = await InCreaseOrderItemCount(id, count);
      if (result.isSuccess == false) {
        toast.error("مشکلی در عملیات رخ داده");

        loading.value = false;
        return;
      }
    }

    var currentItem = items.value.find((f) => f.id == id);
    if (currentItem) {
      currentItem.count += count;
      currentItem.totalPrice = currentItem.price * currentItem.count;

      toast.success("عملیات انجام شد");
      loading.value = true;
      syncLocalCart();
    }
  };
  const DecreaseCount = async (id: number, count: number) => {
    loading.value = true;
    if (isLogin()) {
      var result = await DeCreaseOrderItemCount(id, count);
      if (result.isSuccess == false) {
        toast.error("مشکلی در عملیات رخ داده");
        loading.value = false;
        return;
      }
    }

    var currentItem = items.value.find((f) => f.id == id);
    if (currentItem && currentItem.count > 1) {
      currentItem.count -= count;
      currentItem.totalPrice = currentItem.price * currentItem.count;

      toast.success("عملیات انجام شد");

      loading.value = true;
      syncLocalCart();
    }
  };

  const Init = async () => {
    if (process.server) return;
    if (isLogin()) {
      var result = await GetCurrentOrder();
      items.value = result.data?.items ?? [];
      currentOrder.value = result.data;
    } else {
      var data = localStorage.getItem("cart-Items");
      if (!data) return;

      var localItems = JSON.parse(data) as OrderItemDto[];
      items.value = localItems;
    }
  };

  const syncLocalCart = () => {
    if (isLogin()) return;
    localStorage.removeItem("cart-Items");
    localStorage.setItem("cart-Items", JSON.stringify(items.value));
  };
  const syncRemoteCart = async () => {
    if (isLogin() == false) return;

    loading.value = true;
    var data = localStorage.getItem("cart-Items");
    if (!data) return;
    var localItems = JSON.parse(data) as OrderItemDto[];
    localItems.forEach(async (e) => {
      await AddItemToCurrentOrder(e.inventoryId, e.count);
    });
    loading.value = false;
    localStorage.removeItem("cart-Items");
  };
  const getTotalPrice = () => {
    var sum = 0;

    items.value.forEach((f) => {
      sum += f.totalPrice;
    });

    return sum;
  };
  const getTotalItem = () => {
    var count = 0;

    items.value.forEach((f) => {
      count += f.count;
    });

    return count;
  };

  const isLogin = () => {
    return localStorage.getItem("auth-data") != null;
  };
  return {
    AddItem,
    DeleteItem,
    DecreaseCount,
    IncreaseCount,
    Init,
    getTotalPrice,
    getTotalItem,
    items,
    currentOrder,
    syncRemoteCart,
  };
});
