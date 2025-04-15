import ApiService from '@/services/api.service'

const ProductService = {
  async getProducts() {
    try {
      return await ApiService.get('/products')
    } catch (error) {
      console.log(error)

      throw error
    }
  },
}

export default ProductService
