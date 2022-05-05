import React from 'react';
import SideBar from '../components/navigation/SideBar';
import HamBurger from '../components/navigation/HamBurger';
import Doctors from '../components/homepage/doctors';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="h-screen flex lg:overflow-hidden bg-white">
    {/* Static sidebar for desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <SideBar />
    </div>
    <div className="flex flex-col min-w-0 flex-1 lg:overflow-hidden mt-32 lg:mt-1">
      {/* Hamburger for mobile */}
      <HamBurger />
      <div className="flex flex-col items-center w-screen lg:mt-4 lg:pr-44">
        <h1 className="text-3xl text-slate-900 uppercase font-bold">Available Doctors</h1>
        <p className="text-gray-500 mt-1 text-lg">Please select a doctor</p>
        <Link to={'/reservations'}>
              test
            </Link>
      </div>
      <div className="flex flex-col items-center">
        <Doctors />
      </div>
    </div>
  </div>
);
export default Home;
