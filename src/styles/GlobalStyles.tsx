import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Noto_Sans_KR, Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
const notoSans = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    border: none;
    box-sizing: border-box;

    &:focus,
    &:active {
      outline: none;
    }
  }

  body {
    font-family: ${notoSans.style.fontFamily}, ${roboto.style.fontFamily}, 'sans-serif';
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1200px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* remove Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`

export default GlobalStyles
