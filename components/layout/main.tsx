import React from 'react'
import { IMainLayoutProps } from '@/types'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('components/common/header'), {ssr: false})
export  function MainLayout({children}: IMainLayoutProps) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}
