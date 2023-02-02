import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_HOST,
  headers: {
    'content-type': 'application/json',
    'accept-language': 'ko',
  },
})

apiClient.defaults.withCredentials = true
