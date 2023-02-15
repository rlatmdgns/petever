import HomeTemplate from '@/templates/HomeTemplate'
import { Board } from '@/service/getBoards/boards.type'
import { getBoards } from '@/service/getBoards/getBoards'
import MainHeader from '@/components/layouts/MainHeader'
import { GetServerSideProps } from 'next'

interface HomePageProps {
  boards: Board[]
  firstBoard: Board
}

export default function HomePage({ boards, firstBoard }: HomePageProps) {
  return <HomeTemplate boards={boards} firstBoard={firstBoard} />
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <MainHeader />
      {page}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try {
    const boardsData = await getBoards()

    if (!boardsData) {
      return {
        props: {},
      }
    }
    const boards = boardsData?.filter((board, index) => index !== 0 && board)
    const firstBoard = boardsData[0]

    return {
      props: { boards, firstBoard },
    }
  } catch (error) {
    throw error
  }
}
