import React from 'react'
import { Bell, Moon, Settings } from 'lucide-react'
import logo from '../../../../../../assets/logo-skill-up-purple.png'
import Image from 'next/image'

const  NavBarProfile = () =>{
  return (
    <header className="w-full py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
    <Image src={logo} alt="Logo Skill Up" className="h-10 w-auto" />
      <div className="flex items-center gap-4">
        <span className="text-black font-semibold text-lg md:text-xl">@usuario</span>
        <button className="border-none">
          <Moon className="w-6 h-6 md:h-8 md:w-8" />
        </button>
        <button className="p-1 rounded-full relative">
          <Bell className="w-6 h-6 md:h-8 md:w-8" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-purple-600 rounded-full"></span>
        </button>
        <button className="p-1 rounded-full">
          <Settings className="w-6 h-6 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  </header>
  )
}

export default NavBarProfile