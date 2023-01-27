import styled from 'styled-components'
import { Dimension } from './RelativeFigure.types'

/**
 * 높이 / 넓이 계산에 기준한 view의 비율 계산기
 * @returns 백분율 기준 비율값
 */
const ratio = ({ $width = 1, $height }: Dimension) =>
  (($height / $width) * 100).toFixed(3)

const RelativeFigure = styled.figure<Dimension>`
  position: relative;
  padding-top: ${ratio}%;

  img {
    object-fit: cover;
    object-position: center;
  }
`

export default RelativeFigure
