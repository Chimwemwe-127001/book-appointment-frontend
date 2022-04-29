import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from '../assets/images/logo.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const menuItems = [
  { name: 'Doctors', path: '/' },
  { name: 'Reserve', path: '/' },
  { name: 'My reservations', path: '/' },
  { name: 'Add dcotor', path: '/' },
  { name: 'Delete doctor', path: '/' },
];

const HamBurger = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className={`flex flex-col px-8  ${mobileMenu ? 'h-screen header' : 'h-fit'} fixed top-0 w-screen shadow-xl md:hidden`}>
      <a href="/" className="text-lg text-slate-50"><img src={logo} className={`w-24 ${mobileMenu ? 'hidden' : 'block'}`} alt="logo" /></a>
      <nav>
        <div className="text-slate-50 mobile-btns">
          <button
            type="button"
            className={` text-lime-500 ${!mobileMenu ? 'block' : 'hidden'}`}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-8" />
          </button>
          <button type="button" className={classNames(mobileMenu ? 'block' : 'hidden')} onClick={() => setMobileMenu(false)}>
            <XIcon className="h-8" />
          </button>
        </div>
        <div className={classNames(mobileMenu ? 'block' : 'hidden', 'md:block')}>
          <ul className="flex flex-col text-slate-50 text-lg gap-8 items-center mt-24">
            {
              menuItems.map((item) => (
                <li key={item.name}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HamBurger;
