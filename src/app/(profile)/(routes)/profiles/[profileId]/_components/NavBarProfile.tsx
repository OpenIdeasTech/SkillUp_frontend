import React from 'react'
import logo from '../../../../../../assets/logo-skill-up.png'
import Image from 'next/image'
import { Bell, Images, Moon } from 'lucide-react'
import { Avatar, AvatarImage} from '@/components/ui/avatar'

const  NavBarProfile = () =>{
  return (
    <div className='flex w-full py-4 px-[100px] justify-between items-center'>
        <Image src={logo} alt="logo" />
        <div className='flex gap-4 '>
            <Images color='#fff' />
            <Moon color='#fff' />
            <Bell color='#fff' />
            <Avatar>
                <AvatarImage src="https://thispersondoesnotexist.com" />
            </Avatar>
        </div>
    </div>
  )
}

export default NavBarProfile