import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-28 bg-purple-700 flex justify-between items-center px-10 text-white shadow-md">
      <div className="logo font-bold text-2xl">BitLinks</div>
      <ul className="flex justify-center gap-6 items-center text-lg">
        <Link href="/">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-gray-300 cursor-pointer">About</li>
        </Link>
        <Link href="/shorten">
          <li className="hover:text-gray-300 cursor-pointer">Shorten</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
        </Link>
        <li className="flex gap-3 ml-4">
          <Link href="/shorten">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-xl font-semibold hover:bg-purple-100 transition-all duration-300">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="border-2 border-white px-4 py-2 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

