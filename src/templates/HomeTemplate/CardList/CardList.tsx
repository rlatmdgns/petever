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
  firstBoard: Board
}

const CardList = ({ boards, firstBoard }: CardListProps) => {
  const createDate = dayjs(firstBoard.created).format('YYYY. MM. DD.')

  return (
    <Styles.Wrapper>
      <Styles.Title>
        <Image
          src={IMAGES.PETEVER_MAGAZINE}
          alt="PETEVER_MAGAZINE"
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
        <Styles.Date>{createDate}</Styles.Date>
      </Link>
      <Styles.List>
        {boards.map((board) => (
          <Card key={board.uid} board={board} />
        ))}
      </Styles.List>
    </Styles.Wrapper>
  )
}

export default memo(CardList)
