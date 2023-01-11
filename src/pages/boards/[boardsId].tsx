import React from 'react'
import { GetServerSideProps } from 'next'
import { getBoard } from '@/service/getBoard'
import BoardDetailTemplate from '@/templates/BoardDetailTemplate'

interface BoardDetailPageProps {
  boards: any
}

const BoardDetailPage = ({ boards }: BoardDetailPageProps) => {
  return <BoardDetailTemplate boards={boards} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { params: { boardsId } = {} } = ctx

    const boards = await getBoard(boardsId as string)
    console.log(boards)
    return {
      props: {
        boards,
      },
    }
  } catch (err) {
    return { notFound: true }
  }
}

export default BoardDetailPage
