import React from 'react'
import { signIn } from '@/service/signIn'

const SignInPage = () => {
  const handleSignIn = async () => {
    const result = await signIn()
    console.log(result)
  }
  return (
    <div>
      <button type="button" onClick={handleSignIn}>
        로그인
      </button>
    </div>
  )
}

export default SignInPage
