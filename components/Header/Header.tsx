'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex items-center justify-between p-4 pt-8 text-white container   relative z-50 ">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center text-white text-2xl font-bold"
        >
          <DiCssdeck size="3rem" />
          <span className="ml-2">Portfolio</span>
        </Link>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex gap-4">
        <Link
          href="#projects"
          className="text-lg text-gray-300 hover:text-white transition"
        >
          Projects
        </Link>
        <Link
          href="#tech"
          className="text-lg text-gray-300 hover:text-white transition"
        >
          Technologies
        </Link>
        <Link
          href="#about"
          className="text-lg text-gray-300 hover:text-white transition"
        >
          About
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="hidden md:flex justify-center space-x-4">
        <Link
          target="_blank"
          href="https://github.com/D3troit98"
          className="p-2 rounded-full transition hover:bg-gray-700"
        >
          <AiFillGithub size="2rem" />
        </Link>
        <Link
          href="https://wa.me/message/IGUCQGTDTLLOG1"
          target="_blank"
          className="p-2 rounded-full transition hover:bg-gray-700"
        >
          <AiOutlineWhatsApp size="2rem" />
        </Link>

        {/* Theme Toggle and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-white p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-[2rem] w-[2rem]" />
            ) : (
              <Sun className="h-[2rem] w-[2rem]" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose size="2rem" />
            ) : (
              <AiOutlineMenu size="2rem" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-gray-800  flex flex-col items-center py-4 space-y-4 md:hidden z-40">
          <Link
            href="#projects"
            className="text-lg text-gray-300 hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="#tech"
            className="text-lg text-gray-300 hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Technologies
          </Link>
          <Link
            href="#about"
            className="text-lg text-gray-300 hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://github.com/D3troit98"
              className="p-2 rounded-full transition hover:bg-gray-700"
            >
              <AiFillGithub size="2rem" />
            </a>
            <a
              href="https://www.instagram.com/artifice_soul/"
              className="p-2 rounded-full transition hover:bg-gray-700"
            >
              <AiFillInstagram size="2rem" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
