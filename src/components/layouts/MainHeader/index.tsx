import React from 'react'
import * as Styles from './style'
import { IMAGES, PAGE } from '@constants'
import Image from 'next/image'
import Link from 'next/link'

const MainHeader = () => {
  const menus = [
    {
      label: 'Contents',
      path: PAGE.CONTENTS,
    },
    {
      label: 'Community',
      path: PAGE.COMMUNITY,
    },
  ]
  return (
    <Styles.Wrapper>
      <Styles.Inner>
        <Styles.Logo>
          <Link href={PAGE.HOME}>
            <Image src={IMAGES.LOGO} alt="펫에버" width={95} height={26} />
          </Link>
        </Styles.Logo>
        <Styles.Nav>
          {menus.map(({ label, path }) => (
            <Link key={label} href={path}>
              {label}
            </Link>
          ))}
        </Styles.Nav>
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default MainHeader
