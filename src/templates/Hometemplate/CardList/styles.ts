import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -40px -28px 0;

  ${(props) => props.theme.viewSizes.MB} {
    display: flex;
    justify-content: center;
    margin: 0;
  }
`
export const Item = styled.li`
  margin: 40px 24px 0;

  ${(props) => props.theme.viewSizes.MB} {
    margin: 40px 6px 0;
  }

  ${(props) => props.theme.viewSizes.TB} {
    margin: 40px 20px 0;
  }
`
