import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
              Core ID
            </h2>
            <p className="mt-3 text-base">
              Collectible digital cats on the Ethereum blockchain
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-6"
              title="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-6"
              title="Twitter"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-6"
              title="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-6"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
