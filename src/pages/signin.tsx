import React from 'react'
import { signIn } from 'next-auth/react'

const SignInPage = () => {
  return (
    <div>
      <button onClick={() => signIn('kakao')}>로그인</button>
    </div>
  )
}

export default SignInPage
