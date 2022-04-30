import React from 'react';
// import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar';
import HamBurger from '../components/HamBurger';

const Home = () =>
  // const doctors = useSelector((state) => state.doctorsReducer);
  (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
        {/* Hamburger for mobile */}
        <HamBurger />
        <div className="flex flex-col items-center w-screen lg:mt-32 lg:pr-44">
          <h1 className="text-3xl text-slate-900 uppercase font-bold">Available Doctors</h1>
          <p className="text-gray-500 mt-1 text-lg">Please select a doctor</p>
        </div>
      </div>
    </div>
  );
export default Home;
