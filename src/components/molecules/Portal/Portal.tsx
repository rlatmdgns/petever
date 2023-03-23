import React from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('root') as Element
  return ReactDOM.createPortal(children, el)
}

export default Portal
