import { apiClient } from '@/core/apiClient/apiClient'

describe('apiClient TEST', () => {
  test('baseURL setup', async () => {
    const baseURL = apiClient.defaults.baseURL

    expect(baseURL).toBe(process.env.NEXT_PUBLIC_DEV_HOST)
  })
})
