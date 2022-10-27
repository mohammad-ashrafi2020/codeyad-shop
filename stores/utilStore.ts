import { defineStore } from "pinia";
import { Ref } from "vue";
import { CategoryDto } from "~~/models/categories/categoryDto";
import { GetAllCategory } from "~~/services/category.service";

export const useUtilStore = defineStore("util", () => {
  const categories: Ref<CategoryDto[]> = ref([]);

  const setCategories = async () => {
    if (categories.value.length == 0) {
      var res = await GetAllCategory();
      // categories.value = res.data;
      var test=[];

      res.data.map(f=>{
        test.push(f);
        test.push(f);
        test.push(f);
        test.push(f);
        test.push(f);
      })

      categories.value=test;
    }
  };
  
  return { categories, setCategories };
});
