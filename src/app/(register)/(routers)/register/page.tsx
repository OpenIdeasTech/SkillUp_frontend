import Image from 'next/image'
import React from 'react'
import logo from '../../../../assets/logo-skill-up-blue.png'
import RegisterForm from './_components/RegisterForm'

export default function Register() {
  return (
    <div className='flex md:grid md:grid-cols-2 '>
      <div className='hidden md:flex flex-col bg-gradient-to-b from-[#9233E9] to-[#5045E5] h-screen px-32 py-16'>
        <div>
          <Image src={logo} alt='Logo Skill Up'  className="h-20 w-auto"/>
        </div>
        <div className='flex h-full items-center'>
          <h1 className='text-6xl text-white font-semibold font-instrument-sans'>
            Crie sua conta <br></br> Skill Up
          </h1>
        </div>
      </div>
      <div className='bg-[#FCFBFF]f-full md:h-screen w-full flex flex-col justify-center items-center'>
        <div className='flex md:hidden flex-col w-full justify-center items-center p-4'>
          <Image src={logo} alt='Logo Skill Up' className="h-10 w-auto"/>
          <h2 className='text-2xl text-[#5444E5] font-semibold'>Crie sua conta Skill Up</h2>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

