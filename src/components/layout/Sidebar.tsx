import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import Navigation from './Navigation'

const Sidebar = () => {
  return (
    <aside className='h-screen w-[240px] bg-white'>
        <div className='flex space-x-5 items-center py-2 px-4'>
            <Image src="logo.svg" width={30} height={30} alt={"logo"}/>
            <p className='font-bold text-lg mt-2 bg-gradient-to-r from-purple-400 via-purple-900 to-orange-600 text-transparent bg-clip-text'>LaunchX</p>
        </div>
        <Separator className='my-2' color='#e5e5e5' />
        <div className=''>
          <Navigation />
        </div>
    </aside>
  )
}

export default Sidebar
