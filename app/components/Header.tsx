"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-24 w-full items-center px-3 md:px-8 lg:px-10 bg-white shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-xl">
      <div className="w-[200px] md:flex hidden">
        <span className="text-2xl md:text-3xl font-bold text-blue-500 transition-colors duration-500 ease-in-out hover:text-blue-700">
          Viraj Sharma
        </span>
      </div>
      <nav className="ml-auto flex gap-2 sm:gap-4 lg:gap-6 md:ml-auto md:justify-start justify-center w-full md:w-auto">
        <Link href="#about" passHref>
          <span className="text-sm md:text-lg font-medium text-gray-600 hover:text-white hover:bg-blue-700 hover:border-b-2 hover:border-blue-500 transition-all duration-500 ease-in-out px-4 py-2 rounded-md cursor-pointer">
            About
          </span>
        </Link>
        <Link href="#skills" passHref>
          <span className="text-sm md:text-lg font-medium text-gray-600 hover:text-white hover:bg-blue-700 hover:border-b-2 hover:border-blue-500 transition-all duration-500 ease-in-out px-4 py-2 rounded-md cursor-pointer">
            Skills
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span className="text-sm md:text-lg font-medium text-gray-600 hover:text-white hover:bg-blue-700 hover:border-b-2 hover:border-blue-500 transition-all duration-500 ease-in-out px-4 py-2 rounded-md cursor-pointer">
            Projects
          </span>
        </Link>
        <Link href="#contact" passHref>
          <span className="text-sm md:text-lg font-medium text-gray-600 hover:text-white hover:bg-blue-700 hover:border-b-2 hover:border-blue-500 transition-all duration-500 ease-in-out px-4 py-2 rounded-md cursor-pointer">
            Contact
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
