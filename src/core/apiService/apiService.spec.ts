import { apiService } from '@/core/apiService'

describe('apiService TEST', () => {
  test('baseURL setup', async () => {
    const api = await apiService()
    const baseURL = api.defaults.baseURL

    expect(baseURL).toBe(process.env.NEXT_PUBLIC_DEV_HOST)
  })
})
