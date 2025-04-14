import React from 'react'
import { Bell, Moon, Settings } from 'lucide-react'

const  NavBarProfile = () =>{
  return (
    <header className="w-full py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold italic">logo</div>
      <div className="flex items-center gap-4">
        <span className="text-black font-semibold text-xl">@usuario</span>
        <button className="border-none">
          <Moon className="h-8 w-8" />
        </button>
        <button className="p-1 rounded-full relative">
          <Bell className="h-8 w-8" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-purple-600 rounded-full"></span>
        </button>
        <button className="p-1 rounded-full">
          <Settings className="h-8 w-8" />
        </button>
      </div>
    </div>
  </header>
  )
}

export default NavBarProfile