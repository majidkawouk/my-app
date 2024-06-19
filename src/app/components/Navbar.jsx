// src/components/Navbar.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-full z-20">
      <div className="md:py-5 md:px-5 px-7 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/drink.png" width={64} height={40} alt="Logo" />
          <span className="text-gray-900 text-2xl font-bold ml-2">ATOM</span>
        </Link>

        <div className="md:hidden" onClick={toggleNavbar}>
          <Image alt="Menu" width={30} height={30} src="/burger-bar.png" />
        </div>

        <ul className={`md:flex space-x-4 md:space-x-7 ${isOpen ? 'block animate-fadeIn' : 'hidden'} md:block absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-14 md:top-auto`}>
          <li className="text-center md:text-left md:text-black font-bold py-2 md:py-0 border-b md:border-none">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="text-center md:text-left md:text-black font-bold py-2 md:py-0 border-b md:border-none">
            <Link href="/menu">MENU</Link>
          </li>
          <li className="text-center md:text-left md:text-black font-bold py-2 md:py-0 border-b md:border-none">
            <Link href="/events">EVENTS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
