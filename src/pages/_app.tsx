import type { AppProps } from 'next/app'
import GlobalStyles from '@styles/GlobalStyles'
import MainLayout from '@components/layouts/MainLayout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Themes from '@styles/Themes'
import { ThemeProvider } from 'styled-components'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={Themes}>
      <GlobalStyles />
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    </ThemeProvider>
  )
}
