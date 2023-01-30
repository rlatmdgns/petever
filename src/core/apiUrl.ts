export const API_URL = {
  /*
   * Auth
   * */

  SNS_LOGIN: (type: string) =>
    `${process.env.NEXT_PUBLIC_DEV_HOST}/users/${type}/authentication`,
  LOGO_OUT: '/user/logout',
  GET_BOARDS: 'boards/summary',
  GET_BOARD: (boardId: string) => `boards/${boardId}`,
  GET_CATEGORY: 'category',
}
