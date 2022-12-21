import React from 'react'
import * as Styles from './style'

const Card = () => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Info>
          <Styles.Tag>힐링</Styles.Tag>
          <Styles.Date>2023.01.22</Styles.Date>
        </Styles.Info>
        <Styles.Title>
          우리 댕댕이가 좋아할 만한 노즈워크 모아보기 우리 댕댕이가 좋아할 만한
          노즈워크 모아보기 우리 댕댕이가 좋아할 만한 노즈워크 모아보기 우리
          댕댕이가 좋아할 만한 노즈워크 모아보기
        </Styles.Title>
      </Styles.Header>
      <Styles.ImageBox></Styles.ImageBox>
    </Styles.Wrapper>
  )
}

export default Card
