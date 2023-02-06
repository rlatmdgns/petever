import styled from 'styled-components'
import { IMAGES } from '@/constants'

export const Wrapper = styled.div`
  ${(props) => props.theme.viewSizes.PC} {
    &:before {
      display: block;
      content: '';
      position: fixed;
      left: 0;
      bottom: 0;
      width: 360px;
      height: 310px;
      background: url(${IMAGES.BACKGROUND01}) no-repeat;
      z-index: -1;
    }

    &:after {
      display: block;
      content: '';
      position: fixed;
      right: 0;
      bottom: 0;
      width: 620px;
      height: 300px;
      background: url(${IMAGES.BACKGROUND03}) no-repeat;
      z-index: -1;
    }
  }
`

export const Left = styled.section`
  display: none;

  ${(props) => props.theme.viewSizes.PC} {
    display: block;
    position: fixed;
    left: calc(50vw - 769px);
    z-index: 0;
    width: 100%;
    max-width: 769px;
    height: 100%;
    padding: 50px 0;
  }
`

export const Title = styled.p`
  position: fixed;
  top: 28%;
`

export const Right = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #fff;
  padding: 0 0 56px 0;

  ${(props) => props.theme.viewSizes.PC} {
    &:before {
      display: block;
      content: '';
      position: fixed;
      left: 40vw;
      top: 0;
      width: 620px;
      height: 240px;
      background: url(${IMAGES.BACKGROUND02}) no-repeat;
      z-index: -1;
    }

    // &:before {
    //   display: block;
    //   content: '';
    //   position: fixed;
    //   left: 40vw;
    //   top: 0;
    //   width: 620px;
    //   height: 240px;
    //   background: url(${IMAGES.BACKGROUND02}) no-repeat;
    //   z-index: -1;
    // }

    margin: 0 0 0 calc(55vw);
    max-width: 482px;
    border-width: 0 1px;
    border-style: solid;
    border-color: #e1e1e1;
  }
`
