import React from 'react'
import * as Styles from './style'
import { IMAGES, PAGE } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const MainHeader = () => {
  // const { data: categories } = useQuery([QUERY_KEY.CATEGORY], getCategory)
  const menus = [
    // {
    //   label: 'Contents',
    //   path: PAGE.BOARD,
    // },
    // {
    //   label: 'Community',
    //   path: PAGE.COMMUNITY,
    // },
    {
      label: '로그인',
      path: PAGE.SIGN_IN,
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
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default MainHeader
