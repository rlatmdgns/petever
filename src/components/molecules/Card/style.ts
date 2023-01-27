import styled from 'styled-components'

export const Wrapper = styled.div``

export const Tag = styled.em`
  color: ${(props) => props.theme.colors.GREEN};
  font-style: normal;
  ${(props) => props.theme.fonts[14]};
`

export const Title = styled.p`
  display: -webkit-box;
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 6px;
  ${(props) => props.theme.fonts[15]};
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  color: ${(props) => props.theme.colors.BLACK};
`

export const Date = styled.span`
  ${(props) => props.theme.fonts[13]};
  color: ${(props) => props.theme.colors.GRAY};
`
