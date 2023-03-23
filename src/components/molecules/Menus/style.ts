import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  width: 100%;
  height: 100%;
  max-width: 480px;
  background: ${(props) => props.theme.colors.BLACK};
  border: 1px solid ${(props) => props.theme.colors.BLACK};
  z-index: 100;
`
