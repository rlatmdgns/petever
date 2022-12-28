import HomeTemplate from '@/templates'
import { GetServerSideProps } from 'next'
import { getContents } from '@/service/getContents'
import { Content } from '@/service/getContents/contents.type'

interface HomePageProps {
  contents: Content[]
}

export default function Home({ contents }: HomePageProps) {
  return <HomeTemplate contents={contents} />
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const contents = await getContents()

  return {
    props: { contents },
  }
}
