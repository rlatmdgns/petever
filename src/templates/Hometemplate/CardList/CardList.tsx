import React, { memo } from 'react'
import * as Styles from './styles'
import Card from '@/components/molecules/Card'
import { Content } from '@/service/getContents/contents.type'

interface CardListProps {
  contents: Content[]
}

const CardList = ({ contents }: CardListProps) => {
  return (
    <Styles.Wrapper>
      {contents?.map((content) => (
        <Styles.Item>
          <Card key={content.uid} content={content} />
        </Styles.Item>
      ))}
    </Styles.Wrapper>
  )
}

export default memo(CardList)
