"use client";

import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyBrand
        </Link>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>

        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto 
          bg-white md:bg-transparent shadow-md md:shadow-none
          md:flex items-center gap-6 px-5 py-4 md:py-0 transition-all 
          ${open ? "block" : "hidden"}`}
        >
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Blog
          </Link>
          <Link
            href="/create-blog"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Create Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
