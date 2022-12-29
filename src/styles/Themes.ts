import css from 'styled-jsx/css'
import { notoSans, roboto } from '@/styles/GlobalStyles'
import { DefaultTheme } from 'styled-components'

/**
 * Color System
 */
const colors = {
  BLACK: '#222',
  GREEN: '#00C381',
  RED: '#FF5151',
  BLUE: '#7790DB',
  GRAY: '#999',
}

const fonts = {
  14: css`
    font-size: 14px;
    // font-family: ${notoSans.style.fontFamily}, ${roboto.style.fontFamily};
    letter-spacing: -0.01em;
  `,
  20: css`
    font-size: 20px;
    line-height: 30px;
    //font-family: ${notoSans.style.fontFamily}, ${roboto.style.fontFamily};
    letter-spacing: -0.02em;
  `,
}

const fontWeights = {
  REGULAR: 400,
  SEMI_BOLD: 500,
  BOLD: 700,
}

const viewSizes = {
  MB: '@media only screen and (max-width: 1199px)',
  PC: '@media only screen and (min-width: 1200px)',
}

const Themes: DefaultTheme = {
  colors,
  fonts,
  fontWeights,
  viewSizes,
}

export default Themes
