import { getBoards } from '@/service/getBoards/getBoards'
import { apiClient } from '@/core/apiClient'

jest.mock('@/core/apiClient')

describe('getBoards TEST', () => {
  const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>

  describe('when API call is successful', () => {
    test(' return boards', async () => {
      const boards = [
        {
          uid: '328e1a35-0266-4114-b2f6-352368e0190b',
          title: '🔎반려동물에게도 명절 증후군은 있다',
          creator: '펫에버',
          editor: '한신영',
          main_category: '반려견',
          image: '/images/328e1a35-0266-4114-b2f6-352368e0190b.png',
          created: '2022-12-29T14:07Z',
          edited: '2023-01-14T12:41Z',
        },
        {
          uid: 'ecebb2ed-ebf1-4f98-b003-52d8c176dff0',
          title: '댕댕이🐾 겨울에도 산책갈꺼야~ 🐕',
          creator: '펫에버',
          editor: '김승훈',
          main_category: '반려견',
          image: '/images/ecebb2ed-ebf1-4f98-b003-52d8c176dff0.png',
          created: '2022-12-16T10:44Z',
          edited: '2023-01-14T12:42Z',
        },
      ]

      mockedApiClient.get.mockResolvedValue({data: boards})

      const result = await getBoards()

      expect(result).toEqual(boards)
    })
  })

  describe('when API call fails', () => {
    test(' return empty boards', async () => {
      const message = 'Network Error'
      mockedApiClient.get.mockRejectedValue(new Error(message))

      const result = await getBoards()

      expect(result).toEqual([])
    })
  })
})
