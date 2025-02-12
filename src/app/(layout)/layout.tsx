import MaincontentWrapper from '@/components/layout/MaincontentWrapper'
import Sidebar from '@/components/layout/Sidebar'
import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps ) => {
  return (
    <main className="flex h-screen w-screen">
        <Sidebar />
        <MaincontentWrapper>
          {children}
        </MaincontentWrapper>
    </main>
  )
}

export default MainLayout
