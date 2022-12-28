import React from 'react'
import * as Styles from './style'

interface CardProps {
  content: any
}

const Card = ({ content }: CardProps) => {
  const date = new Date(content.created).toLocaleDateString()
  
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Info>
          <Styles.Tag>{content?.main_category}</Styles.Tag>
          <Styles.Date>{date}</Styles.Date>
        </Styles.Info>
        <Styles.Title>{content?.title}</Styles.Title>
      </Styles.Header>
      <Styles.ImageBox>
        {/*{content?.image && <Image src={content?.image} alt={content?.title} />}*/}
      </Styles.ImageBox>
    </Styles.Wrapper>
  )
}

export default Card
