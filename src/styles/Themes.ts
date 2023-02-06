import css from 'styled-jsx/css'
import { DefaultTheme } from 'styled-components'

/**
 * Color System
 */
const colors = {
  WHITE: '#fff',
  BLACK: '#222',
  GREEN: '#00C381',
  RED: '#FF5151',
  BLUE: '#7790DB',
  GRAY: '#999',
}

const fonts = {
  13: css`
    font-size: 13px;
    letter-spacing: -0.02em;
  `,
  14: css`
    font-size: 14px;
    letter-spacing: -0.01em;
  `,
  15: css`
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.02em;
  `,
  16: css`
    font-size: 16px;
    letter-spacing: -0.01em;
  `,
  18: css`
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
  `,
  20: css`
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
  `,
  22: css`
    font-size: 22px;
    letter-spacing: -0.02em;
  `,
  24: css`
    font-size: 24px;
    line-height: 44px;
    letter-spacing: -0.02em;
  `,
  30: css`
    font-size: 30px;
    line-height: 44px;
    letter-spacing: -0.02em;
  `,
}

const fontWeights = {
  REGULAR: 400,
  SEMI_BOLD: 500,
  BOLD: 700,
}

const viewSizes = {
  MB: '@media only screen and (max-width: 768px)',
  TB: '@media only screen and (max-width: 1200px)',
  PC: '@media only screen and (min-width: 1200px)',
}

const Themes: DefaultTheme = {
  colors,
  fonts,
  fontWeights,
  viewSizes,
}

export default Themes
