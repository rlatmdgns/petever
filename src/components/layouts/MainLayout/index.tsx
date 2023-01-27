import React, { ReactNode } from 'react'
import * as Styles from './style'
import { useRouter } from 'next/router'
import MainHeader from '@/components/layouts/MainHeader'

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
          반려동물 커뮤니티 <br />
          펫에버
        </Styles.Title>
      </Styles.Left>
      <Styles.Right>
        <MainHeader />
        {children}
      </Styles.Right>
    </Styles.Wrapper>
  )
}

export default MainLayout
