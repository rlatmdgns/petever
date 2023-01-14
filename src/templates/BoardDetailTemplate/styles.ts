import styled, { css } from 'styled-components'
import { IMAGES } from '@/constants'

export const Wrapper = styled.div``

export const Banner = styled.div<{ image?: string }>`
  position: relative;
  height: 350px;

  ${(props) =>
    props.image
      ? css`
          background: url(${process.env.NEXT_PUBLIC_DEV_HOST}${props.image})
            no-repeat fixed 50% 0;
          background-size: cover;
        `
      : css`
          background: url(${IMAGES.DEFAULT_BANNER}) fixed no-repeat center 50px,
            linear-gradient(135.77deg, #6ca3fe 16.03%, #e7fe65 103.21%);
        `}
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.7;
  }
`
export const BannerTitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 10;
`

export const BannerTitle = styled.h2`
  ${(props) => props.theme.fonts[30]};
`

export const Date = styled.div`
  margin-top: 20px;
  ${(props) => props.theme.fonts[16]};
  color: ${(props) => props.theme.colors.GRAY};
`

export const Content = styled.div`
  max-width: 800px;
  padding: 40px 0;
  margin: 0 auto;
  ${(props) => props.theme.fonts[16]};
  color: #555;
`

export const ImageBox = styled.div`
  position: relative;
  padding: 20px 0;

  & .autoImage {
    display: block;
    position: relative !important;
    height: auto !important;
  }
`

export const Title = styled.h3`
  padding: 0 10px;
  ${(props) => props.theme.fonts[24]};
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  color: ${(props) => props.theme.colors.BLACK};
`
export const Text = styled.p`
  padding: 0 10px;
  line-height: 29px;
`
