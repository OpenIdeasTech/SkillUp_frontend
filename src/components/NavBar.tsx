'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-skill-up.png';
import { Button } from './ui/button';

const NavBar = () => {
  return (
    <nav className="w-full text-white font-poppins relative z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Image src={logo} alt="Logo Skill Up" className="h-10 w-auto" />

        <ul className="hidden md:flex gap-8 text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#resources">Diferencial</a></li>
          <li><a href="#community">Comunidade</a></li>
          <li><a href="#aboutUs">Quem somos</a></li>
          <li><a href="#doubts">Dúvidas</a></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Button variant="ghost" className="text-xl">Criar conta</Button>
          <Button className="text-xl">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
