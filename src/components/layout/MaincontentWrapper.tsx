import React from 'react'
import Navbar from './Navbar'

interface MaincontentWrapperProps {
  children: React.ReactNode
}

const MaincontentWrapper = ({ children }: MaincontentWrapperProps) => {
  return (
    <section className='flex-1 bg-neutral-100 px-4 py-1'>
      <div className='flex flex-col w-full h-full space-y-1'>
        <Navbar />
        <div className='flex-1 w-full bg-white rounded-lg shadow-sm overflow-auto'>
          <div className='p-6'>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaincontentWrapper
