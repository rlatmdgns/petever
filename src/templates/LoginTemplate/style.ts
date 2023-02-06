import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding: 70px 20px 30px;
`
export const Title = styled.h3`
  text-align: center;
  ${(props) => props.theme.fonts[30]};
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  color: ${(props) => props.theme.colors.BLACK};
`
export const Description = styled.p`
  text-align: center;
  margin: 10px;
  ${(props) => props.theme.fonts[16]};
  color: #555;
`

export const LoginButtonWrapper = styled.div`
  margin-top: 362px;
`
export const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
  border: 1px solid #eee;
  background: #fff;
  ${(props) => props.theme.fonts[16]};
  text-align: center;

  & + & {
    margin-top: 12px;
  }

  img {
    position: absolute;
    left: 15px;
  }
`
export const KakaoButton = styled(StyledButton)`
  border: 0;
  background: #ffe812;
`
