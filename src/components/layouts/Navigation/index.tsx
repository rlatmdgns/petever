import React from 'react'
import * as Styles from './style'
import { PAGE } from '@constants'

const Navigation = () => {
  const menus = [
    {
      label: '홈',
      path: PAGE.HOME,
    },
    {
      label: '콘텐츠',
      path: PAGE.CONTENTS,
    },
    {
      label: '커뮤니티',
      path: PAGE.COMMUNITY,
    },
  ]
  return (
    <Styles.Wrapper>
      {menus.map(({ label, path }) => (
        <Styles.StyledLink href={path} key={label}>
          {label}
        </Styles.StyledLink>
      ))}
    </Styles.Wrapper>
  )
}

export default Navigation
