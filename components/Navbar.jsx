import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <img src="/logo.png" alt="Logo" className="navbar__logo" />
      </Link>
    </nav>
  );
};

export default Navbar;