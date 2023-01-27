import React from 'react'
import * as Styles from './style'
import Image from 'next/image'
import Link from 'next/link'
import { PAGE } from '@/constants'
import { Board } from '@/service/getBoards/boards.type'
import dayjs from 'dayjs'
import RelativeFigure from '@/components/atom/RelativeFigure'

interface CardProps {
  board: Board
}

const Card = ({ board }: CardProps) => {
  return (
    <Styles.Wrapper>
      <Link href={PAGE.BOARD(board.uid)}>
        {board?.image && (
          <RelativeFigure $width={160} $height={160}>
            <Image
              src={`${process.env.NEXT_PUBLIC_DEV_HOST}${board?.image}`}
              fill
              sizes="(max-width: 480px) 50vw, 240px"
              alt={board?.title}
            />
          </RelativeFigure>
        )}
        <Styles.Tag>{board?.main_category}</Styles.Tag>
        <Styles.Title>{board?.title}</Styles.Title>
        <Styles.Date>
          {dayjs(board.created).format('YYYY. MM. DD.')}
        </Styles.Date>
      </Link>
    </Styles.Wrapper>
  )
}

export default React.memo(Card)
