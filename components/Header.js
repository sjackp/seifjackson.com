import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent shadow-md py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Brand Logo/Text */}
          <Link href="/">
            <a className="font-bold text-xl md:text-2xl hover:text-red-600 transition duration-300 cursor-pointer text-white">
              Seif Jackson
            </a>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks()}
          </div>

          {/* Mobile Navigation Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars text-lg text-white"></i>
          </button>
        </nav>

        {/* Mobile Navigation Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 space-y-4 transition-all duration-300 ease-in-out`}
        >
          {navLinks()}
        </div>
      </div>
    </header>
  );

  function navLinks() {
    return (
      <>
        <Link href="/">
          <a className="font-medium text-lg hover:text-red-600 transition duration-300 text-white">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="font-medium text-lg hover:text-red-600 transition duration-300 text-white">
            About
          </a>
        </Link>
        <Link href="/projects">
          <a className="font-medium text-lg hover:text-red-600 transition duration-300 text-white">
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a className="font-medium text-lg hover:text-red-600 transition duration-300 text-white">
            Contact
          </a>
        </Link>
      </>
    );
  }
}
