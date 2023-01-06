import styled from 'styled-components'

export const Wrapper = styled.header`
  ${(props) => props.theme.viewSizes.MB} {
    padding: 0 20px;
  }
`
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;
`
export const Logo = styled.h1``

export const Nav = styled.nav`
  a {
    ${(props) => props.theme.fonts[14]};
    color: ${(props) => props.theme.colors.BLACK};
    font-weight: ${(props) => props.theme.fontWeights.SEMI_BOLD};
  }

  a + a {
    margin-left: 24px;
  }
`
