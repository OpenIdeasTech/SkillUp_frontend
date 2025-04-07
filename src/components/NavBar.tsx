'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo-skill-up.png';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full text-white h-20 font-poppins relative z-50">
      <div className="flex items-center justify-between py-4 text-xl">
        <Image src={logo} alt="Logo Skill Up" className="h-10 w-auto" />

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#resources">Recursos</a></li>
          <li><a href="#comunity">Comunidade</a></li>
          <li><a href="#aboutUs">Quem somos</a></li>
          <li><a href="#doubts">Dúvidas</a></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Button variant="ghost" className='text-xl'>Criar conta</Button>
          <Button className='text-xl'>Login</Button>
        </div>
      </div>

      {menuOpen && (
        <div 
          className="fixed inset-0  bg-opacity-40 z-40 md:hidden" 
          onClick={toggleMenu}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 flex flex-col gap-6
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button onClick={toggleMenu} className="self-end">
          <X size={28} color='#757575'/>
        </button>
        <ul className="flex flex-col gap-4 font-poppins text-lg text-[#757575]">
          <li><a href="#home">Home</a></li>
          <li><a href="#resources">Recursos</a></li>
          <li><a href="#comunity">Comunidade</a></li>
          <li><a href="#aboutUs">Quem somos</a></li>
          <li><a href="#doubts">Dúvidas</a></li>
        </ul>
        <div className="flex flex-col gap-2 pt-4">
          <Button variant="default" className='bg-[#9233E9] text-white'>Criar conta</Button>
          <Button variant="default" className='bg-[#9233E9] text-white'>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
