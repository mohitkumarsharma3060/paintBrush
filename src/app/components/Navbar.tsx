'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const brushTypes = [
    { name: 'Roller Paint Brush', href: '/brush-types/roller' },
    { name: 'Flat Paint Brush', href: '/brush-types/flat' },
    { name: 'Angle Paint Brush', href: '/brush-types/angle' },
  ];

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Telco Brush Ware</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-500">
              Product Types
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white border rounded shadow-lg z-10">
              {brushTypes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-500">About</Link>

          <div>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center w-full text-left text-gray-700 hover:text-blue-500"
            >
              Product Types
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {brushTypes.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-1 text-sm text-gray-700 hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
