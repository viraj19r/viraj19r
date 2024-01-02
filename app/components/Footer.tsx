import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='contact' className="bg-white border-t px-4 md:px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Contact and Location Information */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-600">Email: viraj19r@gmail.com</p>
          <p className="text-gray-600">Phone: (+91) 9530181957</p>
          <p className="text-gray-600">Location: Chennai, India</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-3 md:gap-5">
          <Link href="/about" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
            About
          </Link>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
            Projects
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out">
            Contact
          </Link>
        </nav>

      </div>

      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Viraj Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
