import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      BLACK: string
      GREEN: string
      RED: string
      BLUE: string
      GRAY: string
    }
    fonts: {
      14: string
      20: string
    }
    fontWeights: { REGULAR: number; SEMI_BOLD: number; BOLD: number }
    viewSizes: { MB: string; PC: string }
  }
}
