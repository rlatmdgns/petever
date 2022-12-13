import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // colors: {}
    // fonts: {}
    fontWeights: { REGULAR: number; BOLD: number }
    viewSizes: { MB: string; PC: string }
  }
}
