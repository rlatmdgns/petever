import React from 'react'
import * as Styles from './style'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { PAGE } from '@/constants'
import { Content } from '@/service/getContents/contents.type'

interface CardProps {
  content: Content
}

const Card = ({ content }: CardProps) => {
  return (
    <Styles.Wrapper>
      <Link href={PAGE.CONTENT(content.uid)}>
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
              src={`${process.env.NEXT_PUBLIC_DEV_HOST}${content?.image}`}
              width={370}
              height={350}
              alt={content?.title}
            />
          )}
        </Styles.ImageBox>
      </Link>
    </Styles.Wrapper>
  )
}

export default Card
