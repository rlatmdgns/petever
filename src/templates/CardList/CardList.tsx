import React from 'react'
import * as Styles from './styles'
import Card from '@components/molecules/Card'

const CardList = () => {
  return (
    <Styles.Wrapper>
      {[...Array(6)].map((v, i) => (
        <Card key={i} />
      ))}
    </Styles.Wrapper>
  )
}

export default CardList
