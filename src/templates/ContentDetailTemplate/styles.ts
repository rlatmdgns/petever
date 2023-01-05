import styled from 'styled-components'

export const Wrapper = styled.div``

export const Banner = styled.div<{ image: string }>`
  position: relative;
  height: 350px;
  background: url(${({ image }) =>
      `${process.env.NEXT_PUBLIC_DEV_HOST}${image}`})
    no-repeat fixed 50% 0;
  background-size: cover;

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
export const Title = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 10;
  ${(props) => props.theme.fonts[30]};
`

export const Content = styled.div`
  width: 800px;
  padding: 40px 0;
  margin: 0 auto;
  ${(props) => props.theme.fonts[16]};
  color: #555;
`

export const SubTitle = styled.p`
  padding: 4px 0;
  ${(props) => props.theme.fonts[22]};
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
`
