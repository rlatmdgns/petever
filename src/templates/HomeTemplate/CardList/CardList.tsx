import React, { memo } from 'react'
import * as Styles from './styles'
import Card from '@/components/molecules/Card'
import { Board } from '@/service/getBoards/boards.type'
import RelativeFigure from '@/components/atom/RelativeFigure'
import Image from 'next/image'
import dayjs from 'dayjs'
import { IMAGES, PAGE } from '@/constants'
import Link from 'next/link'

interface CardListProps {
  boards: Board[]
}

const CardList = ({ boards }: CardListProps) => {
  const firstBoard = boards[0]
  return (
    <Styles.Wrapper>
      <Styles.Title>
        <Image
          src={IMAGES.PETEVER_MEGAGINE}
          alt="PETEVER MEGAGINE"
          width={193}
          height={72}
        />
      </Styles.Title>
      <Link href={PAGE.BOARD(firstBoard.uid)}>
        <RelativeFigure $width={330} $height={190}>
          <Image
            src={`${process.env.NEXT_PUBLIC_DEV_HOST}${firstBoard?.image}`}
            fill
            sizes="(max-width: 480px) 50vw, 240px"
            alt={firstBoard?.title}
          />
        </RelativeFigure>
        <Styles.Text>{firstBoard.title}</Styles.Text>
        <Styles.Date>
          {dayjs(firstBoard.created).format('YYYY. MM. DD.')}
        </Styles.Date>
      </Link>
      <Styles.List>
        {boards
          ?.filter((board, index) => index !== 0 && board)
          .map((board) => (
            <Card key={board.uid} board={board} />
          ))}
      </Styles.List>
    </Styles.Wrapper>
  )
}

export default memo(CardList)
