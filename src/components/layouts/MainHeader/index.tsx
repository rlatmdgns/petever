import React, { useEffect, useState } from 'react'
import * as Styles from './style'
import { ICONS, IMAGES, PAGE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const MainHeader = () => {
  const [isScroll, setIsScroll] = useState(false)
  const handleScroll = () => {
    const active = window.scrollY > 0
    setIsScroll(active)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // const { data: categories } = useQuery([QUERY_KEY.CATEGORY], getCategory)
  // const menus = [
  //   {
  //     label: 'Contents',
  //     path: PAGE.BOARD,
  //   },
  //   {
  //     label: 'Community',
  //     path: PAGE.COMMUNITY,
  //   },
  //   {
  //     label: '로그인',
  //     path: PAGE.SIGN_IN,
  //   },
  // ]
  return (
    <Styles.Wrapper
      className={isScroll ? 'scroll-down' : 'scroll-top'}
      data-testid="header"
      isScroll={isScroll}
    >
      <Styles.Logo>
        <Link href={PAGE.HOME}>
          <Image src={IMAGES.LOGO} alt="펫에버" width={28} height={22} />
        </Link>
      </Styles.Logo>
      <Styles.MenuButton>
        <Image src={ICONS.MENU} alt="메뉴" width={24} height={24} />
      </Styles.MenuButton>
    </Styles.Wrapper>
  )
}

export default MainHeader
