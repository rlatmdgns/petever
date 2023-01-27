import React from 'react'
import * as Styles from './styles'
import CardList from '@/templates/HomeTemplate/CardList'
import { Board } from '@/service/getBoards/boards.type'
import Banner from '@/templates/HomeTemplate/Banner'

interface HomeTemplateProps {
  initialData: Board[]
}

const HomeTemplate = ({ initialData }: HomeTemplateProps) => {
  return (
    <Styles.Wrapper>
      <Banner />
      <CardList boards={initialData} />
    </Styles.Wrapper>
  )
}

export default HomeTemplate
