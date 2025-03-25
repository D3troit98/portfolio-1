import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

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

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Quote Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <blockquote className="italic text-white/70 text-sm sm:text-base">
              &ldquo;The most important step a man can take. It&apos;s not the
              first one, is it? It&apos;s the next one. Always the next
              step.&rdquo;
              <footer className="text-white/50 text-xs mt-2">
                - Brandon Sanderson, Words of Radiance
              </footer>
            </blockquote>
          </div>

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
