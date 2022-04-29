import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

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

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className={`flex flex-col bg-lime-500 px-8 py-7 ${mobileMenu ? 'h-screen header' : 'h-fit'} fixed top-0 w-screen shadow-xl md:flex-row md:justify-between md:px-20 md:h-fit`}>
      <a href="/" className="text-lg text-slate-50">Book Appointents App</a>
      <nav>
        <div className="text-slate-50 md:hidden mobile-btns">
          <button
            type="button"
            className={classNames(!mobileMenu ? 'block' : 'hidden')}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-8" />
          </button>
          <button type="button" className={classNames(mobileMenu ? 'block' : 'hidden')} onClick={() => setMobileMenu(false)}>
            <XIcon className="h-8" />
          </button>
        </div>
        <div className={classNames(mobileMenu ? 'block' : 'hidden', 'md:block')}>
          <ul className="flex flex-col text-slate-50 text-lg gap-8 items-center mt-24 md:flex-row md:mt-1">
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

export default Header;
