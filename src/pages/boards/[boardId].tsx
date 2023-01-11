import React from 'react'
import { GetServerSideProps } from 'next'
import { getBoard } from '@/service/getBoard'
import BoardDetailTemplate from '@/templates/BoardDetailTemplate'

interface BoardDetailPageProps {
  content: any
}

const BoardDetailPage = ({ content }: BoardDetailPageProps) => {
  return <BoardDetailTemplate content={content} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { params: { contentId } = {} } = ctx
    const content = await getBoard(contentId as string)

    return {
      props: {
        content,
      },
    }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export default BoardDetailPage
