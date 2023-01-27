import styled from 'styled-components'

export const Wrapper = styled.header`
  position: sticky;
  left: 0;
  background: red;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  //background: transparent;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.WHITE};
`

export const Logo = styled.h1``

export const MenuButton = styled.button`
  background: transparent;
  cursor: pointer;
`
