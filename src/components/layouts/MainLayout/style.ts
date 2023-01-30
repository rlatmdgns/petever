import styled from 'styled-components'

export const Wrapper = styled.div`
  ${(props) => props.theme.viewSizes.MB} {
    display: flex;
    justify-content: center;
  }
`

export const Left = styled.section`
  display: none;

  ${(props) => props.theme.viewSizes.PC} {
    display: block;
    position: fixed;
    left: calc(50vw - 512px);
    z-index: 0;
    width: 100%;
    max-width: 512px;
    height: 100%;
    padding: 50px 0;
    background: #fff;
  }
`

export const Title = styled.p`
  position: fixed;
  top: 40%;
  font-size: 40px;
  text-align: right;
`

export const Right = styled.div`
  min-height: 100vh;
  background-color: #fff;

  padding: 0 0 56px 0;

  ${(props) => props.theme.viewSizes.PC} {
    margin: 0 0 0 calc(50vw);
    max-width: 482px;
    border-width: 0 1px;
    border-style: solid;
    border-color: #e1e1e1;
  }
`
