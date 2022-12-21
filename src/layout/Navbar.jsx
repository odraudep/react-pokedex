import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import NavbarMenuItem from './NavbarMenuItem';

const menuItems = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Pokemons',
    url: '/pokemons',
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 shadow-lg bg-slate-900">
      <nav className="container mx-auto py-6 px-5 flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo ReactJS Pokedex App" width="42" />
        </Link>

        <ul className="flex gap-4 ml-auto">
          {menuItems.map((menuItem) => (
            <li key={menuItem.name}>
              <NavbarMenuItem menuItem={menuItem} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
