import React from 'react'
import * as Styles from './styles'
import CardList from '@/templates/HomeTemplate/CardList'
import { Board } from '@/service/getBoards/boards.type'
import Banner from '@/templates/HomeTemplate/Banner'

interface HomeTemplateProps {
  boards: Board[]
  firstBoard: Board
}

const HomeTemplate = ({ boards, firstBoard }: HomeTemplateProps) => {
  return (
    <Styles.Wrapper>
      <Banner />
      <CardList boards={boards} firstBoard={firstBoard} />
    </Styles.Wrapper>
  )
}

export default HomeTemplate
