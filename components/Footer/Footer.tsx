import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto px-12 py-10 text-white">
      <div className="border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-10 py-10">
        <div>
          <h4 className="text-xs uppercase text-white/40 mb-4">Call</h4>
          <a href="tel:+2347040755486" className="text-lg text-white/75 hover:text-white transition">
            07040755486
          </a>
        </div>
        <div>
          <h4 className="text-xs uppercase text-white/40 mb-4">Email</h4>
          <a href="mailto:michealduruaku88@gmail.com" className="text-lg text-white/75 hover:text-white transition">
            michealduruaku88@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white/50 text-lg px-4 text-center sm:text-left">
          Life before death. Strength before weakness. Journey before destination.
        </p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="https://github.com/D3troit98" className="text-white hover:text-gray-300 transition text-3xl">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/artifice_soul/" className="text-white hover:text-gray-300 transition text-3xl">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
