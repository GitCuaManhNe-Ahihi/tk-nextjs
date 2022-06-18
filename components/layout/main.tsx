import React from 'react'
import { IMainLayoutProps } from '@/types'
import Header from 'components/common/header'

export  function MainLayout({children}: IMainLayoutProps) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}
