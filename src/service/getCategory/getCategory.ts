import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'
import { Category } from '@/service/getCategory/category.type'

export const getCategory = async (): Promise<Category[]> => {
  try {
    const api = await apiService()
    const { data } = await api.get(API_URL.GET_CATEGORY)
    return data
  } catch (error) {
    throw error
  }
}
