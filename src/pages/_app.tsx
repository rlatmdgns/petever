import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import MainLayout from '@/components/layouts/MainLayout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Themes from '@/styles/Themes'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const DEFAULT_SEO = {
  title: '펫에버 - 반려동물 지식 정보 커뮤니티',
  description:
    'You are by my side, I am by your side.\n 언제나 곁을 지킬 수 있도록 펫에버가 도와드릴게요.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '펫에버',
    description:
      'You are by my side, I am by your side.\n 언제나 곁을 지킬 수 있도록 펫에버가 도와드릴게요.',
  },
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
    <>
      <Analytics />
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider theme={Themes}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
