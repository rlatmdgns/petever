import Axios from 'axios'

export const apiService = async () => {
  return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_DEV_HOST,
    headers: {
      'content-type': 'application/json',
      'accept-language': 'ko',
    },
  })
}
