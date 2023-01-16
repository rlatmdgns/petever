import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.GRAY};
  background: ${(props) => props.theme.colors.GRAY};

  & .autoImage {
    display: block;
    position: relative !important;
    width: 100%;
    height: auto !important;
  }
`
