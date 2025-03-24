import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

const Header = () => (
  <header className="grid grid-cols-5 gap-8 p-4 pt-8 items-center text-white">
    {/* Logo */}
    <div className="flex items-center col-span-1">
      <Link href="/" className="flex items-center text-white text-2xl font-bold">
        <DiCssdeck size="3rem" />
        <span className="ml-2">Portfolio</span>
      </Link>
    </div>

    {/* Navigation */}
    <nav className="flex justify-around col-span-2">
      <Link href="#projects" className="text-lg text-gray-300 hover:text-white transition">Projects</Link>
      <Link href="#tech" className="text-lg text-gray-300 hover:text-white transition">Technologies</Link>
      <Link href="#about" className="text-lg text-gray-300 hover:text-white transition">About</Link>
    </nav>

    {/* Social Icons */}
    <div className="flex justify-center col-span-1 space-x-4">
      <a href="https://github.com/D3troit98" className="p-2 rounded-full transition hover:bg-gray-700">
        <AiFillGithub size="3rem" />
      </a>
      <a href="https://www.instagram.com/artifice_soul/" className="p-2 rounded-full transition hover:bg-gray-700">
        <AiFillInstagram size="3rem" />
      </a>
    </div>
  </header>
);

export default Header;
