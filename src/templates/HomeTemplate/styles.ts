import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 36px 0;
  max-width: 1200px;
  margin: 0 auto;

  ${(props) => props.theme.viewSizes.TB} {
    max-width: 764px;
  }
`
