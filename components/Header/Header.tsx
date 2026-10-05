import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-8 py-6 text-white container relative z-20 border-b border-white/8">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center text-white text-lg font-semibold tracking-tight"
        >
          <DiCssdeck size="1.5rem" />
          <span className="ml-2">Portfolio</span>
        </Link>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex items-center gap-8">
        {/* Section Links */}
        <Link
          href="#projects"
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Projects
        </Link>
        <Link
          href="#tech"
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Technologies
        </Link>
        <Link
          href="#about"
          className="text-sm text-slate-400 hover:text-white transition"
        >
          About
        </Link>
      </nav>

      {/* Social Icons and Mobile Menu */}
      <div className="flex justify-center space-x-4">
        {/* Desktop Social Icons */}
        <div className="hidden md:flex justify-center">
          <Link
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub profile" href="https://github.com/D3troit98"
            className="p-2 rounded-full transition hover:bg-gray-700"
          >
            <AiFillGithub size="1.5rem" />
          </Link>
          <Link
            aria-label="LinkedIn profile" href="https://www.linkedin.com/in/duruaku-ebuka-6b6540137/"
            target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full transition hover:bg-gray-700"
          >
            <AiFillLinkedin size="1.5rem" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <Menubar className="md:hidden bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger aria-label="Open navigation menu" className="bg-transparent hover:bg-gray-700 p-2 text-white">
              <AiOutlineMenu size="1.5rem" />
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-white border-gray-700">
              {/* Section Links */}
              <MenubarItem className="hover:bg-gray-700">
                <Link href="#projects" className="w-full">
                  Projects
                </Link>
              </MenubarItem>
              <MenubarItem className="hover:bg-gray-700">
                <Link href="#tech" className="w-full">
                  Technologies
                </Link>
              </MenubarItem>
              <MenubarItem className="hover:bg-gray-700">
                <Link href="#about" className="w-full">
                  About
                </Link>
              </MenubarItem>

              <MenubarSeparator className="bg-gray-700" />

              {/* Social Icons */}
              <div className="flex justify-around py-2">
                <Link
                  aria-label="GitHub profile" href="https://github.com/D3troit98"
                  className="p-2 rounded-full hover:bg-gray-700"
                >
                  <AiFillGithub size="1.5rem" />
                </Link>
                <Link
                  aria-label="LinkedIn profile" href="https://www.linkedin.com/in/duruaku-ebuka-6b6540137/"
                  className="p-2 rounded-full hover:bg-gray-700"
                >
                  <AiFillLinkedin size="1.5rem" />
                </Link>
                <Link
                  aria-label="Instagram profile" href="https://www.instagram.com/artifice_soul/"
                  className="p-2 rounded-full hover:bg-gray-700"
                >
                  <AiFillInstagram size="1.5rem" />
                </Link>
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};

export default Header;
