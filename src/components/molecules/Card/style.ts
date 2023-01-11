import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  max-width: 370px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: #fff;

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-5px);
    box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
  }
`
export const Header = styled.div`
  padding: 30px;
`

export const Info = styled.div`
  display: flex;
  height: 26px;
  align-items: center;
  justify-content: space-between;
`

export const Tag = styled.em`
  color: ${(props) => props.theme.colors.GREEN};
  font-style: normal;
`

export const Title = styled.p`
  display: -webkit-box;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 12px;
  ${(props) => props.theme.fonts[20]};
  font-weight: ${(props) => props.theme.fontWeights.BOLD};
  color: ${(props) => props.theme.colors.BLACK};
`

export const Date = styled.span`
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.GRAY};
`

export const ImageBox = styled.div`
  min-width: 370px;
  width: 100%;
  height: 350px;
  background: ${(props) => props.theme.colors.GRAY};
`
