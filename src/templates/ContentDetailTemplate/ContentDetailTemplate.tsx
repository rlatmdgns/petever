import React from 'react'
import * as Styles from '@/templates/ContentDetailTemplate/styles'
import Image from 'next/image'
import BreakLine from '@/components/atom/BreakLine'

interface ContentTemplateProps {
  content: any
}

const IMAGE_TYPE = 'image'
const HEADING2 = 'heading_2'

const ContentDetailTemplate = ({ content }: ContentTemplateProps) => {
  const { title } = content.title
  const { contents } = content

  const firstImage = contents?.find(
    (content: any) => content.type === IMAGE_TYPE
  ).contents

  return (
    <Styles.Wrapper>
      <Styles.Banner image={firstImage}>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Banner>
      <Styles.Content>
        {contents.map((item: any, index: number) => {
          if (item.type === IMAGE_TYPE) {
            return (
              <Image
                key={`content_${index}`}
                src={`${process.env.NEXT_PUBLIC_DEV_HOST}${item.contents}`}
                width={800}
                height={800}
                alt="상세이미지"
              />
            )
          }
          if (item.type === HEADING2) {
            return (
              <Styles.SubTitle key={`content_${index}`}>
                {item.contents}
              </Styles.SubTitle>
            )
          }
          return <BreakLine key={`content_${index}`} text={item.contents} />
        })}
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default ContentDetailTemplate
