import { ReactElement } from 'react'
import MainHeader from '@components/layouts/MainHeader'

export default function Home() {
  return <>홈</>
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <MainHeader />
      {page}
    </>
  )
}
