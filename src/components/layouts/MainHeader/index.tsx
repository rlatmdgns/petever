import React, { useEffect, useState } from 'react'
import * as Styles from './style'
import { ICONS, IMAGES, PAGE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menus from '@/components/molecules/Menus'

interface MainHeaderProps {
  isDark?: boolean
}

const MainHeader = ({ isDark }: MainHeaderProps) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenu, setIsMenu] = useState(false)
  const handleScroll = () => {
    const active = window.scrollY > 0
    setIsScroll(active)
  }

  const handleMenuClick = () => {
    setIsMenu(!isMenu)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Styles.Wrapper isScroll={isScroll} isDark={isDark}>
      <Styles.Logo>
        <Link href={PAGE.HOME}>
          <Image src={IMAGES.LOGO} alt="펫에버" width={28} height={22} />
        </Link>
      </Styles.Logo>
      <Styles.MenuBox>
        <Styles.MenuButton>
          <Link href={PAGE.LOGIN}>
            <Image src={ICONS.PROFILE} alt="프로필" width={24} height={24} />
          </Link>
        </Styles.MenuButton>
        <Styles.MenuButton onClick={handleMenuClick}>
          <Styles.Hamburger isMenu={isMenu}></Styles.Hamburger>
        </Styles.MenuButton>
      </Styles.MenuBox>
      {isMenu && <Menus />}
    </Styles.Wrapper>
  )
}

export default MainHeader
