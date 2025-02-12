import React from 'react'
import { Layout } from 'lucide-react';
import { LuLayoutDashboard } from "react-icons/lu";
import { Cpu } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  {label: "Dashboard", icon: LuLayoutDashboard, href: ""},
  {label: "PM2", icon: Cpu, href: "pm2"},
  {label: "Files", icon: Layout, href: "/files"}

]
const Navigation = () => {
  return (
    <ul className='flex flex-col'>
      {
        navigation.map(navitem => {
          const Icon = navitem.icon;
          return(
            <Link href={navitem.href}>
              <li className='flex space-x-4 items-center py-2 group hover:bg-purple-50 rounded-md px-6'>
                <Icon className='size-[1.2rem] text-indigo-800' fill="#e0e7ff"/>
                <span className='text-sm font-medium text-slate-500 group-hover:text-indigo-600'>{navitem.label}</span>
              </li>
            </Link>

          )
        })
      }
    </ul>
  )
}

export default Navigation
