import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;

  & div:first-child,
  & div:last-child {
    max-width: 450px;
  }
`
