import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavbarMenuItem({ menuItem }) {
  const location = useLocation();
  const isCurrrentPage = location.pathname === menuItem.url;

  return (
    <Link
      to={menuItem.url}
      aria-current={isCurrrentPage ? 'page' : null}
      className={`transition-colors hover:text-white focus:text-white ${
        isCurrrentPage ? 'text-white' : 'text-gray-400'
      }`}
    >
      {menuItem.name}
    </Link>
  );
}

export default NavbarMenuItem;
