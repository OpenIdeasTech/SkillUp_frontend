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
    <nav className="w-full text-white h-20 md:px-2 lg:px-10 align-center lg:py-4">
      <div className="flex items-center justify-between px-6 py-4">
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
          <Button variant="ghost">Criar conta</Button>
          <Button>Login</Button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <a href="#home">Home</a>
          <a href="#resources">Recursos</a>
          <a href="#comunity">Comunidade</a>
          <a href="#aboutUs">Quem somos</a>
          <a href="#doubts">Dúvidas</a>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="ghost">Criar conta</Button>
            <Button>Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
