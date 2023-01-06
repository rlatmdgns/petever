import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'

export const getContents = async (): Promise<any[]> => {
  try {
    const api = await apiService()
    console.log('api', api)
    const { data } = await api.get(API_URL.GET_CONTENTS)
    return data
  } catch (error) {
    throw error
  }
}
