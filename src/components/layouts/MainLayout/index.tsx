import React, { ReactNode } from 'react'
import * as Styles from './style'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { IMAGES } from '@/constants'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const WEBVIEWS = 'webviews'
  const { pathname } = useRouter()

  if (pathname.includes(WEBVIEWS)) {
    return <>{children}</>
  }

  return (
    <Styles.Wrapper>
      <Styles.Left>
        <Styles.TitleBox>
          <Image
            src={IMAGES.MAIN_LEFT_LOGO}
            alt="펫에버"
            width={120}
            height={120}
          />
          <Styles.Title>
            <em>반려동물 커뮤니티</em> <br />
            펫에버
          </Styles.Title>
        </Styles.TitleBox>
      </Styles.Left>
      <Styles.Right>{children}</Styles.Right>
    </Styles.Wrapper>
  )
}

export default MainLayout
