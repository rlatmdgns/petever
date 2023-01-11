import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'
import { Board } from '@/service/getBoards/boards.type'

export const getBoards = async (): Promise<Board[]> => {
  try {
    const api = await apiService()
    const { data } = await api.get(API_URL.GET_BOARDS)
    return data
  } catch (error) {
    throw error
  }
}
