import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaBook, FaFlask } from 'react-icons/fa';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import DynamicQuote from './DynamicQuote'; // Adjust the import path as needed

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-12 py-10 text-white bg-gray-900">
      <div className="w-full container border-t border-white/10">
        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 text-center sm:text-left">
          <div>
            <h4 className="text-xs uppercase text-white/40 mb-2">Call</h4>
            <a
              href="tel:+2347040755486"
              className="text-lg text-white/75 hover:text-white transition"
            >
              07040755486
            </a>
          </div>
          <div>
            <h4 className="text-xs uppercase text-white/40 mb-2">Email</h4>
            <a
              href="mailto:michealduruaku88@gmail.com"
              className="text-lg text-white/75 hover:text-white transition"
            >
              michealduruaku88@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-xs uppercase text-white/40 mb-2">
              Let&apos;s Connect
            </h4>
            <p className="text-white/75">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Additional Pages Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 text-center">
          <Link
            href="/cosmere"
            className="text-lg text-gray-300 hover:text-white transition flex flex-col items-center"
          >
            <FaBook className="mb-2" size="1.5rem" />
            <span>Cosmere</span>
          </Link>
          <Link
            href="/lab"
            className="text-lg text-gray-300 hover:text-white transition flex flex-col items-center"
          >
            <FaFlask className="mb-2" size="1.5rem" />
            <span>Lab</span>
          </Link>
          <Link
            href="/secret"
            className="text-lg text-gray-300/30 hover:text-white transition flex flex-col items-center"
            aria-label="Secret page"
          >
            <RiShieldKeyholeLine className="mb-2" size="1.5rem" />
            <span className="opacity-30 hover:opacity-100 transition-opacity">
              Secret
            </span>
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left min-h-20">
          {/* Quote Section - Now using the new DynamicQuote component */}
          <DynamicQuote interval={7000} />

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-end">
            <Link
              href="https://github.com/D3troit98"
              className="text-white hover:text-gray-300 transition text-3xl"
              aria-label="GitHub Profile"
            >
              <AiFillGithub />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/arti.ficesoul/"
              className="text-white hover:text-gray-300 transition text-3xl"
              aria-label="Instagram Profile"
            >
              <AiFillInstagram />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/micheal-duruaku/"
              className="text-white hover:text-gray-300 transition text-3xl"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm mt-6">
          © {new Date().getFullYear()} Micheal Duruaku. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
