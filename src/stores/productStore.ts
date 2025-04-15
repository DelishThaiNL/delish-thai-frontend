import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore(
  'productStore',
  () => {
    const products = ref([])

    const addProduct = (product: object) => {
      // add product
      console.log(product)
    }

    return { products, addProduct }
    // persist state in local storage if true
  },
  { persist: true },
)
