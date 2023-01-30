import React from 'react'
import { useRouter } from 'next/router'
import { API_URL } from '@/core/apiUrl'
import { logout } from '@/service/logout'

const LoginPage = () => {
  const router = useRouter()
  const GOOGLE = 'google'
  const KAKAO = 'kakao'

  const handleSNSlogIn = (type: string) => {
    return router.push(API_URL.SNS_LOGIN(type))
  }

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div>
      <button type="button" onClick={() => handleSNSlogIn(GOOGLE)}>
        구글 로그인
      </button>
      <button type="button" onClick={() => handleSNSlogIn(KAKAO)}>
        카카오 로그인
      </button>
      <button type="button" onClick={() => handleLogout()}>
        로그아웃
      </button>
    </div>
  )
}

export default LoginPage
