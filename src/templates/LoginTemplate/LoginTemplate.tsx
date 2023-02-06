import React from 'react'
import * as Styles from './style'
import { useRouter } from 'next/router'
import { API_URL } from '@/core/apiUrl'
import Image from 'next/image'
import { ICONS } from '@/constants'

const LoginTemplate = () => {
  const router = useRouter()
  const GOOGLE = 'google'
  const KAKAO = 'kakao'

  const handleSNSlogIn = (type: string) => {
    return router.push(API_URL.SNS_LOGIN(type))
  }

  return (
    <Styles.Wrapper>
      <Styles.Title>로그인</Styles.Title>
      <Styles.Description>
        SNS로 간편하게 로그인 할 수 있습니다.
      </Styles.Description>
      <Styles.LoginButtonWrapper>
        <Styles.StyledButton
          type="button"
          onClick={() => handleSNSlogIn(GOOGLE)}
        >
          <Image src={ICONS.GOOGLE} alt="구글" width={32} height={32} /> 구글
          로그인
        </Styles.StyledButton>
        <Styles.KakaoButton type="button" onClick={() => handleSNSlogIn(KAKAO)}>
          <Image src={ICONS.KAKAO} alt="카카오" width={32} height={32} /> 카카오
          로그인
        </Styles.KakaoButton>
      </Styles.LoginButtonWrapper>
    </Styles.Wrapper>
  )
}

export default LoginTemplate
