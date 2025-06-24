import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `transition duration-200 px-4 py-2 ${
      location.pathname === path ? 'text-black font-semibold' : 'text-white '
    } hover:text-black text-bold bg-transparent hover:bg-[#978e8040] rounded-lg`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex justify-between items-center shadow-none">
      {/* Logo */}
      <div className="cursor-pointer mx-3">
        <Link to="/">
          <img src="/logoHome.png" alt="Dilse Logo" className="h-15 w-auto object-contain" />
        </Link>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-6 list-none text-lg">
        <li>
          <Link to="/" className={navLinkClass('/')}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={navLinkClass('/about')}>About</Link>
        </li>
        <li>
          <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
        </li>
        <li>
          <Link to="/signup" className={navLinkClass('/signup')}>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyNavbar;
