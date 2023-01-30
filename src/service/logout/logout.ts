import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'

export const logout = async () => {
  try {
    const api = await apiService()
    const { data } = await api.post(API_URL.LOGO_OUT)
    return data
  } catch (error) {
    throw error
  }
}
