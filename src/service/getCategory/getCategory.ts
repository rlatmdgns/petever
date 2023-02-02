import { apiClient } from '@/core/apiClient'
import { API_URL } from '@/core/apiUrl'
import { Category } from '@/service/getCategory/category.type'

export const getCategory = async (): Promise<Category[]> => {
  try {
    const { data } = await apiClient.get(API_URL.GET_CATEGORY)
    return data
  } catch (error) {
    throw error
  }
}
