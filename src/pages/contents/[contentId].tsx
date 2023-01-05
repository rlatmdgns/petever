import React from 'react'
import { GetServerSideProps } from 'next'
import { getContent } from '@/service/getContent'
import ContentDetailTemplate from '@/templates/ContentDetailTemplate'

interface ContentPageProps {
  content: any
}

const ContentPage = ({ content }: ContentPageProps) => {
  return <ContentDetailTemplate content={content} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { params: { contentId } = {} } = ctx
    const content = await getContent(contentId as string)

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

export default ContentPage
