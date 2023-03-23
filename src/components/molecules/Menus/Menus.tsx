import React from 'react'
import Portal from '@/components/molecules/Portal'
import * as Styles from './style'

const Menus = () => {
  const menus = [
    {
      label: 'Contents',
    },
  ]

  return (
    <Portal>
      <Styles.Wrapper>
        <ul>
          {menus.map((menu) => (
            <li key={menu.label}>{menu.label}</li>
          ))}
        </ul>
      </Styles.Wrapper>
    </Portal>
  )
}

export default Menus
