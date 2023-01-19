import React from 'react'
import { useRouter } from 'next/router'
import { API_URL } from '@/core/apiUrl'

const SignInPage = () => {
  const router = useRouter()
  const GOOGLE = 'google'
  const KAKAO = 'kakao'
  const handleSNSlogIn = (type: string) => {
    return router.push(API_URL.SNS_LOGIN(type))
  }
  return (
    <div>
      <button type="button" onClick={() => handleSNSlogIn(GOOGLE)}>
        구글 로그인
      </button>

      <button type="button" onClick={() => handleSNSlogIn(KAKAO)}>
        카카오 로그인
      </button>
    </div>
  )
}

export default SignInPage
