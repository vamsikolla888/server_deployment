import React from 'react'
import { Settings } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Input } from '../ui/input'

const Navbar = () => {
  return (
    <nav className='w-full h-16'>
      <div className='flex justify-between w-full h-full items-center px-8'>
        <div className='w-2/5'>
          <Input className='border-neutral-200 border-[.5px] focus:border-blue-500 focus:border-[1px] placeholder:text-neutral-500 font-medium' placeholder='Search for Results'/>
        </div>
        <div className='flex items-center space-x-4'>
          <Avatar className='flex items-center border-[1px] border-slate-100 bg-white text-center'>
            <AvatarFallback className='flex text-neutral-500 font-semibold text-md items-center'>V</AvatarFallback>
          </Avatar>
          <span className='text-neutral-500 font-medium'>Mr.Vamsi</span>
          <div className='p-2 rounded-full bg-white border-slate-100 border-[1px]' title='Settings'>
            <Settings className='size-5 text-neutral-500 animate-spin' fill="#e5e5e5" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
