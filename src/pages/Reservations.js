import React from 'react';
import SideBar from '../components/navigation/SideBar';
import HamBurger from '../components/navigation/HamBurger';
import Reservation from '../components/reservations/Reservation';

const Reservations = () => (
  <div className="h-screen flex bg-white">
    {/* Static sidebar for desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <SideBar />
    </div>
    <div className="flex flex-col min-w-0 flex-1 mt-32 lg:mt-1">
      {/* Hamburger for mobile */}
      <HamBurger />
      <div className="flex flex-col items-center w-screen lg:mt-4 lg:pr-44">
        <h1 className="text-3xl text-slate-900 uppercase font-bold">My Reservations</h1>
      </div>
      <div className="flex flex-col items-center">
        <Reservation />
      </div>
    </div>
  </div>
);
export default Reservations;
