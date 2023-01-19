export const API_URL = {
  /*
   * Auth
   * */

  SIGN_IN: (socialType: string) => `/users/${socialType}/authentication`,

  GET_BOARDS: 'boards/summary',
  GET_BOARD: (boardId: string) => `boards/${boardId}`,
  GET_CATEGORY: 'category',
}
