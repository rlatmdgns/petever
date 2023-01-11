import { apiService } from '@/core/apiService'
import { API_URL } from '@/core/apiUrl'

export const getBoard = async (boardId: string): Promise<any[]> => {
  try {
    const api = await apiService()
    const { data } = await api.get(API_URL.GET_BOARD(boardId))
    return data
  } catch (error) {
    throw error
  }
}
