import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinkClass = (path) =>
    `transition duration-200 px-4 py-2 ${
      location.pathname === path ? 'text-black font-semibold' : 'text-white'
    } hover:text-black text-bold bg-transparent hover:bg-[#978e8040] rounded-lg`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent px-6 py-4 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="cursor-pointer mx-3">
        <Link to="/">
          <img
            src="/logoHome.png"
            alt="Dilse Logo"
            className="h-14 w-auto object-contain"
          />
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
