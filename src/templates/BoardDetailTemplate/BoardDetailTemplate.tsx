import React from 'react'
import * as Styles from './styles'
import Image from 'next/image'
import BreakLine from '@/components/atom/BreakLine'
import { NextSeo } from 'next-seo'
import dayjs from 'dayjs'

interface BoardDetailTemplateProps {
  boards: any
}

const IMAGE_TYPE = 'image'
const HEADING2 = 'heading_2'

const BoardDetailTemplate = ({ boards }: BoardDetailTemplateProps) => {
  if (!boards) return null
  const { title } = boards?.title
  const { board_blocks } = boards

  const firstImage = board_blocks?.find(
    (content: any) => content.type === IMAGE_TYPE
  )?.contents

  if (!boards) return null

  return (
    <Styles.Wrapper>
      <NextSeo
        title={`${title} - 펫에버`}
        openGraph={{
          title: `${title} - 하비풀`,
          type: 'article',
        }}
      />
      <Styles.Banner image={firstImage}>
        <Styles.BannerTitleWrapper>
          <Styles.BannerTitle>{title}</Styles.BannerTitle>
          <Styles.Date>
            {dayjs(title.created).format('YYYY. MM. DD.')}
          </Styles.Date>
        </Styles.BannerTitleWrapper>
      </Styles.Banner>
      <Styles.Content>
        {board_blocks.map((item: any, index: number) => {
          if (item.type === IMAGE_TYPE) {
            return (
              <Styles.ImageBox key={`content_${index}`}>
                <Image
                  className="autoImage"
                  src={`${process.env.NEXT_PUBLIC_DEV_HOST}${item.contents}`}
                  fill
                  sizes={'(max-width: 480px) 100vw, 800px'}
                  alt="상세이미지"
                />
              </Styles.ImageBox>
            )
          }
          if (item.type === HEADING2) {
            return (
              <Styles.Title key={`content_${index}`}>
                {item.contents}
              </Styles.Title>
            )
          }
          return (
            <Styles.Text>
              <BreakLine key={`content_${index}`} text={item.contents} />
            </Styles.Text>
          )
        })}
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default BoardDetailTemplate
