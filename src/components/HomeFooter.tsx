import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import logox from '../assets/logo-x.png'
import Image from 'next/image'

const HomeFooter = () =>{
  return (
    <div className='bg-[#2D1C7F] w-full flex flex-col py-[30px] px-[100px] justify-center items-center text-white'>
      <div className='flex gap-4'>
        <Image src={logox} alt="logo-x" width={30} height={30} />
        <Instagram width={30} height={30}/>
        <Linkedin width={30} height={30}/>
      </div>
      <div className='mt-4'>
        <li className='flex gap-4 decoration-none text-lg'>
          <ul><a href='home'>Home</a></ul>
          <ul><a href='resources'>Recursos</a></ul>
          <ul><a href='aboutUs'>Quem somos</a></ul>
          <ul><a href='doubts'>Dúvidas</a></ul>
          <ul><a href='privacy'>Privacidade e termos</a></ul>
        </li>
      </div>
    </div>
  )
}

export default HomeFooter