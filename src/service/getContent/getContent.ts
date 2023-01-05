import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'

export const getContent = async (contentId: string): Promise<any[]> => {
  try {
    const api = await apiService()
    const { data } = await api.get(API_URL.GET_CONTENT(contentId))
    return data
  } catch (error) {
    throw error
  }
}
