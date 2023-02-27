import styled from 'styled-components'

export const Wrapper = styled.header<{ isScroll: boolean; isDark?: boolean }>`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
  height: 60px;
  padding: 0 20px;
  margin: 0 auto;
  background: ${(props) => {
    if (props.isScroll || props.isDark) return '#000'
    return 'transparent'
  }};
  z-index: 100;
  border-bottom: 0.5px solid
    ${(props) => (props.isScroll ? '#000' : props.theme.colors.WHITE)};
`

export const Logo = styled.h1``

export const MenuBox = styled.div`
  display: flex;
`

export const MenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;

  & + & {
    margin-left: 15px;
  }
`
