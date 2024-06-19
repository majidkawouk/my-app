"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Head() {
  const links = [
    { Name: "CONTACT", To: "/contact" },
    { Name: "MENU", To: "/menu" },
    { Name: "EVENTS", To: "/events" },
  ];
  
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className="w-full shadow-md fixed top-0 left-0 z-20 ">
      <div className="md:py-5 md:px-5 px-7 flex bg-white justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/drink.png" width={64} height={40} alt="Logo" />
          <span className="text-gray-900 text-2xl font-bold ml-2">ATOM</span>
        </Link>
        
        <div className="md:hidden" onClick={toggleMenu}>
          <Image alt="Menu" width={30} height={30} src="/burger-bar.png" />
        </div>
        
        <ul className={`md:flex space-x-4 md:space-x-7 ${active ? 'block' : 'hidden'} md:block absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-14 mt-2 md:top-auto`}>
          {links.map((e, u) => (
            <li key={u} className="text-center md:text-left md:text-black font-bold py-2 md:py-0 border-b md:border-none">
              <Link href={e.To}>{e.Name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
