import { OrderItemDto } from "./../models/orders/OrderItemDto";
import { defineStore } from "pinia";
import { Ref } from "vue";
import { CategoryDto } from "~~/models/categories/categoryDto";
import { GetAllCategory } from "~~/services/category.service";
import { json } from "stream/consumers";

export const useShopCartStore = defineStore("shopCart", () => {
  const items: Ref<OrderItemDto[]> = ref([]);

  const AddItem = (item: OrderItemDto) => {
    items.value.push(item);
    syncLocalCart();
  };
  const DeleteItem = () => {};
  const ChangeCount = () => {};

  const Init = () => {
    if (process.server == false) {
      var data = localStorage.getItem("cart-Items");
      if (!data) return;

      var localItems = JSON.parse(data) as OrderItemDto[];
      items.value = localItems;
    }
  };

  const syncLocalCart = () => {
    localStorage.removeItem("cart-Items");
    localStorage.setItem("cart-Items", JSON.stringify(items.value));
  };

  return { AddItem, DeleteItem, ChangeCount, Init, items };
});
