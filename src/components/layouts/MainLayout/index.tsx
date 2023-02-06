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
        <Styles.Title>
          <Image
            src={IMAGES.MAIN_LEFT}
            alt="반려동물 커뮤니티 펫에버"
            width={769}
            height={616}
          />
        </Styles.Title>
      </Styles.Left>
      <Styles.Right>{children}</Styles.Right>
    </Styles.Wrapper>
  )
}

export default MainLayout
