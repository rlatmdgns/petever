import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getContent } from '@/service/getContent'
import { getContents } from '@/service/getContents'
import ContentDetailTemplate from '@/templates/ContentDetailTemplate'

interface ContentPageProps {
  content: any
}

const ContentPage = ({ content }: ContentPageProps) => {
  return <ContentDetailTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { params: { contentId } = {} } = ctx
    const content = await getContent(contentId as string)

    return {
      props: {
        content,
      },
      revalidate: 60,
    }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await getContents()

  const paths = contents.map((content) => ({
    params: { contentId: content.uid },
  }))

  return { paths, fallback: 'blocking' }
}

export default ContentPage
