import HomeTemplate from '@/templates/Hometemplate'
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
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
    const contents = await getContents()
    console.log(contents)
    return {
      props: { contents },
    }
  } catch (error) {
    console.error(error)
    return { notFound: true }
  }
}
