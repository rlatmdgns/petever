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
      14: any
      16: any
      20: any
      22: any
      30: any
    }
    fontWeights: { REGULAR: number; SEMI_BOLD: number; BOLD: number }
    viewSizes: { MB: string; PC: string }
  }
}
