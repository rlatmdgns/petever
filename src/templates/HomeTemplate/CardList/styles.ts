import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 15px;
`

export const Title = styled.p`
  position: relative;
  z-index: 10;
  font-size: 36px;
  line-height: 36px;
  margin: 60px 0 -20px 15px;
`
export const List = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 10px;
`

export const Text = styled.p`
  display: -webkit-box;
  max-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 10px;
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  color: ${(props) => props.theme.colors.BLACK};
`

export const Date = styled.span`
  ${(props) => props.theme.fonts[13]};
  color: ${(props) => props.theme.colors.GRAY};
`
