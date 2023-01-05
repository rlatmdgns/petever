import React from 'react'
import * as Styles from './styles'
import CardList from '@/templates/Hometemplate/CardList'
import { Content } from '@/service/getContents/contents.type'

interface HomeTemplateProps {
  contents: Content[]
}

const HomeTemplate = ({ contents }: HomeTemplateProps) => {
  return (
    <Styles.Wrapper>
      <CardList contents={contents} />
    </Styles.Wrapper>
  )
}

export default HomeTemplate
