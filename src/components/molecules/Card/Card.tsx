import React from 'react'
import * as Styles from './style'
import dayjs from 'dayjs'
import Image from 'next/image'
import { Content } from '@/service/getContents/contents.type'

interface CardProps {
  content: Content
}

const Card = ({ content }: CardProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Info>
          <Styles.Tag>{content?.main_category}</Styles.Tag>
          <Styles.Date>
            {dayjs(content.created).format('YYYY.MM.DD')}
          </Styles.Date>
        </Styles.Info>
        <Styles.Title>{content?.title}</Styles.Title>
      </Styles.Header>
      <Styles.ImageBox>
        {content?.image && (
          <Image
            src={content?.image}
            width={335}
            height={330}
            alt={content?.title}
          />
        )}
      </Styles.ImageBox>
    </Styles.Wrapper>
  )
}

export default Card
