import React from 'react'
import * as Styles from './styles'
import Card from '@/components/molecules/Card'
import { Content } from '@/service/getContents/contents.type'

interface CardListProps {
  contents: Content[]
}

const CardList = ({ contents }: CardListProps) => {
  return (
    <Styles.Wrapper>
      {contents?.map((content) => {
        return <Card key={content.uid} content={content} />
      })}
    </Styles.Wrapper>
  )
}

export default CardList
