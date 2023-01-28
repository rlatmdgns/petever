import { API_URL } from '@/core/apiUrl'
import { Board } from '@/service/getBoards/boards.type'
import { apiClient } from '@/core/apiClient'

export const getBoards = async (): Promise<Board[]> => {
  try {
    const { data } = await apiClient.get(API_URL.GET_BOARDS)
    return data
  } catch (error) {
    return []
  }
}
