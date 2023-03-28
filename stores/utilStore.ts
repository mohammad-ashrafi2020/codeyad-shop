import { useToast } from "vue-toastification";
import { SingleProductDto } from "./../models/products/singleProductDto";
import { GetProductBySlug } from "./../services/product.service";
import { defineStore } from "pinia";
import { Ref } from "vue";
import { CategoryDto } from "~~/models/categories/categoryDto";
import { ProductDto } from "~~/models/products/singleProductDto";
import { GetAllCategory } from "~~/services/category.service";

export const useUtilStore = defineStore("util", () => {
  const categories: Ref<CategoryDto[]> = ref([]);
  const isOpenFastShowProductModal = ref(false);
  const product = ref<SingleProductDto | null>(null);
  const productLoading = ref(false);
  const toast = useToast();
  const setCategories = async () => {
    if (categories.value.length == 0) {
      var res = await GetAllCategory();
      categories.value = res.data;
    }
  };
  const openProductModal = async (slug: string) => {
    isOpenFastShowProductModal.value = true;
    productLoading.value = true;
    var result = await GetProductBySlug(slug);
    if (result.isSuccess) {
      product.value = result.data;
    } else {
      toast.error(result.metaData.message);
      isOpenFastShowProductModal.value = false;
    }
    productLoading.value = false;
  };
  const closeProductModal = () => {
    product.value = null;
    isOpenFastShowProductModal.value = false;
  };
  return {
    categories,
    setCategories,
    openProductModal,
    closeProductModal,
    isOpenFastShowProductModal,
    productLoading,
    product,
  };
});
