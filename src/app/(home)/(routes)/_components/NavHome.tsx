import React from 'react'
import Image from 'next/image'
import logo from '../../../../assets/logo-skill-up-purple.png'

const NavHome = () => {
  return (
    <nav className='flex justify-between items-center px-16 py-10'>
        <Image src={logo} alt="Logo Skill Up" className="h-10 w-auto" />
        <div className='flex items-center gap-4'>
            <p className='font-semibold text-xl'>@anasouzaa</p>
            <img src="https://i.pravatar.cc" alt="User Image" className="h-10 w-10 rounded-full" />
        </div>
    </nav>
  )
}

export default NavHome