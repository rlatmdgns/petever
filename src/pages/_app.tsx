import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import MainLayout from '@/components/layouts/MainLayout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Themes from '@/styles/Themes'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
        retry: 1,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  })
  const getLayout = Component?.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={Themes}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
