import { OrderItemDto } from "./../models/orders/OrderItemDto";
import { defineStore } from "pinia";
import { Ref } from "vue";
import { CategoryDto } from "~~/models/categories/categoryDto";
import { GetAllCategory } from "~~/services/category.service";
import { json } from "stream/consumers";

export const useShopCartStore = defineStore("shopCart", () => {
  const items: Ref<OrderItemDto[]> = ref([]);

  const AddItem = (item: OrderItemDto) => {
    item.id = new Date().getTime();
    var currentItem = items.value.find(
      (f) => f.inventoryId == item.inventoryId
    );
    if (currentItem) {
      currentItem.count += item.count;
    } else {
      items.value.push(item);
    }
    syncLocalCart();
  };
  const DeleteItem = (id: number) => {
    items.value = items.value.filter((f) => f.id != id);
    syncLocalCart();
  };
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
  return {
    AddItem,
    DeleteItem,
    ChangeCount,
    Init,
    getTotalPrice,
    getTotalItem,
    items,
  };
});
