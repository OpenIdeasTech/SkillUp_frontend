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
    <nav className="w-full text-white font-poppins relative z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Image src={logo} alt="Logo Skill Up" className="h-10 w-auto" />

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

  
        <ul className="hidden md:flex gap-8 text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#resources">Recursos</a></li>
          <li><a href="#community">Comunidade</a></li>
          <li><a href="#aboutUs">Quem somos</a></li>
          <li><a href="#doubts">Dúvidas</a></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Button variant="ghost" className="text-xl">Criar conta</Button>
          <Button className="text-xl">Login</Button>
        </div>
      </div>

      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50 p-6 flex flex-col gap-6
          transform transition-transform duration-300 ease-in-out
          overflow-auto
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button onClick={toggleMenu} className="self-end">
          <X size={28} color="#757575" />
        </button>

  
        <ul className="flex flex-col gap-4 font-poppins text-xl text-gray-800 font-semibold">
          <li><a href="#home">Home</a></li>
          <li><a href="#resources">Recursos</a></li>
          <li><a href="#community">Comunidade</a></li>
          <li><a href="#aboutUs">Quem somos</a></li>
          <li><a href="#doubts">Dúvidas</a></li>
        </ul>

        <div className="flex flex-col gap-2 pt-4">
          <Button className="bg-[#9233E9] text-white text-xl">Criar conta</Button>
          <Button className="bg-[#9233E9] text-white text-xl">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
