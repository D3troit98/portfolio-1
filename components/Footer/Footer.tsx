import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-12 py-10 text-white bg-gray-900">
      <div className="w-full container  border-t border-white/10">
        {/* Contact Section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 text-center sm:text-left ">
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
        </div>

        {/* Quote & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/50 text-lg">
            Life before death. Strength before weakness. Journey before
            destination.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start">
            <Link
              href="https://github.com/D3troit98"
              className="text-white hover:text-gray-300 transition text-3xl"
            >
              <AiFillGithub />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/arti.ficesoul/"
              className="text-white hover:text-gray-300 transition text-3xl"
            >
              <AiFillInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
