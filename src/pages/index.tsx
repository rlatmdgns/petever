import HomeTemplate from '@/templates/HomeTemplate'
import { Board } from '@/service/getBoards/boards.type'
import { getBoards } from '@/service/getBoards/getBoards'
import MainHeader from '@/components/layouts/MainHeader'
import { GetServerSideProps } from 'next'

interface HomePageProps {
  boards: Board[]
}

export default function HomePage({ boards }: HomePageProps) {
  return <HomeTemplate initialData={boards} />
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
    const boards = await getBoards()

    if (!boards) {
      return {
        props: {},
      }
    }

    return {
      props: { boards },
    }
  } catch (error) {
    throw error
  }
}
