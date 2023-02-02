import { API_URL } from '@/core/apiUrl'
import { apiClient } from '@/core/apiClient'

export const logout = async () => {
  try {
    const { data } = await apiClient.post(API_URL.LOGO_OUT)
    return data
  } catch (error) {
    throw error
  }
}
