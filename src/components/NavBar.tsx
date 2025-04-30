'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-skill-up-blue.png';
import { Button } from './ui/button';

const NavBar = () => {

  const handleLogin = () => {
    // Implement login logic here
  };

  const handleCreateAccount = () => {
    window.location.href = '/register'; 
  };

  return (
    <nav className="w-full text-white font-poppins relative z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Image src={logo} alt="Logo Skill Up" className="h-10 w-auto" />

        <ul className="hidden lg:flex gap-8 text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#resources">Diferencial</a></li>
          <li><a href="#community">Comunidade</a></li>
          <li><a href="#aboutUs">Quem somos</a></li>
          <li><a href="#doubts">Dúvidas</a></li>
        </ul>

        <div className="hidden lg:flex gap-4">
          <Button onClick={handleCreateAccount} variant="ghost" className="text-xl font-medium">Criar conta</Button>
          <Button onClick={handleLogin} className="text-xl px-10 py-2 rounded-xl font-medium"><span>Login</span></Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
