import React, { ReactElement } from 'react'
import MainHeader from '@components/layouts/MainHeader'
import ContentsHeader from '@components/layouts/ContentsHeader'

const ContentsPage = () => {
  return <div></div>
}

ContentsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <MainHeader />
      <ContentsHeader />
      {page}
    </>
  )
}
export default ContentsPage
