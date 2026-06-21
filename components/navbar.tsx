'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if the link is active
  const isActive = (path: string) => pathname === path;

  // Active/Inactive styles
  const activeClass = "text-teal-600";
  const inactiveClass = "text-gray-700 hover:text-teal-600";

  return (
    <nav className="w-full bg-[#e8f3f0] border-b border-teal-100 relative sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity z-50">
            <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">+</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                Medi<span className="text-teal-600">Click</span>
            </h1>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className={`${isActive('/') ? activeClass : inactiveClass} transition-colors text-lg font-bold`}>Home</Link>
          <Link href="/doctors" className={`${isActive('/doctors') ? activeClass : inactiveClass} transition-colors text-lg font-bold`}>Doctors</Link>
          <Link href="/services" className={`${isActive('/services') ? activeClass : inactiveClass} transition-colors text-lg font-bold`}>Our Services</Link>
          <Link href="/contact" className={`${isActive('/contact') ? activeClass : inactiveClass} transition-colors text-lg font-bold`}>Contact</Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/admin" className={`${isActive('/admin') ? activeClass : inactiveClass} bg-transparent border-2 px-6 py-2 rounded-2xl transition-colors text-lg font-bold`}>Admin</Link>
          <Link href="/book" className="bg-teal-500 font-bold text-white px-5 py-2.5 rounded-xl hover:bg-teal-600 transition-all shadow-sm shadow-teal-200">
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-2xl text-gray-800 z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#e8f3f0] border-b border-teal-100 p-6 flex flex-col gap-4 items-center z-40">
          <Link href="/" onClick={() => setIsOpen(false)} className={`${isActive('/') ? activeClass : "text-gray-700"} text-lg font-bold`}>Home</Link>
          <Link href="/doctors" onClick={() => setIsOpen(false)} className={`${isActive('/doctors') ? activeClass : "text-gray-700"} text-lg font-bold`}>Doctors</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`${isActive('/contact') ? activeClass : "text-gray-700"} text-lg font-bold`}>Contact</Link>
          <Link href="/admin" onClick={() => setIsOpen(false)} className={`${isActive('/admin') ? activeClass : "text-gray-700"} text-lg font-bold`}>Admin</Link>
          <Link href="/book" onClick={() => setIsOpen(false)} className="bg-teal-500 font-bold text-white px-6 py-3 rounded-xl w-full text-center">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;