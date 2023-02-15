import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getBoard } from '@/service/getBoard'
import BoardDetailTemplate from '@/templates/BoardDetailTemplate'
import { getBoards } from '@/service/getBoards'

interface BoardDetailPageProps {
  boards: any
}

const BoardDetailPage = ({ boards }: BoardDetailPageProps) => {
  return <BoardDetailTemplate boards={boards} />
}

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { params: { boardsId } = {} } = ctx
    const boards = await getBoard(boardsId as string)

    return {
      props: {
        boards: boards,
      },
      revalidate: 60,
    }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

// noinspection JSUnusedGlobalSymbols
export const getStaticPaths: GetStaticPaths = async () => {
  const boards = await getBoards()

  const paths = boards.map((board) => ({
    params: { boardsId: board.uid },
  }))

  return { paths, fallback: 'blocking' }
}

export default BoardDetailPage
