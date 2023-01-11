import React from 'react'
import * as Styles from './styles'
import CardList from '@/templates/Hometemplate/CardList'
import { Board } from '@/service/getBoards/boards.type'

interface HomeTemplateProps {
  initialData: Board[]
}

const HomeTemplate = ({ initialData }: HomeTemplateProps) => {
  return (
    <Styles.Wrapper>
      <CardList boards={initialData} />
    </Styles.Wrapper>
  )
}

export default HomeTemplate
