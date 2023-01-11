import React, { memo } from 'react'
import * as Styles from './styles'
import Card from '@/components/molecules/Card'
import { Board } from '@/service/getBoards/boards.type'

interface CardListProps {
  boards: Board[]
}

const CardList = ({ boards }: CardListProps) => {
  return (
    <Styles.Wrapper>
      {boards?.map((board) => (
        <Styles.Item key={board.uid}>
          <Card board={board} />
        </Styles.Item>
      ))}
    </Styles.Wrapper>
  )
}

export default memo(CardList)
