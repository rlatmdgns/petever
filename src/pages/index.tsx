import HomeTemplate from '@/templates/HomeTemplate'
import { GetServerSideProps } from 'next'
import { Board } from '@/service/getBoards/boards.type'
import { getBoards } from '@/service/getBoards/getBoards'

interface HomePageProps {
  boards: Board[]
}

export default function Home({boards}: HomePageProps) {
  return <HomeTemplate initialData={boards}/>
}

export const getServerSideProps: GetServerSideProps = async ({res}) => {
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
      props: {boards},
    }
  } catch (error) {
    throw error
  }
}
