import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from '../assets/images/logo.png';
import twitter from '../assets/images/twitter-icon.png';
import facebook from '../assets/images/facebook-icon.png';
import linkedin from '../assets/images/linkedin-icon.png';
import github from '../assets/images/github-icon.png';

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

const social = [
  { icon: twitter },
  { icon: facebook },
  { icon: linkedin },
  { icon: github },
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
          <button type="button" className={classNames(mobileMenu ? 'block' : 'hidden', 'text-slate-900')} onClick={() => setMobileMenu(false)}>
            <XIcon className="h-8" />
          </button>
        </div>
        <div className={classNames(mobileMenu ? 'block' : 'hidden')}>
          <ul className="flex flex-col text-slate-900 font-bold text-lg gap-8 items-center mt-44">
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
      <div className={classNames(mobileMenu ? 'block' : 'hidden', 'flex flex-col items-center mt-32')}>
        <div className="flex gap-2">
          {social.map((item) => (
            <a href="/" key={item.icon}><img src={item.icon} alt="social-icon" className="w-8" /></a>
          ))}
        </div>
        <p className="text-gray-700 font-bold mt-2">© 2022</p>
      </div>
    </header>
  );
};

export default HamBurger;
