import styled from 'styled-components'

export const Wrapper = styled.header<{ isScroll: boolean }>`
  position: sticky;
  width: 100%;
  max-width: 480px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background: ${(props) =>
    props.isScroll ? props.theme.colors.BLACK : 'transparent'};
  z-index: 100;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.WHITE};

  ${(props) => props.theme.viewSizes.PC} {
    max-width: 480px;
    left: calc(50vw);
  }
`

export const Logo = styled.h1``

export const MenuButton = styled.button`
  background: transparent;
  cursor: pointer;
`
