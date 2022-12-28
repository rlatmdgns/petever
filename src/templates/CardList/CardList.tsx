import React from 'react'
import * as Styles from './styles'
import Card from '@/components/molecules/Card'
import { useQuery } from 'react-query'
import { QUERY_KEY } from '@/constants'
import { getContents } from '@/service/getContents'

const CardList = () => {
  const { data: contents } = useQuery([QUERY_KEY.CONTENTS], () => getContents())

  return (
    <Styles.Wrapper>
      {contents?.map((content) => {
        return <Card key={content.uid} content={content} />
      })}
    </Styles.Wrapper>
  )
}

export default CardList
