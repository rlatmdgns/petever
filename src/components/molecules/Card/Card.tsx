import React from 'react'
import * as Styles from './style'
import Image from 'next/image'
import Link from 'next/link'
import { PAGE } from '@/constants'
import { Board } from '@/service/getBoards/boards.type'
import dayjs from 'dayjs'

interface CardProps {
  board: Board
}

const Card = ({ board }: CardProps) => {
  return (
    <Styles.Wrapper>
      <Link href={PAGE.BOARD(board.uid)}>
        <Styles.Header>
          <Styles.Info>
            <Styles.Tag>{board?.main_category}</Styles.Tag>
            <Styles.Date>
              {dayjs(board.created).format('YYYY. MM. DD.')}
            </Styles.Date>
          </Styles.Info>
          <Styles.Title>{board?.title}</Styles.Title>
        </Styles.Header>
        <Styles.ImageBox>
          {board?.image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_DEV_HOST}${board?.image}`}
              width={370}
              height={350}
              alt={board?.title}
            />
          )}
        </Styles.ImageBox>
      </Link>
    </Styles.Wrapper>
  )
}

export default React.memo(Card)
