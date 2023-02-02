import { apiClient } from '@/core/apiClient'
import { API_URL } from '@/core/apiUrl'
import { Board } from '@/service/getBoard/board.type'

export const getBoard = async (boardId: string): Promise<Board> => {
  try {
    const { data } = await apiClient.get(API_URL.GET_BOARD(boardId))
    return data
  } catch (error) {
    throw error
  }
}
