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
      <MainHeader />
      {children}
    </Styles.Wrapper>
  )
}

export default MainLayout
