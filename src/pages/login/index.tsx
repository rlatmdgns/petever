import React from 'react'
import MainHeader from '@/components/layouts/MainHeader'
import LoginTemplate from '@/templates/LoginTemplate/LoginTemplate'

const LoginPage = () => {
  return <LoginTemplate />
}

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <MainHeader isDark />
      {page}
    </>
  )
}

export default LoginPage
