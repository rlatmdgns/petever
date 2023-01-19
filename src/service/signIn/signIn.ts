import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'

export const signIn = async () => {
  try {
    const api = await apiService()
    const { data } = await api.get(API_URL.SIGN_IN('google'))
    return data
  } catch (error) {
    throw error
  }
}
